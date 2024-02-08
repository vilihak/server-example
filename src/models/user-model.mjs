import promisePool from '../utils/database.mjs';

const listAllUsers = async () => {
try {
  const sql = 'SELECT username, user_id FROM Users';
  const [rows] = await promisePool.query(sql);
  //console.log(rows);
  return rows;
} catch (error) {
    console.error('listAllUsers', error);
    return {error: 500, message: 'DB ERROR'}
}
};

const selectUserById = async (id) => {
    try {
        const sql = 'SELECT * FROM Users WHERE user_id=?';
        const params = [id];
        const [rows] = await promisePool.query(sql, params);
        //console.log(rows);
        // If nothing is found with the user id, result arrau is empty ([])
        if (rows.length === 0) {
            return {error: 404, message: 'USER NOT FOUND'};
        }
        // REMOVES PASSWORD PROPERTY FROM RESULT
        delete rows[0].password;
        return rows[0];
    } catch (error) {
        console.error('selectUserById', error);
        return {error: 500, message: 'DB ERROR'};
    }
};

const insertUser = async (user) => {
    try {
        const sql = 'INSERT INTO Users (username, password, email) VALUES (?, ?, ?)';
        const params = [user.username, user.password, user.email];
        const [result] = await promisePool.query(sql, params);
        //console.log(result);
        return {message: 'New user created', user_id: result.insertId};
    } catch (error) {
        // NOW DUPLICATE ENTRY ERROR IS GENERIC 500 ERROR, SHOULD BE FIXED TO '400: BAD REQUEST'
        console.error('inserUser', error);
        return {error: 500, message: 'DB ERROR'};
    }


};

const updateUserById = async (user) => {
    try {
        const sql = 'UPDATE Users SET username=?, password=?, email=? WHERE user_id=?';
        const params = [user.username, user.password, user.email, user.user_id];
        const [result] = await promisePool.query(sql, params);
        console.log(result);
        return {message: 'User updated', user_id: user.user_id};
    } catch (error) {
        // NOW DUPLICATE ENTRY ERROR IS GENERIC 500 ERROR, SHOULD BE FIXED TO '400: BAD REQUEST'
        console.error('updateUserById', error);
        return {error: 500, message: 'DB ERROR'};
    }

};

const deleteUserById = async (id) => {
    try {
        const sql = 'DELETE FROM Users WHERE user_id=?';
        const params = [id];
        const [result] = await promisePool.query(sql, params);
        console.log(result);
        if (result.affectedRows ===0 ){
            return {error: 404, message: 'User not found'}
        }
        return {message: 'User deleted', user_id: user.user_id};
    } catch (error) {
        // NOW DUPLICATE ENTRY ERROR IS GENERIC 500 ERROR, SHOULD BE FIXED TO '400: BAD REQUEST'
        console.error('deleteUserById', error);
        return {error: 500, message: 'DB ERROR'};
    }
};

export {listAllUsers, selectUserById, insertUser, updateUserById, deleteUserById};

