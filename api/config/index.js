module.exports = {
    dbConfigPath : process.env.DB_CONFIG,
    env : process.env.NODE_ENV,
    cors : process.env.CORS || '*',
    logLevel : (process.env.LOG_LEVEL || 'emerg'),
    port : (process.env.PORT || 3000)
}
