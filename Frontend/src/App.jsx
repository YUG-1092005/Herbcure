import React, { useEffect, useState } from "react";
import "./App.css";
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "./Navbar";
import Footer from "./Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <ClipLoader color={"#216d5e"} loading={loading} size={90} />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          {/* <Footer /> */}
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
