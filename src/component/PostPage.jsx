import React from 'react';
import { MdOutlineSegment } from "react-icons/md";
import Reply from './Reply';


export default function PostPage() {
    const hello = "https://mega.nz/file/xg9jkIZL#tJszyPGPMDELWbVmxE4y4HkjLpv4vZAWIcSKUckgh18"

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <h1 className="text-lg font-bold">Delta 2.0</h1>
                <img src="https://img.youtube.com/vi/P8P_S1Fjl_Q/hqdefault.jpg" alt="" className="border border-da border-black" />
                <span className="pt-4 font-serif font-bold">Description: </span>
                <span className="font-mono text-gray-400 px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, placeat! To center the button within its parent container, you can use flexbox classes to style the parent div. It seems like you are using Tailwind CSS classes, so you can modify the classes for the parent div like this:</span>
                <span className="pt-4 font-serif font-bold">Link: </span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={()=>{const linkUrl = `https://href.li/?${hello}`;        window.open(linkUrl, '_blank');}}>
                    Download 1
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={()=>{const linkUrl = `https://href.li/?${hello}`;        window.open(linkUrl, '_blank');}}>
                    Download 2
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={()=>{const linkUrl = `https://href.li/?${hello}`;        window.open(linkUrl, '_blank');}}>
                    Download 3
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={()=>{const linkUrl = `https://href.li/?${hello}`;        window.open(linkUrl, '_blank');}}>
                    Download 4
                </button>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <h1 className='text-start lg:pl-60 md:pl-60'><MdOutlineSegment className='inline-block' /><span className='inline-block'>Comment</span></h1>
            <Reply />
            {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
        </>
    );
}
