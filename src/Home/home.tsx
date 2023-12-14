import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { decrement, increment } from '../redux/slice/dashboardSlice';
import { store } from '../redux/store';


const Home = ({getHeaders}:any) => {

    const [todoList, setTodoList] = useState([])
    const [loadsList, setLoadsList] = useState([])
    console.log(useSelector((state) => state ),"++++++++++++++++++++++++++++++")
    const count = useSelector((state:any) => state.counterSlice.value );
    const dispatch = useDispatch()

    console.log(count)

    useEffect(() => {
        console.log(localStorage.getItem('tkn'))
        getData()
    }, [])
    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')

        const data = await res.json()
        setTodoList(data)

    }
    const handleClick = async () => {
        console.log("Clicked", getHeaders)
        // const res = await axios.post('https://api-dev.traffix.com/loadmanagement/v1/loads',{userEmail:"oneapteam1@gmail.com", vendorIDs: []}, {
        //     headers: getHeaders
        // })

        // // const res = getHeaders({userEmail:"oneapteam1@gmail.com", vendorIDs: []})
        // setLoadsList(res.data)

    }

    console.log(loadsList,"-------------")

    return <div>

<div>
        <button
          aria-label="Increment value"
          onClick={() =>{console.log("hello increment"); dispatch(increment())}}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
  <h1> Home</h1><button onClick={handleClick}>Click me</button>
        <br />
        <br />
        <br />
        <br />
        {todoList.length > 0 ?
            (<table>

                <thead>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </thead>
                <tbody>
                    {todoList.map((e:any, i:any) => (

                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.userId}</td>
                            <td>{e.title}</td>
                            <td>{e.completed.toString()}</td>
                        </tr>

                    ))}
                </tbody>
            </table>)

            : null}


    </div>
}


export default Home;