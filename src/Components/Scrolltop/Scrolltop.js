

// // ScrollToTop.js
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function ScrollToTop({Children}) {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

// //   return null; // No need to render anything for this component
//   return Children.map(Children, child => child);; // No need to render anything for this component
// }

// export default ScrollToTop;

import { useEffect } from "react";

import { useLocation} from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    //   behavior: "smooth",
    //   behavior: "instant", // Optional if you want to skip the scrolling animation
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}