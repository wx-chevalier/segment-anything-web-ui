import React from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import * as ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import CookieBanner from "./CookieBanner";

const Analytics = () => {
  const [analyticsEnabled, setAnalyticsEnabled] = React.useState(false);

  // Enable analytics if cookie accepted
  const handleAcceptCookie = React.useCallback(() => {
    if (process.env.GA_TRACKING_ID_PROD) {
      console.log("GA: Init");
      ReactGA.default.initialize(process.env.GA_TRACKING_ID_PROD);
      setAnalyticsEnabled(true);
    }
  }, []);
  const handleDeclineCookie = React.useCallback(() => {
    console.log("GA: declined");
  }, []);

  React.useEffect(() => {
    const isConsent = getCookieConsentValue("sa_demo");
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, [handleAcceptCookie]);

  let location = useLocation();
  React.useEffect(() => {
    if (document.cookie.includes("sa_demo=true")) {
      console.log("GA: pageview ", location.pathname);
      ReactGA.default.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location, analyticsEnabled]);
  return (
    <CookieBanner
      onAccept={handleAcceptCookie}
      onDecline={handleDeclineCookie}
    />
  );
};

export default Analytics;
