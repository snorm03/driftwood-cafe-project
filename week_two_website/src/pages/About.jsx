function About() {
  const values = [
    {
      title: "Quality First",
      description: "We source only the finest beans from sustainable farms and bake our pastries fresh daily.",
      icon: (
        <div className="w-22 aspect-square rounded-full overflow-hidden flex-none border-2 border-gray-300 shadow-md">
          <img
            src="https://images.pexels.com/photos/13735907/pexels-photo-13735907.jpeg"
            className="w-full h-full object-cover"
          />
        </div>
      )
    },
    {
      title: "Community",
      description: "More than a cafe, we're a gathering place where neighbors become friends over coffee.",
      icon: (
        <div className="w-22 aspect-square rounded-full overflow-hidden flex-none border-2 border-gray-300 shadow-md">
          <img
           src="https://images.pexels.com/photos/30818113/pexels-photo-30818113/free-photo-of-casual-cafe-conversation-between-friends.jpeg"
          className="w-full h-full object-cover"
          />
        </div>
      )
    },
    {
      title: "Sustainability",
      description: "From compostable cups to local sourcing, we're committed to protecting our coastal home.",
      icon: (
        <div className="w-22 aspect-square rounded-full overflow-hidden flex-none border-2 border-gray-300 shadow-md">
          <img
          src="https://www.nationalwaste.com/wp-content/uploads/recycle.png"
          className="w-full h-full object-cover"
          />
        </div>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-heading mb-6">
              Our Story
            </h1>
            <p className="text-lg text-subheading">
              Every great cafe has a story. Here's ours.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 bg-white bg-opacity-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Cafe Interior Image */}
              <div className="text-center">
              <img
                src="/about-cafe.png"
                alt="Driftwood Cafe cozy interior"
                className="h-80 md:h-96 w-full object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* Story Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-accent-gold bg-opacity-20 text-subheading rounded-full text-sm mb-4">
                Est. 2020
              </span>
              <h2 className="text-3xl font-serif text-heading mb-6">
                Born from a Love of Coffee & Community
              </h2>
              <div className="space-y-4 text-subheading">
                <p>
                  Driftwood Cafe began as a dream shared between two longtime friends who believed that the best moments in life happen over a warm cup of coffee. After years of working in bustling city cafes, we yearned for something more—a space that felt like home.
                </p>
                <p>
                  In the spring of 2020, we discovered a weathered piece of driftwood on the beach near our future location. That piece of wood, shaped by time and tide, became our inspiration. Just like driftwood, we wanted to create a place shaped by the community it serves.
                </p>
                <p>
                  Today, that original piece of driftwood hangs above our counter—a reminder of where we started and the journey that brought us here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif text-heading mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-subheading italic">
              "To craft exceptional coffee experiences that bring people together, support our local community, and honor the environment that inspires us every day."
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-blue bg-opacity-10 rounded-full flex items-center justify-center text-accent-blue">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif text-heading mb-3">{value.title}</h3>
                <p className="text-subheading text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
<section className="py-16 bg-white bg-opacity-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-serif text-heading text-center mb-12">
      Meet the Team
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "Sarah Chen",
          role: "Co-founder & Head Roaster",
          image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
        },
        {
          name: "Marcus Rivera",
          role: "Co-founder & Head Baker",
          image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
        },
        {
          name: "Emma Thompson",
          role: "Lead Barista",
          image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
        }
      ].map((member, index) => (
        <div key={index} className="text-center flex flex-col items-center">
          
          {/* Profile Image */}
          <div className="w-32 aspect-square rounded-full overflow-hidden flex-none border-2 border-gray-300 shadow-md mb-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name + Role */}
          <h3 className="text-lg font-serif text-heading">
            {member.name}
          </h3>
          <p className="text-subheading text-sm">
            {member.role}
          </p>

        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}

export default About;
