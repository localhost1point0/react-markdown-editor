import { useEffect } from "react";

const useMetaData = ({ title, description, author, image }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement("meta");
      metaAuthor.setAttribute("name", "author");
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute("content", author);

    let metaImage = document.querySelector('meta[name="image"]');
    if (!metaImage) {
      metaImage = document.createElement("meta");
      metaImage.setAttribute("name", "image");
      document.head.appendChild(metaImage);
    }
    metaImage.setAttribute("content", image);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, author, image]);
};

export default useMetaData;
