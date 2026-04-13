import menuitems from './menuitems';
import { AiFillHome } from 'react-icons/ai';
import { BsFillinfoCircleFill } from 'react-icons/bs';


export default function header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className="flex gap-4">
       <menuitems title="Home" address="/" icon={AiFillHome}/> 
        <menuitems title="About" address="/about" icon={BsFillinfoCircleFill}/>    
       
        </div>
        <link href={"/"} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 
          rounded-lg'> IMDB</span>
          <span className='text-xl hidden sm:inline'>Clone</span>

        </link>

    </div>
  )
}
