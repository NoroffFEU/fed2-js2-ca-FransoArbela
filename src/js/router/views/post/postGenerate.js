
/////////////////////////////////////////////////////

export const createPostInputSection = (replyingTo = "") => {
  const isReply = replyingTo !== "";
  const replyingSpan = isReply
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
      <button id="submit-post-comment" class="submit ${
        isReply ? "reply-submit" : "top-submit"
      }">submit</button>
    </div>
  `;
};

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

export const createSingleCommentHTML = (comment, allReplies) => {
  const deleteButtonRender = () => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    return profile?.name === comment.author.name
      ? `<button class="comment-delete">delete</button>`
      : "";
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
          <p class="comment-text">${comment.body || ""}</p>
          <div class="comment-action">
            <p class="posted-time">${createdTimeAt(comment.created)}</p>
            <button class="like">like</button>
            <button class="reply-to">reply</button>
            <p class="likes">5 likes</p>
          </div>
        </div>
        <div class="reply-section">
        ${createPostReply(getAllRepliesFlat(comment.id, allReplies), allReplies)}      
        </div>
      </div>
    </div>
  `;
};

const getAllRepliesFlat = (commentId, allReplies) => {
  const result = [];

  const findReplies = (id) => {
    allReplies.forEach((reply) => {
      if (reply.replyToId === id) {
        result.push(reply);
        findReplies(reply.id);
      }
    });
  };

  findReplies(commentId);
  return result;
};

const createPostComments = (post) => {
  const allReplies = post.comments || [];

  const topLevelComments = allReplies.filter(
    (comment) => comment.replyToId === null
  );

  const commentHTML = topLevelComments
    .map((comment) => createSingleCommentHTML(comment, allReplies))
    .join("");

  return commentHTML;
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

export const createPostReply = (replies, allReplies) => {
  const getReplyTargetName = (replyToId) => {
    const target = allReplies.find((c) => c.id === replyToId);
    return target ? target.author.name : "unknown";
  };

  const deleteButtonRender = (authorName) => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    return profile?.name === authorName
      ? `<button class="comment-delete">delete</button>`
      : "";
  };

  const replyHTML = replies
    .map((reply) => {
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
                  ${deleteButtonRender(reply.author.name)}
                </div>
              </div>
            </div>
            <p class="reply-text">
              <span class="mention">@${getReplyTargetName(
                reply.replyToId
              )}</span>
              ${reply.body || ""}
            </p>
            <div class="reply-action">
              <p class="posted-time">${createdTimeAt(reply.created)}</p>
              <button class="like">like</button>
              <button class="reply-to">reply</button>
              <p class="likes">5 likes</p>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  return replyHTML;
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

export const postHTML = (post) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
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

  return wrapper.firstElementChild;
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
