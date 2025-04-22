import { deleteComment, deletePost } from "../../../api/post/delete.js";
import { like } from "../../../api/post/reaction.js";
import { submitComment } from "../../../api/post/comment.js";

export const postInteraction = () => {
  const handleEditPost = () => {
    const profileWrapper = document.querySelectorAll(".profile-wrapper");
    const addEditBtn = () => {
      const profileJSON = localStorage.getItem("profile");
      const profile = JSON.parse(profileJSON);
      const authorizedUserName = profile.name;
      const urlParams = new URLSearchParams(window.location.search);
      const profileName = urlParams.get("username");

      if (authorizedUserName === profileName) {
        return `
                <button class="profile-edit">⋯</button>
                <div class="profile-edit-wrapper">
                  <button class="edit">edit</button>
                  <button class="delete">delete</button>
                </div>
                `;
      }
      return "";

    };
    profileWrapper.forEach((post) => {
      const profileEdit = post.querySelector(".profile-edit");
      profileEdit.innerHTML = `${addEditBtn()}`;
      const editWrapper = post.querySelector(".profile-edit-wrapper");
      profileEdit.addEventListener("click", (event) => {
        event.preventDefault();
        if (editWrapper.style.display === "flex") {
          editWrapper.style.display = "none";
        } else {
          editWrapper.style.display = "flex";
        }
      })
      const editBtn = post.querySelector(".edit")
      const deleteBtn = post.querySelector(".delete");

      if (editBtn) {
        editBtn.addEventListener("click", (event) => {
          event.preventDefault();
          const postId = post.closest(".post").id;
          window.location.href = `../posts/update.html?id=${postId}`;
        });
      }
      
      if (deleteBtn) {
        deleteBtn.addEventListener("click", (event) => {
          event.preventDefault();
          const postId = post.closest(".post").id;
          const confirmed = confirm("Delete this post?");
          if (!confirmed) return;
      
          deletePost(postId);
          window.location.href = "../posts/feed.html";
        });
      }
    });
  };

  handleEditPost();

  const handleSubmitCommentButtons = () => {
    const submitCommentButtons = document.querySelectorAll(
      "#submit-post-comment"
    );
    submitCommentButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const postId = button.closest(".post").id;
        const commentInput = button
          .closest(".input-wrapper")
          .querySelector(".comment-input");
        const commentText = commentInput.value.trim();
        if (!commentText) return;
        submitComment(postId, commentText);
        commentInput.value = "";
      });
    });
  };

  handleSubmitCommentButtons();

  const handleReplyToDisplay = () => {
    const replyToDisplay = document.querySelectorAll(".reply-to");
    replyToDisplay.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();

        const postId = button.closest(".post").id;
        const commentId = button.closest(".author-name-target").id;
        const authorName = button
          .closest(".author-name-target")
          .querySelector(".username").textContent;
        const inputWrapper = button
          .closest(".post")
          .querySelector(".input-wrapper");

        inputWrapper.innerHTML = createPostInputSection(authorName);

        inputWrapper.dataset.replyTo = commentId;

        const submitBtn = inputWrapper.querySelector("#submit-post-comment");
        const commentInput = inputWrapper.querySelector(".comment-input");

        submitBtn.addEventListener("click", (event) => {
          event.preventDefault();

          const commentText = commentInput.value.trim();
          if (!commentText) return;
          submitComment(postId, commentText, commentId);

          inputWrapper.innerHTML = createPostInputSection();
        });
      });
    });
  };
  handleReplyToDisplay();

  const handleReactionButtons = () => {
    const reactionBtns = document.querySelectorAll(".reaction-btns");
    reactionBtns.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        const reactionContainer = button
          .closest(".like-comments-wrapper")
          .querySelector(".reaction-container");
        reactionContainer.style.display = "flex";

        const reactionBtn = button.querySelectorAll(".reaction-btn");
        reactionBtn.forEach((btn) => {
          btn.addEventListener("click", (event) => {
            event.preventDefault();
            const postId = button.closest(".post").id;
            const reactionType = event.target.dataset.reactionType;
            like(postId, reactionType);
          });
        });
      });
      button.addEventListener("mouseleave", () => {
        const reactionContainer = button
          .closest(".like-comments-wrapper")
          .querySelector(".reaction-container");
        reactionContainer.style.display = "none";
      });
    });
  };

  handleReactionButtons();

  const handleCommentOptions = () => {
    const commentOptions = document.querySelectorAll(".option-btn");
    commentOptions.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const optionBtnWrapper = button
          .closest(".user-Info")
          .querySelector(".option-btn-wrapper");
        if (optionBtnWrapper.style.display === "flex") {
          optionBtnWrapper.style.display = "none";
        } else {
          optionBtnWrapper.style.display = "flex";
        }
      });
    });
  };

  handleCommentOptions();

  const handleDeleteCommentButtons = () => {
    const deleteCommentButtons = document.querySelectorAll(".comment-delete");
    deleteCommentButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const commentID = button.closest(".author-name-target").id;
        const postID = button.closest(".post").id;

        const confirmed = confirm("Delete this comment?");
        if (!confirmed) return;

        deleteComment(postID, commentID);
      });
    });
  };

  handleDeleteCommentButtons();

  const closeReplyButton = document.querySelectorAll(".close-reply-display");
  closeReplyButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });

  const handleProfileUsernameClick = () => {
    const profileUsername = document.querySelectorAll(".username");
    profileUsername.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const username = button
          .closest(".post")
          .querySelector(".username").textContent;
        window.location.href = `../profile/user.html?username=${username}`;
      });
    });
  };

  handleProfileUsernameClick();
  const postDirect = document.querySelectorAll(".post-image");
  postDirect.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const postId = button.closest(".post").id;
      window.location.href = `../posts/view.html?id=${postId}`;
    });
  });
};

