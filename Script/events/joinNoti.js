module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
    description: "Notification of bots or people entering groups (text only)"
};

module.exports.run = async function({ api, event }) {
    const { threadID } = event;

    // বট যদি নিজে যোগ হয়
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());

        return api.sendMessage(
            `╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤💫\n╰•┄┅═══❁🌺❁═══┅┄•╯

________________________

𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐬𝐨 𝐦𝐮𝐜𝐡 𝐟𝐨𝐫 𝐚dd𝐢𝐧𝐠 𝐦𝐞 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐢-𝐠𝐫𝐨𝐮𝐩-🖤🤗

𝐈 𝐰𝐢𝐥𝐥 𝐚𝐥𝐰𝐚𝐲𝐬 𝐬𝐞𝐫𝐯𝐞 𝐲𝐨𝐮 𝐢𝐧𝐚𝐡𝐚𝐥𝐥𝐚𝐡 🌺❤️-!!

________________________

𝐓𝐨 𝐯𝐢𝐞𝐰 𝐚𝐧𝐲 𝐜𝐨𝐦𝐦𝐚𝐧d

${global.config.PREFIX}Help\n${global.config.PREFIX}Manu

⚔️ 𝐁𝐎𝐓 𝐁𝐘 𝐒𝐀𝐊𝐈𝐁 ⚔️

⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆`,
            threadID
        );
    }

    // অন্য কেউ গ্রুপে join করলে
    try {
        let { threadName, participantIDs } = await api.getThreadInfo(threadID);
        const threadData = global.data.threadData.get(parseInt(threadID)) || {};
        
        var mentions = [], nameArray = [], memLength = [], i = 0;
        
        for (id in event.logMessageData.addedParticipants) {
            const userName = event.logMessageData.addedParticipants[id].fullName;
            nameArray.push(userName);
            mentions.push({ tag: userName, id });
            memLength.push(participantIDs.length - i++);
        }

        memLength.sort((a, b) => a - b);

        let msg = (typeof threadData.customJoin == "undefined") ? 
        `╭•┄┅═══❁🌺❁═══┅┄•╮
   আসসালামু আলাইকুম-!!🖤
╰•┄┅═══❁🌺❁═══┅┄•╯ 

✨🆆🅴🅻🅻 🅲🅾🅼🅴✨

❥𝐍𝐄𝐖~
~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~

[   {name} ]

༆-✿ আপনাকে আমাদের࿐
{threadName}
🌺✨!!—এর পক্ষ-থেকে-!!✨🌺

❤️🫰_ভালোবাস_অভিরাম_🫰❤️

༆-✿আপনি_এই_গ্রুপের {soThanhVien} নং মেম্বার࿐

╭•┄┅═══❁🌺❁═══┅┄•╮
🌸    NOOB ☢️_𖣘 -BOT ⚠️ TEAM_ ☢️    🌸
╰•┄┅═══❁🌺❁═══┅┄•╯` 
        : threadData.customJoin;

        msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);

        return api.sendMessage({ body: msg, mentions }, threadID);
        
    } catch (e) { 
        return console.log(e); 
    }
}
