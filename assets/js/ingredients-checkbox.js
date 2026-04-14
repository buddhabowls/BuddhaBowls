// Ingredients Checkbox Functionality - ONLY for recipe cards
document.addEventListener('DOMContentLoaded', function() {
  makeRecipeCardIngredientsClickable();
});

function makeRecipeCardIngredientsClickable() {
  // ONLY target ingredients inside .recipe-card class
  const recipeCards = document.querySelectorAll('.recipe-card');
  
  recipeCards.forEach(card => {
    const ingredientsList = card.querySelector('.ingredients ul, .ingredients ol');
    
    if (!ingredientsList) return;
    
    const listItems = ingredientsList.querySelectorAll('li');
    
    listItems.forEach(item => {
      // Skip if already has checkbox functionality
      if (item.hasAttribute('data-checkbox-enabled')) return;
      
      item.setAttribute('data-checkbox-enabled', 'true');
      item.style.cursor = 'pointer';
      item.style.userSelect = 'none';
      
      // Get recipe title for localStorage key
      const recipeTitle = document.querySelector('h1')?.textContent || 'default';
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
  makeRecipeCardIngredientsClickable();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
