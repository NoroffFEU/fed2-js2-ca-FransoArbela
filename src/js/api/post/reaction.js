import { API_KEY, API_SOCIAL_POSTS } from "../constants";


export async function like(id, symbol) {

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}/react/${symbol}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "X-Noroff-API-Key": `${API_KEY}`,
            },
        });
        if (!response.ok) {
            throw new Error("Like failed");
        } console.log("Like successful", response);
    } catch (error) {
        console.error(error);
    }
}
