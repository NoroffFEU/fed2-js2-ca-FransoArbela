import { API_SOCIAL_POSTS, API_KEY } from "../constants";

export async function createPost({ title, body, tags, media }) {
    console.log("Creating post with data:", { title, body, tags, media });
    try {
        const response = await fetch(`${API_SOCIAL_POSTS}`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "X-Noroff-API-Key": `${API_KEY}`,
            },
            body: JSON.stringify({
                title,
                body,
                tags,
                media,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to create post");
        }

        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
}
