import Background from '../assets/images/sword-and-sunlight.jpg'

const About = () => {
  return (
    <div
        style={{ backgroundImage: `url(${ Background })`}}
        className="about flex flex-col place-items-center justify-center mx-auto bg-cover bg-fixed h-screen">
        <div className="flex place-items-center">
            <h1 className="p-5 flex-row font-bold rounded text-xl border-2">About Us</h1>
        </div>
        <div className="about-para container flex border-2">
            <p className="flex-row text-center p-2">Created in 2023, this website serves as the home for your 
              characters and all that makes them who and what they are. With Dungeons and Dragons 5th Edition in mind, the specifications and details available to create your character align with those you'll see in the 5e handbook. I hope you find this website useful!
              Go out there and create worlds and storylines beyond imagination. 
            </p>
        </div>
    </div>
  )
}

export default About