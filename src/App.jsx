//import { useState } from 'react'; 
import './App.css'
import Tumbler from "./Сomponents/jsx/Tumbler";
import TheSearchBar from "./Сomponents/jsx/TheSearchBar";
import ByGeolocation from "./Сomponents/jsx/ByGeolocation";
//import { ListComponent } from "./Сomponents/jsx/BuildingСontent";

export function App() {
    //const [components, setComponents] = useState(); 
    //function addComponent() { 
    //    setComponents([...components]) 
    //} 

    return (
        <form className="form-parametrs">
            <div className="parametrs">
                <Tumbler label="Погода" />
                <TheSearchBar />
                <ByGeolocation />
            </div>
            <div className="weather">
                
            </div>
        </form>
    );
}