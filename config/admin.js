module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6f3a2715cdaf8b077068091a01a355e0'),
  },
});
