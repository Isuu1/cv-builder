"use client";

import { useCvStore } from "@/store/useCvStore";
import React from "react";

const PreviewPanel = () => {
  const { fullName, email, title } = useCvStore(
    (state) => state.data.personalInfo,
  );
  const { themeColor } = useCvStore((state) => state.design);

  return (
    <div className="p-4 border rounded" style={{ borderColor: themeColor }}>
      <p>{fullName}</p>
      <p>{email}</p>
      <p>{title}</p>
    </div>
  );
};

export default PreviewPanel;
