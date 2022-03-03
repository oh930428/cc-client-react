import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Community, CampApply, CampDetail } from "pages";

function App() {
  return (
    <BrowserRouter basename="/cc-client-react">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camp/:id" element={<CampDetail />} />
        <Route path="/camp/apply" element={<CampApply />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
