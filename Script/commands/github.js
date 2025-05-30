module.exports.config = {
  'name': "fork",
  'version': "1.0.1",
  'hasPermssion': 0x0,
  'credits': "Islamick Chat",
  'description': "public fork link",
  'commandCategory': "public",
  'cooldowns': 0x1,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async function ({
  api: _0x7be861,
  event: _0x2fa53d,
  args: _0x17579a,
  client: _0x4da9d9,
  Users: _0xbaa74e,
  Threads: _0xa726fd,
  __GLOBAL: _0x28f4be,
  Currencies: _0x35237d
}) {
  const _0x40c56c = global.nodemodule.request;
  const _0x581211 = global.nodemodule["fs-extra"];
  var _0x3a34b4 = ["https://i.imgur.com/gSW285Z.gif", "https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif", "https://i.imgur.com/gSW285Z.gif", '', ''];
  var _0x2b6271 = () => _0x7be861.sendMessage({
    'body': "╭•┄┅════❁🌺❁════┅┄•╮\n   আসসালামু আলাইকুম-!!🖤💫\n╰•┄┅════❁🌺❁════┅┄•╯\n\nআপনি আমাদের মেসেঞ্জার বট টি ব্যবহার করে চাইলে সাকিব ভাইয়ের সাথে যোগাযোগ করুন।\n\nFacebook : ᏕᏗᏦᎥᏰ ᏰᏂᏗᎥ\n\nWhatsapp : +880176501219\n\n\n⚔️ 𝐁𝐎𝐓 𝐁𝐘 𝐒𝐀𝐊𝐈𝐁 ⚔️",
    'attachment': _0x581211.createReadStream(__dirname + "/cache/juswa.jpg")
  }, _0x2fa53d.threadID, () => _0x581211.unlinkSync(__dirname + "/cache/juswa.jpg"));
  return _0x40c56c(encodeURI(_0x3a34b4[Math.floor(Math.random() * _0x3a34b4.length)])).pipe(_0x581211.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close", () => _0x2b6271());
};
