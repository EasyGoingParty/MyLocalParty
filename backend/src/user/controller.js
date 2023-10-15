const pool = require('../../db');
const queries = require('./queries');

const getAllUsers = (req, res) => {
    pool.query(queries.getAllUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const {name, email, age, dob} = req.body;
    pool.query(queries.checkEmailExist, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exist");
        }
        pool.query(queries.addUser, [name, email, age, dob], (error, results) => {
            if (error) throw error;
            res.status(201).send("User created successfully");
        })
    });
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById, [id], (error, results) => {
        const isUserExist = results.rows.length;
        if (!isUserExist) {
            res.send("There isn`t such user");  
        }
        
        pool.query(queries.deleteUser, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User deleted successfully");
        });
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;
    pool.query(queries.getUsersById, [id], (error, results) => {
        const isUserExist = results.rows.length;
        if (!isUserExist) {
            res.send("There isn`t such user");  
        }
        
        pool.query(queries.updateUser, [name, id], (error, results) => {
            if (error) throw error; 
            res.status(200).send("User updated successfully");
        });
    });
}

module.exports = {
    getAllUsers,
    getUsersById,
    addUser,
    deleteUser,
    updateUser,
};