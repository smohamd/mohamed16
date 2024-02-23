module.exports.config = {
  name: "تخيل",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "عمر",
  description: "تضيفك لشات البوت",
  usePrefix: true,
  commandCategory: "〘 الخدمات 〙",
  usages: "ا",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const fs = require('fs-extra');
  let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("🐧 | لونا | 🐧 اكتب شيئ لارسمه من اجلك", threadID, messageID);

  try {
    const translationResponse = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(query)}`);
    const translation = translationResponse.data[0][0][0];

    api.sendMessage('🕑 | جار انشاء طلبك......\nانتضر 30 ثنية لمعالجة طلبك', threadID, messageID);

    const imageUrl = `https://api.easy-api.online/api/luosiallen?q=${encodeURIComponent(translation)}`;
    const imageResult = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    let path = __dirname + `/cache/pol4i.png`;
    fs.writeFileSync(path, Buffer.from(imageResult.data, 'binary'));

    api.sendMessage({
      body: "🥺هل عجبتك رسمتها من اجلك",
      attachment: fs.createReadStream(path),
    }, threadID, () => fs.unlinkSync(path), messageID);
  } catch (error) {
    console.error(error);
    api.sendMessage("| ⚠ | خطا تواصل معا لمطور محمد او زينو او اعد تجربة", threadID, messageID);
  }
};
