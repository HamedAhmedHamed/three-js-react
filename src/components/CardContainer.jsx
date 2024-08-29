const CardContainer = ({ children }) => {
  return (
    <main className="my-48 grid grid-cols-3 justify-center items-center gap-x-20 max-md:grid-cols-1">
      { children }
    </main>
  )
}

export default CardContainer