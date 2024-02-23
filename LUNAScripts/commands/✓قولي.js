const Black = {
    name: "قول",
    version: "1.1.1",
    credits: "Gry KJ",
    hasPermission: 0,
    cooldowns: 3,
    description: "البوت يقولك شي",
    category: "أدوات"
};

const axios = require('axios');

module.exports = {
    config: Black,
    run: async function({ api, event, args }) {
        const tvm = args.join(" ");
        const { messageID, threadID } = event;
        const mid = messageID;
        const tid = threadID;

        try {
            const rel = await axios.get('https://akenator-da7856313e76.herokuapp.com/game');
            
            if (!tvm) return api.sendMessage("شي اقوله", tid, mid);

            if (tvm.length > 412) {
                let tvm1 = tvm.slice(0, tvm.length / 2);
                let tvm2 = tvm.slice(tvm.length / 2);
                await sendTTSMessage(api, tid, mid, tvm1, rel.data.Credit);
                await sendTTSMessage(api, tid, mid, tvm2, rel.data.Credit);
            } else {
                await sendTTSMessage(api, tid, mid, tvm, rel.data.Credit);
            }
        } catch (e) {
            api.sendMessage("خطأ غير معروف", tid, mid);
        }
    }
};

async function sendTTSMessage(api, tid, mid, text, credits) {
    try {
        const response = await axios.get(`http://103.188.244.205:19505/tts?text=${encodeURIComponent(text)}&model=10`, { responseType: "stream" });
        await api.sendMessage({ body: "Credits: " + credits, attachment: response.data }, tid, mid);
    } catch (e) {
        throw new Error("ياااا عمي نصك طويييل قصر شويي");
    }
}
