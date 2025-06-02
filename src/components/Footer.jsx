import { insta, github, linkedin } from "../assets";
import { links } from "../constants"

const Footer = () => {
  const contactLinks = links[0].links;
  return (
    <footer className='flex w-full justify-between'>
      <p>@ 2025. All rights reserved.</p>
      <div className="flex gap-4">
        {
          contactLinks.slice(0, -1).map((item, index) => (
            <a href={item.link}><img src={item.icon} alt={item.name} className="w-9 h-9"/></a>
          ))
        }
      </div>
    </footer>
  )
}

export default Footer