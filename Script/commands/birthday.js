module.exports.config = {
	name: "bday",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MAHBUBU SHAON",
	description: "See admin's birthday",
	usePrefix: false,
	commandCategory: "bday",
	cooldowns: 5
}

module.exports.run = ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
	const axios = global.nodemodule["axios"];
	const request = global.nodemodule["request"];
	const fs = global.nodemodule["fs-extra"];
	
	// 🗓️ নতুন তারিখ এখানে
	const t = Date.parse("June 10, 2025 00:00:00") - Date.parse(new Date());
	
	const seconds = Math.floor((t / 1000) % 60);
	const minutes = Math.floor((t / 1000 / 60) % 60);
	const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	const days = Math.floor(t / (1000 * 60 * 60 * 24));

	var callback = () => api.sendMessage({
		body: `Time left until Admin - Light birthday\n» ${days} days\n ${hours} hours\n ${minutes} minutes\n ${seconds} seconds. «`,
		attachment: fs.createReadStream(__dirname + "/cache/1.png")
	}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));

	return request(encodeURI(`https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/472796285_122118705218674221_5876343853182013289_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9K-AuPY5yzAQ7kNvwFwVnNt&_nc_oc=AdnADplOA-pcoDsosorbGTf0uAqGJFLmSTfbpNUOXIAnShuOfpXcsJur1MXwgjsDrNU&_nc_zt=23&_nc_ht=scontent.fdac20-1.fna&_nc_gid=pJYGgDolj6J76mD-vsIYpg&oh=00_AfJL8F6ufDKW6YC5CnKuAq9oC_rEb1VaTOLgFeQwZiQKjQ&oe=683F04D8`))
		.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
		.on('close', () => callback());
}
