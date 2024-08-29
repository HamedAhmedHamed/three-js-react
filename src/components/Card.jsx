import { useState } from "react"

const Card = ({ canvas, title, price, children}) => {
  const [grab, setGrab] = useState(false)

  return (
    <section className='grid gap-y-5 shadow-lg rounded-2xl'>
      <div
        className={ grab ? 'cursor-grabbing' : 'cursor-grab'}
        onMouseLeave={() => grab && setGrab(() => !grab) }
        onMouseEnter={() => !grab && setGrab(() => grab)}
        onMouseDown={()  => setGrab(() => !grab)}
        onMouseUp={()    => setGrab(() => !grab)}
      >
        { canvas }
      </div> 
      <h2 className='text-slate-800 px-4 text-2xl text-nowrap capitalize'>{ title }</h2>
      <h3 className='text-rose-700 px-4'>${ price }</h3>
      <p className='px-4'>
        { children }
      </p>
    </section>
  )
}

export default Card