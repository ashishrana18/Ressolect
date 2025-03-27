// Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="h-16 bg-white border-t border-gray-300 flex items-center justify-center text-sm text-gray-500 px-4">
      <span className="mr-1">Powered by</span>
      <div className="flex items-center">
        <img
          src="https://res.cloudinary.com/ashishrana/image/upload/resollect.png"
          alt="Esollect Logo"
          className="h-10 w-auto mr-1"
        />
      </div>
    </footer>
  );
}

export default Footer;
