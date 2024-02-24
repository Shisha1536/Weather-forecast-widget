import logo from './Сomponents/img/icons8-маркер-25.png'
import './Сomponents/css/TheSearchBarAndByGeolocation.css'
import { Request } from "./Request";

function GetGeoWeather(test) {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        Request(latitude, longitude, test);
    })
}
export default function ByGeolocation(props) {
    const collback = () => {
        GetGeoWeather(props.funck)
    }
    //console.log('buGeo',funck)
    return(
        <button type='button' className='btn-ByGeolocation' onClick={collback}>По геолокации <img src={logo} alt="метка" /></button>
    )
}