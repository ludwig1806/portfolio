
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { MailIcon, PhoneIcon, LinkedInIcon, GitHubIcon } from './icons';

interface ContactProps {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
}

const Contact: React.FC<ContactProps> = ({ email, phone, linkedin, github }) => {
    const contactInfo = [
        { Icon: MailIcon, text: email, href: `mailto:${email}` },
        { Icon: PhoneIcon, text: phone, href: `tel:${phone}` },
        { Icon: LinkedInIcon, text: 'LinkedIn Profile', href: linkedin },
        { Icon: GitHubIcon, text: 'GitHub Profile', href: github },
    ];

    return (
        <AnimatedSection id="contact" className="scroll-mt-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
                <div className="w-20 h-1 bg-violet-500 mx-auto mb-12"></div>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                    I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8">
                    {contactInfo.map(({ Icon, text, href }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors group"
                        >
                            <Icon className="w-6 h-6 text-violet-500 group-hover:text-violet-400 transition-colors" />
                            <span className="text-lg">{text}</span>
                        </a>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Contact;