import React, { useState, useEffect } from "react";
import projects from "../projects.json";

export default function ProjectCards({ className = "" }) {
  const sortedProjects = [...projects].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const itemsPerPage = 12;
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [fadeState, setFadeState] = useState("fade-in");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = sortedProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // your WhatsApp number (no "+" or spaces)
  const whatsappNumber = "2347036869758"; // change this to yours

  const handleWhatsAppChat = (topic) => {
    const message = encodeURIComponent(
      `👋 Hi! I'm interested in this project topic:\n\n📘 *${topic}*`
    );
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    setFadeState("fade-out");
    setTimeout(() => {
      setCurrentPage(page);
      setFadeState("fade-in");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {/* Project Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full transition-all duration-500 ${fadeState}`}
      >
        {currentProjects.map((item, key) => (
          <article
            key={item.name}
            role="button"
            tabIndex={0}
            onClick={() => handleWhatsAppChat(item.topic || item.name)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ")
                handleWhatsAppChat(item.topic || item.name);
            }}
            className="relative hover:scale-105 active:scale-95 duration-150 p-4 shadow-lg border cursor-pointer flex flex-col rounded-lg bg-white"
          >
            <span className="absolute right-2 top-1 text-4xl text-gray-300">
              #{startIndex + key + 1}
            </span>
            <span className="text-2xl text-blue-500 font-bold mb-2">
              {item.name}
            </span>
            <p className="text-base text-gray-700 mb-3 line-clamp-3">
              {item.description}
            </p>
            <p className="text-base text-c3 mb-3 line-clamp-3">
              Topic: {item.topic}
            </p>
            <div className="mt-auto text-xs font-medium text-indigo-400">
              {item.stack}
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`w-9 h-9 rounded-full text-sm font-semibold transition-all duration-300 ${
              currentPage === i + 1
                ? "bg-blue-600 text-white shadow-md scale-110"
                : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Fade animation styles */}
      <style>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-out {
          opacity: 0;
          transform: translateY(10px);
        }
        .fade-in,
        .fade-out {
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
      `}</style>
    </div>
  );
}
