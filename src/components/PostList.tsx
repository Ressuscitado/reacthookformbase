import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const PostList = () => {
    const postCtx = useContext(PostContext);

    const handleRemoveButton = (id: number) => {
        postCtx?.dispatch({
            type: "remove", 
            payload: {
                id
            }
        });
    }
    return (
        <div>
            {postCtx?.posts.map(item => (
                <div key={item.id} className="p-3 border-b border-gray-500">
                    <div className="font-bold text-3xl mb-2 bg-gray-600 inline-block rounded-sm p-2">{item.title}</div>
                    <div className="text-xl px-2">{item.body}</div>
                    <button 
                        onClick={() => handleRemoveButton(item.id)}
                        className="bg-red-500 text-white py-2 px-4 rounded mt-4 text-sm hover:bg-red-600"
                    >[ remover ]</button>
                </div>
            ))}
        </div>
    );
}