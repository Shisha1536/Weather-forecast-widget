import { useState } from 'react'; 
import './App.css'
import Tumbler from "./Сomponents/jsx/Tumbler";
import TheSearchBar from "./TheSearchBar";
import ByGeolocation from "./ByGeolocation";


export function App() {
    const [listComponent, setListComponent] = useState([])

    return (
        <form className="form-parametrs">
            <div className="parametrs">
                <Tumbler label="Погода" />
                <TheSearchBar />
                <ByGeolocation funck = {setListComponent}/>
            </div>
            <div className="weather">
                {listComponent}
            </div>
        </form>
    );
}