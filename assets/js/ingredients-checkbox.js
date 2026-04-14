// Ingredients Checkbox Functionality
document.addEventListener('DOMContentLoaded', function() {
  makeIngredientsClickable();
});

function makeIngredientsClickable() {
  // Find all ingredient lists
  const ingredientSections = document.querySelectorAll('.ingredients, [class*="ingredient"]');
  
  ingredientSections.forEach(section => {
    const listItems = section.querySelectorAll('li');
    
    listItems.forEach(item => {
      // Skip if already has checkbox functionality
      if (item.hasAttribute('data-checkbox-enabled')) return;
      
      item.setAttribute('data-checkbox-enabled', 'true');
      item.style.cursor = 'pointer';
      item.style.userSelect = 'none';
      
      // Get recipe title for localStorage key
      const recipeTitle = document.querySelector('h1, h2, article h2')?.textContent || 'default';
      const ingredientText = item.textContent.trim();
      const storageKey = `ingredient_${recipeTitle}_${ingredientText}`;
      
      // Load saved state
      if (localStorage.getItem(storageKey) === 'checked') {
        item.classList.add('checked');
      }
      
      // Add click handler
      item.addEventListener('click', function(e) {
        // Don't trigger if clicking a link
        if (e.target.tagName === 'A') return;
        
        this.classList.toggle('checked');
        
        // Save state
        if (this.classList.contains('checked')) {
          localStorage.setItem(storageKey, 'checked');
        } else {
          localStorage.removeItem(storageKey);
        }
      });
    });
  });
}

// Re-run when content changes (for dynamic content)
const observer = new MutationObserver(function() {
  makeIngredientsClickable();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
