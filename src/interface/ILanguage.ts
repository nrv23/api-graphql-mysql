import { IUser } from './IUser';
export interface ILanguage {

    id?: number;
    name: string;
    users: IUser[]
}