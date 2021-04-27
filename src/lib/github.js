const fetchGithub = async (endpoint) => {
  const access_token = process.env.GITHUB_TOKEN;
  const url = `https://api.github.com/${endpoint}`;
  // TODO useSWR?
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `token ${access_token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });
  const data = await response.json();
  return data;
};

const readFileFromGithub = async (path) => {
  const file = await fetchGithub(path);
  const content = Buffer.from(file.content, "base64").toString("utf-8");
  return content;
};

export { fetchGithub, readFileFromGithub };
