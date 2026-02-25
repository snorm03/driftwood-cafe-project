import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const showcaseRef = useRef(null);

  const heroImages = useMemo(() => [
    { src: '/hero-home.png', alt: 'Driftwood Cafe interior with coffee and pastries' },
    { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&h=600&fit=crop', alt: 'Coffee cup on a cafe table' },
    { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=600&fit=crop', alt: 'Barista preparing coffee' },
    { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&h=600&fit=crop', alt: 'Warm cafe atmosphere with pastries' },
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    // Small delay so elements start hidden even if already in viewport
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const items = entry.target.querySelectorAll('.slide-in-item');
              items.forEach((item) => {
                item.classList.add('slide-in-visible');
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3, rootMargin: '-50px' }
      );

      if (showcaseRef.current) {
        observer.observe(showcaseRef.current);
      }

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);
  const valentineItems = [
    {
      name: "Rose Latte",
      description: "A romantic blend of espresso, steamed milk, and delicate rose syrup",
      price: "$5.50",
      badge: "Limited Edition",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeNEN3_HsQqT_EdFlnjlVt_WsG7yXGPVp8Vw&shttps://negativespace.co/wp-content/uploads/2020/09/negative-space-pink-coffee-breastcancer-2048x1365.jpg"
    },
    {
      name: "Heart-Shaped Chocolates",
      description: "Rich chocolate with raspberry filling and vanilla glaze",
      price: "$4.25",
      badge: "Seasonal",
      image: "https://cdn.shopify.com/s/files/1/0096/0672/5668/files/jran73_gourmet_Valentines_day_chocolate_shot_with_LUMIC_DC-ZS80_a3119d0c-f708-44dc-a5d9-7490e1c536eb_600x600.png?v=1735184449"
    },
    {
      name: "Chocolate Truffle Mocha",
      description: "Rich dark chocolate meets our signature espresso",
      price: "$6.00",
      badge: "Customer Favorite",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Hot_chocolate_%282%29.jpg"
    },
    {
      name: "Strawberry Cream Pastry",
      description: "Flaky pastry filled with fresh strawberries and cream",
      price: "$4.75",
      badge: "New",
      image: "https://freerangestock.com/sample/131686/strawberry-puff-pastry-.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Logo Placeholder */}
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Driftwood Cafe Logo"
              className="h-24 md:h-32 w-auto mx-auto"
              onError={(e) => {
                e.target.outerHTML = `
                  <div class="h-24 md:h-32 w-24 md:w-32 mx-auto bg-accent-sage bg-opacity-30 rounded-full flex items-center justify-center border-2 border-dashed border-accent-sage">
                    <span class="text-accent-sage text-sm">Logo</span>
                  </div>
                `;
              }}
            />
          </div>
          <p className="text-lg md:text-xl text-subheading max-w-2xl mx-auto mb-8">
            Where every cup tells a story. Nestled in the heart of our coastal town,
            we craft moments of warmth and connection, one sip at a time.
          </p>

          {/* Hero Image Carousel */}
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-6 h-64 md:h-96">
            {heroImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out',
                }}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-primary">
              Explore Our Menu
            </Link>
            <Link to="/about" className="btn-secondary">
              Our Story
            </Link>
          </div>

        </div>

      </section>

      {/* Coffee Showcase Section */}
      <section className="py-12 bg-gradient-to-b from-white/50 to-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={showcaseRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="slide-in-item aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop"
                alt="Espresso"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="slide-in-item aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop"
                alt="Latte Art"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="slide-in-item aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop"
                alt="Coffee and Pastries"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="slide-in-item aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop"
                alt="Coffee Beans"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valentine's Day Section */}
      <section className="py-16 bg-white bg-opacity-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-accent-gold bg-opacity-20 text-subheading rounded-full text-sm mb-4">
              Limited Time Only
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-heading mb-4">
              Valentine's Day Specials
            </h2>
            <p className="text-subheading max-w-xl mx-auto">
              Celebrate love with our specially crafted treats. Available from February 1st - 14th.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valentineItems.map((item, index) => (
              <div key={index} className="card group">
                {/* Image */}
                <div className="h-40 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Badge */}
                <span className="inline-block px-2 py-1 bg-accent-blue text-paper rounded text-xs mb-2">
                  {item.badge}
                </span>

                <h3 className="text-lg font-serif text-heading mb-2">{item.name}</h3>
                <p className="text-sm text-subheading mb-3">{item.description}</p>
                <p className="text-accent-blue font-semibold">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hours */}
            <div className="text-center">
              <h3 className="text-xl font-serif text-heading mb-2">Hours</h3>
              <p className="text-subheading text-sm">Mon - Fri: 7am - 7pm</p>
              <p className="text-subheading text-sm">Sat - Sun: 8am - 6pm</p>
            </div>

            {/* Location */}
            <div className="text-center">
              <h3 className="text-xl font-serif text-heading mb-2">Location</h3>
              <p className="text-subheading text-sm">123 Coastal Drive</p>
              <p className="text-subheading text-sm">Seaside Town, ST 12345</p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h3 className="text-xl font-serif text-heading mb-2">Get in Touch</h3>
              <p className="text-subheading text-sm">hello@driftwoodcafe.com</p>
              <p className="text-subheading text-sm">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
