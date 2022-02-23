import { createSlice } from "@reduxjs/toolkit";
import { PostInterface } from "../../interfaces/postInterface";

export interface postInfo{
    posts: PostInterface[] | null;
}

const initialState: postInfo = {
    posts: null
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
});

export const {
    setPosts,
} = postSlice.actions;

export const selectPosts = (state: any) => state.post;

export default postSlice.reducer;