const createPostInputSection = (replyingTo = "") => {
  const replyingSpan = replyingTo
    ? `
      <div class="display-replying">
      <button class="close-reply-display">⨉</button>
      <p>replying to: @${replyingTo}</p>
      </div>
      `
    : "";

  return `
      ${replyingSpan}
      <input class="comment-input" type="text" placeholder="Add a comment..." />
      <div class="submit-wrapper">
        <button id="submit-post-comment" class="submit">submit</button>
      </div>
    `;
};

export const generatePostHTML = (post) => {
  /**
   * Generates an HTML string for a post profile section.
   * 
   * @param {Object} post - The post object containing author details.
   * @param {Object} post.author - The author of the post.
   * @param {Object} post.author.avatar - The avatar object of the author.
   * @param {string} [post.author.avatar.url] - The URL of the author's avatar image.
   * @param {string} [post.author.avatar.alt] - The alt text for the author's avatar image.
   * @param {string} post.author.name - The name of the author.
   * @returns {string} An HTML string representing the post profile section.
   */
  const createPostProfile = (post) => {
    const postProfile = `
            <div class="profile-wrapper">
              <div class="profile">
              <img
                class="profile-image"
                src="${post.author.avatar || "src/assets/images/no_img.png"}"
                alt="${post.author.avatar.alt || "Profile Image"}"
              />
              <h3 class="username">${post.author.name}</h3>
                </div>
                <div class="profile-edit">
                </div>
            </div>
      `;

    return postProfile;
  };

  const createPostImage = (post) => {
    let imgSrc = post.media?.url || "../src/assets/images/no_img.png";
    let imgAlt = post.media?.alt || "Post Image";

    const postImgContainer = `
            <div class="post-image">
              <img src="${imgSrc}" alt="${imgAlt}" />
            </div>
      `;
    return postImgContainer;
  };

  /**
   * Generates an HTML string for a comment image container.
   *
   * @param {Object} post - The post object containing author details.
   * @param {Object} post.author - The author of the post.
   * @param {Object} post.author.avatar - The avatar object of the author.
   * @param {string} [post.author.avatar.url] - The URL of the author's avatar image.
   * @param {string} [post.author.avatar.alt] - The alt text for the author's avatar image.
   * @returns {string} An HTML string representing the comment image container.
   */
  const createCommentImage = (post) => {
    let imgSrc = post.author.avatar.url || "../src/assets/images/no_img.png";
    let imgAlt = post.author.avatar.alt || "Post Image";
    const postImgContainer = `
            <div class="post-image">
              <img src="${imgSrc}" alt="${imgAlt}" />
            </div>
      `;
    return postImgContainer;
  };

  
  const reactionAndCount = (post) => {
    const isComment = post.comments;
    const reactions = (post.reactions || []).map((r) => ({
      emoji: r?.symbol || "❓",
      count: r?.count || 0,
      reactors: r?.reactors || [],
    }));

    let hasReaction = "";
    let reactionDisplay = "";

    if (reactions.length === 0) {
      hasReaction = `<button><i class="fa-regular fa-heart"></i></button>`;
    } else {
      reactionDisplay = reactions
        .map((r) => `<span class="reaction-item">${r.count} ${r.emoji}</span>`)
        .join(" ");
    }

    if (post || isComment) {
      return `
        <div class="like-comments-wrapper">
          <div class="like-comments">
            <div class="reaction-btns">
              ${hasReaction}
              <div class="view-post-likes">
                ${reactionDisplay}
              </div>
              <div class="reaction-container">
                <button class="reaction-btn" data-reaction-type="👍">👍</button>
                <button class="reaction-btn" data-reaction-type="❤️">❤️</button>
                <button class="reaction-btn" data-reaction-type="😂">😂</button>
              </div>
            </div>
            <button class="commentsBtn">comments</button>
          </div>
          <div class="count-and-time">
            <div class="posted-time">${createdTimeAt(post.created)}</div>
          </div>
        </div>
      `;
    }
  };

  const createPostContent = (post) => {
    const postContent = `
                <p class="post-text">
                ${post.body || ""}
                </p>
      `;
    return postContent;
  };

  const createPostComments = (post) => {
    const replies = post.comments;

    const isNotReply = post.comments.filter((comment) => {
      return comment.replyToId === null;
    });

    const postComments = (isNotReply || [])
      .map((comment) => {
        const deleteButtonRender = () => {
          const profileJSON = localStorage.getItem("profile");
          const profile = JSON.parse(profileJSON);
          const authorizedUserName = profile.name;
          const profileName = comment.author.name;

          if (authorizedUserName === profileName) {
            return `<button class="comment-delete">delete</button>`;
          }
          return "";
        };

        return `
                <div class="author-name-target comment" id="${comment.id}">
                  <div class="comment-profile">
                    ${createCommentImage(comment)}
                  </div>
                  <div class="comment-body">
                    <div class="user-Info comment-username-wrapper">
                      <div class="comment-username">
                      <p class="username">${comment.author.name}</p>
                      </div>
                      <div class="comment-option">
                        <button class="option-btn">⋯</button>
                        <div class="option-btn-wrapper">
                          <button class="top-comment-edit">edit</button>
                          ${deleteButtonRender()}
                          </div>
                      </div>
                    </div>
                    <div class="comment-text-wrapper">
                      <p class="comment-text">
                        ${comment.body || ""}
                      </p>
                      <div class="comment-action">
                        <p class="posted-time">${createdTimeAt(
                          comment.created
                        )}</p>
                        <button class="like">like</button>
                        <button class="reply-to">reply</button>
                        <p class="likes">5 likes</p>
                      </div>
                    </div>
                    <div class="reply-section">
                    ${createPostReply(
                      replies.filter((reply) => reply.replyToId === comment.id)
                    )}
                    </div>
                  </div>
                </div>
        `;
      })
      .join("");
    return `<div class="post-comments">${postComments}</div>`;
  };

  /**
   * Creates an HTML string representation of a post reply.
   * @param {Object} post
   * @param {Object} post.author
   * @param {Object} post.author.avatar
   * @param {string} post.author.avatar.url
   * @param {string} post.body
   * @returns {string}
   */

  const createPostReply = (replies) => {
    const postComments = (replies || [])
      .map((reply) => {
        const deleteButtonRender = () => {
          const profileJSON = localStorage.getItem("profile");
          const profile = JSON.parse(profileJSON);
          const authorizedUserName = profile.name;
          const profileName = reply.author.name;
          if (authorizedUserName === profileName) {
            return `<button class="comment-delete">delete</button>`;
          }
          return "";
        };
        return `
         <div class="author-name-target reply" id="${reply.id}">
        <div class="reply-profile">
          ${createCommentImage(reply)}
        </div>
        <div class="reply-body">
          <div class="user-Info reply-username-wrapper">
            <div class="reply-username">
            <p class="username">${reply.author.name}</p>
            </div>
            <div class="reply-option">
              <button class="option-btn">...</button>
              <div class="option-btn-wrapper">
                <button class="comment-edit">edit</button>
                ${deleteButtonRender()}
              </div>
            </div>
          </div>
          <p class="reply-text">${reply.body || ""}</p>
          <div class="reply-action">
            <p class="posted-time">${createdTimeAt(reply.created)}</p>
              <button class="like">like</button>
              <button class="reply-to">reply</button>
              <p class="likes">5 likes</p>
            </div>       
        </div>
      </div>`;
      })
      .join("");
    return `<div class="post-comments">${postComments}</div>`;
  };

  const createdTimeAt = (isoString) => {
    const createdTime = new Date(isoString);
    const now = new Date();
    const diffMs = now - createdTime;

    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMins / 60);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m `;
    if (diffHours < 24) return `${diffHours}h `;

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d`;
  };

  const postHTML = `
    <div class="post" id="${post?.id}">
        ${createPostProfile(post)}
        ${createPostImage(post)}
        <div class="post-body">
          ${reactionAndCount(post)}
          <div class="post-text-wrapper">
            ${createPostContent(post)}
            </div>
            <div class="comment-section">
            ${createPostComments(post)}
            </div>
            <div class="input-wrapper">
            ${createPostInputSection("")}
          </div>
        </div>
    </div>
  `;
  return postHTML;
};

