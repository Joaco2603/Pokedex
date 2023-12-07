export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.PASSWORD_MONGODB,
  defaultLimit: +process.env.DEFAULT_LIMIT || 5,
  offset: +process.env.DEFAULT_OFFSET || 0,
});
