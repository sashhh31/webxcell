import React from 'react';
import AccordionItem from '../ui/AccordianItem';
import Link from 'next/link';

export default function FAQSection({ className }) {
  const faqs = [
    {
      question: 'What services do Webxcell Digital offer?',
      answer: 'Webxcell Digital offers a comprehensive suite of digital media services including Digital Strategy, Email Marketing, Web Development, SEO Link Building Optimization, Brand Identity Design, and Video Production. We cover the entire customer journey to scale new customer acquisition and retention for e-commerce brands.',
    },
    {
      question: 'Who are your typical clients?',
      answer: 'Our clients range from start-ups and SMEs to large enterprises and public sector organisations. We collaborate with leaders across finance, energy, healthcare, tech, and government to deliver strategic and secure digital solutions.',
      defaultOpen: true,
    },
    {
      question: 'Do you offer custom web design or templates?',
      answer: 'Yes, we specialize3 in both custom web design tailored to your brand identity and requirements, as well as offering professional template-based solutions for quicker deployment and cost-effectiveness. Our approach depends on your specific needs and budget.',
    },
    {
      question: 'Can you help with digital transformation projects?',
      answer: 'Absolutely. We have a successful track record in helping brands with their digital transformation journeys, from strategizing and implementing new technologies to optimizing existing digital infrastructures and processes.',
    },
    {
      question: 'What is your approach to cybersecurity and IAM?',
      answer: 'We integrate robust cybersecurity measures and Identity and Access Management (IAM) solutions into all our digital projects to ensure the highest levels of data protection and secure access for our clients and their users.',
    },
    {
      question: 'How do you manage project timelines and deliverables?',
      answer: 'We employ agile methodologies and transparent project management tools to ensure efficient execution, clear communication, and timely delivery of all project milestones and deliverables, keeping you informed every step of the way.',
    },
    {
      question: 'Do you provide ongoing website maintenance and support?',
      answer: 'Yes, our relationship with clients extends beyond launch. We offer comprehensive post-launch support and ongoing maintenance packages, including regular updates, security checks, performance optimization, and troubleshooting to keep your digital presence running smoothly.',
    },
    {
      question: 'Is Webxcell Digital experienced with cloud platforms?',
      answer: 'Yes, our team has extensive experience working with various cloud platforms, including AWS, Azure, and Google Cloud, to build scalable, secure, and high-performance digital solutions tailored to your cloud strategy.',
    },
    {
      question: 'Do you offer training or knowledge transfer services?',
      answer: 'We believe in empowering our clients. We offer training sessions and comprehensive documentation to ensure your team is well-equipped to manage and utilize the digital solutions we deliver, facilitating smooth knowledge transfer.',
    },
  ];

  return (
    <section className={`py-20 px-8 bg-darkBg text-lightText ${className}`}>
      <div className="max-w-[800px] mx-auto">
        {/* FAQ List */}
        <div className="space-y-0"> 
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={faq.defaultOpen}
            />
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-20">
          <h3 className="text-4xl font-bold text-gray-100 mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            You can use it in situations when you are providing guidance With over a decade of experienceor information
          </p>
          <Link href="/contact-us" className="bg-[#EF7915] text-lightText font-bold py-4 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-lg">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}