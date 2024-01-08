// import reactLogo from '../assets/react.svg' 
import { FaBeer, FaReply } from 'react-icons/fa'; 
import { FaRegMessage } from "react-icons/fa6"; 
 
export default function Posts() { 
    const reactLogo = "https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/delta%20batch-2_mvxhpplauw20tr.jpeg" 
    return ( 
        <> 
            <div className="p-1 flex flex-col lg:px-48"> 
                <div className="grid grid-cols-12 grid-row-3 bg-gradient-to-r from-gray-100 to-gray-300 border-solid border-teal-600 border-2 m-2 rounded"> 
                    <div className='col-start-1 col-end-2.5 row-start-1 row-end-3 flex justify-items-center items-center'> 
                        <img className='size-10 bg-cover w-full h-11 mt-2 px-1' src={reactLogo} alt="" /> 
                    </div> 
                    <div className='col-start-2 col-end-11 justify-self-start uppercase text-sm font-bold cursor-pointer'>12th Fail box office: Despite Animal, Dunki & Salaar's dominance, Vikrant Massey starrer continues it steady run 
                    </div> 
                    <div className=' col-start-11 to col-end-12 row-start-1 row-end-3 flex justify-self-center items-center text-center'> 
                        <FaRegMessage /> 
                    </div> 
                    <div className='col-start-2 col-end-5 row-span-2 justify-self-start font-mono text-[10px]'><FaReply color='gray'/> 
                        <span className='font-bold text-gray-400'>admin</span>replied 14 days ago</div> 
                </div> 
            </div> 
        </> 
    ) 
}
