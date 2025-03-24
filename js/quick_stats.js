async function fetchGitHubStats() {
  // Get DOM elements
  const repoElement = document.getElementById("repo-count");
  const starElement = document.getElementById("star-count");
  const commitElement = document.getElementById("commit-count");
  const followerElement = document.getElementById("follower-count");

  // Check if elements exist
  if (!repoElement || !starElement || !commitElement || !followerElement) {
    console.error("One or more DOM elements not found");
    return;
  }

  // Set loading states
  repoElement.textContent = "Loading...";
  starElement.textContent = "Loading...";
  commitElement.textContent = "Loading...";
  followerElement.textContent = "Loading...";

  try {
    // Fetch user data (followers and public repos count)
    const userResponse = await fetch("https://api.github.com/users/nfaltir");
    if (!userResponse.ok) throw new Error("Failed to fetch user data");
    const userData = await userResponse.json();

    // Fetch repositories (for repo count and stars)
    const reposResponse = await fetch(
      "https://api.github.com/users/nfaltir/repos"
    );
    if (!reposResponse.ok) throw new Error("Failed to fetch repos");
    const repos = await reposResponse.json();

    // Calculate metrics
    const repoCount = repos.length; // Number of public repositories
    const starCount = repos.reduce(
      (total, repo) => total + repo.stargazers_count,
      0
    ); // Total stars across repos
    const followerCount = userData.followers; // Number of followers

    // Commits approximation (Note: Exact total commits requires per-repo fetches)
    // For simplicity, we'll indicate this as unavailable or use a placeholder
    const commitCount = "N/A"; // Placeholder; see notes below

    // Update DOM
    repoElement.textContent = repoCount;
    starElement.textContent = starCount;
    commitElement.textContent = commitCount;
    followerElement.textContent = followerCount;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    repoElement.textContent = "Error";
    starElement.textContent = "Error";
    commitElement.textContent = "Error";
    followerElement.textContent = "Error";
  }
}

// Run on page load
window.onload = fetchGitHubStats;
