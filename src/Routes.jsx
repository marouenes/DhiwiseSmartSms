import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FeaturePage = React.lazy(() => import("pages/FeaturePage"));
const AboutPage = React.lazy(() => import("pages/AboutPage"));
const DemoPage = React.lazy(() => import("pages/DemoPage"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/demopage" element={<DemoPage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/featurepage" element={<FeaturePage />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
