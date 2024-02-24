import { useState } from 'react'; 
import './App.css'
import Tumbler from "./Tumbler";
import TheSearchBar from "./TheSearchBar";
import ByGeolocation from "./ByGeolocation";
//import { ListComponent } from "./Сomponents/jsx/BuildingСontent";


export function App() {
     

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