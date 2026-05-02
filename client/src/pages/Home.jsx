import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiArrowRightLine, RiFlashlightLine, RiToolsLine, RiShieldCheckLine, RiCustomerService2Line, RiStarFill } from 'react-icons/ri';

const Home = () => {
  // Stats counter logic
  const [counts, setCounts] = useState({ installs: 0, capacity: 0, years: 0, satisfaction: 0 });

  useEffect(() => {
    const targets = { installs: 500, capacity: 10, years: 15, satisfaction: 98 };
    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    const timers = Object.keys(targets).map(key => {
      let current = 0;
      const stepValue = targets[key] / steps;
      return setInterval(() => {
        current += stepValue;
        if (current >= targets[key]) {
          setCounts(prev => ({ ...prev, [key]: targets[key] }));
          clearInterval(this);
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600" 
            alt="Solar Panels" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Powering Your Future <br /> 
            <span className="text-yellow-500">With Clean Energy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200"
          >
            Sustainable solar solutions for a brighter, greener tomorrow. Save up to 90% on your electricity bills.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
              Get Free Quote <RiArrowRightLine />
            </Link>
            <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-yellow-500 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-extrabold">{counts.installs}+</h3>
              <p className="font-medium text-gray-800">Installations</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">{counts.capacity}MW+</h3>
              <p className="font-medium text-gray-800">Capacity</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">{counts.years}+</h3>
              <p className="font-medium text-gray-800">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">{counts.satisfaction}%</h3>
              <p className="font-medium text-gray-800">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Our Solar Solutions</h2>
            <div className="w-20 h-1.5 bg-yellow-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <RiFlashlightLine />, title: "Residential Solar", desc: "Customized rooftop systems for homes to eliminate electricity bills." },
              { icon: <RiShieldCheckLine />, title: "Commercial Solar", desc: "Large scale installations for industries, offices and solar farms." },
              { icon: <RiToolsLine />, title: "Solar Maintenance", desc: "Professional cleaning and technical support for peak performance." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group border-b-4 border-transparent hover:border-yellow-500"
              >
                <div className="w-16 h-16 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <Link to="/services" className="text-yellow-500 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <RiArrowRightLine />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <motion.div {...fadeInUp} className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 dark:text-white">Why Choose SolarNova?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We provide end-to-end solar solutions with premium components and industry-leading warranties. Our experts ensure a seamless transition to clean energy.
            </p>
            <div className="space-y-6">
              {[
                { title: "25-Year Warranty", desc: "Long-term peace of mind with our tier-1 solar panels." },
                { title: "Smart Monitoring", desc: "Track your energy production in real-time via our app." },
                { title: "Expert Installation", desc: "Certified engineers with over 15 years of experience." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900">
                    <RiShieldCheckLine size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800" 
              alt="Solar Panel Installation" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-yellow-500 p-8 rounded-2xl hidden md:block">
              <RiCustomerService2Line className="text-4xl text-gray-900 mb-2" />
              <p className="text-gray-900 font-bold">24/7 Technical Support</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
            <div className="w-20 h-1.5 bg-yellow-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Homeowner", text: "SolarNova transformed my home. My electricity bill is now zero! The installation was fast and professional." },
              { name: "Sarah Smith", role: "CEO, TechPark", text: "We reduced our operational costs by 40% after installing SolarNova's commercial solution. Highly recommended!" },
              { name: "Mike Johnson", role: "Property Developer", text: "Reliable, efficient, and great customer service. They are my go-to partner for all my development projects." }
            ].map((t, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg relative"
              >
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <RiStarFill key={i} />)}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full -ml-32 -mb-32"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to Switch to <span className="text-yellow-500">Solar?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join thousands of happy customers who are saving money and the environment. Get a custom quote for your property today.
            </p>
            <Link to="/contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-10 py-4 rounded-full font-bold text-lg transition-all relative z-10">
              Start Your Journey Now
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default Home;
