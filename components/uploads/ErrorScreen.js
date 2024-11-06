import React from 'react'

function ErrorScreen({ message, setFileUploaded, setFileTypeErr }) {
  return (
    <>
      <svg className='w-8 h-8 mb-2' xmlns="http://www.w3.org/2000/svg" fill="#ef4444" width="800px" height="800px" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
      <p className='text-black text-sm font-sans'>Upload failed</p>
      <p className=' text-black text-sm font-sans '>{message}</p>
      <button className=' bg-red-400 rounded-full py-2 px-4 mt-2 text-white font-bold text-sm' onClick={(e) => { e.preventDefault(); setFileUploaded(false); setFileTypeErr(false); }}>Upload Again</button>
    </>
  )
}

export default ErrorScreen