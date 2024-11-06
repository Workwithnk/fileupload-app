import React from 'react'

function FinalScreen({ message, file, setFileUploaded }) {
  return (
    <>
      <svg className='w-8 h-8 mb-2 rounded-full' width="200px" height="200px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title /><path fill='green' d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z" /></svg>
      <p className={` text-black text-sm font-sans `} >{message}</p>
      <p className={` text-black my-2 text-sm font-sans mx-2 text-center `} >{file.length > 20 ? `${file.substring(0, 20)}...` : file}</p>
      <button className=' bg-green-400 rounded-full py-2 px-4 mt-2 text-white font-bold text-sm' onClick={(e) => { e.preventDefault(); setFileUploaded(false) }}>New Upload</button>
    </>
  )
}

export default FinalScreen