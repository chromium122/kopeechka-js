import axios from "axios";

class Kopeechka {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async balance() {
        return new Promise(async (resolve, reject) => {
            const res = await axios.get(
                `https://api.kopeechka.store/user-balance`,
                {
                    params: {
                        token: this.apiKey,
                        api: "2.0",
                    },
                }
            );

            if (!res.data) return reject(new Error("No data returned."));
            if (res.data.status == "error")
                return reject(new Error(res.data.value));

            return resolve(res.data.balance);
        });
    }

    async getEmail(data) {
        return new Promise(async (resolve, reject) => {
            data.api = "2.0";
            data.token = this.apiKey;
            const res = await axios.get(
                `http://api.kopeechka.store/mailbox-get-email`,
                {
                    params: data,
                }
            );

            if (!res.data) return reject(new Error("No data returned."));
            if (res.data.status == "error")
                return reject(new Error(res.data.value));
            return resolve(res.data);
        });
    }

    async getMessage(taskID, data) {
        return new Promise(async (resolve, reject) => {
            data.api = "2.0";
            data.token = this.apiKey;
	    data.id = taskID;
            const res = await axios.get(
                `https://api.kopeechka.store/mailbox-get-message`,
                {
                    params: data,
                }
            );

            if (!res.data) return reject(new Error("No data returned."));
            if (res.data.status == "error")
                return reject(new Error(res.data.value));
            return resolve(res.data);
        });
    }
}

export default Kopeechka;
