import { API_SOCIAL_POSTS } from "../../api/constants";
import { API_KEY } from "../../api/constants";


export async function deletePost(id) {
    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "X-Noroff-API-Key": `${API_KEY}`,
            },
        });
        if (!response.ok) {
            throw new Error("Post deletion failed");
        }
        location.reload(); 
    }
    catch (error) {
        console.error("Error deleting post:", error);
    }
}

export async function deleteComment(postId, commentId) {
    try {

        const response = await fetch(`${API_SOCIAL_POSTS}/${postId}/comment/${commentId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "X-Noroff-API-Key": `${API_KEY}`,
            },
        });
        if (!response.ok) {
            throw new Error("Comment deletion failed");
        }
        location.reload(); 
    }
    catch (error) {
        console.error("Error deleting comment:", error);
    }
}


