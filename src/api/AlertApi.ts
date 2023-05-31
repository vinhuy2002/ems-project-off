import axiosClient from "./axiosClient";
import { ListParams, ListResponse } from "../models/common";
import { alarmInfo } from "../models/alarms";

const urlAlarm = '/api/alarm/'
export const getAlarmList = async (param: ListParams) =>{
    const url = `${urlAlarm}?entity_type=${param.type_Filter}&entity_id=${param.id}&page_size=${param._limit}&page=${param._page}&start_ts=${param.start_ts}&end_ts=${param.end_ts}&severity=${param.severity}&acknowledged_or_unacknowledged=${param.acknowledged_or_unacknowledged}&active_or_cleared=${param.active_or_cleared}`
    let res: ListResponse<alarmInfo> = await axiosClient.get(urlAlarm);
    console.log(res);
}