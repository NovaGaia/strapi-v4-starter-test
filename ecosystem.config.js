module.exports = {
  apps: [
    {
      name: "strapi-server",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
