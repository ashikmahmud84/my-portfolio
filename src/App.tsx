/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ServicesSection } from './sections/ServicesSection';
import { GithubSection } from './sections/GithubSection';
import { ContactSection } from './sections/ContactSection';
import { CursorFollower } from './components/ui/CursorFollower';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-[#f8fafc] font-sans antialiased relative selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Custom Subtle Desktop Cursor Follower */}
      <CursorFollower />

      {/* Background Grid & Ambient Glow Texture */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
      <div className="fixed inset-0 bg-radial-glow pointer-events-none z-0" />

      {/* Primary App Shell */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 1. Navbar */}
        <Navbar />

        {/* Main Content Layout */}
        <main id="main-content" className="flex-1">
          {/* 2. Hero Section */}
          <HeroSection />

          {/* 3. About Section */}
          <AboutSection />

          {/* 4. Skills Section */}
          <SkillsSection />

          {/* 5. Featured Projects Section */}
          <ProjectsSection />

          {/* 6. Experience/Education Section */}
          <ExperienceSection />

          {/* 7. Services Section (Projects-Aligned) */}
          <ServicesSection />

          {/* 8. GitHub & Open Source Section */}
          <GithubSection />

          {/* 9. Contact Section */}
          <ContactSection />
        </main>

        {/* 10. Footer */}
        <Footer />
      </div>
    </div>
  );
}
