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
      author: "Admin",
      img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600"
    },
    {
      title: "5 Benefits of Switching to Solar Today",
      excerpt: "From saving money on bills to reducing your carbon footprint, discover why now is the best time to go solar.",
      date: "May 10, 2026",
      author: "Expert",
      img: "https://images.unsplash.com/photo-1548605855-4b82c97c4ef6?w=600"
    },
    {
      title: "Maintenance Tips for Peak Performance",
      excerpt: "Keep your solar system running at 100% efficiency with these easy-to-follow maintenance and cleaning tips.",
      date: "May 05, 2026",
      author: "Technical Team",
      img: "https://images.unsplash.com/photo-1629139337614-9fe82c3d4ddf?w=600"
    },
    {
      title: "The Future of Solar Energy in 2026",
      excerpt: "New technologies and battery storage solutions are changing the landscape of renewable energy. Read what's next.",
      date: "April 28, 2026",
      author: "Admin",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600"
    },
    {
      title: "Residential vs Commercial Solar: Differences",
      excerpt: "Choosing between home and business solar? We compare costs, installation times, and ROI for both options.",
      date: "April 20, 2026",
      author: "Consultant",
      img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600"
    },
    {
      title: "Government Subsidies for Solar in 2026",
      excerpt: "Learn how to save even more on your solar installation with the latest government incentives and tax credits.",
      date: "April 15, 2026",
      author: "Legal Dept",
      img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600"
    }
  ];

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
            Solar <span className="text-yellow-500">Insights</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and news in the world of renewable energy.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, i) => (
              <motion.article 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Solar News
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><RiCalendarLine className="text-yellow-500" /> {post.date}</span>
                    <span className="flex items-center gap-1"><RiUserLine className="text-yellow-500" /> {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-yellow-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-yellow-500 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read More <RiArrowRightLine />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-20 flex justify-center gap-4">
            <button className="w-12 h-12 rounded-full border-2 border-yellow-500 bg-yellow-500 text-gray-900 font-bold">1</button>
            <button className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 dark:text-white font-bold hover:border-yellow-500 hover:text-yellow-500 transition-all">2</button>
            <button className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 dark:text-white font-bold hover:border-yellow-500 hover:text-yellow-500 transition-all">3</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto bg-gray-800 p-12 rounded-[3rem] border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our <span className="text-yellow-500">Newsletter</span></h2>
            <p className="text-gray-400 mb-8">Get the latest solar news and exclusive offers delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-gray-900 border border-gray-700 rounded-full px-6 py-4 text-white focus:outline-none focus:border-yellow-500 transition-all"
                required
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-10 py-4 rounded-full transition-all">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
