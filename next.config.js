const currentGitBranchName = require("current-git-branch");

module.exports = {
  env: {
    // Incremental Static Regeneration (ISR)
    ISR_REVALIDATE: 3600, // render every 1 hour

    CURRENT_GIT_BRANCH_NAME: currentGitBranchName(),
  },

  webpack: (config, { isServer }) => {

    if (isServer) {
      require("./src/scripts/generate-sitemap");
    }

    return config;
  },
};
