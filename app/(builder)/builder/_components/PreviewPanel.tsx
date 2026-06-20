"use client";

import { useCvStore } from "@/store/useCvStore";
import React from "react";

const PreviewPanel = () => {
  const { fullName, email, title } = useCvStore(
    (state) => state.data.personalInfo,
  );
  const { themeColor } = useCvStore((state) => state.design);

  return (
    <div className="rounded h-full grid grid-cols-[1fr_1.5fr] gap-4">
      <div
        style={{ backgroundColor: themeColor }}
        className="rounded-tl-2xl p-4"
      >
        {fullName && <p>{fullName}</p>}
        {email && <p>{email}</p>}
        {title && <p>{title}</p>}
      </div>
      <div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm h-64 flex items-center justify-center text-slate-400"
          >
            Card Content Block {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewPanel;
