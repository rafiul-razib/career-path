import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.creat({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      console.log("error tracked in the interceptor", error.response);
      if (error.response.status == 401 || error.response.status == 403) {
        console.log("log out the user");
        signOut()
          .then(() => {
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
