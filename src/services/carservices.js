const saveCarService = (savedCar) => {
    // console.log(savedCar)

    // fetch('http://195.72.146.25/api/v1/cars', {
    //     method: 'POST',
    //     body: JSON.stringify(savedCar),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then((response) => response.json())
        // .then((json) => console.log(json));
}

const getAllCars = () => {
    // fetch('http://195.72.146.25/api/v1/cars')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
}

export {saveCarService, getAllCars};