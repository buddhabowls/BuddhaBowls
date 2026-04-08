import React from 'react';
import { ChefHat, Blender, Spoon } from 'lucide-react';

const SmoothieBowlRecipe = () => (
  <article className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <header className="mb-8">
      <h1 className="text-4xl font-bold text-rose-600 mb-4">
        Ultimate Strawberry Rhubarb Smoothie Bowl Recipe
      </h1>
      <p className="text-gray-600 text-lg">
        Creamy, nutrient-packed breakfast bowl with perfect sweet-tart balance
      </p>
    </header>

    <section className="mb-8 bg-rose-50 p-6 rounded-lg">
      <div className="flex items-center gap-4 mb-4">
        <ChefHat className="text-rose-600" />
        <h2 className="text-2xl font-semibold">Recipe Highlights</h2>
      </div>
      <ul className="grid grid-cols-2 gap-4 text-gray-700">
        <li>✓ Prep Time: 10 mins</li>
        <li>✓ Servings: 2 bowls</li>
        <li>✓ Gluten-free & Vegan</li>
        <li>✓ 350 calories/bowl</li>
      </ul>
    </section>

    <section className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <Blender className="text-rose-600" />
        <h2 className="text-2xl font-semibold">Ingredients</h2>
      </div>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>1 cup frozen strawberries</li>
        <li>½ cup chopped rhubarb (fresh or frozen)</li>
        <li>1 banana</li>
        <li>½ cup almond milk</li>
        <li>¼ cup Greek yogurt (or coconut yogurt for vegan)</li>
        <li>1 tbsp chia seeds</li>
        <li>1 tsp honey or maple syrup</li>
      </ul>
    </section>

    <section className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <Spoon className="text-rose-600" />
        <h2 className="text-2xl font-semibold">Instructions</h2>
      </div>
      <ol className="list-decimal pl-6 space-y-4 text-gray-700">
        <li>Combine all ingredients in blender</li>
        <li>Blend until thick and creamy</li>
        <li>Pour into bowls and add toppings</li>
        <li>Serve immediately with optional garnishes</li>
      </ol>
    </section>

    <section className="bg-green-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Nutritional Benefits</h3>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <div>Vitamin C: 120% DV</div>
        <div>Fiber: 8g</div>
        <div>Calcium: 15% DV</div>
        <div>Antioxidants: High</div>
      </div>
    </section>
  </article>
);

export default SmoothieBowlRecipe;