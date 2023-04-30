import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
    },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        //gives us ability to add new posts
        postAdded: {
            reducer(state, action) {
                //.push only works in create slice, normally cannot mutate state like this
                state.push(action.payload);
            },
            // prepare function allows us to create the payload outside of the reducer
            prepare(title, content, userId) {
                return {
                    // returns payload as it needs to be formatted
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                    }
                }
            }
        }
    }
})

//anonymous export
export const selectAllPosts = (state) => state.posts;

// create slice automatically generates action creators and action types
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;