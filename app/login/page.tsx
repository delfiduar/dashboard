"use client";

import { useEffect, useState } from "react";


export default function UseForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [submittedData, setSubmittedData] = useState(null);


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        const userData =  { name, email, bio };

        setSubmittedData(userData);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-gray-100 rounded-md">
                <label htmlFor="name" className="block mb-2 font-serif">Nombre completo</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name}  
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full px-4 py-2 mb-4 border rounded-md"
                />
                <br />
                <label htmlFor="email" className="block mb-2 font-serif">E-mail</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value.toLowerCase())}
                    className="w-full px-4 py-2 mb-4 border rounded-md"
                />
                <br />
                <label htmlFor="bio" className="block mb-2 font-serif">Sobre mi </label>
                <textarea  
                    id="bio"  
                    value={bio}  
                    onChange={(e) => setBio(e.target.value)} 
                    className="w-full px-4 py-2 mb-4 border rounded-md"
                />
                <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">Enviar</button>
            </form>
        </div>
    );
}