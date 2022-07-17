import { IUser } from './../../interface/IUser';
import { IResolvers } from '@graphql-tools/utils';

const typeUserResolvers : IResolvers = {

    User: {

        twitter: async (parent: IUser) => !parent.twitter ? "" : `https://twitter.com/${parent.twitter}`,
        web: async (parent: IUser) => !parent.web ? "" : parent.web
    }
}

export default typeUserResolvers;