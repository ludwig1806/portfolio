import React from 'react';
import type { Experience, VolunteerExperience } from '../types';
import AnimatedSection from './AnimatedSection';

interface ExperienceProps {
  workExperience: Experience[];
  volunteerExperience: VolunteerExperience[];
}

const TimelineItem: React.FC<{
  title: string;
  subtitle: string;
  period?: string;
  description: string | string[];
}> = ({ title, subtitle, period, description }) => (
  <div className="relative pl-10 py-6 group">
    {/* Ring Marker */}
    <div className="absolute top-9 left-3 -translate-x-1/2 w-3 h-3 rounded-full border-2 bg-slate-900 border-slate-600 group-hover:border-violet-500 transition-colors z-10"></div>
    
    {/* Content */}
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-violet-500/20 transition-shadow">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {period && <time className="text-sm font-medium text-slate-400 sm:ml-auto flex-shrink-0">{period}</time>}
      </div>
      <p className="text-md font-semibold text-violet-400 mb-3">{subtitle}</p>
      {Array.isArray(description) ? (
        <ul className="list-disc list-inside text-slate-400 space-y-1">
          {description.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      ) : (
        <p className="text-slate-400">{description}</p>
      )}
    </div>
  </div>
);


const Experience: React.FC<ExperienceProps> = ({ workExperience, volunteerExperience }) => {
  return (
    <AnimatedSection id="experience" className="scroll-mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Experience</h2>
        <div className="w-20 h-1 bg-violet-500 mx-auto mb-12"></div>
        
        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 h-full w-px bg-slate-700"></div>

          {/* Work Experience Separator */}
          <div className="relative pl-10 py-6">
              <div className="absolute top-9 left-3 -translate-x-1/2 w-2.5 h-2.5 bg-slate-600 rounded-full z-10 ring-4 ring-slate-900"></div>
              <h3 className="pt-1 text-xl font-bold text-slate-400">Work Experience</h3>
          </div>

          {/* Work Experience */}
          {workExperience.map((exp, index) => (
            <TimelineItem 
              key={index}
              title={exp.role}
              subtitle={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}

          {/* Volunteer Experience Separator */}
          <div className="relative pl-10 py-6">
              <div className="absolute top-9 left-3 -translate-x-1/2 w-2.5 h-2.5 bg-slate-600 rounded-full z-10 ring-4 ring-slate-900"></div>
              <h3 className="pt-1 text-xl font-bold text-slate-400">Volunteer Experience</h3>
          </div>

          {/* Volunteer Experience */}
          {volunteerExperience.map((exp, index) => (
             <TimelineItem 
              key={index}
              title={exp.role}
              subtitle={exp.organization}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;