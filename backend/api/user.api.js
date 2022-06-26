const {insertFunc,getAllFunc,getUniqueFunc,updateFunc,deleteFunc} = require('../dal/user.dal');

const createUser = async ({fullname,age,grade}) =>{
    const result = await insertFunc({fullname,age,grade});
    return result;
}

const getUsers = async () =>{
    const result = await getAllFunc();
    return result;
}

const getUser = async (id) => {
    const result = await getUniqueFunc(id);
    return result;
}

const updateUser = async (id,{fullname,age,grade})=>{
    const result = await updateFunc(id,{fullname,age,grade});
    return result;
}

const deleteUser =  async (id) =>{
    const result = await deleteFunc(id);
    return result;
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}