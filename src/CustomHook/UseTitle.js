import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Jewelry Zone | ${title}`;
  }, [title]);
};

export default useTitle;
