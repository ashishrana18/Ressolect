// Sidebar.jsx
import React from "react";
import { FiHome, FiBell, FiFileText, FiUpload, FiUsers } from "react-icons/fi";
import { MdGavel } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import Footer from "./Footer.jsx";

function Sidebar() {
  return (
    <aside className="bg-white w-64 border-r border-gray-300 flex flex-col h-screen">
      {/* Navigation Section */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#dashboard"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <FiHome className="mr-2" />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="flex items-center p-2 text-white bg-blue-600 rounded"
            >
              <FiFileText className="mr-2" />
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#notifications"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <FiBell className="mr-2" />
              Notifications
            </a>
          </li>
          <li>
            <a
              href="#notices"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <FiFileText className="mr-2" />
              Notices
            </a>
          </li>
          <li>
            <a
              href="#auction"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <MdGavel className="mr-2" />
              Auction
            </a>
          </li>
          <li>
            <a
              href="#data-upload"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <FiUpload className="mr-2" />
              Data Upload
            </a>
          </li>
          <li>
            <a
              href="#control-panel"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <RiUserSettingsLine className="mr-2" />
              Control Panel
            </a>
          </li>
          <li>
            <a
              href="#user-management"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <FiUsers className="mr-2" />
              User Management
            </a>
          </li>
          <li>
            <a
              href="#permissions"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              <FiUsers className="mr-2" />
              Permissions
            </a>
          </li>
        </ul>
      </div>
      {/* <Footer /> */}
    </aside>
  );
}

export default Sidebar;
