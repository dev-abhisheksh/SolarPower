import React from 'react';
import { motion } from 'framer-motion';
import { RiCalendarLine, RiUserLine, RiArrowRightLine } from 'react-icons/ri';

const Blog = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const posts = [
    {
      title: "How Solar Panels Work: A Simple Guide",
      excerpt: "Ever wondered how those shiny blue panels turn sunlight into electricity? We break it down in simple terms...",
      date: "May 15, 2026",
      author: "Aman Dubey",
      category: "Education",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600"
    },
    {
      title: "5 Benefits of Switching to Solar Today",
      excerpt: "From saving money on bills to reducing your carbon footprint, discover why now is the best time to go solar.",
      date: "May 10, 2026",
      author: "Reshma Naik",
      category: "Environment",
      img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600"
    },
    {
      title: "Maintenance Tips for Peak Performance",
      excerpt: "Keep your solar system running at 100% efficiency with these easy-to-follow maintenance and cleaning tips.",
      date: "May 05, 2026",
      author: "Rohan Naik",
      category: "Maintenance",
      img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600"
    },
    {
      title: "The Future of Solar Energy in 2026",
      excerpt: "New technologies and battery storage solutions are changing the landscape of renewable energy. Read what's next.",
      date: "April 28, 2026",
      author: "Aman Dubey",
      category: "Innovation",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=601"
    },
    {
      title: "Residential vs Commercial Solar: Differences",
      excerpt: "Choosing between home and business solar? We compare costs, installation times, and ROI for both options.",
      date: "April 20, 2026",
      author: "Reshma Naik",
      category: "Business",
      img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=601"
    },
    {
      title: "Government Subsidies for Solar in 2026",
      excerpt: "Learn how to save even more on your solar installation with the latest government incentives and tax credits.",
      date: "April 15, 2026",
      author: "Rohan Naik",
      category: "Finance",
      img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=601"
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Premium Hero Banner */}
      <section className="relative pt-40 pb-28 bg-gray-900 overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600" 
            alt="Solar Panels Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-yellow-500 font-bold mb-4 tracking-widest uppercase text-sm"
          >
            Knowledge Base
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
          >
            Solar <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            Stay updated with the latest trends, expert tips, and breaking news in the world of renewable energy.
          </motion.p>
        </div>
      </section>

      {/* Premium Blog Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {posts.map((post, i) => (
              <motion.article 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group flex flex-col h-full border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md dark:bg-gray-900/90 text-yellow-600 dark:text-yellow-500 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-5 font-medium">
                    <span className="flex items-center gap-2"><RiCalendarLine className="text-yellow-500 text-lg" /> {post.date}</span>
                    <span className="flex items-center gap-2"><RiUserLine className="text-yellow-500 text-lg" /> {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-yellow-500 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <button className="text-yellow-500 font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto uppercase text-sm tracking-wide">
                    Read Article <RiArrowRightLine className="text-lg" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center gap-3">
            <button className="w-12 h-12 rounded-xl bg-yellow-500 text-gray-900 font-bold shadow-md hover:bg-yellow-600 transition-colors">1</button>
            <button className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white font-bold hover:border-yellow-500 hover:text-yellow-500 transition-all shadow-sm">2</button>
            <button className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white font-bold hover:border-yellow-500 hover:text-yellow-500 transition-all shadow-sm">3</button>
          </div>
        </div>
      </section>

      {/* Premium Newsletter Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] -ml-64 -mb-64 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            {...fadeInUp} 
            className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] border border-gray-700/50 shadow-2xl"
          >
            <RiCalendarLine className="text-5xl text-yellow-500 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Powered Up</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto font-light">Join our community and get the latest solar news, energy-saving tips, and exclusive offers delivered straight to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="flex-grow bg-gray-900/80 border border-gray-600 rounded-2xl px-8 py-5 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all shadow-inner"
                required
              />
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold px-10 py-5 rounded-2xl transition-all shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe Now <RiArrowRightLine className="text-xl" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
