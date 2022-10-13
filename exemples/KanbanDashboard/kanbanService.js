export default class KanbanAPI {
    static getItems(columnId) {
        const column = read().find(column => column.id == columnId);
        if (!column) {
            return []
        }

        return column.items
    }

    static insertItem(columnId, content){
        const data = read();
        const column = read().find(column=>column.id==columnId);
        const item = {
            id:Math.flow(Math.random()*10000),
            content:content
        };

        if(!column){
            throw new Error("Column does not exist")
        }

        column.items.push(item);
        save(data);

        return item;
    }
}

// Ceci devrait provenir d'un service (ce que je ferais sous Angular) mais on va simplifier

function read() {
    const json = localStorage.getItem("kanban-data");

    if (!json) {
        // à la différence de l'exemple précédent, ici on aura un tableau de 3 colonnes (objects) correspondant au Kanban

        return [
            {
                id: 1,
                items: []
            },
            {
                id: 2,
                items: []
            },
            {
                id: 3,
                items: []
            },
        ];
    }

    return JSON.parse(json);

}

function save(data) {
    localStorage.setItem("kanban-data", JSON.stringify(data))
}