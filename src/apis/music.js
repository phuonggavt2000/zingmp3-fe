import axios from "../axios";

export const getSong = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: "/song",
                method: "get",
                params: {
                    id,
                },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const getInfosong = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: "/infosong",
                method: "get",
                params: {
                    id,
                },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
