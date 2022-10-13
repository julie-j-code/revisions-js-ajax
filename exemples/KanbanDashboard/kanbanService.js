export default class KanbanAPI {


}

// Ceci devrait provenir d'un service (ce que je ferais sous Angular) mais on va simplifier

function read() {
    const json = localStorage.getItem("kanban-data");

    if(!json){
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

function save(data){
    localStorage.setItem("kanban-data", JSON.stringify(data))
}