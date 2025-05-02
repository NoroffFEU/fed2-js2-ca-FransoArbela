import { API_SOCIAL_PROFILES, API_KEY } from "../constants";

export async function toFollow(username, followHandle) {
  try {
    const response = await fetch(
      `${API_SOCIAL_PROFILES}/${username}/${followHandle}`,
      {
        method: "PUT",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "X-Noroff-API-Key": `${API_KEY}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Follow action failed");
    }
    window.location.reload();
  } catch (error) {
    console.error("Error following user:", error);
  }
}
