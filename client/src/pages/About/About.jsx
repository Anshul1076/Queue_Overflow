import React from 'react';
import icon4 from '../../assets/icon4.png';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
            <div className="container mx-auto px-6 sm:px-12">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="rounded-full p-4 mb-4 bg-orange-100">
                            <img src={icon4} alt="Stack Overflow Logo" className="h-16 w-16" />
                        </div>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                            Empowering the world to develop technology
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            through collective knowledge.
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our products and tools enable people to ask, share, and learn at work or at home.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Stack Overflow</h1>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Stack Overflow is the largest and most trusted online community for developers to learn, share their programming knowledge, and build their careers.
                        Founded in 2008 by Jeff Atwood and Joel Spolsky, Stack Overflow is part of the Stack Exchange network and serves millions of developers worldwide.
                    </p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Developers Love Stack Overflow</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                        <li>Get fast and reliable answers to programming questions.</li>
                        <li>Share your knowledge with millions of developers globally.</li>
                        <li>Earn reputation points and badges by helping others.</li>
                        <li>Join a vibrant and professional developer community.</li>
                    </ul>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2    ">Key Features</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Question and Answer system to address programming issues.</li>
                        <li>Tags and filtering for easy navigation.</li>
                        <li>Reputation system to recognize contributors.</li>
                        <li>Community moderation to maintain content quality.</li>
                    </ul>
                    <p className="text-lg text-gray-700 mt-6">
                        Whether you're a beginner or an experienced developer, Stack Overflow provides a platform to enhance your skills,
                        get support from fellow developers, and grow as a professional. Join the community today!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
