
export  async function loadHeader() {
  // Prevent duplicate nav
  if (document.getElementById('navigation-bar')) return;

  // Get current path (like "/feed.html")
  const path = window.location.pathname;
console.log(path)
  // Default links
  let extra = '';

  // Dynamic content based on current page
  switch (path) {
    case '/posts/feed.html':
      extra = `
        <a href="posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;
      break;
      case '/profile/me.html':
      extra = `
        <a href="/posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;
      break;
      case '/posts/view.html':
      extra = `
        <a href="/posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;
      break;
    case '/profile/user.html':
      extra = `
        <a href="/posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;
      break;
    default:
      extra = `
      `;
  }

  // Create and insert the nav
  const nav = document.createElement('div');
  nav.innerHTML = `
    <nav id="navigation-bar" class="p-4 bg-gray-900 text-white flex items-center justify-between fixed bottom-0 w-full">

      <div class="bg-red-900 text-white w-full max-w-screen-lg flex items-center justify-between m-auto">
        <div class="flex items-center gap-4 bg-blue-300 w-fit m-auto">
         ${extra}
        </div>
      </div>
    </nav>
  `;
  document.body.appendChild(nav);
}
