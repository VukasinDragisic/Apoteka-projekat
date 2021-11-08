import axios from 'axios'

export const getAllProducts = () => axios.get('https://my-apoteka-projekat.herokuapp.com/products')

export const getAllUsers = () => axios.get('https://my-apoteka-projekat.herokuapp.com/users')

export const postUser = (user) => axios.post('https://my-apoteka-projekat.herokuapp.com/users', user)