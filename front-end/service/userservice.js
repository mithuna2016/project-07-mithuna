import http from "../http";

class UserDataService {
  getAll() {
    return http.get("/userDB");
  }}
  export default new UserDataService();