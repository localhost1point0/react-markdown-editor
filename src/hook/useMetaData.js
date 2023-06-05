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

    // OG: meta

    let metaOGTitle = document.querySelector('meta[property="og:title"]');
    if (!metaOGTitle) {
      metaOGTitle = document.createElement("meta");
      metaOGTitle.setAttribute("property", "og:title");
      document.head.appendChild(metaOGTitle);
    }
    metaOGTitle.setAttribute("content", title);

    let metaOGDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (!metaOGDescription) {
      metaOGDescription = document.createElement("meta");
      metaOGDescription.setAttribute("property", "og:description");
      document.head.appendChild(metaOGDescription);
    }
    metaOGDescription.setAttribute("content", description);

    let metaOGType = document.querySelector('meta[property="og:type"]');
    if (!metaOGType) {
      metaOGType = document.createElement("meta");
      metaOGType.setAttribute("property", "og:type");
      document.head.appendChild(metaOGType);
    }
    metaOGType.setAttribute("content", "article");

    let metaOGUrl = document.querySelector('meta[property="og:url"]');
    if (!metaOGUrl) {
      metaOGUrl = document.createElement("meta");
      metaOGUrl.setAttribute("property", "og:url");
      document.head.appendChild(metaOGUrl);
    }
    metaOGUrl.setAttribute(
      "content",
      "https://saragam443.github.io/react-markdown-editor"
    );

    let metaOGSite_name = document.querySelector(
      'meta[property="og:site_name"]'
    );
    if (!metaOGSite_name) {
      metaOGSite_name = document.createElement("meta");
      metaOGSite_name.setAttribute("property", "og:site_name");
      document.head.appendChild(metaOGSite_name);
    }
    metaOGSite_name.setAttribute("content", "saragam's blog");

    let metaOGImage = document.querySelector('meta[property="og:image"]');
    if (!metaOGImage) {
      metaOGImage = document.createElement("meta");
      metaOGImage.setAttribute("property", "og:image");
      document.head.appendChild(metaOGImage);
    }
    metaOGImage.setAttribute(
      "content",
      "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/markdown-512.png"
    );

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, author, image]);
};

export default useMetaData;
