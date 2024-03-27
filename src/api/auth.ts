const fetchGitHubUser = async () => {
  // TODO: 수정 필요
  const response = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${localStorage.getItem("githubToken")}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub user");
  }
  return response.json();
};

export { fetchGitHubUser };
