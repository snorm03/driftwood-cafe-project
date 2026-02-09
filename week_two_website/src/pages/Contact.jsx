import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission animation (no actual backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-6 md:pt-24 md:pb-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-heading mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-subheading max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif text-heading mb-6">
                Visit Us
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="font-semibold text-heading">Address</h3>
                    <p className="text-subheading">123 Coastal Drive</p>
                    <p className="text-subheading">Seaside Town, ST 12345</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="font-semibold text-heading">Phone</h3>
                    <p className="text-subheading">(555) 123-4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="font-semibold text-heading">Email</h3>
                    <p className="text-subheading">hello@driftwoodcafe.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="font-semibold text-heading">Hours</h3>
                    <p className="text-subheading">Mon - Fri: 7am - 7pm</p>
                    <p className="text-subheading">Sat - Sun: 8am - 6pm</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-48 bg-opacity-20 rounded-xl flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Portland%2C_OR%2C_street_map.png"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-serif text-heading mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-subheading mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-subheading mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-subheading mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-subheading mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button with Animation */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-lg font-medium transition-all duration-500 transform
                    ${isSubmitted
                      ? 'bg-accent-sage text-white scale-105'
                      : isSubmitting
                        ? 'bg-accent-blue bg-opacity-70 text-white cursor-wait'
                        : 'bg-accent-blue text-white hover:bg-opacity-90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]'
                    }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitted ? (
                      <>
                        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Message Sent!</span>
                      </>
                    ) : isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </span>
                </button>
              </form>

              <p className="mt-4 text-xs text-center text-subheading opacity-60">
                This is a demo form. No data is actually sent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
