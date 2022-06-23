import React from 'react'
import Icon from "../image/placeholder.png"

const Main = (props) => {
    return (
        <div>
            <section className='d-flex gap-4 align-items-center cards container'>
                <div>
                    <img src={props.image} alt = {props.alt} className= "image"/>
                </div>
                <div className='wrapper'>
                    <div>
                        <img src={Icon} alt = "icon"/>
                        <span>{props.location}</span>
                       <a target="_blank" rel='noreferrer' href={props.link} id = "view">view on google map</a>
                    </div>
                    <h3 className='title'>{props.title}</h3>
                    <small><b>{props.start} - {props.end}</b></small>
                    <p>{props.text}</p>
                </div>
            </section>
        </div>
    )
}

export default Main
