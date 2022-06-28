import React from 'react'
import Icon from "../image/placeholder.png"

const Main = (props) => {
    return (
        <div>
            <section className=' cards container'>
                <div className='img_div'>
                    <img src={props.image} alt={props.alt} className="image" />
                </div>
                <div className='wrapper'>
                <h3 className='title'>{props.title}</h3>
                    <div className='icon_area'>
                        <div>
                            <img src={Icon} alt="icon" />
                        </div>
                        <span>{props.location}</span>
                        <a target="_blank" rel='noreferrer' href={props.link} id="view">view on google map</a>
                    </div>
                   
                    <small><b>{props.start} - {props.end}</b></small>
                    <p className='text'>{props.text}</p>
                </div>
            </section>
        </div>
    )
}

export default Main
