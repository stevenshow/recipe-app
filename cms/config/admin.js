module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'jGjwbjKp8TkatpOK5TLVnw=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'UdiKmpbBXoy4e9e0eiz1JA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'xvvbaq5MVFQtBEf1crfX4Q=='),
    },
  },
  url: '/admin'
});
