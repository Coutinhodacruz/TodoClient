import axios from "axios";

const baseUrl = "https://jorkehblizz.onrender.com"; 

const getAllTodo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) =>{
        console.log('data ---> ', data);
        setToDo(data)
        
    })
    
}

const addToDo = (text, setText, setToDo) => {

    axios.post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateTodo = (toDoId, text, setToDo, setText, setIsUpdated) => {

    axios.post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdated(false)
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {

    axios.post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data);
        getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}

export {getAllTodo, addToDo, updateTodo, deleteToDo}