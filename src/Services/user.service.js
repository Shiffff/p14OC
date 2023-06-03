import Axios from "./caller.service";

let getAllEmployees = () => {
  return Axios.get("/user/allusers");
};
export const userService = {
  getAllEmployees,
};
