
import {getAllCars, saveCarService} from "../services/carservices";
import {useState, useEffect} from "react";
import Cars from "./Cars";

export default function SaveCarForm () {
    // let [carId, setCarId] = useState('');
    let [carModel, setCarModel] = useState('');
    let [carPrice, setCarPrice] = useState('');
    let [carYear, setCarYear] = useState('');

    let [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars().then((value) => setCars(value))
    }, [])

    let carModelChange = (e) => {
        setCarModel(e.target.value);
    }
    let carPriceChange = (e) => {
        setCarPrice(e.target.value);
    }
    let carYearChange = (e) => {
        console.log(e.target)
        setCarYear(e.target.value);
    }

    const saveCarToStorage = (e) => {
        e.preventDefault()
        saveCarService({
            model: carModel,
            price: carPrice,
            year: carYear
        }).then(value => {
            setCars([...cars, value])
        })
    }

    return (
        <div>
            <div>
                <form onSubmit={saveCarToStorage} >
                    {/*<input type="text" name={'carId'} value={carId} placeholder="Car Id" onChange={carIdChange}/>*/}
                    <input type="text" name={'carModel'} value={carModel} placeholder="Car Model" onChange={carModelChange}/>
                    <br/>
                    <input type="number" name="price" value={carPrice} placeholder="0" onChange={carPriceChange}/>
                    <br/>
                    <input type="number" name="year" value={carYear} placeholder="0" onChange={carYearChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
            <br/>
            <div>
                {cars.map(value =>
                    <div>
                        <p>{value.id}</p>
                        <p>{value.model}</p>
                        <p>{value.price}</p>
                        <p>{value.year}</p>
                        <br/>
                    </div>
                )}
            </div>
        </div>
    )
}