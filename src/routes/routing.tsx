import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../views/components/not-found";

import RouteImports from "./RouteImports";

function Routing() {
  return (
    <Suspense fallback={"custom loading here..."}>
      <Router>
        <Routes>
          <Route path="/" element={<RouteImports.CountryListing />} />
          <Route
            path="/country-detail/:name"
            element={<RouteImports.CountryDetail />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default Routing;
