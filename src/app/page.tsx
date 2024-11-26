"use client";

import { TodoItem } from "@/types/TodoItem";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Page = () => {
  const [itemInput, setItemInput] = useState<string>("");
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: "Exemplo de tarefa", checked: true },
    { id: 2, label: "Exemplo de tarefa", checked: false },
  ]);
  const [nextId, setNextId] = useState<number>(3); // Começa com 3, pois há 2 itens iniciais.

  const handleAddBtn = () => {
    if (itemInput.trim() === "") return;

    setList([
      ...list,
      { id: nextId, label: itemInput, checked: false }
    ]);

    setNextId(nextId + 1); // Incrementa o próximo ID.
    setItemInput("");
  };

  const deleteItem = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
    );
  };

  const toggleItem = (id: number) => {
    const newList = list.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setList(newList);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl bg-gradient-to-r from-gray-500 to-blue-500">
      <h1 className="text-4xl mt-5 bg-gray-600 p-2 rounded-lg">Lista de tarefas</h1>

      <div className="flex w-full max-w-lg my-5 p-4 rounded-md bg-gray-700 border-2 border-gray-600">
        <input 
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button onClick={handleAddBtn} className="bg-gray-600 rounded-lg hover:bg-gray-500 px-2">Adicionar</button>
      </div>
      <p className="text-2xl text-white my-4 bg-gray-600 p-2 rounded-lg">
        {list.length} {list.length === 1 ? "Item" : "itens"} na lista
      </p>

      <ul className="w-full max-w-xl list-disc p-5 bg-gray-700">
        {list.map((item) => (
          <li key={item.id} className="flex items-center justify-between m-3">
            <div className="flex items-center w-[90%]">
              <input 
                type="checkbox" 
                checked={item.checked}
                onChange={() => toggleItem(item.id)} 
                className="w-6 h-6 mr-3"
              />
              <span className={`w-[90%] ${item.checked ? "line-through text-gray-500" : ""} break-words`}>
                {item.label}
              </span>
            </div>
            <button 
              onClick={() => deleteItem(item.id)} 
              className="hover:underline">
                <TrashIcon 
                  className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700"
                />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
