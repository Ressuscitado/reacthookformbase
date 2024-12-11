"use client";

import { listReducer } from "@/reducers/listReducer";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useReducer, useState } from "react";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState("");

  const handleAddButton = () => {
    if (addField.trim() === "") return false;

    dispatch({
      type: "add",
      payload: {
        text: addField.trim()
      }
    });
    setAddField("");
  }

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: {
        id
      }
    });
  }
  const handleEdit = (id: number) => {
    const item = list.find(it => it.id === id);
    if(!item) return false;

    const newText = window.prompt("Editar tarefa", item.text);
    if(!newText || newText.trim() === "") return false;

    dispatch({
      type: "editText",
      payload: {
        id,
        newText
      }
    });
  }
  const handleRemove = (id: number) => {
    if(!window.confirm("Deseja realmente excluir esta tarefa?")) return false;

    dispatch({
      type: "remove",
      payload: {
        id
      }
    })
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 to-purple-900">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center p-4 font-bold text-white">Lista de Tarefas</h1>
        <div className="max-w-3xl mx-auto bg-gray-900 flex rounded-md border border-gray-400 p-4 my-4">
          <input 
            type="text" 
            className="flex-1 rounded-md border border-white p-3 mr-2 bg-transparent text-white outline-none bg-gray-800" 
            placeholder="Adicione uma tarefa"
            value={addField}
            onChange={e => setAddField(e.target.value)}
          />
          <button 
            className="p-4 rounded-md bg-gray-800 hover:bg-gray-600"
            onClick={handleAddButton}
          >
            ADD
          </button>
        </div>
        <div className="flex justify-center">
          <p className="inline-block text-2xl text-white my-4 text-center bg-gray-600 p-2 rounded-lg">
            {list.length} {list.length === 1 ? "Item" : "itens"} na lista
          </p>
        </div>

        
        {/* Lista de itens */}
        <ul className="max-w-3xl mx-auto">
          {list.map(item => (
            <li 
              key={item.id}
              className="flex items-center p-3 my-3 border-b border-gray-400 relative"
            >
              <input 
                type="checkbox" 
                className="w-4 h-4 mr-4"
                defaultChecked={item.done}
                onClick={() => handleDoneCheckbox(item.id)} 
              />
              <p 
                className={`flex-1 text-lg break-words max-w-[70%] ${item.done ? 'line-through text-gray-500' : ''}`}
              >
                {item.text}
              </p>

              <div className="absolute right-0 flex items-center space-x-4">
                <button onClick={() => handleEdit(item.id)} className="text-gray-500 hover:text-gray-600">
                  <PencilIcon 
                    className="w-6 h-6 text-gray-500 cursor-pointer hover:text-green-700"
                  />
                </button>
                <button onClick={() => handleRemove(item.id)} className="text-gray-500 hover:text-red-500">
                  <TrashIcon 
                    className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default Page;