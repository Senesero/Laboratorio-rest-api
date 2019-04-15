import httpClient from './httpClient'
const baseUrl = 'http://localhost:3050/api/cars';

export const getAllCars = () => httpClient.get(baseUrl)

export const getCarById = (id) => {
    const url = `${baseUrl}/${id}`
    return httpClient.get(url)
}

export const addCar = (car) => httpClient.post(baseUrl, car)