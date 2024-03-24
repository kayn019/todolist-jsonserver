
import Image from 'next/image'
import AddTask from './components/AddTask'

import Sidebar from './components/Sidebar'

import { SetPro } from './components/Sidebar'
import { GetProjectName } from './components/Sidebar'



export default async function Home() {
  // let tasks = await getAllTodos(setPro());

  return (
    <>
    <div className='flex w-full h-screen'>
      <div className='bg-green-700 text-white w-full sm:w-4/12 md:w-2/12 h-full p-5 shadow-2xl'>
        <Sidebar />
      </div>
      <main className=' w-full mx-auto mt-4' >
        <div className='max-w-5xl mx-auto text-center my-5 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'><GetProjectName /></h1>
          <AddTask />
          <SetPro />
        </div>
    </main>
    </div>
    
    </>
    
  )
}
