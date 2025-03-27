// Header.jsx
import React from "react";

function Header() {
  return (
    // Full-width header with a light-gray bottom border
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://res.cloudinary.com/ashishrana/image/upload/resollect.png"
          alt="Resollect Logo"
          className="h-12"
        />
      </div>

      {/* Right Section: User Profile & Actions */}
      <div className="flex items-center space-x-4">
        <img
          src="https://res.cloudinary.com/ashishrana/image/upload/v1691234567/amongUs.jpg"
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col text-left">
          <span className="font-medium">Ashish</span>
          <span className="text-sm text-gray-500">Web Developer</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
