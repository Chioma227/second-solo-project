import React from 'react'
import Data from '../data'
import Main from './Main'

const Body = () => {
    const datas = Data.map((items) => {
        return (
            <Main
            key = {items.id}
                image={items.image}
                alt={items.alternative}
                location={items.location}
                link={items.mapLink}
                title = {items.title}
                start = {items.startDate}
                end = {items.endDate}
                text = {items.description}
            />
        )
    })
    return (
        <div>
            {datas}
        </div>
    )
}

export default Body
