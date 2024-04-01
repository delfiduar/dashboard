"use client";

import { useEffect, useState } from "react"

export default function Profile() {
    const [userData, setUserData] = useState('');

    useEffect(() =>{
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData){
            setUserData(JSON.parse(storedUserData));}
      }, []);

    if (!userData){
        return <div>Loading...</div>
    }
    
    return (
        <div>
            <h2>Perfil Usuario</h2>
            <p>Nombre:  {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Sobre mi: {userData.bio}</p>
        </div>
    );
}
