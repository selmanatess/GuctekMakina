import React from 'react'

import '../styles/Button.css'
type ButtonProps = {
    text: string;
    onClick: () => void;
}
const Button:React.FC<ButtonProps> = ({text,onClick}) => {
  return (
    <div>
      <button className='app-button' onClick={onClick}><span>{text}</span></button>
    </div>
  )
}

export default Button;
