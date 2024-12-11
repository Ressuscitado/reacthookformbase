import { Item } from "@/types/Items";

type AddAction = {
    type: 'add';
    payload: {
        text: string;
    }
}
type EditTextAction = {
    type: 'editText';
    payload: {
        id: number;
        newText: string;
    }
}
type ToggleDoneAction = {
    type: 'toggleDone';
    payload: {
        id: number;
    }
}
type RemoveAction = {
    type: 'remove';
    payload: {
        id: number;
    }
}

type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction

export const listReducer = (list: Item[], action: ListActions) => {
    switch(action.type) {
        case 'add':
            return [
                ...list, 
            {        
                id: Date.now(), // Garante que cada ID seja único
                text: action.payload.text,
                done: false // Inicializa `done` como `false`
            }
        ];
        case 'editText':
            return list.map(t => {
                if (t.id === action.payload.id) {
                    t.text = action.payload.newText;
                }
            return t;
            });
        case 'toggleDone':
            return list.map(t =>
                t.id === action.payload.id 
                ? { ...t, done: !t.done } // Cria um novo objeto com a alteração
                : t // Retorna o objeto original se o ID não corresponder
            );       

        case 'remove':
            return list.filter(t => t.id !== action.payload.id);

        default:
            return list;
    }
}