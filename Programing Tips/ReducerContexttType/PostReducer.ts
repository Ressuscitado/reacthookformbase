import { Post } from "@/types/Posts";

type AddAction = {
    type: "add",
    payload: {
        title: string;
        body: string;
    }
}
type RemoveAction = {
    type: "remove",
    payload: {
        id: number;
    }
}
export type PostActions = AddAction | RemoveAction;

export const postReducer = (posts: Post[], action: PostActions) => {
    switch(action.type) {
        case "add":
            return [...posts, {
                id: Date.now(),
                title: action.payload.title,
                body: action.payload.body
            }];
        case "remove":
            return posts.filter(p => p.id !== action.payload.id);
        default:
            return posts;
    }
}