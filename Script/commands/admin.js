const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞     : 𝐌𝐃 𝐒𝐀𝐊𝐈𝐁 𝐇𝐎𝐒𝐒𝐀𝐈𝐍
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫   : 𝐌𝐀𝐋𝐄 
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐒𝐈𝐍𝐆𝐋𝐄
┃ 🎂 𝐀𝐠𝐞      : 𝟏𝟕+
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐒𝐋𝐀𝐌
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐇𝐒𝐂 𝐁𝐀𝐓𝐂𝐇 𝟐𝟎𝟐𝟓
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐔𝐋𝐋𝐀𝐏𝐀𝐑𝐀, 𝐒𝐈𝐑𝐀𝐉𝐆𝐀𝐍𝐉.
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : ᏕᏗᏦᎥᏰ ᏰᏂᏗᎥ
┃ 📢 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : +𝟖𝟖𝟎𝟏𝟕𝟔𝟓𝟎𝟏𝟐𝟏𝟗 
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/472796285_122118705218674221_5876343853182013289_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9K-AuPY5yzAQ7kNvwFwVnNt&_nc_oc=AdnADplOA-pcoDsosorbGTf0uAqGJFLmSTfbpNUOXIAnShuOfpXcsJur1MXwgjsDrNU&_nc_zt=23&_nc_ht=scontent.fdac20-1.fna&_nc_gid=pJYGgDolj6J76mD-vsIYpg&oh=00_AfJL8F6ufDKW6YC5CnKuAq9oC_rEb1VaTOLgFeQwZiQKjQ&oe=683F04D8`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
