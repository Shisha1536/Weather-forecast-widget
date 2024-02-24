import "../css/BuildingСontent.css";

export function BuildingСontent(data, setListComponent) {
    if (!Array.isArray(data)) {
        setListComponent(
            <div className="item-cont" key={data.id}>
                <h1>Температура: {data.main.temp}</h1>
                <p>Ощущается: {data.main.feels_like}</p>
                <p>Давление: {data.main.grnd_level}</p>
                <p>Влажность, %: {data.main.humidity}</p>
                <p className="item-date">Сейчас</p>
            </div>
        );
    }
    if (Array.isArray(data)) {
        const newData = data.map((item, index) => 
            <div className="item-cont" key={index}>
                <h1>Температура: {item.main.temp}</h1>
                <p>Ощущается: {item.main.feels_like}</p>
                <p>Давление: {item.main.grnd_level}</p>
                <p>Влажность, %: {item.main.humidity}</p>
                <p className="item-date">Дата: {item.dt_txt}</p>
            </div>
        )
        setListComponent(newData);
    }
}