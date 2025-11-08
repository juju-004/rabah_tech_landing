import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Layout from "./screens/Layout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import NotFound from "./screens/NotFound";
import Topics from "./screens/Topics";
import projects from "./projects.json";
import seminars from "./seminar.json";

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
          <Route
            path="/project-topics"
            element={<Topics header={"Projects"} data={projects} />}
          />
          <Route
            path="/seminar-topics"
            element={
              <Topics
                header={"Seminar topics"}
                data={seminars}
                isSeminar={true}
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
