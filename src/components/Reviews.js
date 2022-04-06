import { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { reviews } from '../data'

import './Reviews.css'

const Reviews = () => {

    const [index, setIndex] = useState(0)
    const { name, image, text } = reviews[index]

    const goNext = () => {
        setIndex(index => 
            checkIndex(index + 1)
        )
    }

    const goPrev = () => {
        setIndex(index => checkIndex(index - 1))
    }

    const checkIndex = (num) => {
        if (num > reviews.length - 1) {
            return 0
        }

        if (num < 0) {
            return reviews.length - 1
        }

        return num
    }

    const handleRandom = () => {
        let newIndex = Math.floor(Math.random() * reviews.length)

        if (newIndex === index) {
            newIndex = index + 1
        }

        setIndex(checkIndex(newIndex))
    }

    return (
        <div className="reviews">
            <div className="reviews__img">
                <img src={ image } alt={ name } />
            </div>

            <div className="reviews__name">{ name }</div>

            <p className="reviews__text">{ text }</p>

            <div className="reviews__btn">
                <button onClick={ goPrev }><FaAngleLeft /></button>
                <button onClick={ goNext }><FaAngleRight /></button>
            </div>

            <div className="reviews__random">
                <button onClick={ handleRandom }>Random</button>
            </div>
        </div>
    )
}

export default Reviews