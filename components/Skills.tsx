
import React from 'react';
import type { SkillCategory } from '../types';
import AnimatedSection from './AnimatedSection';

interface SkillsProps {
    skillData: SkillCategory[];
}

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg h-full">
        <h3 className="text-xl font-bold text-violet-400 mb-4">{category.title}</h3>
        <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, index) => (
                <span key={index} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills: React.FC<SkillsProps> = ({ skillData }) => {
    return (
        <AnimatedSection id="skills" className="bg-slate-900/50 scroll-mt-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-2">Technical Skills</h2>
                <div className="w-20 h-1 bg-violet-500 mx-auto mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillData.map((category, index) => (
                        <SkillCard key={index} category={category} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Skills;
