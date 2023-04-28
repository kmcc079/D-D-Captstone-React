import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer w-full justify-center text-center text-sm tracking-tighter py-1">
        <h5>© Copywright Kati McConaghy 2023. All images property of <Link to="https://unsplash.com/">Unsplash.com</Link></h5>
    </div>
  )
}

export default Footer