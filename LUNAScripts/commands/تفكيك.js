module.exports.config = {
		name: "تفكيك",
		version: "1.0.0",
		hasPermssion: 0,
		credits: "DRIDI-RAYEN",
		description: "لعبة احزر ",
		usages: "ا",
		commandCategory: "〘 الالعاب 〙",
		cooldowns: 0
};

const questions = [

{ question: "أول من يقوم بتفكيك هذه الكلمة يفوز (تفكيك)", answer: "ت ف ك ي ك" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (البادئة)", answer: "ا ل ب ا د ئ ة" },
	{ question: "أول من يقوم بتفكيك هذه الكلمة يفوز (مصلحتي)", answer: "م ص ل ح ت ي" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (الحب)", answer: "ا ل ح ب" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (الخوارزميات)", answer: "ا ل خ وا ر ز م ي ا ت" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (قطوس)", answer: "ق ط و س" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (النرد)", answer: "ا ل ن ر د" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (المستقبل)", answer: "ا ل م س ت ق ب ل" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (الشاشة)", answer: "ا ل ش ا ش ة" },
	{ question: "اول من يقوم بافكيك هذه الكلمة يفوز (النبات)", answer: "ا ل ن ب ا ت" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (الصدى)", answer: "ا ل ص د ى" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (الزمن)", answer: "ا ل ز م ن" },
	{ question: "اول واحد يقوم بتفكيك هذه الكلمة يفوز (الحرف)", answer: "ا ل ح ر ف" },
	{ question: "اول من يقوم بافكيك هذه الكلمة يفوز (القمر)", answer: "ا ل ق م ر" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(الانسان)", answer: "ا ل ا ن س ا ن" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(البصيرة)", answer: "ا ل ب ص ي ر ة" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (العقل)", answer: "ا ل ع ق ل" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(الشعر)", answer: "ا ل ش ع ر" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(الفحم)", answer: "ا ل ف ح م" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(الكتاب)", answer: "ا ل ك ت ا ب" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(الصورة)", answer: "ا ل ص و ر ة" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(الحلم)", answer: "ا ل ح ل م" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(العدسة)", answer: "ا ل ع د س ة" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(المنشفة)", answer: "ا ل م ن ش ف ة" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (فلسطين)", answer: "ف ل س ط ي ن" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(الاسم)", answer: "ا ل ا س م" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(الوقت)", answer: "ا ل و ق ت" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(الجزء)", answer: "ا ل ج ز ء" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(الكلمة)", answer: "ا ل ك ل م ة" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(المكتبة)", answer: "ا ل م ك ت ب ة" },
	{ question: "ما هو الشيء الذي يمكن أن يكون ناعمًا أو خشنًا ولكنه ل", answer: "الصوت" },
	{ question: "اول من يقوم بتفكيك هذه الكلامة يفوز (ضلام)", answer: "ض ل ا م" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (ديون)", answer: "د ي و ن" },
	{ question: "اول من يقوم بفكيك هذه الكلمة يفوز(القمر)", answer: "ا ل ق م ر" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(رماد)", answer: "ر م ا د" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(لسان)", answer: "ل س ا ن" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (الماء)", answer: "ا ل م ا ء" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز (الثقب)", answer: "ا ل ث ق ب" },
	{ question: "اول من يقوم بتفكيك هذه الكلمة يفوز(البكاء)", answer: "ا ل ب ك ا ء" },
];
module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
		const userAnswer = event.body.trim().toLowerCase();
		const correctAnswer = handleReply.correctAnswer.toLowerCase();
		const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

		if (userAnswer === correctAnswer) {
				Currencies.increaseMoney(event.senderID, 20);
				api.sendMessage(`✅|  قــام ${userName} بــتفكــيكـــها أولا وحصـــــل على 20 نجمة🌟`, event.threadID);
				api.unsendMessage(handleReply.messageID); 
		} else {
				api.sendMessage(`❎| إجـــابتك خاطئة حـــاول مــرة أخـرى`, event.threadID);
		}
};

module.exports.run = async function ({ api, event, args }) {
		const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
		const correctAnswer = randomQuestion.answer;
		const question = randomQuestion.question;

		const message = `${question}`;

		api.sendMessage({ body: message }, event.threadID, (error, info) => {
				if (!error) {
						global.client.handleReply.push({
								name: this.config.name,
								messageID: info.messageID,
								correctAnswer: correctAnswer
						});
				}
		});
};