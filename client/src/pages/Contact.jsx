import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiTimeLine, RiSendPlaneFill, RiLoader4Line, RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        throw new Error(data.msg || 'Something went wrong');
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Get In <span className="text-yellow-500">Touch</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about solar? Our team is here to help you every step of the way.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Form */}
            <motion.div {...fadeInUp} className="lg:w-2/3">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-[2rem] shadow-xl">
                <h2 className="text-3xl font-bold mb-8 dark:text-white">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full bg-white dark:bg-gray-900 border-none rounded-2xl px-6 py-4 dark:text-white focus:ring-2 focus:ring-yellow-500 transition-all outline-none"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className="w-full bg-white dark:bg-gray-900 border-none rounded-2xl px-6 py-4 dark:text-white focus:ring-2 focus:ring-yellow-500 transition-all outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210" 
                      className="w-full bg-white dark:bg-gray-900 border-none rounded-2xl px-6 py-4 dark:text-white focus:ring-2 focus:ring-yellow-500 transition-all outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Your Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5" 
                      placeholder="Tell us about your project..." 
                      className="w-full bg-white dark:bg-gray-900 border-none rounded-2xl px-6 py-4 dark:text-white focus:ring-2 focus:ring-yellow-500 transition-all outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status.loading}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status.loading ? (
                      <RiLoader4Line className="animate-spin text-2xl" />
                    ) : (
                      <>Send Message <RiSendPlaneFill /></>
                    )}
                  </button>

                  {/* Feedback Messages */}
                  {status.success && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-100 text-green-700 p-4 rounded-xl flex items-center gap-3"
                    >
                      <RiCheckboxCircleFill className="text-xl" />
                      Message sent successfully! We'll get back to you soon.
                    </motion.div>
                  )}
                  {status.error && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-100 text-red-700 p-4 rounded-xl flex items-center gap-3"
                    >
                      <RiErrorWarningFill className="text-xl" />
                      {status.error}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 dark:text-white border-l-4 border-yellow-500 pl-4">Contact Info</h3>
                <div className="space-y-6">
                  {[
                    { icon: <RiMapPinLine />, title: "Visit Us", content: "Dukle Heaven at Shop No. 5, Block 1, ST Inez, Panjim, Goa" },
                    { icon: <RiPhoneLine />, title: "Aman R Dubey", content: "+91 7219730511" },
                    { icon: <RiPhoneLine />, title: "Reshma Naik", content: "+91 77190 39958" },
                    { icon: <RiMailLine />, title: "Email Us", content: "info@solarnova.com" },
                    { icon: <RiTimeLine />, title: "Working Hours", content: "Mon - Sat: 9:00 AM - 6:00 PM" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold dark:text-white">{item.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 dark:bg-gray-800 h-64 rounded-[2rem] overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.83543450937!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed659b5006b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652873456789!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="map"
                ></iframe>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
