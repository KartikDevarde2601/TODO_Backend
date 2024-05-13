const  {prisma} = require("../prisma/prisma");


const insertTodos = async (data) => {
    if(!data || data.length === 0) return;
    await Promise.all(data.map(todo => 
        prisma.todos.create({
            data: {
                id: todo.id,
                title: todo.title,
                description: todo.description,
                is_completed: todo.is_completed,
                createdAt: todo.created_at,
                updatedAt: todo.updated_at
            }
        })
    ));
}

const  updateTodos = async (data) => {
    if(!data || data.length === 0) return;
    await Promise.all(data.map(todo => 
        prisma.todos.update({
            where: {
                id: todo.id
            },
            data: {
                title: todo.title,
                description: todo.description,
                is_completed: todo.is_completed,
                userId: todo.user_id,
                createdAt: todo.created_at,
                updatedAt: todo.updatedAt
            }
        })
    ));
}

const deleteTodos = async (data) => {
    if(!data || data.length === 0) return;
    await Promise.all(data.map(todo => 
        prisma.todos.delete({
            where: {
                id: todo.id
            }
        })
    ));
}

module.exports = {insertTodos, updateTodos, deleteTodos}