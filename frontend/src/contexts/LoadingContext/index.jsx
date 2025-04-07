import Loading from "@/components/Loading";
import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const values = { loading, setLoading };

  return (
    <LoadingContext.Provider value={values}>
      {children}
      {loading && <Loading />}
    </LoadingContext.Provider>
  );
};
