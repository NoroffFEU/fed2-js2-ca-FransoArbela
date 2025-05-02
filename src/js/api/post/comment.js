import { API_SOCIAL_POSTS, API_KEY } from "../constants";

export async function submitComment(postId, commentBody, replyToId = null) {
  try {
    const payload = {
      body: commentBody,
    };

    if (replyToId) {
      payload.replyToId = Number(replyToId);
    }

    const response = await fetch(`${API_SOCIAL_POSTS}/${postId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "X-Noroff-API-Key": `${API_KEY}`,
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Comment submission failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
}
