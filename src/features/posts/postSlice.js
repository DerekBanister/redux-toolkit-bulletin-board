import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        // taking new date object and subtracting 10min, then converting/storing as a string
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,

        }
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,

        }
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
                        // doesnt need to be passed in, can be generated
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            hooray: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,

                        }
                    }
                }
            }
        },
        //gives us ability to add reactions to posts
        reactionAdded(state, action) {
            // destructuring action payload, comes from the action creator
            const { postId, reaction } = action.payload;
            // find post by id, then increment the reaction
            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                // increment the reaction, using the reaction as the key
                existingPost.reactions[reaction]++;
            }
        }

    }
})

//anonymous export
export const selectAllPosts = (state) => state.posts;

// create slice automatically generates action creators and action types
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;