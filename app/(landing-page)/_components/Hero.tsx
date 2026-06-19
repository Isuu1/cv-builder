import { Button } from "@/components/ui/button";
import { NotepadText } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-6 items-center px-10 mt-10">
      <div className="flex flex-col gap-6 items-start">
        <h1>Build Your Professional CV in Minutes</h1>
        <p>
          Our CV builder helps you create a professional resume quickly and
          easily. Choose from a variety of templates and customize your CV to
          stand out to potential employers.
        </p>
        <Button size="lg">
          <NotepadText />
          Create CV
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-3/4 h-170" />
      </div>
    </div>
  );
};

export default Hero;
