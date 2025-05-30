module.exports.config = {
  'name': "owner",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'description': '',
  'commandCategory': "prefix",
  'usages': '',
  'cooldowns': 0x5,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async function ({
  api: _0x1d6b68,
  event: _0x52c090,
  args: _0x10ca23,
  client: _0x4950a3,
  Users: _0x39848e,
  Threads: _0x31354f,
  __GLOBAL: _0x367eb3,
  Currencies: _0x26ee9b
}) {
  const _0x389a9e = global.nodemodule.request;
  const _0xe07f47 = global.nodemodule["fs-extra"];
  var _0x5ee1fe = () => _0x1d6b68.sendMessage({
    'body': "𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗧𝗢𝗡\n======================\n𝗔𝗗𝗠𝗜𝗡 : ᏕᏗᏦᎥᏰ ᏰᏂᏗᎥ\n𝗔𝗗𝗗𝗥𝗘𝗦𝗦: ULLAPARA,SIRAJGANJ \n======𝗖𝗢𝗡𝗧𝗔𝗖𝗧======\n======================\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/Sakib.bhai.4x/\n𝗠𝗔𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗟𝗜𝗡𝗞:\nm.me/Sakib.Bhai.4x",'attachment': _0xe07f47.createReadStream(__dirname + "/cache/1.png")
  }, _0x52c090.threadID, () => _0xe07f47.unlinkSync(__dirname + "/cache/1.png"));
  return _0x389a9e(encodeURI("https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/472796285_122118705218674221_5876343853182013289_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9K-AuPY5yzAQ7kNvwFwVnNt&_nc_oc=AdnADplOA-pcoDsosorbGTf0uAqGJFLmSTfbpNUOXIAnShuOfpXcsJur1MXwgjsDrNU&_nc_zt=23&_nc_ht=scontent.fdac20-1.fna&_nc_gid=pJYGgDolj6J76mD-vsIYpg&oh=00_AfJL8F6ufDKW6YC5CnKuAq9oC_rEb1VaTOLgFeQwZiQKjQ&oe=683F04D8")).pipe(_0xe07f47.createWriteStream(__dirname + "/cache/1.png")).on("close", () => _0x5ee1fe());
};
module.exports.run = _0x14b92e => {};
