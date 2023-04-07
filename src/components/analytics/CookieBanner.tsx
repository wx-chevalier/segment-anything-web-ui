import React from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

const CookieBanner = ({ onAccept, onDecline }: any) => {
  return (
    <CookieConsent
      style={{
        padding: "1em",
        backgroundColor: "white",
        color: "black",
        fontSize: "0.85em",
      }}
      overlay
      cookieName="sa_demo"
      disableButtonStyles
      declineButtonClasses="btn btn-secondary mx-2"
      buttonClasses="btn btn-primary accept-button text-white"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton={true}
      onAccept={onAccept}
      onDecline={onDecline}
      containerClasses="" // overriding the default so that the popup isn't hidden by adblockers: https://github.com/Mastermindzh/react-cookie-consent/issues/64
    >
      We use cookies and similar technologies to help provide the content on the
      Segment Anything site and for analytics purposes. You can learn more about
      cookies and how we use them in our{" "}
      <Link
        to={"/cookies"}
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        <b>Cookie Policy</b>
      </Link>
      .
    </CookieConsent>
  );
};

export default CookieBanner;
