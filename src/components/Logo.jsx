import React from "react";

const Logo = ({ width = "100px", className }) => {
  return (
    <div className={`flex items-center font-bold text-2xl ${className}`} style={{ width }}>
      {/* Logo Text with Gradient */}
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        MyBlog
      </span>
      {/* Optional: Add a small icon or graphic */}
      <svg
        className="ml-2 h-8 w-8 text-purple-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    </div>
  );
};

export default Logo;
