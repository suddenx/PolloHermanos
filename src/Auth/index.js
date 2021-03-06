import axios from "axios";
export function storeCurrentUser(token) {
  localStorage.setItem("token", token);
}
export function getCurrentUser() {
  const user = localStorage.getItem("token");
  return user;
}
export function clearCurrentUser() {
  localStorage.removeItem("token");
}

export async function login({ username, password }) {
  try {
    const data = await axios.post("api/users/login", {
      username,
      password,
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function register({ username, password, name, email, location }) {
  try {
    const data = await axios.post("api/users/register", {
      username,
      password,
      name,
      email,
      location,
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

// export async function getDaProducts() {
//   try {
//     const { data } = await axios.get("/api/products");
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
