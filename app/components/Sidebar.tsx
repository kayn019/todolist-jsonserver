'use client';
import { setCurProject } from "@/api";
import { useRouter } from "next/navigation";
import { getAllTodos } from '@/api'
import { getCurProject } from '@/api'
import TodoList from "./TodoList";



export async function SetPro (){
  
    const pro = getCurProject();
    
    
    let task = await getAllTodos(pro);
    // console.log({task});
    return <TodoList tasks={task} />
    
  }

export function GetProjectName(){
    const pro = getCurProject();
    return pro;
}



export default function Sidebar() {
    const router = useRouter();
    const handler = async (e)=>{
        setCurProject(e.target.textContent);
        
        router.refresh();
        
        
    }


    return(
        
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-black">To do list</h1>
            <a  className="hover:bg-green-400" onClick={handler}>Home</a>
            
            <ul>
            <h2 className="text-xl font-bold">Projects:</h2>
            <div className="flex hover:bg-green-400 mt-2">
               
                    
                <a onClick={handler}><li>Project1</li></a>
            </div>
            <div className="flex hover:bg-green-400 mt-1">
               
                    
                <a onClick={handler}><li>Project2</li></a>
            </div>
            <div className="flex hover:bg-green-400 mt-1">
                
                    
                <a onClick={handler}><li>Project3</li></a>
            </div>
            </ul>
            {/* <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

                <span>Add project</span>
                
            </button> */}
        </div>
        
    )
}