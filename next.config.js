module.exports = {
  env: {
    // Incremental Static Regeneration (ISR)
    ISR_REVALIDATE: 3600, // render every 1 hour
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
};
