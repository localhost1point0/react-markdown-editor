import { useEffect } from "react";

const useMetaData = ({ title, description, author, image }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Set meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement("meta");
      metaAuthor.setAttribute("name", "author");
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute("content", author);

    // Set og:title
    let metaOGTitle = document.querySelector('meta[property="og:title"]');
    if (!metaOGTitle) {
      metaOGTitle = document.createElement("meta");
      metaOGTitle.setAttribute("property", "og:title");
      document.head.appendChild(metaOGTitle);
    }
    metaOGTitle.setAttribute("content", title);

    // Set og:description
    let metaOGDescription = document.querySelector('meta[property="og:description"]');
    if (!metaOGDescription) {
      metaOGDescription = document.createElement("meta");
      metaOGDescription.setAttribute("property", "og:description");
      document.head.appendChild(metaOGDescription);
    }
    metaOGDescription.setAttribute("content", description);

    // Set og:author
    let metaOGAuthor = document.querySelector('meta[property="og:author"]');
    if (!metaOGAuthor) {
      metaOGAuthor = document.createElement("meta");
      metaOGAuthor.setAttribute("property", "og:author");
      document.head.appendChild(metaOGAuthor);
    }
    metaOGAuthor.setAttribute("content", author);

    // Set og:image
    let metaOGImage = document.querySelector('meta[property="og:image"]');
    if (!metaOGImage) {
      metaOGImage = document.createElement("meta");
      metaOGImage.setAttribute("property", "og:image");
      document.head.appendChild(metaOGImage);
    }
    metaOGImage.setAttribute("content", image);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, author, image]);
};

export default useMetaData;
