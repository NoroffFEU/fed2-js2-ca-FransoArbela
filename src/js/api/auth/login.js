import { loginListener } from "../../ui/global/loginListener";
import { API_BASE } from "../constants";
// import { getKey } from "./key";

export async function login(email, password) {

  const credentials = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    const token = data.data.accessToken;

const profile = JSON.stringify(data.data);

    localStorage.setItem("token", token);
    localStorage.setItem("profile", profile);
    // getKey();
    loginListener()
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// this do the actual function