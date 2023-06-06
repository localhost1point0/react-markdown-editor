import { useEffect } from "react";

const useMetaData = ({ title, description, author, image }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"][property="og:description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("property", "og:description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Set meta title
    let metaTitle = document.querySelector('meta[name="title"][property="og:title"]');
    if (!metaTitle) {
      metaTitle = document.createElement("meta");
      metaTitle.setAttribute("name", "title");
      metaTitle.setAttribute("property", "og:title");
      document.head.appendChild(metaTitle);
    }
    metaTitle.setAttribute("content", title);

    // Set meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement("meta");
      metaAuthor.setAttribute("name", "author");
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute("content", author);

    // Set meta image
    let metaImage = document.querySelector('meta[name="image"][property="og:image"]');
    if (!metaImage) {
      metaImage = document.createElement("meta");
      metaImage.setAttribute("name", "image");
      metaImage.setAttribute("property", "og:image");
      document.head.appendChild(metaImage);
    }
    metaImage.setAttribute("content", image);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, author, image]);
};

export default useMetaData;
