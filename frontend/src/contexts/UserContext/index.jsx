import { getUser } from "@/services/authService";
import { message } from "antd";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const data = await getUser();

        if (data) setUser(data);
      } catch (error) {
        message.error(error || "Có lỗi xảy ra, vui lòng thử lại sau!");
      } finally {
        setLoading(false);
      }
    })();
  }, [trigger]);

  const values = {
    user,
    setUser,
    loading,
    setTrigger,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
