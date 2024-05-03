import React, { useState } from 'react';
import FadeInUp from './FadeInUpWhenVisible';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    const toggleAccordion = () => {
      setIsOpen(prevState => !prevState); // Toggle the previous state
    };
  
    return (
      <FadeInUp>
        <div className="accordion-item">
          <div className="accordion-item-trigger" onClick={toggleAccordion}>
            <div className="semibold-l text-color-white max-width-720">
              <strong>{question}</strong>
            </div>
            <div className={`accordion-item-icon ${isOpen ? 'open' : ''}`}>
            <img src="images/Dismiss.svg" loading="lazy" alt="" className="icon-size-16" />
          </div>
          </div>
          <div className={`accordion-item-content ${isOpen ? 'open' : ''}`}>
            <p className="typewriter faq-text">{answer}</p>
          </div>
        </div>
      </FadeInUp>
    );
  };
  
const Accordion: React.FC = () => {
  const accordionData: AccordionItemProps[] = [
    {
      question: 'What is Hangry?',
      answer: 'Hangry is a revolutionary platform created by restaurateurs for restaurateurs, offering a food delivery and pickup service that enhances your ability to control your data, directly contact customers, and maintain your unique hospitality, all without the hefty fees of other delivery apps.',
    },
    {
      question: 'Is Hangry really free for restaurants?',
      answer: 'Yes, Hangry is completely free for restaurants. There are no commissions, no monthly fees, and no marketing or hidden fees. Our aim is to support restaurants in retaining more of their earnings while providing excellent service to their customers.',
    },
    {
      question: 'How does Hangry differ from other delivery services?',
      answer: 'Hangry stands out because it charges no fees to restaurants and has a small, transparent charge for customers, which is still cheaper than the hidden fees often found with other services. Additionally, Hangry allows for direct communication between restaurants and customers, fostering a better dining experience for to-go orders..',
    },
    {
      question: 'Can I use my own tablet with Hangry, or do I need to get one from you?',
      answer: 'You are welcome to use your own tablet with Hangry, or you can rent one from us for just $8 a month. We provide the flexibility to manage your orders in the way that best fits your needs.',
    },
    {
      question: 'Who handles the delivery for Hangry?',
      answer: `For our Chicago partners, we've teamed up with Cut Cats Courier, an independent bike courier service known for their reliable and friendly service. This partnership ensures faster and more careful handling of deliveries compared to traditional delivery drivers.
      For restaurants outside Chicago, we are integrated with doordash's driver fleet to allow for delivery options nationally.
      `,
    },
    {
      question: 'How do I get started with Hangry?',
      answer:` Getting started with Hangry is easy and straightforward! Simply click the link below, and we'll get in touch to begin your onboarding process. We'll guide you through each step, from setting up your menu to integrating your current systems with our platform. It's easy to set up so can start accepting orders in no time. Ready to boost your business with Hangry? Let's get started!`
,
    },
    // Add more accordion items as needed
  ];

  return (
    <section className="section section-padding">
      <div className="w-layout-blockcontainer container-small w-container">
        <div className="section-heading margin-bottom-16-mobile-12 black">
          <h4 className="h2 cream">Your burning questions answered - FAQ</h4>
        </div>
        <div className="accordions-wrapper">
          {accordionData.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
