import { API_SOCIAL_PROFILES, API_KEY } from "../constants";

// this for reading a profile
export async function readProfile(username) {
try {
    const response = await fetch(
      `${API_SOCIAL_PROFILES}/${username}`
    , {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "X-Noroff-API-Key": `${API_KEY}`,
        },
    });
    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error("readProfile error:", error);
}
}
// this for searching for profiles
export async function readProfiles(limit, page) {}
