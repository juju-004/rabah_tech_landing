import { useEffect } from "react";
import Projects from "./components/Projects";
import { BrowserRouter } from "react-router-dom";
import Project from "./screens/Project";
import Dashboard from "./screens/Dashboard";
import Layout from "./screens/Layout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import NotFound from "./screens/NotFound";

function App() {
  useEffect(() => {
    const preloder = document.querySelector("#preloder");

    if (preloder) {
      preloder.classList.add("fadeOut");
      setTimeout(() => {
        preloder.style.display = "none";
      }, 400);
    }
  }, []);

  return (
    <BrowserRouter>
      <div id="preloder" className="">
        <div class="loader"></div>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} /> {/* Index route for "/" */}
          <Route path="/projects" element={<Project />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
