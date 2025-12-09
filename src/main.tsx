import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

// Layout (named export)
import { Layout } from "@/layout/Layout";

// Páginas
import HomePage from "@/pages/HomePage"; // default export (OK)
import { AboutPage } from "@/pages/AboutPage"; // named export
import PagBankCasePage from "@/pages/PagBankCasePage"; // default export
import ConectaCasePage from "@/pages/ConectaCasePage";
 // named export
import { ProjectTemplatePage } from "@/pages/ProjectTemplatePage"; // named export

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />

          {/* Cases */}
          <Route path="/pagbank" element={<PagBankCasePage />} />
          <Route path="/conecta" element={<ConectaCasePage />} />

          {/* Template genérico (se você ainda usar) */}
          <Route path="/project-template" element={<ProjectTemplatePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
