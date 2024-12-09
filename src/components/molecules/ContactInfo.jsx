import React from "react";

const ContactInfo = ({ icon, title, content }) => (
  <div className="flex items-center space-x-4  w-[363px] h-[96px] p-4">
    <div className="w-12 h-12 bg-purple-500 flex items-center justify-center rounded-lg text-white text-2xl">
      {icon}
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default ContactInfo;
