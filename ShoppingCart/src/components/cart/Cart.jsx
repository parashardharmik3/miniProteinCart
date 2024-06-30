import React, { useEffect, useState } from 'react'
import { add,remove } from '../../features/carts/cartSlice'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useSelector,useDispatch } from 'react-redux'
import './Cart.css'
export default function Cart() {
    const curMode = useSelector(state => state.modes.modes);
    const curCart = useSelector(state => state.carts.carts);
    const dispatch = useDispatch();
    const [localData, setLocalData] = useState([]);
    useEffect(()=>{
        setLocalData(curCart);
    },[curCart])
  return (
    <div className='homeContainer '>
      {localData.map((datas) => (
        <div key={datas.id} className={`${curMode ? 'bg-white text-black' : 'bg-black text-white'} cart flex flex-col justify-between items-center p-4`}>
          <div className={`${curMode ? 'bg-black' : 'bg-white'} card ${curMode ? 'border-black' : 'border-white'}`}>
            <img className='cardImage' src={datas.picture} alt="proteinImage" />
            <div className={`${curMode ? 'text-white' : 'text-black'} flex justify-center items-center`}>Price: {datas.price}$</div>
            <div className='btnContainer flex justify-between items-center'>
              <button onClick={() => handleAddToCart(datas)} className={`${curMode ? 'bg-white text-black' : 'bg-black text-white'} font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out text-sm`}>
                +
              </button>
              <input className={`w-9 border-r-8 ${curMode ? 'bg-white text-black' : 'bg-black text-white'} `} type="text" name="" id="" />
              <button onClick={() => handleAddToCart(datas)} className={`${curMode ? 'bg-white text-black' : 'bg-black text-white'} font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out text-sm`}>
                -
              </button>
            </div>
            <button>
            <MdOutlineDeleteOutline />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

