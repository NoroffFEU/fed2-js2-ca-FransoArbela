import { API_SOCIAL_POSTS, API_KEY } from "../constants";

export async function searchPosts(query) {
    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/search?limit=12&_author=true&q=${query}`, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "X-Noroff-API-Key": `${API_KEY}`,
        },
        });
    
        if (!response.ok) {
        throw new Error("Failed to fetch posts");
        }
    
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}