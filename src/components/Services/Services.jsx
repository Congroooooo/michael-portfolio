import React from 'react';
import './Services.css';
import { FaHardHat, FaDesktop, FaMicrochip, FaDraftingCompass, FaCubes, FaWrench, FaUserGraduate } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaHardHat />,
    title: "Hardware Design & Integration",
    description: "Specializing in designing and assembling hardware systems — from circuit planning to full integration — ensuring optimal performance and efficiency."
  },
  {
    icon: <FaDesktop />,
    title: "Kiosk Machine Fabrication",
    description: "Expert in welding and building customized kiosk machines tailored for commercial and industrial use, combining durability and smart technology."
  },
  {
    icon: <FaMicrochip />,
    title: "Embedded Systems & Microcontroller Programming",
    description: "Developing hardware-based solutions using microcontrollers (e.g., Arduino, Raspberry Pi) for automation and smart device projects."
  },
  {
    icon: <FaDraftingCompass />,
    title: "Technical CAD & 3D Modeling",
    description: "Creating accurate technical designs and visualizations using AutoCAD and 3D modeling tools for hardware layouts, enclosures, and kiosks."
  },
  {
    icon: <FaCubes />,
    title: "Prototype Development",
    description: "Building functional prototypes for testing and demonstration — from circuit boards to physical structures — to bring your ideas to life."
  },
  {
    icon: <FaWrench />,
    title: "Technical Maintenance & Troubleshooting",
    description: "Offering diagnostics, repair, and optimization services for electronic devices and custom hardware systems."
  },
  {
    icon: <FaUserGraduate />,
    title: "Portfolio Mentoring",
    description: "Assisting peers in building and improving personal portfolios."
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Services I Offer</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 