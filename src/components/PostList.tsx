import { usePosts } from "@/contexts/PostContext";
import { TrashIcon } from '@heroicons/react/24/solid';

export const PostList = () => {
    const postCtx = usePosts();

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
                <div key={item.id} className="p-3 border-b border-gray-500 rounded-md">
                    <div className="font-bold text-3xl mb-2 bg-gray-600 inline-block rounded-md p-2 break-words">{item.title}</div>
                    <div className="text-xl px-2 break-words">{item.body}</div>
                    <button 
                        onClick={() => handleRemoveButton(item.id)}
                        className=" py-2 px-4 rounded-md mt-4 text-sm"
                    ><TrashIcon 
                    className="w-8 h-8 text-red-600 cursor-pointer hover:text-red-500"
                  /></button>
                </div>
            ))}
        </div>
    );
}