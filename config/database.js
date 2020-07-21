module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE"),
        ssl: true,
      },
    },
  },
});
