module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '*****',
            database: 'rn'
        },
        migrations:{
            directory:`${__dirname}/database/migrations`
        },
        seeds:{
            directory:`${__dirname}/database/seeds`
        }
    }
}