module.exports.config = {
	name: "sendnoti2",
	version: "1.0.3",
	hasPermssion: 2,
	credits: "Modified by ChatGPT",
	description: "Send messages to all groups (with optional media if replying)",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"sendSuccess": "Đã gửi tin nhắn đến %1 nhóm!",
		"sendFail": "[!] Không thể gửi thông báo tới %1 nhóm"
	},
	"en": {
		"sendSuccess": "Sent message to %1 thread!",
		"sendFail": "[!] Can't send message to %1 thread"
	}
};

module.exports.run = async ({ api, event, args, getText }) => {
	const fs = require("fs-extra");
	const axios = require("axios");

	const allThread = global.data.allThreadID || [];
	let count = 0, cantSend = [];

	const messageBody = "»Announcement from the Admin Sakib!«\n\n" + args.join(" ");

	// ✅ If replying to a message with media
	if (event.type === "message_reply" && event.messageReply.attachments.length > 0) {
		const attachment = event.messageReply.attachments[0];
		const url = attachment.url;

		// Determine file extension based on type
		let ext = "dat";
		if (attachment.type === "photo") ext = "jpg";
		else if (attachment.type === "audio") ext = "mp3";
		else if (attachment.type === "video") ext = "mp4";

		const filePath = __dirname + `/cache/sendnoti_temp.${ext}`;
		try {
			const response = await axios.get(url, { responseType: "arraybuffer" });
			fs.writeFileSync(filePath, Buffer.from(response.data, "utf-8"));

			for (const idThread of allThread) {
				if (isNaN(parseInt(idThread)) || idThread == event.threadID) continue;

				api.sendMessage({
					body: messageBody,
					attachment: fs.createReadStream(filePath)
				}, idThread, (err) => {
					if (err) cantSend.push(idThread);
				});
				count++;
				await new Promise(resolve => setTimeout(resolve, 500));
			}

			fs.unlinkSync(filePath); // Clean up temp file
		} catch (error) {
			console.error("Error downloading or sending file:", error);
			return api.sendMessage("❌ ফাইল প্রক্রিয়াজাত করতে সমস্যা হয়েছে।", event.threadID, event.messageID);
		}
	} else {
		// ✅ Text-only message
		for (const idThread of allThread) {
			if (isNaN(parseInt(idThread)) || idThread == event.threadID) continue;

			api.sendMessage(messageBody, idThread, (err) => {
				if (err) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}

	// ✅ Report back to sender
	return api.sendMessage(
		getText("sendSuccess", count),
		event.threadID,
		() => {
			if (cantSend.length > 0)
				api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID);
		},
		event.messageID
	);
};
