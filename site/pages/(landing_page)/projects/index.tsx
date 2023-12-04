import React from "react";
import { ProjectSection } from "../../../src/components/sections";
import Wrapper from "../../../src/layout/wrapper";
import ContactSection from "../../../src/components/sections/contactSection";

export default function INdex() {
  return (
    <div className="h-auto">
      <Wrapper className=" max-w-none">
        <ProjectSection />
      </Wrapper>

      <ContactSection />
    </div>
  );
}
