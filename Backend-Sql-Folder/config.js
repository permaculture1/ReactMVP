module.exports = {
    dev: {
        connectionString: 'postgresql://postgres:docker@localhost:5432/sandwichhouse',
        port:'7000'
    },
    
    production:{
        connectionString: process.env.POSTGRES_CONNECTION_STRING + '?ssl=true',
        port: process.env.PORT
    }
}