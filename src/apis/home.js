import axios from "../axios";

export const getHome = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: "/home",
                method: "get",
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
export const getPlaylist = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: "/detailplaylist",
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

export const getNewReleaseChart = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: "/newreleasechart",
                method: "get",
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const getTop100 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: "/top100",
                method: "get",
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
export const getChartHome = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: "/charthome",
                method: "get",
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
