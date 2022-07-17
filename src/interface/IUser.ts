import { ILanguage } from './ILanguage';
export interface IUser {

    id?: number;
    name: string;
    instructor: boolean;
    twitter?:string;
    web?:string;
    languages: ILanguage[]
}