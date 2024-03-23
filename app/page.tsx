import Image from 'next/image'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import Sidebar from './components/Sidebar'
import { getAllTodos } from '@/api'

export default async function Home() {
  const tasks = await getAllTodos();
  const project = 
  console.log(tasks);

  return (
    <>
    <div className='flex w-full h-screen'>
      <div className='bg-gray-200 w-full sm:w-4/12 md:w-2/12 h-full p-5 shadow-2xl'>
        <Sidebar />
      </div>
      <main className=' w-full mx-auto mt-4' >
        <div className='max-w-5xl mx-auto text-center my-5 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Todo List App</h1>
          <AddTask />
          <TodoList tasks={tasks} />
        </div>
    </main>
    </div>
    
    </>
    
  )
}
