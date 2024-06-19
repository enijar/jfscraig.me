module.exports = {
  apps: [
    {
      name: "jfscraig.me",
      script: "npm",
      args: "start",
      cwd: "/var/www/jfscraig.me",
      env: {
        PORT: 3001,
        NODE_ENV: "production",
      },
    },
  ],
};
