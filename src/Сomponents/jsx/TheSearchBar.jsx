import '../css/TheSearchBarAndByGeolocation.css'
import logo from '../img/icons8-поиск.svg'
import { RequestCity } from "./Request";

function TheSearchBar(props) {
    const collback = () => {
        RequestCity(props.funck)
    }
    return(
        <div className='contTheSearchBar'>
            <input type="search" className='line' name='line' placeholder='Город, населенный пункт'/>
            <button className='btn_line' type='button' onClick={collback}><img src={logo} alt="Поиск"/></button>
        </div>
    )
}
export default TheSearchBar;