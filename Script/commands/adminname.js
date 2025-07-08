module.exports.config = {
  name: "adminReply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "salki",
  description: "Replies when someone mentions certain names",
  commandCategory: "auto-reply",
  usages: "",
  cooldowns: 0,
};

module.exports.handleEvent = async function ({ event, api }) {
  const triggerWords = ["tuli", "তুলি", "রাজিয়া", "razia", "tasfiya", "rajiya", "rajia"];
  const message = event.body?.toLowerCase();

  if (!message) return;

  for (let word of triggerWords) {
    if (message.includes(word.toLowerCase())) {
      return api.sendMessage("উনি আমাদের গ্রুপের সম্মানীয় অ্যাডমিন🌸", event.threadID, event.messageID);
    }
  }
};

module.exports.run = async function () {
  // এই কমান্ডে রান করার কিছু নেই
};
