export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  // Future extensions: work: WorkExperience[], education: Education[], etc.
}

export interface ResumeDesign {
  themeColor: string;
  fontSize: "sm" | "md" | "lg";
}
