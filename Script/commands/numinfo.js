const truecallerjs = require("truecallerjs");

module.exports = {
  config: {
    name: "numinfo",
    credits: "Dipto (Modified by ChatGPT)",
    hasPermssion: 0,
    commandCategory: "Information",
    usages: "numinfo <number>",
    version: "2.0.0"
  },

  run: async function ({ api, event, args }) {
    const allowedUsers = ["100070013974971", "61570226640452"];

    if (!allowedUsers.includes(event.senderID)) {
      return api.sendMessage("❌ আপনি এই কমান্ডটি ব্যবহারের অনুমতি পাননি।", event.threadID, event.messageID);
    }

    if (!args[0]) {
      return api.sendMessage("⚠️ দয়া করে একটি ফোন নম্বর লিখুন!\nযেমন: .numinfo 017xxxxxxxx", event.threadID, event.messageID);
    }

    let inputNumber = args[0];
    let number;

    // যদি BD নম্বর হয় (01 দিয়ে শুরু), তাহলে 88 যোগ করো
    if (/^01[0-9]{8}$/.test(inputNumber)) {
      number = "88" + inputNumber;
    } else {
      number = inputNumber.replace(/\D/g, ''); // অন্য যেকোনো দেশ কোডসহ
    }

    api.setMessageReaction("🔍", event.messageID, () => {}, true);

    try {
      const searchData = {
        number,
        countryCode: "BD",
        installationId: "WJUGLlBFn94qBtUZqBVejQ==" // <<== এখানে তোমার ID বসাও
      };

      const response = await truecallerjs.searchNumber(searchData);

      if (!response.data || response.data.length === 0) {
        return api.sendMessage("❌ কোনো তথ্য পাওয়া যায়নি।", event.threadID, event.messageID);
      }

      const info = response.data[0];
      const name = info.name || "Not found";
      const carrier = info.phones?.[0]?.carrier || "Unknown";
      const city = info.addresses?.[0]?.city || "Unknown";
      const timeZone = info.phones?.[0]?.timeZone || "Unknown";
      const email = info.internetAddresses?.[0]?.id || "Not public";

      let message = `📞 Number Info:
━━━━━━━━━━━━━
👤 Name: ${name}
📡 Carrier: ${carrier}
🌆 City: ${city}
🕒 Timezone: ${timeZone}
📧 Email: ${email}`;

      api.sendMessage(message, event.threadID, event.messageID);
    } catch (e) {
      console.error("❌ Error:", e);
      api.sendMessage("❌ ত্রুটি ঘটেছে। হয়তো নম্বরটি সঠিক নয় বা ইনস্টলেশন আইডি ভুল।", event.threadID, event.messageID);
    }
  }
};
