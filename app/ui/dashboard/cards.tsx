"use client";

import React, { useState, useEffect } from 'react';
import { lusitana } from '@/app/ui/fonts';
import  api from '@/app/pages/api/api.json';

interface Item{
  frase: string;
  autor: string;
}

export function Card(){
  
  const [randomItem, setRandomItem] = useState<Item | null>(null);

  const getRandomItem = () =>{
    if (api.length === 0){
      setRandomItem(null);
      return;
    }
    const randomIndex= Math.floor(Math.random() * api.length);
    const item = api[randomIndex];
    setRandomItem(item);  
  };


  useEffect(()=> {
    getRandomItem();
  }, []);
 
  const handleButton = () => {
    getRandomItem();
  }


  return (
    <div className="flex flex-col justify-between h-full max-w-x mx-auto  rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className='flex-1 mb-4'>
      {randomItem !== null && (
        <div>
          <h3 className="w-full ml-2 text-lg font-medium mb-4">{randomItem.frase}</h3>
          <p className={"w-full ml-2 mb-4 md-4 text-sm font-medium"}>
              - {randomItem.autor}
          </p>
        </div>
      )}
      </div>
      <button 
        onClick={handleButton} 
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        Siguiente
      </button>
    </div>
  );
}
//truncate rounded-xl bg-white px-4 py-8 text-center text-2xl
//rounded-xl bg-gray-50 p-2 shadow-sm
