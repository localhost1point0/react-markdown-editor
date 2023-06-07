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

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, author, image]);
};

export default useMetaData;
