import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  loadList :any
}

const initialState: CounterState = {
  value: 0,
  loadList:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    getAllLoadsList:(state,action)=>{
      state.loadList=action.payload
    },
      
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , getAllLoadsList} = counterSlice.actions

export default counterSlice.reducer