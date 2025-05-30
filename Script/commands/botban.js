module.exports.config = {
  'name': "otherbots",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'description': "ban otherbot",
  'commandCategory': "config",
  'cooldowns': 0x0
};
module.exports.handleEvent = async ({
  event: _0x118a74,
  api: _0x1617d8,
  Users: _0x202d70
}) => {
  var {
    threadID: _0x1d9a72,
    messageID: _0x5124b6,
    body: _0x292a19,
    senderID: _0x1ff55e,
    reason: _0x3bc921
  } = _0x118a74;
  const _0x42851a = require("moment-timezone").tz("Asia/Dhaka").format("HH:MM:ss L");
  if (_0x1ff55e == _0x1617d8.getCurrentUserID()) {
    return;
  }
  let _0x55f837 = await _0x202d70.getNameUser(_0x118a74.senderID);
  var _0x1e42fa = {
    'body': _0x55f837 + "\nYou have been detected as a bot so you will be banned to avoid spam"
  };
  ["Other Bot"].forEach(_0x294f5c => {
    const _0x2007e6 = _0x118a74.senderID;
    let _0x1765d7 = _0x118a74.body;
    if (_0x1765d7.includes("your keyboard level has reached level") || _0x1765d7.includes("Command not found") || _0x1765d7.includes("The command you used") || _0x1765d7.includes("Please mention 1 person.") || _0x1765d7.includes("Unsend this message") || _0x1765d7.includes("You are unable to use bot") || _0x1765d7.includes("»» NOTICE «« Update user nicknames") || _0x1765d7.includes("just removed 1 Attachments") || _0x1765d7.includes("message removedcontent") || _0x1765d7.includes("The current preset is") || _0x1765d7.includes("Here Is My Prefix") || _0x1765d7.includes("just removed 1 attachment.") || _0x1765d7.includes("Unable to re-add members") || _0x1765d7.includes("removed 1 message content:") || _0x1765d7.includes("Here's your music, enjoy!🥰") || _0x1765d7.includes("Ye Raha Aapka Music, enjoy!🥰") || _0x1765d7.includes("your keyboard Power level Up") || _0x1765d7.inclueds("bot ki mc") || _0x1765d7.includes("your keyboard hero level has reached level")) {
      modules = "[ BOT BAN ]";
      console.log(_0x55f837, modules, _0x294f5c);
      const _0x54bdd7 = _0x202d70.getData(_0x2007e6).data || {};
      _0x202d70.setData(_0x2007e6, {
        'data': _0x54bdd7
      });
      _0x54bdd7.banned = 1;
      _0x54bdd7.reason = _0x294f5c || null;
      _0x54bdd7.dateAdded = _0x42851a;
      global.data.userBanned.set(_0x2007e6, {
        'reason': _0x54bdd7.reason,
        'dateAdded': _0x54bdd7.dateAdded
      });
      _0x1617d8.sendMessage(_0x1e42fa, _0x1d9a72, () => {
        const _0x34beea = global.config.ADMINBOT;
        var _0xdd645e = _0x34beea;
        for (var _0xdd645e of _0x34beea) _0x1617d8.sendMessage("Name: " + _0x55f837 + "\nBot UID: " + _0x2007e6 + "\n\nThis user have been detected as a bot so it will be automatically ban to avoid spam", _0xdd645e);
      });
    }
  });
};
module.exports.run = async ({
  event: _0x4a3524,
  api: _0x1fd18a
}) => _0x1fd18a.sendMessage("This command is used to detect other bots and ban them immediately to avoid spamming", _0x4a3524.threadID);
