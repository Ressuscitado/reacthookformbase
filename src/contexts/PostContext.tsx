import { PostActions, postReducer } from "@/reducers/postReducer";
import { Post } from "@/types/Posts";
import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from "react";

const STORAGE_KEY = "postContextContent";

type PostContextType = {
  posts: Post[];
  dispatch: Dispatch<PostActions>;
};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  // Inicializa o estado com um array vazio
  const [posts, dispatch] = useReducer(postReducer, []);

  // Carregar os dados do localStorage assim que o componente for montado no cliente
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    // Despacha a ação 'init' para atualizar o estado com os posts do localStorage
    dispatch({ type: "init", payload: storedPosts });
  }, []);

  // Sempre que posts mudar, atualiza o localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
};
