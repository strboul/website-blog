const currentGitBranchName = require("current-git-branch");

module.exports = {
  env: {
    // Incremental Static Regeneration (ISR)
    ISR_REVALIDATE: 3600, // render every 1 hour

    CURRENT_GIT_BRANCH_NAME: currentGitBranchName(),

    DOMAIN: "https://blog.metinyazici.org",
  },

  async rewrites() {
    return [
      {
        source: "/feed.xml",
        destination: "/api/rss",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};
