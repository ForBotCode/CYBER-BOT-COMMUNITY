module.exports.config = {
  'name': "ajan",
  'version': "2.0",
  'hasPermssion': 0x0,
  'credits': "Islamick Cyber Chat",
  'description': "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  'commandCategory': "AutoTime",
  'countDown': 0x3
};
module.exports.onLoad = async ({
  api: _0x4cee77
}) => {
  const _0x1aa5fa = {
    "04:05 PM": {
      'message': ". ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨ফজরে আজান✨«—•\n ╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বোন এখন ফজরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ফজর এর নামাজ শুরু হবার-!!✨🧡\n⚔️ 𝐁𝐎𝐓 𝐁𝐘 𝐒𝐀𝐊𝐈𝐁 ⚔️ \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
      'url': "https://drive.google.com/uc?id=14YbD4DJV0X7eu2pwbQOV4qaU31LhgMvr"
    },
    "01:00 PM": {
      'message': ". ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨জোহরের আজান✨«—•\n ╰•┄┅══❁🌺❁══┅┄•╯\n\n•⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বোন এখন জোহরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি জোহরের এর নামাজ শুরু হবার-!!✨🧡\n⚔️ 𝐁𝐎𝐓 𝐁𝐘 𝐒𝐀𝐊𝐈𝐁 ⚔️ \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
      'url': "https://drive.google.com/uc?id=13b6bh5KZEWl5t0u15IpcH3oDkBX5QG2N"
    },
    "05:30 PM": {
      'message': ". ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨আসর আজান✨«—•\n ╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বোন এখন আসর আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি আসর এর নামাজ শুরু হবার-!!✨🧡\n⚔️ 𝐁𝐎𝐓 𝐁𝐘 𝐒𝐀𝐊𝐈𝐁 ⚔️ \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
      'url': "https://drive.google.com/uc?id=1v4eZ6p9rZVKxt8tffKxMx1wxlg0moWC6"
    },
    "06:50 PM": {
      'message': ". ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨মাগরিব আজান✨«—•\n ╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বোন এখন মাগরিবের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি মাগরিবের নামাজ শুরু হবার-!!✨🧡\n⚔️ 𝐁𝐎𝐓 𝐁𝐘 𝐒𝐀𝐊𝐈𝐁 ⚔️ \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
      'url': "https://drive.google.com/uc?id=1nFnqpPaR_CjUqYP6aHfKAnamQ7Oj8rMr"
    },
    "08:005 PM": {
      'message': "╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨ইশা আজান✨«—•\n╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বোন এখন ইশা আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ইশারের নামাজ শুরু হবার-!!✨🧡\n⚔️ 𝐁𝐎𝐓 𝐁𝐘 𝐒𝐀𝐊𝐈𝐁 ⚔️ \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
      'url': "https://drive.google.com/uc?id=18G2F3eAsrSPJLSiU8bCIfVXGNYp-X1JC"
    }
  };
  const _0x5c48f9 = async () => {
    const _0x81b199 = new Date(Date.now() + 21600000).toLocaleTimeString("en-US", {
      'hour': "2-digit",
      'minute': "2-digit",
      'hour12': true
    }).split(',').pop().trim();
    if (_0x1aa5fa[_0x81b199]) {
      console.log(_0x1aa5fa[_0x81b199].message);
      console.log(_0x1aa5fa[_0x81b199].url);
      try {
        let _0x43ee23 = {
          'body': _0x1aa5fa[_0x81b199].message,
          'attachment': (await require("axios").get(_0x1aa5fa[_0x81b199].url, {
            'responseType': "stream"
          })).data
        };
        global.data.allThreadID.forEach(_0x30683f => _0x4cee77.sendMessage(_0x43ee23, _0x30683f));
      } catch (_0x1a816f) {
        console.error("Failed to send message for time " + _0x81b199 + ':', _0x1a816f);
      }
    }
    setTimeout(_0x5c48f9, 45000);
  };
  _0x5c48f9();
};
module.exports.run = ({}) => {};
