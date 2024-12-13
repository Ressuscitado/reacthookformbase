import { usePosts } from "@/contexts/PostContext";

export const Footer = () => {
    const postCtx = usePosts();

    return (
        <footer className="p-3 text-2xl text-center text-gray-800 ">
            Total de posts: {postCtx?.posts.length}
        </footer>
    );
};