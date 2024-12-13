import { Post } from "@/types/Posts";

// Tipos de ação para adicionar e remover posts
type AddAction = {
  type: "add";
  payload: {
    title: string;
    body: string;
  };
};

type RemoveAction = {
  type: "remove";
  payload: {
    id: number;
  };
};

type InitAction = {
  type: "init";
  payload: Post[];
};

export type PostActions = AddAction | RemoveAction | InitAction;

export const postReducer = (posts: Post[], action: PostActions): Post[] => {
  switch (action.type) {
    case "add":
      return [
        ...posts,
        {
          id: Date.now(),
          title: action.payload.title,
          body: action.payload.body,
        },
      ];
    case "remove":
      return posts.filter((p) => p.id !== action.payload.id);
    case "init":
      // Inicializa o estado com os posts do localStorage
      return action.payload;
    default:
      const _: never = action; // Garante que apenas ações válidas sejam passadas
      return posts;
  }
};
