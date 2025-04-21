import { API_AUTH_REGISTER } from "../constants";

export async function register({
  name,
  email,
  password,
  bio,
  banner,
  avatar,
}) {
const payload = {
  name,
  email,
  password,
  bio,
  banner,
  avatar,
}
console.log("Payload for registration:", payload);
  try {
    const response = await fetch(`${API_AUTH_REGISTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload
      ),
    });
    if (!response.ok) {
      throw new Error("Registration failed");
    }
    const data = await response.json();
    console.log("Registration successful:", data);
    return data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
}
