import { create } from "zustand";
import { ResumeData, ResumeDesign } from "@/types/resume";

interface CvState {
  data: ResumeData;
  design: ResumeDesign;
  // Actions
  updatePersonalInfo: (
    field: keyof ResumeData["personalInfo"],
    value: string,
  ) => void;
}

const initialData: ResumeData = {
  personalInfo: {
    fullName: "John Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
  },
};

const initialDesign: ResumeDesign = {
  themeColor: "#3b82f6", // Tailwind blue-500
  fontSize: "md",
};

export const useCvStore = create<CvState>((set) => ({
  data: initialData,
  design: initialDesign,

  updatePersonalInfo: (field, value) =>
    set((state) => ({
      data: {
        ...state.data,
        personalInfo: {
          ...state.data.personalInfo,
          [field]: value,
        },
      },
    })),
}));
