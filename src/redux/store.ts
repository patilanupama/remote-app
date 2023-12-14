import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/dashboardSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// import { combineReducers, createStore } from 'redux'
// import counterReducer from './slice/dashboardSlice'

// // Define the Reducers that will always be present in the application
// const staticReducers = {
//   Counter: counterReducer,
 
// }

// // Configure the store
// export default function configureStore(initialState:any) {
//   const store = createStore(createReducer(), initialState)

//   // Add a dictionary to keep track of the registered async reducers
//   store.asyncReducers = {}

//   // Create an inject reducer function
//   // This function adds the async reducer, and creates a new combined reducer
//   store.injectReducer = (key:any, asyncReducer:any) => {
//     store.asyncReducers[key] = asyncReducer
//     store.replaceReducer(createReducer(store.asyncReducers))
//   }

//   // Return the modified store
//   return store
// }

// function createReducer(asyncReducers:any) {
//   return combineReducers({
//     ...staticReducers,
//     ...asyncReducers
//   })
// }