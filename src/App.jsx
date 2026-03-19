import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CandidatesPage from "./pages/CandidatesPage";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#0d2240]">
      <header className="sticky top-0 z-50 border-b border-[#d8c48a]/50 bg-[#0d2240]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#d8c48a]">
              Official Communiqué
            </div>
            <div className="text-lg font-semibold text-white sm:text-xl">
              SLPM-PC
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm text-white/85">
            <Link to="/" className="transition hover:text-[#d8c48a]">
              Home
            </Link>
            <Link to="/candidates" className="transition hover:text-[#d8c48a]">
              Candidates
            </Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
      </Routes>
    </div>
  );
}