import csv
import os
import re
from html.parser import HTMLParser

# Configuration
CSV_FILE = '_data/recipes.csv'
OUTPUT_DIR = '_recipes'

# Simple HTML stripper
class MLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.strict = False
        self.convert_charrefs = True
        self.text = []
    def handle_data(self, d):
        self.text.append(d)
    def get_data(self):
        return ''.join(self.text)

def strip_html(html):
    s = MLStripper()
    try:
        s.feed(html)
        return s.get_data()
    except:
        return html

# Create output directory
os.makedirs(OUTPUT_DIR, exist_ok=True)

recipe_count = 0

# Read CSV file
try:
    with open(CSV_FILE, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            # Get recipe info
            title = row.get('Title', '').strip()
            slug = row.get('Slug', '').strip()
            
            if not title or not slug:
                print(f"⚠️  Skipping row - missing Title or Slug")
                continue
            
            # Parse ingredients (split by comma or newline)
            ingredients_raw = row.get('wprm_ingredient', '') or row.get('Ingredients', '')
            ingredients = [ing.strip() for ing in re.split('[,\n]', ingredients_raw) if ing.strip() and ing.strip() != '-']
            
            # Parse instructions (split by → or newlines)
            instructions_raw = row.get('instructions', '') or row.get('wprm_notes', '')
            instructions = [inst.strip() for inst in re.split('[→\n]', instructions_raw) if inst.strip()]
            
            # Get other fields
            course = row.get('course', '') or row.get('wprm_course', '') or row.get('Courses', '') or 'Main Course'
            cuisine = row.get('cuisine', '') or row.get('wprm_cuisine', '') or row.get('Cuisines', '') or 'American'
            image = row.get('Images Filename', '').strip() or 'recipe-placeholder.jpg'
            
            # Clean HTML from content/excerpt
            content = row.get('Content', '').strip()
            content = strip_html(content)
            
            excerpt = row.get('Excerpt', '').strip()
            excerpt = strip_html(excerpt)
            
            if not excerpt and content:
                excerpt = content[:160]
            
            # Escape quotes in strings
            title = title.replace('"', '\\"')
            excerpt = excerpt.replace('"', '\\"')
            course = course.replace('"', '\\"')
            cuisine = cuisine.replace('"', '\\"')
            
            # Create recipe directory
            recipe_dir = os.path.join(OUTPUT_DIR, slug)
            os.makedirs(recipe_dir, exist_ok=True)
            
            # Create front matter
            front_matter = f"""---
layout: recipe-card
title: "{title}"
description: "{excerpt}"
course: "{course}"
cuisine: "{cuisine}"
image: "{image}"
servings: "2"
prepTime: "10 mins"
cookTime: "5 mins"
totalTime: "15 mins"
calories: "250"
protein: "15"
carbs: "30"
fat: "8"
fiber: "5"
sugar: "10"
sodium: "500"
ingredients:
"""
            
            # Add ingredients
            if ingredients:
                for ingredient in ingredients:
                    ingredient = ingredient.replace('"', '\\"')
                    front_matter += f'  - "{ingredient}"\n'
            else:
                front_matter += '  - "No ingredients listed"\n'
            
            front_matter += "instructions:\n"
            
            # Add instructions
            if instructions:
                for instruction in instructions:
                    instruction = instruction.replace('"', '\\"')
                    front_matter += f'  - "{instruction}"\n'
            else:
                front_matter += '  - "No instructions listed"\n'
            
            front_matter += "---\n\n"
            front_matter += content if content else "Recipe content coming soon."
            
            # Write file
            file_path = os.path.join(recipe_dir, 'index.md')
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(front_matter)
            
            recipe_count += 1
            print(f"✓ Created: {recipe_dir}/index.md")

    print(f"\n✅ Recipe conversion complete! Created {recipe_count} recipes.")

except FileNotFoundError:
    print(f"❌ Error: Could not find {CSV_FILE}")
    print("Make sure your CSV file is in the _data folder")
except Exception as e:
    print(f"❌ Error: {e}")
