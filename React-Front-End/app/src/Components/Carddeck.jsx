import React,{useState} from 'react'

export default function Carddeck(props) {
    const[hidden,setHidden] = useState(true)
    
    const  revealSandwich = () => {
      console.log('sandwich reveal works')
      //make card_image.sandName state dissappear by default and on click reveal
    }

  return (
    <div className='card'>
        <div className='card_body'>
            <h2 className='card_title'>{props.day}</h2>
              <h3> {props.name}</h3>
            <img id='image'className="card_image"src={props.img}></img>
        </div>
        <button className='card_btn'onClick={revealSandwich}>Sandwich Of the Day</button>
    </div>
  )
}
