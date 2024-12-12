import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const Footer = () => {
    const postCtx = useContext(PostContext);

    return (
        <footer className="p-3 text-2xl text-center text-gray-800 ">
            Total de posts: {postCtx?.posts.length}
        </footer>
    );
};