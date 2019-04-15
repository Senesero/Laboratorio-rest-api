import {
    addCarRows,
    retrieveCarId,
    populateEditCarForm,
    retrieveCarFormEditCarForm,
    cleanTable,
} from './uiHelpers';
import {
    getAllCars,
    getCarById,
    addCar
} from './API/carsApi_axios';

document.addEventListener('DOMContentLoaded', () => {
    const buttonLoadCars = document.getElementById('loadcars');
    buttonLoadCars.addEventListener('click', (event) => {
        event.stopPropagation();
        cleanTable('cars-table');
        getAllCars().then((result) => addCarRows(result.data, 'cars-table'));
    });

    const buttonLoadCar = document.getElementById('loadcar');
    buttonLoadCar.addEventListener('click', (event) => {
        event.stopPropagation();
        const carId = retrieveCarId();
        getCarById(carId)
            .then((r) => populateEditCarForm(r.data));
    });

    const buttonAddCar = document.getElementById('add');
    buttonAddCar.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const car = retrieveCarFormEditCarForm();
        addCar(car)
            .then((_) => {
                cleanTable('cars-table');
                return getAllCars();
            })
            .then((result) => {
                addCarRows(result.data, 'cars-table');
            });
    });
});