export const AppConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    PORT: process.env.PORT || 3001,
    defualt_limit: +process.env.DEFAULT_LIMIT || 10
});