module.exports = {
    port: 3000,
    mysql: {
        username: "root",
        password: "minhvudang",
        database: "facebook",
        host: "localhost",
        dialect: "mysql"
    },
    authen: {
        secret: "minhvudang",
        expries_in: "7d"
    },
    transporter: {
        service: "gmail",
        username: "ehzipmtest@gmail.com",
        password: "minhmang"
    },
    salt: 10,
    host: "http://localhost",
    secret: "minhvudang"
}