const user = require('../models/user.model');

const insertFunc = async ({fullname,age,grade}) =>{
    const result = await user.create({fullname,age,grade});
    return result;
}

const getAllFunc = async ()=>{
    const result = await user.find();
    return result;
}

const getUniqueFunc = async (id)=>{
    const result = await user.findById(id);
    return result;
}

const updateFunc = async (id,{fullname,age,grade})=>{
    const result = await user.findByIdAndUpdate(id,{fullname,age,grade});
    return result;
}

const deleteFunc = async (id) =>{
    const result = await user.findByIdAndDelete(id);
    return result;
}

module.exports = {
    insertFunc,
    getAllFunc,
    getUniqueFunc,
    updateFunc,
    deleteFunc
}