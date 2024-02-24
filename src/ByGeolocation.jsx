import logo from './Сomponents/img/icons8-маркер-25.png'
import './Сomponents/css/TheSearchBarAndByGeolocation.css'
import { Request } from "./Request";

function GetGeoWeather() {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        Request(latitude, longitude);
    })
}
export default function ByGeolocation() {
    return(
        <button type='button' className='btn-ByGeolocation' onClick={GetGeoWeather}>По геолокации <img src={logo} alt="метка" /></button>
    )
}