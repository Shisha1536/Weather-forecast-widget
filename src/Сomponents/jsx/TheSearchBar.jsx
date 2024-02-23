import '../css/TheSearchBarAndByGeolocation.css'
import logo from '../img/icons8-поиск.svg'
import { RequestCity } from "./Request";

function TheSearchBar() {
    return(
        <div className='contTheSearchBar'>
            <input type="search" className='line' name='line' placeholder='Город, населенный пункт'/>
            <button className='btn_line' type='button' onClick={RequestCity}><img src={logo} alt="Поиск"/></button>
        </div>
    )
}
export default TheSearchBar;