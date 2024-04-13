import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IconType } from 'react-icons';
import '../styles/socialButton.css'

type SocialButtonProps = {
    icon: IconType;
    url: string;
}
const SocialButton:React.FC<SocialButtonProps> = ({icon,url})=> {


    const handleClick = () => {
        window.open(url, '_blank');
    }
const Icon = icon;
  return (
    <div>
      <button className="btn btn-primary social-button" onClick={handleClick} type="submit"><Icon className='icon-button'></Icon></button>
    </div>
  )
}

export default SocialButton
