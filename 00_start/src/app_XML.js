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
} from './API/carsApi_XML';

document.addEventListener('DOMContentLoaded', () => {
    const buttonLoadCars = document.getElementById('loadcars');
    buttonLoadCars.addEventListener('click', (event) => {
        event.stopPropagation();
        cleanTable('cars-table');
        getAllCars().then((result) => {
            // console.log(JSON.parse(result))
            addCarRows(JSON.parse(result), 'cars-table')
        });
    });

    const buttonLoadCar = document.getElementById('loadcar');
    buttonLoadCar.addEventListener('click', (event) => {
        event.stopPropagation();
        const carId = retrieveCarId();
        getCarById(carId)
            .then((r) => {
                // console.log(JSON.parse(r))
                populateEditCarForm(JSON.parse(r))
            });
    });

    const buttonAddCar = document.getElementById('add');
    buttonAddCar.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const car = retrieveCarFormEditCarForm();
        addCar(car)
            // .then((_) => {
            //     cleanTable('cars-table');
            //     return getAllCars();
            // })
            // .then((result) => {
            //     // console.log(JSON.parse(result))
            //     addCarRows(JSON.parse(result), 'cars-table');
            // });
    });
});