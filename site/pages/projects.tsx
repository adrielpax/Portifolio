import React from "react";
import ProjectsGallery from "@/src/components/ProjectsGallery";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen flex gap-4 justify-between px-4 font-mono">
      <div className="fixed -z-50 h-full w-full">
        <img src="/images/bg-two.png" width={"100%"} height={"100"} />
      </div>

      <div className="relative z-10 text-white w-full py-8">
        <div className="max-w-[1000px] mx-auto">
          <ProjectsGallery />
        </div>
      </div>
    </main>
  );
}
