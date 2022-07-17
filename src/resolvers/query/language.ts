import { LanguageController } from './../../controllers/languages';
import { IResolvers } from "@graphql-tools/utils";

const language = new LanguageController();

const queryUserResolvers: IResolvers = {
  Query: {
    languages: async(_:void, __:unknown)  => {

        try {
            return await language.getLanguages();
        } catch (error) {
            console.log({error});
        }
    },
    language: async (_:void, args: {id: string}) => {

        try {

            const response = await language.getLanguage(+args.id);

            return response.length === 0 ? null : response[0];
            
        } catch (error) {
            console.log({error});
        }
    }
  },
};

export default queryUserResolvers;
