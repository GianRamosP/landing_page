// routes/index.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Us from "../pages/Us";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Clients from "../pages/Clients";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import '../App.css'

const AppRoutes = () => (
  <AnimatePresence>
  <Router>
    <Layout>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/us" element={<Us />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/clients" element={<Clients />} />
        {/* { name: "Soluciones", href: "/solutions", current: false }, */}
        {/* { name: "Noticias", href: "/news", current: false }, */}
      </Routes>
     
    </Layout>
  </Router>
   </AnimatePresence>
);

export default AppRoutes;