// Format post data for display
export function formatPostData(post) {
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    created: post.created,
    updated: post.updated,
    author: {
      name: post.author?.name ?? "Unknown",
      email: post.author?.email ?? "",
      bio: post.author?.bio ?? "",
      avatar: post.author?.avatar?.url ?? "",
      banner: post.author?.banner?.url ?? "",
    },
    media: {
      url: post.media?.url ?? "",
      alt: post.media?.alt ?? "",
    },
    tags: Array.isArray(post.tags) ? post.tags : [],
    reactions: Array.isArray(post.reactions) ? post.reactions : [],
    reactionCount: post._count?.reactions ?? 0,
    commentCount: post._count?.comments ?? 0,
    comments: Array.isArray(post.comments)
      ? post.comments.map((comment) => ({
          id: comment.id,
          body: comment.body,
          created: comment.created,
          replyToId: comment.replyToId ?? null,
          postId: post.id,
          author: {
            name: comment.author?.name ?? "Anonymous",
            email: comment.author?.email ?? "",
            bio: comment.author?.bio ?? "",
            avatar: {
              url: comment.author?.avatar?.url ?? "",
              alt: comment.author?.avatar?.alt ?? "",
            },
          },
          banner: {
            url: comment.author?.banner?.url ?? "",
            alt: comment.author?.banner?.alt ?? "",
          },
        }))
      : [],
  };
}

