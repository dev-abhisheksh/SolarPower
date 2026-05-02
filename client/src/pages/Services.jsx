import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiHome4Line, RiBuilding4Line, RiPlugLine, RiWaterFlashLine, RiBattery2ChargeLine, RiCustomerServiceLine, RiSearchLine, RiRoadMapLine, RiInstallLine, RiUserHeartLine } from 'react-icons/ri';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: <RiHome4Line />, title: "Residential Solar", desc: "Energy independence for your home with rooftop PV systems tailored to your energy needs and roof space." },
    { icon: <RiBuilding4Line />, title: "Commercial Solar", desc: "Reduce operational overheads for businesses, factories, and commercial parks with scalable solar solutions." },
    { icon: <RiPlugLine />, title: "Off-Grid Systems", desc: "Reliable power for remote locations using battery storage systems that work independently of the main grid." },
    { icon: <RiWaterFlashLine />, title: "Solar Water Heater", desc: "Harness solar thermal energy to provide cost-effective hot water solutions for residential and industrial use." },
    { icon: <RiBattery2ChargeLine />, title: "EV Charging", desc: "Future-proof your property with solar-integrated Electric Vehicle charging stations for sustainable commuting." },
    { icon: <RiCustomerServiceLine />, title: "AMC & Maintenance", desc: "Comprehensive Annual Maintenance Contracts including panel cleaning, health checks, and performance optimization." }
  ];

  const steps = [
    { icon: <RiSearchLine />, title: "Consultation", desc: "We analyze your energy bills and site requirements." },
    { icon: <RiRoadMapLine />, title: "Site Survey", desc: "Technical experts visit for precise measurements and mapping." },
    { icon: <RiInstallLine />, title: "Installation", desc: "Safe and efficient setup by our certified engineering team." },
    { icon: <RiUserHeartLine />, title: "Lifetime Support", desc: "Ongoing monitoring and maintenance for peak performance." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Our <span className="text-yellow-500">Solar Solutions</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive renewable energy services designed for maximum efficiency and long-term savings.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-yellow-500/30 hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-yellow-500 text-gray-900 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <Link to="/contact" className="text-yellow-500 font-bold flex items-center gap-2">
                  Inquire Now <RiPlugLine />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-yellow-500">Process</span></h2>
            <p className="text-gray-400">How we bring solar energy to your doorstep.</p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 border-8 border-gray-900 shadow-xl relative z-10">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-yellow-500">{step.title}</h4>
                  <p className="text-gray-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits CTA */}
      <section className="py-24 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="bg-yellow-500 rounded-[3rem] p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Not sure which system is right for you?</h2>
              <p className="text-gray-800 text-lg font-medium">
                Our solar experts offer free site assessments and detailed energy analysis to help you make the best decision for your budget and goals.
              </p>
            </div>
            <Link to="/contact" className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
              Schedule Free Site Visit
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
