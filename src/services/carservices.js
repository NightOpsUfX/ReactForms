const saveCarService = (savedCar) => {
    // console.log(savedCar)
    return fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(savedCar),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        // .then((json) => json);
}

const getAllCars = () => {
    return fetch('http://195.72.146.25/api/v1/cars')
        .then((response) => response.json())
        .then((json) => json)
}

export {saveCarService, getAllCars};

