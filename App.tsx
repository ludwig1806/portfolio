import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import type { Experience as ExperienceType, VolunteerExperience, SkillCategory, Project } from './types';

const personalInfo = {
    name: "Alexander Ludwig Agu",
    title: "Information Systems & Technology Graduate | Web Developer",
    summary: "A passionate developer and designer with experience in web development, UI/UX, and cross-functional collaboration. Skilled in multiple programming languages with a solid understanding of responsive design and performance optimization.",
    contact: {
        email: "aguludwig@gmail.com",
        phone: "+6281214006782",
        linkedin: "https://linkedin.com/in/alexander-ludwig-71402020a/",
        github: "https://github.com/ludwig1806",
    }
};

const workExperienceData: ExperienceType[] = [
    {
        role: "Website Developer (Part Time)",
        company: "Bandung Choral Society",
        period: "Dec 2024 - May 2025",
        description: [
            "Maintained and developed 3 responsive websites using HTML, CSS, JavaScript, and PHP.",
            "Improved UI/UX design, resulting in increased engagement from event participants.",
            "Conducted performance optimization and bug fixing across all platforms."
        ]
    },
    {
        role: "UI/UX Designer Intern",
        company: "PT Sagara Technology",
        period: "Jun 2023 - Sep 2023",
        description: [
            "Designed UI prototypes in Figma and collaborated with developers for implementation.",
            "Conducted 25+ usability tests and transformed findings into actionable design improvements.",
            "Led a cross-functional team of 10 (designers, engineers, QA) in an agile workflow.",
            "Analyzed 50+ survey responses to improve product usability and overall experience."
        ]
    }
];

const volunteerExperienceData: VolunteerExperience[] = [
    { role: 'Hospitality Staff', organization: 'Bandung Choral Society', description: 'Ensured smooth coordination and experience for international guests and speakers.' },
    { role: 'Conference Platform Organizer', organization: 'Institute Technology Bandung', description: 'Managed participant reports, feedback, and technical support during academic conferences.' },
    { role: 'Local Organizer Staff', organization: 'Tanoto Student Research Award', description: 'Assisted in event logistics and data compilation for participant research presentations.' },
];


const skillsData: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["Python", "C++", "Java", "HTML/CSS", "JavaScript", "SQL", "PHP"]
    },
    {
        title: "Frameworks & Tools",
        skills: ["Figma", "Android Studio", "Git", "Microsoft Excel", "Microsoft Word", "React", "Node.js"]
    },
    {
        title: "Concepts",
        skills: ["Machine Learning", "Database Management", "UI/UX Design", "Mobile App Development", "Responsive Design"]
    }
];

const projectsData: Project[] = [
    {
        title: "Health Track",
        description: "A responsive website for a choral society to manage events, registrations, and participant engagement, leading to increased participation.",
        tags: ["JavaScript", "HTML/CSS", "UI/UX"],
        imageUrl:"assets/images/Screenshot 2025-11-03 173321.jpg",
        link: "#",
    },
];

const App: React.FC = () => {
  return (
    <div className="bg-slate-900">
      <Header />
      <main>
        <Hero 
            name={personalInfo.name}
            title={personalInfo.title}
            summary={personalInfo.summary}
            linkedinUrl={personalInfo.contact.linkedin}
            email={personalInfo.contact.email}
            githubUrl={personalInfo.contact.github}
        />
        <About />
        <Skills skillData={skillsData} />
        <Experience workExperience={workExperienceData} volunteerExperience={volunteerExperienceData} />
        <Projects projects={projectsData} />
        <Contact 
            email={personalInfo.contact.email}
            phone={personalInfo.contact.phone}
            linkedin={personalInfo.contact.linkedin}
            github={personalInfo.contact.github}
        />
      </main>
      <footer className="bg-slate-900/50 py-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;