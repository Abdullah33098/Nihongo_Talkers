import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const blogPosts = [
    {
      id: 1,
      date: "July 02, 2024",
      title: "Finding the Perfect Tutor: 6 Tips for a Successful Match",
      excerpt: "Discover how to choose the right tutor for your child or yourself, ensuring a productive learning experience tailored to individual needs.",
      image: "/blog1.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      date: "July 02, 2024",
      title: "Maximizing Learning: 4 Strategies for Online Tutoring Success",
      excerpt: "Enhance your online learning experience by following these expert-recommended strategies for effective virtual education.",
      image: "/blog2.jpg",
      readTime: "4 min read"
    },
    {
      id: 3,
      date: "July 02, 2024",
      title: "Why Personalized Learning is the Future: The Role of Tutor Matching",
      excerpt: "Explore how personalized learning, powered by intelligent tutor matching, is transforming modern education systems.",
      image: "/blog3.jpg",
      readTime: "6 min read"
    },
    {
      id: 4,
      date: "June 25, 2024",
      title: "The Benefits of One-on-One Tutoring vs Classroom Learning",
      excerpt: "Understand the advantages personalized tutoring offers over traditional classroom settings for optimal knowledge retention.",
      image: "/blog4.jpg",
      readTime: "7 min read"
    },
    {
      id: 5,
      date: "June 18, 2024",
      title: "How to Prepare for Your First Tutoring Session",
      excerpt: "Get the most out of your first session with these preparation tips and checklist items for students and parents.",
      image: "/blog5.jpg",
      readTime: "3 min read"
    }
  ];

  const postsPerPage = window.innerWidth < 768 ? 1 : 3;
  const totalSlides = Math.ceil(blogPosts.length / postsPerPage);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newPostsPerPage = window.innerWidth < 768 ? 1 : 3;
      if (newPostsPerPage !== postsPerPage) {
        setCurrentSlide(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const visiblePosts = blogPosts.slice(
    currentSlide * postsPerPage,
    currentSlide * postsPerPage + postsPerPage
  );

  return (
    <section className="w-full px-4 md:px-12 py-16 bg-white hidden md:block" aria-label="Blog section">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Title Left */}
          <div className="text-left order-1 md:order-1 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              From Our <span className="text-blue-500">Blog</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Latest insights and tips on education and tutoring
            </p>
          </div>

          {/* Navigation Right */}
          {blogPosts.length > postsPerPage && (
            <div className="flex items-center gap-4 order-2 md:order-2">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full text-blue-500  transition-colors"
                aria-label="Previous slide"
              >
                &larr;
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-blue-200'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full  text-blue-500  transition-colors"
                aria-label="Next slide"
              >
                &rarr;
              </button>
            </div>
          )}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visiblePosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={post.image} 
                  alt={`Illustration for ${post.title}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
                <span className="absolute bottom-4 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  {post.readTime}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-500 font-medium mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="text-blue-500 font-medium hover:underline flex items-center gap-2 group"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More 
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button for mobile */}
        {blogPosts.length > postsPerPage && (
          <div className="mt-8 text-center md:hidden">
            <button 
              onClick={nextSlide}
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              View More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;