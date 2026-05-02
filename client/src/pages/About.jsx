import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600" 
            alt="Solar Panels" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            About <span className="text-yellow-500">SolarNova</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leading the transition to a sustainable future since 2011.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <motion.div {...fadeInUp} className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Our Journey Towards <br /> Green Energy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Founded over 15 years ago, SolarNova started with a simple mission: to make solar energy accessible and affordable for everyone. What began as a small team of engineers has grown into a leading provider of renewable energy solutions across the country.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We believe that the sun is our most powerful resource, and by harnessing its power, we can build a cleaner, more sustainable world for generations to come.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-yellow-500 mb-2">15+</h4>
                <p className="text-gray-500">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-yellow-500 mb-2">1000+</h4>
                <p className="text-gray-500">Projects Completed</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1548605855-4b82c97c4ef6?w=800" 
              alt="Solar Story" 
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Meet Our Experts</h2>
            <div className="w-20 h-1.5 bg-yellow-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Johnson", role: "CEO & Founder", img: "1" },
              { name: "Sarah Williams", role: "Chief Engineer", img: "2" },
              { name: "David Chen", role: "Operations Head", img: "3" },
              { name: "Emma Davis", role: "Solar Consultant", img: "4" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-500/20 group-hover:border-yellow-500 transition-colors">
                  <img src={`https://i.pravatar.cc/150?img=${member.img}`} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold dark:text-white">{member.name}</h3>
                <p className="text-yellow-500 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              {...fadeInUp}
              className="bg-yellow-500 p-12 rounded-[2rem] text-gray-900"
            >
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed font-medium">
                To accelerate the world's transition to sustainable energy by providing innovative, cost-effective, and reliable solar solutions that empower individuals and organizations to contribute to a greener planet.
              </p>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 p-12 rounded-[2rem] text-white"
            >
              <h3 className="text-3xl font-bold mb-6 text-yellow-500">Our Vision</h3>
              <p className="text-lg leading-relaxed text-gray-400">
                To be the most trusted name in renewable energy globally, recognized for our commitment to quality, customer satisfaction, and environmental stewardship, creating a world powered entirely by clean energy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
