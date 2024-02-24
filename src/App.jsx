import { useState } from 'react'; 
import './App.css'
import Tumbler from "./Сomponents/jsx/Tumbler";
import TheSearchBar from "./Сomponents/jsx/TheSearchBar";
import ByGeolocation from "./Сomponents/jsx/ByGeolocation";


export function App() {
    const [listComponent, setListComponent] = useState([])

    return (
        <form className="form-parametrs">
            <div className="parametrs">
                <Tumbler label="Погода" />
                <TheSearchBar funck = {setListComponent}/>
                <ByGeolocation funck = {setListComponent}/>
            </div>
            <div className="weather">
                {listComponent}
            </div>
        </form>
    );
}