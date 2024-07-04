'use client'
import { useState, useEffect } from "react";

interface DrinkInfo {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
  }

  interface DrinksInfoProp {
    drinkId: string;
  }

  const getDrinksInfo = async (drinkId: string, setDrinksInfo: (info: DrinkInfo[]) => void) => {
    try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
        const data = await res.json();
        setDrinksInfo(data.drinks);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
  }
  
  const DrinkInfoComponent = ({ drinkId }: DrinksInfoProp) => {
    const [drinksInfo, setDrinksInfo] = useState<DrinkInfo[]>([]);
  
    useEffect(() => {
      if (drinkId) {
        getDrinksInfo(drinkId, setDrinksInfo);
      }
    }, [drinkId]);
  
    return (
      <div>
        {drinksInfo.length > 0 ? (
          <div>
            <p className='text-center text-xl font-semibold pt-3 h-[3rem] lg:text-base lg:font-medium'>{drinksInfo[0].strDrink}</p>
            <img 
            className='w-[32rem] rounded-b-lg lg:w-[20rem] mx-auto'
            src={drinksInfo[0].strDrinkThumb} 
            alt={drinksInfo[0].strDrink}
            fetchPriority='low'
            loading='lazy'
            decoding='async' />
            <div className="flex gap-x-4 justify-center py-[2rem]">
                <div className="flex flex-col gap-y-1">
                    <p className="text-lg">{drinksInfo[0].strMeasure1}</p>
                    <p className="text-lg">{drinksInfo[0].strMeasure2}</p>
                    <p className="text-lg">{drinksInfo[0].strMeasure3}</p>
                    <p className="text-lg">{drinksInfo[0].strMeasure4}</p>
                    <p className="text-lg">{drinksInfo[0].strMeasure5}</p>
                    <p className="text-lg">{drinksInfo[0].strMeasure6}</p>
                    <p className="text-lg">{drinksInfo[0].strMeasure7}</p>
                    <p className="text-lg">{drinksInfo[0].strMeasure8}</p>
                    <p className="text-lg">{drinksInfo[0].strMeasure9}</p>
                    <p className="text-lg">{drinksInfo[0].strMeasure10}</p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <p className="text-lg">{drinksInfo[0].strIngredient1}</p>
                    <p className="text-lg">{drinksInfo[0].strIngredient2}</p>
                    <p className="text-lg">{drinksInfo[0].strIngredient3}</p>
                    <p className="text-lg">{drinksInfo[0].strIngredient4}</p>
                    <p className="text-lg">{drinksInfo[0].strIngredient5}</p>
                    <p className="text-lg">{drinksInfo[0].strIngredient6}</p>
                    <p className="text-lg">{drinksInfo[0].strIngredient7}</p>
                    <p className="text-lg">{drinksInfo[0].strIngredient8}</p>
                    <p className="text-lg">{drinksInfo[0].strIngredient9}</p>
                    <p className="text-lg">{drinksInfo[0].strIngredient10}</p>
                </div>
            </div>
            <div className="px-[4rem]">
                <p className="text-center">{drinksInfo[0].strInstructions}</p>
            </div>
          </div>
        ) : (
          <p>Select a drink to see details</p>
        )}
      </div>
    );
  };
  
  export default DrinkInfoComponent;