module.exports.config = {
  name: "juinita",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "YourName",
  description: "Replies to 'Juinita ke?' without a command prefix",
  commandCategory: "no prefix",
  usages: "",
  cooldowns: 2
};

module.exports.handleEvent = function({ event, api }) {
  const { body, threadID, messageID } = event;
  if (!body) return;

  const msg = body.toLowerCase();

  if (msg.includes("juinita ke") || msg.includes("juinita কে")) {
    return api.sendMessage("Sakib er senior bou👀🌸", threadID, messageID);
  }
};

module.exports.run = () => {};
