import React from "react";

function CookieText() {
  return (
    <div className="w-[70%] prose">
      <h1>Cookie Policy</h1>
      <p>
        The Service may utilize "cookies", which are small text files placed on
        your computer or device. We may also use pixel tags, web beacons and
        other similar technologies.
      </p>
      <p>
        Such devices are used to help analyze our web page flow, customize our
        services, optimize our user interfaces, measure promotional
        effectiveness, and promote trust and safety.
      </p>
      <p>
        With these devices, we may collect data such as the identity of the
        applicable internet service provider, the user's IP address of his or
        her terminal device, the type of browser software and operating system
        in use, the date and time of site access, the website address, if any,
        from which the user linked to the Website, and other similar
        traffic-related information. We may also aggregate such information with
        similar data collected from other users and disclose such aggregate
        information to third parties.
      </p>
      <p>
        Certain features are only available through the use of cookies, and
        generally we need to use these essential cookies to help identify return
        visitors to this Service.
      </p>
      <p>
        You are always free to decline Segment Anything cookies via your browser
        settings, although doing so may interfere with your use of the Service.
        To learn more about cookies, please visit{" "}
        <a className="underline" href="allaboutcookies.org.">
          allaboutcookies.org.
        </a>
      </p>
    </div>
  );
}

export default CookieText;
