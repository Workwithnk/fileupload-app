import React from 'react'

function TableView({ allFiles }) {
  return (
    <>
      {
        allFiles.length > 0 && <table className='text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5 lg:mt-0 lg:ml-5'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='px-6 py-3'>File Name</th>
              <th className='px-6 py-3'>File Link</th>
            </tr>
          </thead>
          <tbody>
            {
              allFiles.map(res => {
                return <tr key={res.url} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700' >
                  <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'> {res.name}</td>
                  <td className='px-6 py-4 flex justify-center font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    <a target='_blank' href={res.url}>
                      <svg className=' w-5 h-5' fill="#22c55e" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10,17.55,8.23,19.27a2.47,2.47,0,0,1-3.5-3.5l4.54-4.55a2.46,2.46,0,0,1,3.39-.09l.12.1a1,1,0,0,0,1.4-1.43A2.75,2.75,0,0,0,14,9.59a4.46,4.46,0,0,0-6.09.22L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33L11.37,19A1,1,0,0,0,10,17.55ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L12.63,5A1,1,0,0,0,14,6.45l1.73-1.72a2.47,2.47,0,0,1,3.5,3.5l-4.54,4.55a2.46,2.46,0,0,1-3.39.09l-.12-.1a1,1,0,0,0-1.4,1.43,2.75,2.75,0,0,0,.23.21,4.47,4.47,0,0,0,6.09-.22l4.55-4.55A4.49,4.49,0,0,0,20.69,3.31Z" /></svg>
                    </a>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      }
    </>
  )
}

export default TableView