/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import CvModal from './components/CvModal';
import DeploymentGuideModal from './components/DeploymentGuideModal';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleOpenReport = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Featured Finance Projects */}
        <Projects
          onSelectProject={handleSelectProject}
          onOpenReport={handleOpenReport}
        />

        {/* 5. Experience & Leadership */}
        <Experience />

        {/* 6. Certifications & Achievements */}
        <Certifications
          onOpenUploadGuide={() => setIsDeployGuideOpen(true)}
        />

        {/* 7. Professional Contact */}
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* ATS-Friendly CV Preview & Download Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        onOpenDeployGuide={() => {
          setIsCvModalOpen(false);
          setIsDeployGuideOpen(true);
        }}
      />

      {/* Owner & Deployment Configuration Guide Modal */}
      <DeploymentGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
