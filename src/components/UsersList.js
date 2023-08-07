import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UsersList() {
    const [listOfUsers,setListOfUsers]= useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            setListOfUsers(response.data)
        }).catch(error => console.log(error.message))
    },[])
  return (
        <>
            <h2 className='text-center my-5'>List Of Users</h2>
            {listOfUsers.map(user=>
                <ul key={user.id} class="list-group mt-3">
                    <li class="list-group-item active" aria-current="true">{user.name} ({user.username})</li>
                    <li class="list-group-item"><span className='text-primary'>
                        Adress : </span>
                        {`${user.address.city} / ${user.address.street} / ${user.address.zipcode}`}</li>
                    <li class="list-group-item"><span className='text-primary'>Email : </span>{user.email}</li>
                    <li class="list-group-item"><span className='text-primary'>Phone : </span>{user.phone}</li>
                    <li class="list-group-item"><span className='text-primary'>Website : </span>{user.website}</li>
                    <li class="list-group-item"><span className='text-primary'>Company : </span>{user.company.name}</li>
                </ul>)}       
        </>
        )
}
