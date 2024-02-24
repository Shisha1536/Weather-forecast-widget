export function BuildingСontent(data, setListComponent) {
    if (!Array.isArray(data)) {
        setListComponent(data.name);
    }
    if (Array.isArray(data)) {
        const newData = data.map((item, index) => <div key={index}>{item.dt_txt}</div>)
        setListComponent(newData);
    }
}