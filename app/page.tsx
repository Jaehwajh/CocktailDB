import Image from 'next/image'
import SearchDrinks from './components/drinksApi'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[4rem] lg:pt-[6rem]">
      <div className='flex flex-col pb-[2rem] gap-y-[2rem] lg:gap-y-[1rem]'>
        <p className='text-6xl font-black text-center'>Cocktail Database</p>
        <p className='text-2xl font-medium text-center px-[4rem] lg:text-lg lg:font-light'>Please input the type of alcoholic drink you want. If you want to see a wider selection of a particular alcoholic drink then input the alcohol base. (eg. Vodka, Gin, Rum etc..)</p>
        <div className='flex flex-col py-1'>
          <p className='text-sm font-light text-center italic px-[4rem]'>This application uses the Drinks API; some instructions, ingredients, and/or measurements may be written incorrectly so please make the best out of the drink details. You can always play with the ratios to make it fit your pallet.</p>
          <p className='text-sm font-bold text-center italic px-[4rem]'>Never drink and drive and always drink responsibly. Happy Drinking!</p>
        </div>
        <SearchDrinks/>
      </div>
    </main>
  )
}
