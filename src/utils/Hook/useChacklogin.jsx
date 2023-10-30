import { useEffect, useState } from "react";
import userData from "../../data/db.json";
import { useNavigate } from "react-router-dom";

export const useChacklogin = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const func = async () => {
      const email = await localStorage.getItem("email");
      const password = await localStorage.getItem("password");
      if (userData.email === email && userData.password === password) {
        setLogin(true);
        navigate("/");
      } else {
        navigate("/login");
      }
    };
    func();
  }, []);
  return [login];
};
