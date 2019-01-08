export default {
  Query: {
    post: (parent, args, context, info) => {
      const { db } = context;
      const post = {
        id: args.id,
        title: 'GraphQL 101',
        description: null,
        createdAt: new Date().toISOString(),
      };
      return post;
    },
    posts: () => {},
  },
  Mutation: {
    createPost: (parent, args, context, info) => {
      const post = {
        id: '1',
        title: args.input.title,
        description: args.input.description,
        createdAt: new Date().toISOString(),
      };
      return post;
    },
  },
  Post: {
    updatedAt: (parent, args, context, info) => new Date().toISOString(),
  },
};
