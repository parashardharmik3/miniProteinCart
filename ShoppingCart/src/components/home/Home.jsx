import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './Home.css';
import { add } from '../../features/carts/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const curMode = useSelector(state => state.modes.modes);
  const dispatch = useDispatch();
  const [proteinData, setProteinData] = useState([]);

  // Function to fetch data from server
  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:8080/proteins');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  // useEffect to fetch data on component mount
  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setProteinData(data); // Set fetched data to state
    }
    getData();
  }, []); // Empty dependency array means this effect runs only once on mount

  function handleAddToCart(item) {
    dispatch(add(item));
  }

  // Render function to display fetched proteinData
  return (
    <div className='homeContainer'>
      {proteinData.map((datas) => (
        <div key={`${datas.id}x`} className={`${curMode ? 'bg-white text-black' : 'bg-black text-white'} Home p-4`}>
          <div className={`${curMode ? 'bg-black' : 'bg-white'} card ${curMode ? 'border-black' : 'border-white'}`}>
            <img className='cardImage' src={datas.picture} alt="proteinImage" />
            <div className={`${curMode ? 'text-white' : 'text-black'} description flex justify-center items-center`}>{datas.description}</div>
            <div className={`${curMode ? 'text-white' : 'text-black'} flex justify-center items-center`}>Price: {datas.price}$</div>
            <div className='btnContainer'>
              <button onClick={() => handleAddToCart(datas)} className={`${curMode ? 'bg-white text-black' : 'bg-black text-white'} font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out text-sm`}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
