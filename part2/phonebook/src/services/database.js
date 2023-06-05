import axios from 'axios'
const url = 'http://localhost:8009/persons'

const getAll = () => {
    return axios.get(url)
}

const addNewPerson = (newPerson) => {
    return axios.post(url, newPerson)
}


export default {
    getAll: getAll,
    create: addNewPerson
}