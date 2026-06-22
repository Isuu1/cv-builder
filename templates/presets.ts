import { ResumeData, ResumeDesign } from "@/types/resume";

export interface TemplatePreset {
  id: string;
  name: string;
  description: string;
  data: ResumeData;
  design: ResumeDesign;
}

export const TEMPLATE_PRESETS: TemplatePreset[] = [
  {
    id: "minimal-blue",
    name: "Modern Minimalist",
    description: "A clean, tech-focused design with an accent color.",
    design: {
      themeColor: "#2563eb", // Blue
      fontSize: "md",
    },
    data: {
      personalInfo: {
        fullName: "Alex Kovalev",
        title: "Senior Frontend Engineer",
        email: "alex.k@dev.com",
      },
    },
  },
  {
    id: "executive-emerald",
    name: "Executive Classic",
    description: "An elegant, centered layout for traditional roles.",
    design: {
      themeColor: "#059669", // Emerald
      fontSize: "sm",
    },
    data: {
      personalInfo: {
        fullName: "Eleanor Vance",
        title: "Product Director",
        email: "e.vance@corporate.com",
      },
    },
  },
];
