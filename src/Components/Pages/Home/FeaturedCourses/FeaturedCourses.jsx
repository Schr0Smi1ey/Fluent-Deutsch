const FeaturedCourses = () => {
  return (
    <div className="container mx-auto">
      <section id="featured" className="my-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
        <p className="text-lg text-gray-700 mb-6">
          Explore our most popular courses and take your German learning to the
          next level.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-5 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Beginner's German</h3>
            <p className="text-gray-600">
              Learn the basics of German in just 4 weeks.
            </p>
            <button className="btn bg-primary-colour hover:bg-primary-colour text-white mt-4">
              Start Now
            </button>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Business German</h3>
            <p className="text-gray-600">
              Master professional German for your career.
            </p>
            <button className="btn bg-primary-colour hover:bg-primary-colour text-white mt-4">
              Enroll
            </button>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">German Culture</h3>
            <p className="text-gray-600">
              Dive deep into German culture and traditions.
            </p>
            <button className="btn bg-primary-colour hover:bg-primary-colour text-white mt-4">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedCourses;
