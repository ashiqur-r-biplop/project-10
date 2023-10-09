import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `ToyTrove | ${title}`;
  }, [title]);
};

export default useTitle;
