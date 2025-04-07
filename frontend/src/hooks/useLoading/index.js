import { LoadingContext } from "@/contexts/LoadingContext";
import { useContext } from "react";

const useLoading = () => {
  return useContext(LoadingContext);
};

export default useLoading;
