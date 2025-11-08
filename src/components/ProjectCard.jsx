import React, { useMemo, useState } from "react";

export default function ProjectCards({
  className = "",
  projects,
  isSeminar = false,
}) {
  const [selectedDept, setSelectedDept] = useState("Computer Science");
  const sortedProjects = [...projects].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Department list
  const departments = ["Computer Science", "Chemistry", "Physics"];

  // Optional filtering logic (depends on your data)
  const filteredProjects = sortedProjects.filter(
    (p) => !p.department || p.department === selectedDept
  );

  const itemsPerPage = 12;

  const totalPages = useMemo(
    () => Math.ceil(filteredProjects.length / itemsPerPage),
    [filteredProjects]
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [fadeState, setFadeState] = useState("fade-in");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // your WhatsApp number (no "+" or spaces)
  const whatsappNumber = "2347036869758";
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
      {/* Department Tabs */}
      {isSeminar && (
        <div className="w-full flex flex-wrap justify-center gap-3 mb-6">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 border
              ${
                selectedDept === dept
                  ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100 border-gray-300"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      )}

      {/* Project Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full transition-all duration-500 ${fadeState}`}
      >
        {currentProjects.map((item, key) => (
          <article
            key={key}
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
            {item?.topic && (
              <p className="text-base text-c3 mb-3 line-clamp-3">
                Topic: {item.topic}
              </p>
            )}
            {item?.stack && (
              <div className="mt-auto text-xs font-medium text-indigo-400">
                {item.stack}
              </div>
            )}
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
