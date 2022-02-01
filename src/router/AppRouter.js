import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/main/LandingPage";
import ResultsPage from "../pages/result/ResultsPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/result" element={<ResultsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
