import React from 'react';
import { LinkedInIcon, MailIcon, GitHubIcon } from './icons';

interface HeroProps {
    name: string;
    title: string;
    summary: string;
    linkedinUrl: string;
    email: string;
    githubUrl: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, summary, linkedinUrl, email, githubUrl }) => {
  return (
    <section id="home" className="pt-32 pb-16 sm:pt-40 sm:pb-20 flex items-center justify-center bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
          {name}
        </h1>
        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-violet-400">
          {title}
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
            {summary}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-violet-600 transition-all transform hover:scale-105">
                <LinkedInIcon className="w-5 h-5" />
                LinkedIn
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-violet-600 transition-all transform hover:scale-105">
                <GitHubIcon className="w-5 h-5" />
                GitHub
            </a>
            <a href={`mailto:${email}`} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-700 transition-all transform hover:scale-105">
                <MailIcon className="w-5 h-5" />
                Contact Me
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;