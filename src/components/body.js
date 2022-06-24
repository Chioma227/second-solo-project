import React from 'react'
import Data from '../data'
import Main from './Main'
import { Spring } from 'react-spring'

const Body = () => {
    const datas = Data.map((items) => {
        return (
            <Main
                key={items.id}
                image={items.image}
                alt={items.alternative}
                location={items.location}
                link={items.mapLink}
                title={items.title}
                start={items.startDate}
                end={items.endDate}
                text={items.description}
            />
        )
    })
    return (
        <Spring
        from = {{opacity: 0, marginTop: -500}}
        to = {{opacity: 1, marginTop: 0}}
        >
            {props => (
                <div style={props}>
                    <div>
                        {datas}
                    </div>
                </div>
            )}
        </Spring>
    )
}

export default Body
