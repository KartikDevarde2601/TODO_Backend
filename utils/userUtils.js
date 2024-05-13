const {prisma} = require('../prisma/prisma'); 

 const insertUsers = async (data) => {
    if(!data || data.length === 0) return;
    await Promise.all(data.map(user => 
        prisma.user.create({
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                createdAt: user.created_at,
                updatedAt: user.updated_at
            }
        })
    ));
}

const  updateUsers = async (data) => {
    if(!data || data.length === 0) return;
    await Promise.all(data.map(user => 
        prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                createdAt: user.created_at,
                updatedAt: user.updated_at
            }
        })
    ));
}


const deleteUsers = async (data) => {
    if(!data || data.length === 0) return;
    await Promise.all(data.map(user => 
        prisma.user.delete({
            where: {
                id: user.id
            }
        })
    ));
}

module.exports = {insertUsers, updateUsers, deleteUsers}