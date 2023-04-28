import Background from '../assets/images/torch-and-castle-ls.jpg'
// import Background from '../assets/images/barbarian-and-sunset.jpg'

const Home = () => {
  return (
    <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className="home flex flex-row justify-center mx-auto bg-cover bg-fixed">
      <div className="flex place-items-center h-screen">
        <h1 className="p-5 font-bold rounded text-xl border-2">Where your characters come alive</h1>
      </div>
    </div>
  )
}

export default Home