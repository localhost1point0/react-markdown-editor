import { useEffect } from "react";

const useMetaData = ({ title, description, author, image }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    // let metaDescription = document.querySelector('meta[name="description"]');
    // if (!metaDescription) {
    //   metaDescription = document.createElement("meta");
    //   metaDescription.setAttribute("name", "description");
    //   document.head.appendChild(metaDescription);
    // }
    // metaDescription.setAttribute("content", description);

    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    let metaOgDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    if (!metaOgTitle) {
      metaOgTitle = document.createElement("meta");
      metaOgTitle.setAttribute("property", "og:title");
      document.head.appendChild(metaOgTitle);
    }

    if (!metaOgDescription) {
      metaOgDescription = document.createElement("meta");
      metaOgDescription.setAttribute("property", "og:description");
      document.head.appendChild(metaOgDescription);
    }

    metaOgTitle.setAttribute("content", title);
    metaOgDescription.setAttribute("content", description);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, author, image]);
};

export default useMetaData;
