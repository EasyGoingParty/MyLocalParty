const getAllUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id = $1";
const checkEmailExist = "SELECT s FROM users s WHERE s.email = $1";
const addUser = "INSERT INTO users (name, email, age, dob) VALUES ($1, $2, $3, $4)"; 
const deleteUser = "DELETE FROM users WHERE id = $1";
const updateUser = "UPDATE users SET name = $1 WHERE id = $2"

module.exports = {
    getAllUsers,
    getUsersById,
    checkEmailExist,
    addUser,
    deleteUser,
    updateUser,
};
