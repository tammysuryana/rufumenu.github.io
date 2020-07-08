module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'fukurodining.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'u5427587_rufumenu'),
        username: env('DATABASE_USERNAME', 'u5427587_fadliselaz'),
        password: env('DATABASE_PASSWORD', 'fadliselaz13'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
