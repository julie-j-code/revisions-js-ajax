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

    static updateItem(itemId, newProps) {
		const data = read();
		const [item, currentColumn] = (() => {
			for (const column of data) {
				const item = column.items.find(item => item.id == itemId);

				if (item) {
					return [item, column];
				}
			}
		})();

		if (!item) {
			throw new Error("Item not found.");
		}

		item.content = newProps.content === undefined ? item.content : newProps.content;

		// Mettre à jour la colonne et la position
		if (
			newProps.columnId !== undefined
			&& newProps.position !== undefined
		) {
			const targetColumn = data.find(column => column.id == newProps.columnId);

			if (!targetColumn) {
				throw new Error("Target column not found.");
			}

			// Supprimer l'élément de sa colonne actuelle
			currentColumn.items.splice(currentColumn.items.indexOf(item), 1);

			// Déplacer l'élément dans sa nouvelle colonne et sa nouvelle position
			targetColumn.items.splice(newProps.position, 0, item);
		}

		save(data);
	}

	static deleteItem(itemId) {
		const data = read();

		for (const column of data) {
			const item = column.items.find(item => item.id == itemId);

			if (item) {
				column.items.splice(column.items.indexOf(item), 1);
			}
		}

		save(data);
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