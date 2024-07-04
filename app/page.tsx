import Image from 'next/image'
import SearchDrinks from './components/drinksApi'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[4rem] lg:pt-[6rem]">
      <div className='flex flex-col pb-[2rem] gap-y-[2rem] lg:gap-y-[1rem]'>
        <p className='text-6xl font-black text-center'>Cocktail Database</p>
        <p className='text-2xl font-medium text-center px-[4rem] lg:text-lg lg:font-light'>Please input the type of alcoholic drink you want. If you want to see a wider selection of a particular alcoholic drink then input the alcohol base. (eg. Vodka, Gin, Rum etc..)</p>
        <SearchDrinks/>
      </div>
    </main>
  )
}
