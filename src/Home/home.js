import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Home = ({getHeaders}) => {

    const [todoList, setTodoList] = useState([])
    const [loadsList, setLoadsList] = useState([])


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
        const res = await axios.post('https://api-dev.traffix.com/loadmanagement/v1/loads',{userEmail:"oneapteam1@gmail.com", vendorIDs: []}, {
            headers: getHeaders
        })

        // const res = getHeaders({userEmail:"oneapteam1@gmail.com", vendorIDs: []})
        setLoadsList(res.data)

    }

    console.log(loadsList, "LoadsList")
    console.log(todoList, "todoList")

    return <div>
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
                    {todoList.map((e, i) => (

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


    </div>;
}


export default Home;