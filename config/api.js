module.exports = ({ env }) => ({
  // https://strapi.io/blog/postgre-sql-and-strapi-setup
  responses: {
    privateAttributes: ['_v', 'id', 'createdAt', 'updatedAt'],
    draftAndPublish: false,
  },
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
});
