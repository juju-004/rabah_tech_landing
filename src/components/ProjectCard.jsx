import React from "react";
import projects from "../projects.json";

export default function ProjectCards({ className = "", onItemClick }) {
  const sortedProjects = projects.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ${className}`}
    >
      {sortedProjects.map((item, key) => (
        <article
          key={key}
          role={onItemClick ? "button" : "article"}
          tabIndex={0}
          onClick={() => onItemClick && onItemClick(item)}
          onKeyDown={(e) => {
            if ((e.key === "Enter" || e.key === " ") && onItemClick)
              onItemClick(item);
          }}
          className="bg-white/5 relative hover:bg-white/10 transition-colors duration-150 p-4 shadow-lg border cursor-pointer flex flex-col"
        >
          <span className="absolute right-2 top-1 text-4xl rbh text-c3/5">
            #{key + 1}
          </span>
          <span
            className={`relative text-2xl text-blue-500 flex items-center font-bold`}
          >
            {item.name}
          </span>
          <p className="text-base text-c3 mb-2 mt-3 line-clamp-3">
            {item.description}
          </p>
          <div className="mt-auto text-xs font-medium text-indigo-400">
            {item.stack}
          </div>
        </article>
      ))}
    </div>
  );
}
