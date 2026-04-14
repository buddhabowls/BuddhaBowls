// Ingredients Checkbox Functionality
document.addEventListener('DOMContentLoaded', function() {
  const ingredientItems = document.querySelectorAll('.ingredients ul li, .ingredients ol li, article .ingredients li, .recipe-card .ingredients li');
  
  ingredientItems.forEach(item => {
    // Load saved state from localStorage
    const recipeId = document.querySelector('article h2')?.textContent || 'default';
    const ingredientText = item.textContent.trim();
    const storageKey = `ingredient_${recipeId}_${ingredientText}`;
    
    if (localStorage.getItem(storageKey) === 'checked') {
      item.classList.add('checked');
    }
    
    // Add click handler
    item.addEventListener('click', function(e) {
      // Don't trigger if clicking a link
      if (e.target.tagName === 'A') return;
      
      this.classList.toggle('checked');
      
      // Save state to localStorage
      if (this.classList.contains('checked')) {
        localStorage.setItem(storageKey, 'checked');
      } else {
        localStorage.removeItem(storageKey);
      }
    });
  });
});
