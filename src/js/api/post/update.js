import { API_SOCIAL_POSTS, API_KEY } from "../constants";


export async function updatePost(id, { title, body, tags, media }) {
    try {
        const payload = {
        title,
        body,
        tags,
        };
    
        if (media) {
        payload.media = media;
        }
    
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "X-Noroff-API-Key": `${API_KEY}`,
        },
        body: JSON.stringify(payload),
        });
    
        if (!response.ok) {
        throw new Error("Post update failed");
        }
        location.reload();
    } catch (error) {
        console.error("Error updating post:", error);
    }
}
