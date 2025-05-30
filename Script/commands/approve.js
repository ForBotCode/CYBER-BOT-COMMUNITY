const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, "ullash/approvedThreads.json");
const dataPending = path.join(__dirname, "ullash/pendingdThreads.json");

module.exports.config = {
  name: "approve",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "approve the gc using bots xD",
  commandCategory: "Admin",
  cooldowns: 5
};

module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
};

module.exports.handleReply = async function ({ event, api, handleReply }) {
  const { body, threadID, messageID, senderID } = event;
  const { author, type } = handleReply;

  if (author !== senderID) return;

  let approved = JSON.parse(fs.readFileSync(dataPath));
  let pending = JSON.parse(fs.readFileSync(dataPending));

  switch (type) {
    case "pending":
      if (body === 'A') {
        approved.push(threadID);
        fs.writeFileSync(dataPath, JSON.stringify(approved, null, 2));
        api.sendMessage("» Successfully approved the box:\n" + threadID, threadID, () => {
          const index = pending.indexOf(threadID);
          if (index > -1) {
            pending.splice(index, 1);
            fs.writeFileSync(dataPending, JSON.stringify(pending, null, 2));
          }
        }, messageID);
      }
      break;
  }
};

module.exports.run = async ({ event, api, args, Threads, Users }) => {
  const { threadID, messageID, senderID } = event;
  let approved = JSON.parse(fs.readFileSync(dataPath));
  let pending = JSON.parse(fs.readFileSync(dataPending));

  const id = args[1] || threadID;
  const reason = args.slice(2).join(" ") || "No reason provided";

  if (args[0] === "list" || args[0] === "l") {
    let msg = `=====「 GC THAT HAD BEEN APPROVED: ${approved.length} 」=====`;
    let count = 0;
    for (const tid of approved) {
      const info = await api.getThreadInfo(tid);
      const name = info.threadName || (await Users.getNameUser(tid));
      msg += `\n〘${++count}〙» ${name}\n${tid}`;
    }
    return api.sendMessage(msg, threadID, (err, info) => {
      global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: senderID, type: 'a' });
    }, messageID);
  }

  if (args[0] === "pending" || args[0] === "p") {
    let msg = `=====「 THREADS NEED TO BE APPROVED: ${pending.length} 」=====`;
    let count = 0;
    for (const tid of pending) {
      const info = await api.getThreadInfo(tid);
      const name = info.threadName || (await Users.getNameUser(tid));
      msg += `\n〘${++count}〙» ${name}\n${tid}`;
    }
    return api.sendMessage(msg, threadID, (err, info) => {
      global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: senderID, type: 'pending' });
    }, messageID);
  }

  if (args[0] === "help" || args[0] === "h") {
    const threadData = (await Threads.getData(String(threadID))).data || {};
    const prefix = threadData.PREFIX || global.config.PREFIX;
    return api.sendMessage(`=====[ APPROVE HELP ]=====

${prefix}approve l/list => List of approved boxes
${prefix}approve p/pending => List of pending boxes
${prefix}approve d/del <ID> => Remove ID from approved list
${prefix}approve <ID> => Approve the thread with this ID`, threadID, messageID);
  }

  if (args[0] === "del" || args[0] === "d") {
    if (!approved.includes(id)) return api.sendMessage("[ ERR ] Box is not pre-approved!", threadID, messageID);
    approved = approved.filter(item => item !== id);
    fs.writeFileSync(dataPath, JSON.stringify(approved, null, 2));
    api.sendMessage("[ OK ] Removed from approved list: " + id, threadID, messageID);
    return api.sendMessage("[ OK ] Your group has been removed by admin. Reason: " + reason, id);
  }

  if (isNaN(parseInt(id))) return api.sendMessage("[ ERR ] Invalid ID", threadID, messageID);
  if (approved.includes(id)) return api.sendMessage(`[ - ] ID ${id} is already approved.`, threadID, messageID);

  approved.push(id);
  fs.writeFileSync(dataPath, JSON.stringify(approved, null, 2));
  const idx = pending.indexOf(id);
  if (idx !== -1) {
    pending.splice(idx, 1);
    fs.writeFileSync(dataPending, JSON.stringify(pending, null, 2));
  }
  return api.sendMessage(`[ OK ] Successfully approved the box: ${id}`, threadID, messageID);
};
