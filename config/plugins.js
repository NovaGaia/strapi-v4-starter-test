module.exports = ({ env }) => ({
  "website-builder": {
    enabled: true,
    config: {
      url: process.env.HOOK_PUBLISH_URL,
      headers: { Autorization: process.env.HOOK_PUBLISH_AUTHORIZATION },
      trigger: {
        type: "manual",
      },
    },
  },
});
