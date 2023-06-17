import { useEffect } from "react";

const useMetaData = ({ title, description, author }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Meta Author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement("meta");
      metaAuthor.setAttribute("name", "author");
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute("content", author);

    // Open Graph (OG) Meta Tags
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

    let metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (!metaOgUrl) {
      metaOgUrl = document.createElement("meta");
      metaOgUrl.setAttribute("property", "og:url");
      document.head.appendChild(metaOgUrl);
    }
    metaOgUrl.setAttribute(
      "content",
      "https://saragam443.github.io/react-markdown-editor/"
    );

    // Twitter Meta Tags
    let metaTwitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!metaTwitterCard) {
      metaTwitterCard = document.createElement("meta");
      metaTwitterCard.setAttribute("name", "twitter:card");
      document.head.appendChild(metaTwitterCard);
    }
    metaTwitterCard.setAttribute("content", "summary");

    let metaTwitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!metaTwitterTitle) {
      metaTwitterTitle = document.createElement("meta");
      metaTwitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(metaTwitterTitle);
    }
    metaTwitterTitle.setAttribute("content", title);

    let metaTwitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    if (!metaTwitterDescription) {
      metaTwitterDescription = document.createElement("meta");
      metaTwitterDescription.setAttribute("name", "twitter:description");
      document.head.appendChild(metaTwitterDescription);
    }
    metaTwitterDescription.setAttribute("content", description);

    let metaTwitterSite = document.querySelector('meta[name="twitter:site"]');
    if (!metaTwitterSite) {
      metaTwitterSite = document.createElement("meta");
      metaTwitterSite.setAttribute("name", "twitter:site");
      document.head.appendChild(metaTwitterSite);
    }
    metaTwitterSite.setAttribute("content", "@localhost1dot0");

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, author]);
};

export default useMetaData;
