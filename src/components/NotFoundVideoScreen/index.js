import React from "react";
import { PRIMARY } from "../../themes";
import { useSelector } from "react-redux";
import LoadingScreen from "../LoadingScreen";

export const NotFoundVideoScreen = () => {
  const { isLoading } = useSelector((state) => state.video);

  if (isLoading) return <LoadingScreen />;
  return (
    <div
      style={{
        marginTop: "50px",
        padding: "24px",
        width: "100%",
        height: "50vh",
        border: "2px dotted",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: 1.5,
        fontSize: "1.6rem",
        fontWeight: 600,
        color: PRIMARY.main,
      }}
    >
      Sorry, we could't find any videos for your search. Please try again later
      or check back soon...
    </div>
  );
};
