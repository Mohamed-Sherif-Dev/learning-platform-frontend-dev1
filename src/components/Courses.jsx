
import Button from './ui/Button';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Design Fundamentals",
      description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      image: "/photo_2025-12-17_02-48-38.jpg", // Web design related
      duration: "4 Weeks",
      level: "Beginner",
      author: "By John Smith"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
      image: "/photo_2025-12-17_02-48-44.jpg", // UI/UX related
      duration: "6 Weeks",
      level: "Intermediate",
      author: "By Emily Johnson"
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
      image: "/photo_2025-12-17_02-48-49.jpg", // Mobile app related
      duration: "8 Weeks",
      level: "Intermediate",
      author: "By David Brown"
    },
    {
      id: 4,
      title: "Graphic Design for Beginners",
      description: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
      image: "/photo_2025-12-17_02-48-57.jpg", // Graphic design related
      duration: "10 Weeks",
      level: "Beginner",
      author: "By Sarah Thompson"
    },
    {
      id: 5,
      title: "Front-End Web Development",
      description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
      image: "/photo_2025-12-17_02-49-00.jpg", // Coding related
      duration: "10 Weeks",
      level: "Intermediate",
      author: "By Michael Adams"
    },
    {
      id: 6,
      title: "Advanced JavaScript",
      description: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
      image: "/photo_2025-12-17_02-49-06.jpg", // JS Code related
      duration: "6 Weeks",
      level: "Advance",
      author: "By Jennifer Wilson"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <Button variant="outline" className="border-gray-200 text-gray-800 hover:bg-gray-50 hover:text-gray-900 whitespace-nowrap">
          View All
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">

            {/* Course Image */}
            <div className="rounded-lg overflow-hidden mb-6 h-64 md:h-80 w-full">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Tags and Author */}
            <div className="flex justify-between items-center mb-4 text-sm">
              <div className="flex gap-2">
                <span className="px-3 py-1 border border-gray-200 rounded-md text-gray-600">{course.duration}</span>
                <span className="px-3 py-1 border border-gray-200 rounded-md text-gray-600">{course.level}</span>
              </div>
              <span className="font-medium text-gray-900">{course.author}</span>
            </div>

            {/* Content */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
            </div>

            {/* Button */}
            <Button variant="ghost" className="mt-auto w-full bg-[#F7F7F8] text-gray-900 hover:bg-primary  border border-transparent hover:border-primary">
              Get it Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
