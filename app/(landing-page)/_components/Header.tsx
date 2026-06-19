import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-10 bg-card">
      <h2>Logo</h2>
      <nav className="flex gap-4">
        <Link href="/builder" className="cursor-pointer">
          Create CV
        </Link>
        <span className="cursor-pointer">Browse templates</span>
        <span className="cursor-pointer">Sign in</span>
      </nav>
    </div>
  );
};

export default Header;
