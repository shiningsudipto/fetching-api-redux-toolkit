import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//to generate action need reducer-name/action-name
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
})

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;
        });
    }
})
export default postSlice.reducer;