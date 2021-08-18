import {useState} from "react";
import {getAllCars, saveCarService} from "../services/carservices";



export default function SaveCarForm () {
    // let [carId, setCarId] = useState('');
    let [carModel, setCarModel] = useState('');
    let [carPrice, setCarPrice] = useState('');
    let [carYear, setCarYear] = useState('');
    // console.log(carYear)

    let [savedCar, setSavedCar] = useState('');
    // console.log(savedCar)

    // let carIdChange = (e) => {
    //     setCarId(e.target.value);
    // }
    let carModelChange = (e) => {
        setCarModel(e.target.value);
    }
    let carPriceChange = (e) => {
        setCarPrice(e.target.value);
    }
    let carYearChange = (e) => {
        // console.log(e.target.value)
        setCarYear(e.target.value);
    }
    const setSavedCarStateTemp = () => {
        let carTemp = {
            // carId: carId,
            model: carModel,
            price: carPrice,
            year: carYear
        }
        console.log(carTemp)
        setSavedCar(carTemp)
    }
    const saveCarToStorage = (e) => {
        e.preventDefault()
        saveCarService(savedCar)
    }

    const showAllCars = () => {
        getAllCars()
    }

    return (
        <div>
            <div>
                <form onSubmit={saveCarToStorage} onChange={setSavedCarStateTemp} onClick={showAllCars}>
                    {/*<input type="text" name={'carId'} value={carId} placeholder="Car Id" onChange={carIdChange}/>*/}
                    <input type="text" name={'carModel'} value={carModel} placeholder="Car Model" onChange={carModelChange}/>
                    <input type="number" name="price" value={carPrice} placeholder="0" onChange={carPriceChange}/>
                    <input type="number" name="year" value={carYear} placeholder="0" onChange={carYearChange}/>
                    <input type="submit"/>
                </form>
            </div>

        </div>
    )
}