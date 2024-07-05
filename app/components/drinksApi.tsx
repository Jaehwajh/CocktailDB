'use client'
import { useState, ChangeEvent } from 'react';
import DrinkInfoComponent from './drinksInfo';
import 'animate.css';

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}


export default function DrinkSearch() {
  const [drink, setDrink] = useState<string>('');
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [selectDrink, setSelectDrink] = useState<string | null>(null);
  const [showDrinkInfo, setShowDrinkInfo] = useState(false);

  const getDrinks = async () => {
    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`);
      const data = await res.json();
      setDrinks(data.drinks);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDrink(e.target.value);
  };

  const combineClick = (id: string) => {
    setSelectDrink(id);
    setShowDrinkInfo(true)
  }

  return (
    <div className=''>
      <div className='flex flex-col justify-center gap-y-[2rem] lg:flex-row lg:gap-x-[2rem] lg:w-auto'>
        <input 
            type="text"
            className='bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 peer w-[16rem] h-[3rem] text-black mx-auto lg:my-auto lg:mx-0'
            value={drink} 
            onChange={handleInputChange} 
            placeholder="e.g Vodka" 
        />
        <button className='bg-neutral-800 border border-neutral-900 px-12 py-4 rounded-full w-[16rem] mx-auto lg:w-auto lg:mx-0 xl:hover:bg-neutral-600' onClick={getDrinks}>Get Drinks</button>
      </div>
      <div className="grid grid-cols-1 gap-y-[2rem] py-[4rem] md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-6 ">
        {drinks.map((element) => (
          <div className='relative transition ease-in-out lg:cursor-pointer xl:hover:scale-[1.03] xl:hover:opacity-90' key={element.idDrink} onClick={() => combineClick(element.idDrink)}>
            <div className='bg-neutral-900 rounded-t-lg'>
                <p className='text-center text-xl font-semibold pt-3 h-[4rem] lg:text-base lg:font-medium'>{element.strDrink}</p>
            </div>
            <img 
            className='w-auto rounded-b-lg lg:w-[20rem]'
            src={element.strDrinkThumb} 
            alt={element.strDrink}
            fetchPriority='low'
            loading='lazy'
            decoding='async'
            />
          </div>
        ))}
      </div>
        {showDrinkInfo ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[40rem] my-6 mx-auto max-w-3xl animate__animated animate__fadeIn animate__faster">
                <div className="border-0 rounded-lg shadow-lg relative w-full bg-neutral-900 outline-none focus:outline-none">
                {selectDrink&& <DrinkInfoComponent drinkId={selectDrink} />}
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-[2rem] text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowDrinkInfo(false)}
                >
                  Close
                </button>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-20 bg-black"></div>
          </>
        ): null}
      </div>
  );
}