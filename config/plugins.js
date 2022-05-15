module.exports = ({ env }) => ({
  "website-builder": {
    enabled: true,
    config: {
      url: process.env.HOOK_PUBLISH_URL,
      headers: { authorization: process.env.HOOK_PUBLISH_AUTHORIZATION },
      trigger: {
        type: "manual",
      },
    },
  },
});
