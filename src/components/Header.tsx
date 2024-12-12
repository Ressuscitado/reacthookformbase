
import { PostContext } from "@/contexts/PostContext";
import { useContext, useState } from "react";

export const Header = () => {
    const postCtx = useContext(PostContext);

    const [titleInput, setTitleInput] = useState("");
    const [bodyInput, setBodyInput] = useState("");

    const handleAddButton = () => {
        if (titleInput && bodyInput) {
            postCtx?.dispatch({
                type: "add",
                payload: {
                    title: titleInput,
                    body: bodyInput
                }
            });
            setTitleInput("");
            setBodyInput("");
        }
    }   

    return (
        <header>
            <h1 className="text-3xl bg-gray-600 inline-block rounded-md mt-4 p-3">Faça um Post!</h1>
            <div className="max-w-xl flex flex-col gap-3 border border-blue-700 my-4 p-3 ">
                <input 
                    type="text" 
                    placeholder="Digite um título"
                    className="border border-gray-300 p-2 text-black text-xl"
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                />
                <textarea 
                    placeholder="Digite um texto"
                    className="h-24 border border-gray-300 p-2 text-black text-xl"
                    value={bodyInput}
                    onChange={(e) => setBodyInput(e.target.value)}
                ></textarea>
                <button 
                    className="bg-blue-600 p-3 text-white rounded-md hover:bg-blue-700"
                    onClick={handleAddButton}
                >Adicionar</button>
            </div>
            
        </header>
    );
}