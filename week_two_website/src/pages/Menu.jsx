import { useState } from 'react';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('drinks');

  const drinks = [
    {
      name: "House Blend Coffee",
      description: "Our signature medium roast with notes of chocolate and caramel",
      price: "$3.50",
      sizes: "12oz / 16oz / 20oz",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
    },
    {
      name: "Cappuccino",
      description: "Espresso with velvety steamed milk and foam",
      price: "$4.50",
      sizes: "12oz / 16oz",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop"
    },
    {
      name: "Vanilla Latte",
      description: "Espresso, steamed milk, and house-made vanilla syrup",
      price: "$5.00",
      sizes: "12oz / 16oz / 20oz",
      image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop"
    },
    {
      name: "Cold Brew",
      description: "Smooth and refreshing, steeped for 24 hours",
      price: "$4.25",
      sizes: "16oz / 24oz",
      image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop"
    }
  ];

  const pastries = [
    {
      name: "Butter Croissant",
      description: "Flaky, buttery, and baked fresh daily",
      price: "$3.75",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop"
    },
    {
      name: "Blueberry Muffin",
      description: "Packed with fresh blueberries and a crumb topping",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop"
    },
    {
      name: "Assorted Bread",
      description: "Warm bread, baked fresh daily.",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
    },
    {
      name: "Avocado Toast",
      description: "Smashed avocado on sourdough with everything seasoning",
      price: "$7.50",
      image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&h=300&fit=crop"
    }
  ];

  const currentItems = activeCategory === 'drinks' ? drinks : pastries;

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-6 md:pt-24 md:pb-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-heading mb-6">
            Our Menu
          </h1>
          <p className="text-lg text-subheading max-w-2xl mx-auto">
            Carefully crafted drinks and freshly baked pastries to brighten your day.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveCategory('drinks')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === 'drinks'
                  ? 'bg-accent-blue text-white shadow-lg'
                  : 'bg-white bg-opacity-80 text-subheading hover:bg-opacity-100'
              }`}
            >
              Drinks
            </button>
            <button
              onClick={() => setActiveCategory('pastries')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === 'pastries'
                  ? 'bg-accent-blue text-white shadow-lg'
                  : 'bg-white bg-opacity-80 text-subheading hover:bg-opacity-100'
              }`}
            >
              Pastries & Food
            </button>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-8 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="card group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Image */}
                <div className="h-40 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-serif text-heading">{item.name}</h3>
                  <span className="text-accent-blue font-semibold whitespace-nowrap ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-subheading mb-2">{item.description}</p>
                {item.sizes && (
                  <p className="text-xs text-accent-sage">{item.sizes}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-white bg-opacity-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-subheading text-sm">
            <span className="font-semibold">Dietary Options:</span> We offer oat, almond, and coconut milk alternatives (+$0.75).
            Many of our pastries have gluten-free options available. Please ask our team about allergens.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Menu;
