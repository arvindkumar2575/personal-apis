if(process.env.DB_CONNECTION=='MONGODB'){
    require('./mongodb')
}
if(process.env.DB_CONNECTION=='MYSQL'){
    require('./mysqldb')
}
if(process.env.DB_CONNECTION=='SQLITE'){
    require('./sqlitedb')
}