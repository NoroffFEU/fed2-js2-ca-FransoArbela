import { API_KEY, API_SOCIAL_POSTS, API_SOCIAL_PROFILES } from "../constants";

// fetching post by id
export async function readPost(id = 8029) {
    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
             "X-Noroff-API-Key": `${API_KEY}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("readPosts error:", error);
      }
}

// fetching all posts but with limit, page and tag
export async function readPosts(limit, page, tag) {

try {
    const response = await fetch(`${API_SOCIAL_POSTS}?limit=${limit}&page=${page}&tag=${tag}&_author=true&_reactions=true&_comments=true`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "X-Noroff-API-Key": `${API_KEY}`,
         },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("readPosts error:", error);
  }
}

// fetching posts by username
export async function readPostsByUser(username = "Samal", limit = 12, page = 1, tag) {
    try {
        const response = await fetch(`${API_SOCIAL_PROFILES}/${username}/posts?limit=${limit}&page=${page}&tag=${tag}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "X-Noroff-API-Key": `${API_KEY}`,
             },
          }
        );
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("readPosts error:", error);
      }
}
