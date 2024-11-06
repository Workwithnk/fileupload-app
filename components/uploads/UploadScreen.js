import React from 'react'
import { MoonLoader } from 'react-spinners'

function UploadScreen({ loading, handleFileChange }) {
  return (
    <>
      {
        loading ? <MoonLoader className=' mb-2' size={30} /> : <svg className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
        </svg>
      }
      <p className={`text-gray-400 font-bold'}   text-sm font-sans `} >{loading ? 'Uploading file' : 'Drop file here to upload'}</p>
      <input
        id="dropzone-file"
        className=' bg-slate-400 hidden w-full h-full cursor-pointer'
        type="file"
        onChange={handleFileChange}
      />
    </>
  )
}

export default UploadScreen