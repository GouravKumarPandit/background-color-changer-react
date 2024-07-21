function AllColorButton({changeBgColor}) {
  return (
    <div className='w-auto text-center rounded-xl'>
        <button className='bg-red-600 px-5 py-3 mx-5 rounded-xl' onClick={() => changeBgColor("bg-red-600")}>Red</button>
        <button className='bg-green-600 px-5 py-3 mx-5 rounded-xl' onClick={() => changeBgColor("bg-green-600")}>Green</button>
        <button className='bg-blue-600 px-5 py-3 mx-5 rounded-xl' onClick={() => changeBgColor("bg-blue-600")}>Blue</button>
        <button className='bg-purple-700 px-5 py-3 mx-5 rounded-xl' onClick={() => changeBgColor("bg-purple-700")}>Purple</button>
        <button className='bg-teal-700 px-5 py-3 mx-5 rounded-xl' onClick={() => changeBgColor("bg-teal-700")}>Teal</button>
        <button className='bg-orange-600 px-5 py-3 mx-5 rounded-xl' onClick={() => changeBgColor("bg-orange-600")}>Orange</button>
        <button className='bg-pink-700 px-5 py-3 mx-5 rounded-xl' onClick={() => changeBgColor("bg-pink-700")}>Pink</button>
        <button className='bg-amber-800 px-5 py-3 mx-5 rounded-xl' onClick={() => changeBgColor("bg-amber-800")}>Amber</button>
        <button className='bg-yellow-400 px-5 py-3 mx-5 rounded-xl' onClick={() => changeBgColor("bg-yellow-400")}>Yellow</button>
        <button className='bg-cyan-500 px-5 py-3 mx-5 rounded-xl' onClick={() => changeBgColor("bg-cyan-500")}>Cyan</button>
        <button className='bg-amber-100 px-5 py-3 mx-5 text-black rounded-xl' onClick={() => changeBgColor("bg-amber-100")}>Reset</button>
    </div>
  )
}

export default AllColorButton