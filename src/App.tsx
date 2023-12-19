import { combineReducers } from '@reduxjs/toolkit';
import React,{useEffect} from 'react';
import Home from './Home/home';
import counterReducer from './redux/slice/dashboardSlice'
 

const App = ({getHeaders, store, reducerList}:any) => {
    console.log(store,"store-------------------------")

    useEffect(()=>{
          store.injectReducer(
           {  counterSlice:counterReducer })
    },[])

   
return <div>Hello
<br/>
    <Home getHeaders={getHeaders}/>
</div>
}


export default App;