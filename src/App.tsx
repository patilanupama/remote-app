import React from 'react';
import Home from './Home/home';

const App = ({getHeaders}:any) => {
return <div>Hello
<br/>
    <Home getHeaders={getHeaders}/>
</div>
}


export default App;