import { useEffect } from "react";

const Preload = ({ imageURL }) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = imageURL;
    link.as = "image";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [imageURL]);

  return null;
};

export default Preload;