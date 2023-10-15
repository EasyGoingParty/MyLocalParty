const getAllUsers = "SELECT * FROM students";
const getUsersById = "SELECT * FROM students WHERE id = $1";
const checkEmailExist = "SELECT s FROM students s WHERE s.email = $1";
const addUser = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)"; 
const deleteUser = "DELETE FROM students WHERE id = $1";
const updateUser = "UPDATE students SET name = $1 WHERE id = $2"

module.exports = {
    getAllUsers,
    getUsersById,
    checkEmailExist,
    addUser,
    deleteUser,
    updateUser,
};
