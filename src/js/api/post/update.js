import { API_SOCIAL_POSTS, API_KEY} from "../../api/constants";

export async function editPost(id, body, title, tags, url, alt) {
  const payload = {
    title: title,
    body: body,
    tags: tags,
    media: {
      url: url,
      alt: alt,
    },
  };

  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "X-Noroff-API-Key": `${API_KEY}`,
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Post update failed");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error updating post:", error);
  }
}
