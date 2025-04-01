import { StatusEnum } from "../enums/status.interface";
import { ILocation } from "./maps.interface";

export interface ISubmission {
    id: number;
    from: string;
    to: string;
    dueDate: string;
    location: ILocation;
    status: StatusEnum;
}

export interface ISubmissionQuery {
    search: string;
    fromId: string;
    statusId: StatusEnum;
    date: string;
}