
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
    return (
        <AnimatedSection id="about" className="scroll-mt-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-2">About Me</h2>
                <div className="w-20 h-1 bg-violet-500 mx-auto mb-12"></div>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img 
                            src="assets/images/Alexander Ludwig Agu - Photo.jpg"
                            alt="Alexander Ludwig Agu"
                            className="rounded-lg shadow-2xl w-full max-w-md mx-auto object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 text-lg text-slate-400 space-y-4">
                        <p>
                           Information Systems and Technology graduate with experience in web development, user interface design, and cross-functional collaboration. Skilled in multiple programming languages including JavaScript, Python, and PHP, with a solid understanding of responsive design and performance optimization. Open to various opportunities in the tech industry, including development, design, and system support roles.
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default About;
