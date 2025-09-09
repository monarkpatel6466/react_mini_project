import React from 'react'
import { use } from 'react'
import { Link } from 'react-router';

    const fetchData =()=>fetch('https://dummyjson.com/users').then((response)=>response.json());

    const userResource=fetchData();

export default function Users(){

    const userData = use(userResource);

    return(
        <div className="users-page">
            <div className="container">
                <h1 style={{textAlign:'center'}}>Dummy Users List</h1>
                <p style={{textAlign:'center'}}>Used Free Fake REST API for Placeholder JSON Data</p>
                <br/><br/>
                <div className="cards">
                    {
                        userData?.users.map((user)=>(
                            
                                <div className="card">
                                    <img src={user.image} alt={user.firstName} />
                                    <h3><Link to={'/feature/user/'+user.id}>{user.firstName + ' ' + user.lastName}</Link></h3>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}