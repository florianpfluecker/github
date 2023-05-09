const repoOwner = "florianpfluecker";
const repoName = "issue-repo";
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`;

const issueData = {
  title: "New issue title",
  body: "New issue description",
  labels: ["bug"],
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${"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"}`,
  },
  body: JSON.stringify(issueData),
};

fetch(apiUrl, options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
