module.exports.config = {
  'name': "okfsfs",
  'version': "1.1.1",
  'hasPermssion': 0x0,
  'credits': "John Lester",
  'description': "Just Respond",
  'commandCategory': "no prefix",
  'cooldowns': 0x5
};
module.exports.handleEvent = function ({
  api: _0x10acdc,
  event: _0x447ab6,
  client: _0x2b6df3,
  __GLOBAL: _0x126780
}) {
  var {
    threadID: _0x3378fc,
    messageID: _0x4c6254
  } = _0x447ab6;
  let _0x1677fa = _0x447ab6.body.toLowerCase();
  if (_0x1677fa.includes("fork") || _0x1677fa.includes("FORK") || _0x1677fa.includes("BOT LINK") || _0x1677fa.includes("FORK LINK") || _0x1677fa.includes("fork link") || _0x1677fa.includes("link fork") || _0x1677fa.includes("fork link daow") || _0x1677fa.includes("ullash fork link") || _0x1677fa.includes("repository") || _0x1677fa.includes("bot link") || _0x1677fa.includes("cyber bot fork") || _0x1677fa.includes("bot fork link") || _0x1677fa.includes("need fork") || _0x1677fa.includes("kaow akta fork link daow") || _0x1677fa.includes("ullash fork") || _0x1677fa.includes("bot fork")) {
    var _0x2de135 = {
      'body': "Fork পুটকি দিয়ে ঢুকিয়ে দিব🌚🌶️"
    };
    _0x10acdc.sendMessage(_0x2de135, _0x3378fc, _0x4c6254);
    _0x10acdc.setMessageReaction('☢️', _0x447ab6.messageID, _0x59f4ee => {}, true);
  }
};
module.exports.run = function ({
  api: _0x55baac,
  event: _0x330e2e,
  client: _0x1a6deb,
  __GLOBAL: _0x53a11d
}) {};
