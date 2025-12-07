import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Layout } from "@/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { PagBankCasePage } from "@/pages/PagBankCasePage";
import { ConectaCasePage } from "@/pages/ConectaCasePage";
import { ProjectTemplatePage } from "@/pages/ProjectTemplatePage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pagbank-case" element={<PagBankCasePage />} />
          <Route path="/conecta-case" element={<ConectaCasePage />} />
          <Route path="/project-template" element={<ProjectTemplatePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
