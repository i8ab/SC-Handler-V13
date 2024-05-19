const { Events } = require("discord.js");

module.exports = {
  name: Events.CLIENT_READY,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};
