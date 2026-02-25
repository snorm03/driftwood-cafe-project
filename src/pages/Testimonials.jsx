function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer M.",
      role: "Local Resident",
      rating: 5,
      text: "Driftwood Cafe has become my daily escape. The atmosphere is so warm and inviting, and their vanilla latte is absolutely perfect. It's like a hug in a cup!",
      date: "January 2026"
    },
    {
      name: "David R.",
      role: "Remote Worker",
      rating: 5,
      text: "I've tried every coffee shop in town, and Driftwood is hands down the best. Great WiFi, even better coffee, and the staff remembers my order. This is my office now!",
      date: "December 2025"
    },
    {
      name: "Sarah T.",
      role: "Food Blogger",
      rating: 5,
      text: "The pastries here are to die for! Everything is baked fresh, and you can tell. The almond croissant is the best I've had outside of Paris. Seriously.",
      date: "January 2026"
    },
    {
      name: "Michael K.",
      role: "Coffee Enthusiast",
      rating: 4,
      text: "As someone who takes coffee very seriously, I appreciate the care they put into every cup. The house blend has wonderful notes, and the baristas clearly know their craft.",
      date: "November 2025"
    },
    {
      name: "Emily H.",
      role: "Mom of Two",
      rating: 5,
      text: "Finally, a cafe that's welcoming to families! The kids love the hot chocolate, and I can actually enjoy my coffee in peace. The staff is so patient and friendly.",
      date: "January 2026"
    },
    {
      name: "Alex P.",
      role: "Student",
      rating: 5,
      text: "Study sessions at Driftwood are the best. Cozy atmosphere, reasonable prices, and they never rush you out. Plus, their chai latte fuels my late-night study sessions!",
      date: "December 2025"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-accent-gold' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-6 md:pt-24 md:pb-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-heading mb-6">
            What People Say
          </h1>
          <p className="text-lg text-subheading max-w-2xl mx-auto">
            Don't just take our word for it—hear from our wonderful community of coffee lovers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "4.9", label: "Average Rating" },
              { value: "500+", label: "Happy Customers" },
              { value: "5", label: "Years Serving" },
              { value: "100%", label: "Made with Love" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-accent-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-subheading">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Images */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/testimonial-1.png"
                alt="Friends laughing over coffee at Driftwood Cafe"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/testimonial-2.png"
                alt="Customer reading a book with a latte at Driftwood Cafe"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8 text-accent-gold opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Text */}
                <p className="text-subheading mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-heading">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-subheading">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-accent-sage">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white bg-opacity-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-heading mb-4">
            Had a Great Experience?
          </h2>
          <p className="text-subheading mb-8">
            We'd love to hear about your visit! Share your story and help others discover their new favorite cafe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="btn-primary inline-flex items-center justify-center"
              onClick={(e) => e.preventDefault()}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
              </svg>
              Leave a Review
            </a>
            <a
              href="#"
              className="btn-secondary inline-flex items-center justify-center"
              onClick={(e) => e.preventDefault()}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
              Follow Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
