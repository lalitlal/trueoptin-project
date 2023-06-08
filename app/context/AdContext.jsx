"use client";

import React, { createContext, useState } from "react";

export const AdContext = createContext();

export const AdProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [seeForm, setSeeForm] = useState(false);
  // Page 2: CTA
  const [cta, setCTA] = useState("Your CTA Here");
  const [headline, setHeadline] = useState("Your headline Here");
  const [description, setDescription] = useState("Your Description Here");
  // const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [thankYouImageData, setThankYouImageData] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  // Page 2: Sign Up
  const [signupCTA, setSignupCTA] = useState("JOIN");
  const [signupHeadline, setSignupHeadline] = useState("Join the waitlist");
  const [signupDescription, setSignupDescription] = useState(
    "Over 25000 other students are signed up to learn more about product xyz. "
  );

  // Page 3: Thank you
  const [thankYouCTA, setThankYouCTA] = useState("Your CTA Here");
  const [thankYouHeadline, setThankYouHeadline] =
    useState("Your headline Here");
  const [thankYouDescription, setThankYouDescription] = useState(
    "Your Description Here"
  );

  // FORM CONTROLS
  const [toggleName, setToggleName] = useState(true);
  const [toggleEmail, setToggleEmail] = useState(true);
  const [togglePhone, setTogglePhone] = useState(true);

  // Deploy Control
  const [isDeployed, setIsDeployed] = useState(false);

  return (
    <AdContext.Provider
      value={{
        cta,
        headline,
        description,
        // image,
        imageData,
        imageDimensions,
        seeForm,
        toggleName,
        toggleEmail,
        togglePhone,
        isDeployed,
        currentPage,
        thankYouCTA,
        thankYouDescription,
        thankYouHeadline,
        signupCTA,
        signupDescription,
        signupHeadline,
        thankYouImageData,
        setThankYouImageData,
        setSignupCTA,
        setSignupDescription,
        setSignupHeadline,
        setThankYouCTA,
        setThankYouDescription,
        setThankYouHeadline,
        setCurrentPage,
        setIsDeployed,
        setToggleName,
        setTogglePhone,
        setToggleEmail,
        setSeeForm,
        setImageData,
        setImageDimensions,
        // setImage,
        setCTA,
        setHeadline,
        setDescription,
      }}
    >
      {children}
    </AdContext.Provider>
  );
};
