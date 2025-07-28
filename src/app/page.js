"use client";
import React from "react";
import Image from "next/image";
import { Wrench, Shield, Hammer, Leaf, ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imported Zeal project images (replace these with real ones)
import GateFabrication from "../assets/images/Eric website/IMG-20250708-WA0003.jpg";
import SteelStructure from "../assets/images/Eric website/IMG-20250708-WA0017.jpg";
import WeldingWork from "../assets/images/Eric website/IMG-20250708-WA0048.jpg";

const Home = () => {
  const features = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Custom Fabrication",
      description:
        "We design and build metal products tailored to your residential, commercial, and industrial needs.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Durability & Strength",
      description:
        "We use premium-grade materials and precise welding to ensure lasting results in all projects.",
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Skilled Craftsmanship",
      description:
        "Our team of expert fabricators is committed to delivering flawless, functional metalwork.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Eco-Friendly Practice",
      description:
        "Zeal embraces sustainability through efficient processes and material reuse where possible.",
    },
  ];

  const completedProjects = [
  {
    title: "Custom Steel Gate",
    location: "Syokimau, Nairobi",
    client: "Private Residence",
    year: "2024",
    image: GateFabrication,
  },
  {
    title: "Industrial Steel Frame",
    location: "Mlolongo",
    client: "Z-Tech Industries",
    year: "2023",
    image: SteelStructure,
  },
  {
    title: "On-Site Welding & Fabrication",
    location: "Athi River",
    client: "Borehole Solutions Ltd",
    year: "2024",
    image: WeldingWork,
  },
];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: false,
    arrows: false,
    pauseOnHover: false,
  };

  const heroImages = [
    { url: WeldingWork, overlay: "rgba(2,4,6,0.05)" },
    { url: SteelStructure, overlay: "rgba(2,4,6,0.05)" },
    { url: GateFabrication, overlay: "rgba(2,4,6,0.05)" },
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Slider {...sliderSettings}>
            {heroImages.map((image, index) => (
              <div key={index} className="relative h-[300px]">
                <Image
                  src={image.url}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "50% 30%" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, ${image.overlay} 30%, rgba(245, 131, 30, 0.05))`,
                  }}></div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-black/50 p-0 rounded-lg inline-block mx-auto">
               Precision in Fabrication, Strength in Every Weld              </h1>
              <p className="text-lg md:text-xl mb-6 text-white bg-black/50 p-2 rounded-lg inline-block mx-auto">
                Custom metalwork and industrial welding solutions built to last
              </p>
              <br />
              <a
                href="/contact"
                className="inline-block bg-white text-[#020406] px-8 py-3 rounded-full font-bold hover:bg-[#f5831e] hover:text-white transition duration-300">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg hover:shadow-lg transition duration-300">
                <div className="text-[#f5831e] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <p className="text-sm text-gray-500">
                    {project.client} | {project.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/projects"
              className="inline-flex items-center text-[#f5831e] hover:text-[#020406]">
              View More Projects <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#020406] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Let's Build With Zeal!
          </h2>
          <p className="text-xl mb-8">
            Let us handle your metal fabrication and welding needs with precision and care s
          </p>
          <a
            href="/contact"
            className="bg-[#f5831e] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300 inline-flex items-center">
            Get in Touch
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
