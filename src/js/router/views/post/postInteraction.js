import { deleteComment, deletePost } from "../../../api/post/delete.js";
import { like } from "../../../api/post/reaction.js";
import { submitComment } from "../../../api/post/comment.js";
import { readProfile } from "../../../api/profile/read.js";
import {
  createSingleCommentHTML,
  createPostInputSection,
  createPostReply,
} from "./postGenerate.js";

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
      });
      const editBtn = post.querySelector(".edit");
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

  const resetInputBox = (postId) => {
    const postEl = document.getElementById(postId);
    if (!postEl) return;

    const inputWrapper = postEl.querySelector(".input-wrapper");
    if (!inputWrapper) return;

    inputWrapper.innerHTML = createPostInputSection("");
    handleSubmitCommentButtons();
  };

  const handleSubmitReplyButtons = () => {
    const replyToDisplay = document.querySelectorAll(".reply-to");
    replyToDisplay.forEach((button) => {
      if (button.dataset.bound === "true") return;

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

        const submitBtn = inputWrapper.querySelector("#submit-post-comment");
        const commentInput = inputWrapper.querySelector(".comment-input");
        submitBtn.dataset.bound = "true";
        hideReplyingBtn();

        submitBtn.addEventListener("click", async (event) => {
          event.preventDefault();

          const commentText = commentInput.value.trim();
          if (!commentText) return;

          const isReplying =
            inputWrapper.querySelector(".display-replying") !== null;

          const newComment = await submitComment(
            postId,
            commentText,
            isReplying ? commentId : null
          );
          if (!newComment) return;

          const profile = await readProfile(newComment.data.owner);
          if (!profile) return;

          const commentData = {
            id: newComment.data.id,
            body: newComment.data.body,
            created: newComment.data.created,
            replyToId: isReplying ? commentId : null,
            postId: postId,
            author: {
              name: profile.data.name,
              email: profile.data.email,
              avatar: {
                url:
                  profile.data.avatar.url || `${import.meta.env.BASE_URL}images/no_img.png`,
                alt: profile.data.avatar.alt || "Profile Image",
              },
            },
          };
          if (isReplying) {
            const replySection = button
              .closest(".comment-body")
              .querySelector(".reply-section");

            const allReplies = [commentData];
            const newReplyHTML = createPostReply(allReplies, allReplies);
            const temp = document.createElement("div");
            temp.innerHTML = newReplyHTML.trim();
            replySection.appendChild(temp.firstElementChild);

            const replyDisplay =
              inputWrapper.querySelector(".display-replying");
            if (replyDisplay) replyDisplay.remove();
          } else {
            const commentSection = button
              .closest(".post")
              .querySelector(".comment-section");

            commentSection.appendChild(temp.firstElementChild);
          }

          postInteraction();
          commentInput.value = "";
          resetInputBox(postId);
          handleSubmitReplyButtons();
          handleCommentOptions();
          handleDeleteCommentButtons();
        });
      });
      button.dataset.bound = "true";
    });
  };

  const handleSubmitCommentButtons = () => {
    const submitCommentButtons = document.querySelectorAll(
      "#submit-post-comment.top-submit"
    );
  
    submitCommentButtons.forEach((button) => {
      if (button.dataset.bound === "true") return;
  
      button.addEventListener("click", async (event) => {
        event.preventDefault();
  
        const postEl = button.closest(".post");
        if (!postEl) return;
  
        const inputWrapper = postEl.querySelector(".input-wrapper");
        if (!inputWrapper) return;
  
        const commentInput = inputWrapper.querySelector(".comment-input");
        if (!commentInput) return;
  
        const commentText = commentInput.value.trim();
        if (!commentText) return;
  
        const replyingToBox = inputWrapper.querySelector(".display-replying");
        if (replyingToBox) replyingToBox.remove();
  
        const postId = postEl.id;
  
        const newComment = await submitComment(postId, commentText);
        if (!newComment) return;
  
        const profile = await readProfile(newComment.data.owner);
        if (!profile) return;
  
        const commentData = {
          id: newComment.data.id,
          body: newComment.data.body,
          created: newComment.data.created,
          replyToId: null,
          postId: postId,
          author: {
            name: profile.data.name,
            email: profile.data.email,
            avatar: {
              url: profile.data.avatar.url || `${import.meta.env.BASE_URL}images/no_img.png`,
              alt: profile.data.avatar.alt || "Profile Image",
            },
          },
        };
  
        const commentSection = postEl.querySelector(".comment-section");
        const newCommentHTML = createSingleCommentHTML(commentData, []);
        const temp = document.createElement("div");
        temp.innerHTML = newCommentHTML.trim();
  
        Array.from(temp.children).forEach((el) => commentSection.appendChild(el));
  
        handleCommentOptions();
        handleDeleteCommentButtons();
        handleSubmitCommentButtons(); //
  
        commentInput.value = "";
        resetInputBox(postId);

      });
  
      button.dataset.bound = "true";
    });
  };
  

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

  const handleCommentOptions = () => {
    const commentOptions = document.querySelectorAll(".option-btn");
    commentOptions.forEach((button) => {
      if (button.dataset.bound === "true") return;
  
      button.addEventListener("click", (event) => {
        event.preventDefault();
      
        document.querySelectorAll(".option-btn-wrapper").forEach((w) => {
          w.style.display = "none";
        });
      
        const wrapper =
          button.closest(".reply-option")?.querySelector(".option-btn-wrapper") ||
          button.closest(".comment-option")?.querySelector(".option-btn-wrapper");
      
        if (wrapper) wrapper.style.display = "flex";
      });
      
  
      button.dataset.bound = "true";
    });
  };
  
  const handleDeleteCommentButtons = () => {
    const deleteCommentButtons = document.querySelectorAll(".comment-delete");
    deleteCommentButtons.forEach((button) => {
      if (button.dataset.bound === "true") return;

      button.addEventListener("click", async (event) => {
        event.preventDefault();
        const commentID = button.closest(".author-name-target").id;
        const postID = button.closest(".post").id;
        const targetedComment = button.closest(".author-name-target");
        const confirmed = confirm("Delete this comment?");
        if (!confirmed) return;

        const commentDeleted = deleteComment(postID, commentID);
        if (!commentDeleted) return;

        targetedComment.remove();
      });

      button.dataset.bound = "true";
    });
  };

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

  const handlePostImageClick = () => {
    const postDirect = document.querySelectorAll(".post-image");
    postDirect.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const postId = button.closest(".post").id;
        window.location.href = `../posts/view.html?id=${postId}`;
      });
    });
  };

  const hideReplyingBtn = () => {
    const replyDisplayBtn = document.querySelector(".close-reply-display");
    if (!replyDisplayBtn || replyDisplayBtn.dataset.bound === "true") return;
  
    replyDisplayBtn.addEventListener("click", (event) => {
      event.preventDefault();
  
      const replyDisplay = replyDisplayBtn.closest(".display-replying");
      if (replyDisplay) {
        const postId = replyDisplay.closest(".post").id;
        resetInputBox(postId);
      }
    });
  
    replyDisplayBtn.dataset.bound = "true"; 
  };
  

const handleOutsideClick = () => {
    document.addEventListener("click", (event) => {
        const isOptionButton = event.target.closest(".option-btn");
        const isWrapper = event.target.closest(".option-btn-wrapper");
    
        if (!isOptionButton && !isWrapper) {
            document.querySelectorAll(".option-btn-wrapper").forEach((wrapper) => {
                wrapper.style.display = "none";
            });
        }
    });
};

  

  handleEditPost();
  handleSubmitReplyButtons();
  handleSubmitCommentButtons();
  handleReactionButtons();
  handleCommentOptions();
  handleDeleteCommentButtons();
  handleProfileUsernameClick();
  handlePostImageClick();
  handleOutsideClick();

};
