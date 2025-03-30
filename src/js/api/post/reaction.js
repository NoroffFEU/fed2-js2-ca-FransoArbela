import { API_KEY, API_SOCIAL_POSTS } from "../constants";

export async function like(){
    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/8029/react/👍`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
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




export async function comment(){
    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/8029/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },

        });
        if (!response.ok) {
            throw new Error("Like failed");
        } console.log("Like successful", response);
    } catch (error) {
        console.error(error);
    }
}