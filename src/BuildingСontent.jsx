export const ListComponent = [];

export function BuildingСontent(data) {
    if (typeof(data) != Array) {
        let item = <div>
            {data}
        </div>
        if (ListComponent.length > 0) {
            ListComponent.splice(0, ListComponent.length);;
        }
        ListComponent.push(item);
    } else {
        if (ListComponent.length > 0) {
            ListComponent.splice(0, ListComponent.length);;
        }
        data.forEach(element => {
            let item = <div>
                {element}
            </div>
            ListComponent.push(item);
        });
    }
}