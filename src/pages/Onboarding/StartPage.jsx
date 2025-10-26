import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg?react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2300);
    const timer = setTimeout(() => {
      navigate("/navigate");
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(timer);
    };
  }, [navigate]);
  return (
    <div
      className={`bg-primary h-screen flex justify-center items-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Logo className="animate-bounce" />
    </div>
  );
};

export default StartPage;
