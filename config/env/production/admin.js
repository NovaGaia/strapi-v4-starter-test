module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "220777d63ce9d4bb528f0238ef9ce48a"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
