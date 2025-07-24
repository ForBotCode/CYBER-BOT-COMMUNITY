module.exports.config = {
    name: "sakibbb😾",
    version: "1.0.0",
    permission: 2, // শুধু admin (তুমি) ইউজ করতে পারবে
    prefix: true,
    credits: "তুমি নিজেই",
    description: "love flower spam with mention",
    category: "custom",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
    const mention = Object.keys(event.mentions)[0];

    // যদি কেউ mention না করে
    if (!mention) {
        return api.sendMessage("সাকিব ভাই আপনি কাকে লাভ দিতে চান তাকে শুধু একবার মেনশন করুন 😼", event.threadID);
    }

    let name = event.mentions[mention];
    let arraytag = [];
    arraytag.push({ id: mention, tag: name });

    // ৫০ বার "🌸" মেসেজ পাঠানো হবে
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            api.sendMessage({ 
                body: `🌸`, 
                mentions: arraytag 
            }, event.threadID);
        }, i * 500); // প্রতি মেসেজ 0.5 সেকেন্ড পরে যাবে
    }
};

