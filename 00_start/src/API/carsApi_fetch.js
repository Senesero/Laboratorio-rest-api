const createRequest = (url, options) => {
    const _options = (options) ? options : {};
    return fetch(url, _options)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        })
}

const baseUrl = 'http://localhost:3050/api/cars';

export const getAllCars = () => {
    const url = baseUrl;
    return createRequest(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
};

export const getCarById = (id) => {
    const url = `${baseUrl}/${id}`;
    return createRequest(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
};

export const addCar = (car) => {
    const url = baseUrl;
    return createRequest(url, {
        method: 'POST',
        body: JSON.stringify(car),
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
};