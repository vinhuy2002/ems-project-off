import axiosClient from "./axiosClient";

const urlConsumption = '/api/consumption'
interface assetID{
    assetID: string;
};
export const ConsumptionApi = async(params: assetID) => {
    try {
        const url = `${urlConsumption}?&asset_id=${params.assetID}`
        const res = await axiosClient.get(url)
        return res.data;
    } catch (error) {
        console.log("Error");
    }
}

export const ConsumptionApiDaily = async(params: assetID) => {
    try {
        const url = `${urlConsumption}/daily?&asset_id=${params.assetID}`
        const res = await axiosClient.get(url)
        return res.data;
    } catch (error) {
        console.log("Error");
    }
}

export const ConsumptionApiMonthly = async(params: assetID) => {
    try {
        const url = `${urlConsumption}/monthly?&asset_id=${params.assetID}`
        const res = await axiosClient.get(url)
        return res.data;
    } catch (error) {
        console.log("Error");
    }
}

