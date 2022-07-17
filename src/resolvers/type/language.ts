import { UserController } from './../../controllers/users';
import { ILanguage } from './../../interface/ILanguage';
import { IResolvers } from '@graphql-tools/utils';

const user = new UserController();

const  typeLanguageResolvers: IResolvers = {
    Language: {
        users: async(parent: ILanguage) => await user.getUsersByLanguage(parent.id as number)
    }
}

export default typeLanguageResolvers;