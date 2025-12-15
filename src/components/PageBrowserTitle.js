import { useEffect } from "react";

const PageBrowserTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default PageBrowserTitle;
