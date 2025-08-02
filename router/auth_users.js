const express = require('express');
const jwt = require('jsonwebtoken');
const regd_users = express.Router();

let books = require("../booksdb.js");
let users = [];

const isValid = (username) => {
    return username.length > 0;
    };

    // No changes needed here for Tasks 10-13

    module.exports.authenticated = regd_users;
    module.exports.isValid = isValid;
    module.exports.users = users;
    