import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import HomePage from "./Components/Home/home";
import AboutPage from "./Components/About/about";
import SignupPage from "./Components/SignUp/signup";
import ContactPage from "./Components/Contact/contact";
import ShopPage from "./Components/Shop/shop";
import PlantGallery from "./Components/PlantGallery/plant"

const AppRoutes = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? (
        <div className="loader-wrapper">
          <ClipLoader
            color={"#216d5e"}
            loading={loading}
            size={90}
            className="loader"
          />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/herbcure/about" element={<AboutPage />} />
            <Route path="/herbcure/signup" element={<SignupPage />} />
            <Route path="/herbcure/contactus" element={<ContactPage />} />
            <Route path="/herbcure/shop" element={<ShopPage />} />
            <Route path="/plant-info" element={<PlantGallery />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default AppRoutes;
