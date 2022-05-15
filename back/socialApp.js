const express = require("express");
const app = express();
const path = require("path");
const helmet = require('helmet');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *');
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Credentials', true);
        return res.status(200).json({});
    }
    next();
});

app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
    next()
})
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/users", require('./routes/user'));
app.use("/api/posts", require('./routes/post'));
app.use("/api/comments", require('./routes/comment'));

module.exports = app;
