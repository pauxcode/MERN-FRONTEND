import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideoList } from "./components/Videos/VideoList";
import { VideoForm } from "./components/Videos/VideoForm";
import "./index.css";
import { Navbar } from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/new-video" element={<VideoForm />} />
        <Route path="/update/:id" element={<VideoForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
