const Users = require("../models/users.models")
const uuid = require("uuid")
const {hashPaswoord} = require("../utils/crypto")

const findAllUsers = async () => {
    const data = await Users.findAll({
        exclude: ["createdAt", "updatedAt", "password"]
    })
    return data
}

const finUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createdNewUser = async (userObj) => {
    const newUser = {
        id: uuid.v4(),
        cedulaCiudadania:userObj.cedulaCiudadania,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password:hashPaswoord( userObj.password),
        profileImage: userObj.profileImage,
        isActive: userObj.isActive,
        phone: userObj.phone
    }
    const data = await Users.create(newUser)
    return data
}

const updateUser = async (id, userObj) => {
    const data = await Users.update(userObj, {
        where: {
            id: id
        }
    })
    return data[0]
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
    findAllUsers,
    finUserById,
    createdNewUser,
    updateUser,
    deleteUser
}