import React from 'react';
import type { Project } from '../types';
import AnimatedSection from './AnimatedSection';
import { ExternalLinkIcon } from './icons';

interface ProjectsProps {
    projects: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
     <div className="group relative overflow-hidden rounded-lg shadow-lg bg-slate-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/30 h-full flex flex-col w-full max-w-2xl">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <div className="flex-grow"></div> {/* Spacer to push content to bottom */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                    <span key={index} className="bg-slate-700 text-violet-400 px-2 py-1 rounded-full text-xs font-semibold">
                        {tag}
                    </span>
                ))}
            </div>
            <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-colors"
            >
                View Project <ExternalLinkIcon className="w-4 h-4" />
            </a>
        </div>
    </div>
);

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <AnimatedSection id="projects" className="bg-slate-900/50 scroll-mt-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-2">Projects</h2>
                <div className="w-20 h-1 bg-violet-500 mx-auto mb-12"></div>
                 <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Projects;