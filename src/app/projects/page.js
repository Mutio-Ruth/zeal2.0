// B:\mytestProjects\PatriciaConstructions\v2\panframltdv2\src\app\projects\page.js
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { generateProjectGallery } from "../../utils/galleryImages";


const Projects = () => {
  const [projectGallery, setProjectGallery] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const increment = 10;

  useEffect(() => {
    // This call is now synchronous
    setProjectGallery(generateProjectGallery());
  }, []); // Empty dependency array means this runs once on mount

  const loadMore = () => {
    setVisibleCount(prevCount =>
      Math.min(prevCount + increment, projectGallery.length)
    );
  };

  const currentVisibleGalleryProjects = projectGallery.slice(0, visibleCount);

  return (
    <div className="flex-grow">
      {/* Hero Section - Simplified */}
      <div className="bg-gradient-to-r from-[#020406] to-[#f5831e] py-16">
        <div className="max-w-7xl mx-auto px-4 text-white text-center">
          <h1 className="text-4xl font-bold mb-6">Our Projects Gallery</h1>
          <p className="text-xl">
            A visual showcase of our diverse construction endeavors.
          </p>
        </div>
      </div>

      {/* Main Gallery Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {projectGallery.length === 0 ? (
            <div className="col-span-full text-center text-lg text-gray-600">
              Loading images...
            </div>
          ) : (
            currentVisibleGalleryProjects.map((project, index) => (
              <div key={index} className="text-center bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <Image
                  src={project.Imagesrc}
                  alt={project.Title}
                  className="project-gallery-image object-cover w-full max-h-[250px] rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl"
                  width={500}
                  height={250}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="project-title text-base font-semibold mt-2 mb-4 text-gray-800 p-2">
                  {project.Title}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More Button - Only shows if there are more images to load */}
        {visibleCount < projectGallery.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="load-more-btn bg-black text-white px-8 py-3 rounded-full font-medium transition duration-300 hover:bg-[#f5831e] hover:translate-y-[-2px]"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;