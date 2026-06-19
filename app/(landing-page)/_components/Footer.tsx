import React from "react";

const Footer = () => {
  return (
    <div className="bg-card py-6 px-10 mt-12">
      <p>
        Copyright © {new Date().getFullYear()} My Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
