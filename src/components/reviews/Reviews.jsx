import React, { useState, useEffect } from 'react'

import gokada from '../../assets/images/gokada.png'
import loystar from '../../assets/images/loystar.png'
import easyGas from '../../assets/images/easy-gas.png'
import nysc from '../../assets/images/nys-sab.png'
import max from '../../assets/images/maxng.png'
import deg360 from '../../assets/images/degrees360.png'
import quote from '../../assets/images/quote.png'

import './Reviews.css'

function Reviews() {

    const [reviews] = useState([
        {
            title: 'Worth it',
            body: 'Omozino leaves no stone unturned when it comes to the analytics of people, talent and how it influences their performance. Her understanding of the subject matter is rare and refreshing, every time I listen there always something actionable to take away.',
            author: 'Alice, Business manager'
        },
        {
            title: 'Less Stress',
            body: 'Understanding and working with behavioral data has made our lives easier; it has made it easier to understand talent and what to expect, and it has helped us in better planning and managing people\'s operations. Thank you; your sessions are priceless.',
            author: 'David, People & Culture Director'
        },
        {
            title: 'Actionable',
            body: 'People management has been the most frightening aspect of being an introverted founder, but your simplification of how to harness my personality, which I\'ve always considered a weakness, to create a business operating structure that works for me, particularly the type of people to hire, has reduced the headaches and stress I\'ve had.',
            author: 'Tobi, Bluecheq\'s founder'
        }
    ])
    const [currentReview, setCurrentReview] = useState(0)
    const [reviewTitle, setReviewTitle] = useState(reviews[currentReview].title)
    const [reviewBody, setReviewBody] = useState(reviews[currentReview].body)
    const [reviewAuthor, setReviewAuthor] = useState(reviews[currentReview].author)

    useEffect(() => {
        setReviewTitle(reviews[currentReview].title)
        setReviewBody(reviews[currentReview].body)
        setReviewAuthor(reviews[currentReview].author)
    }, [currentReview, reviews])


    return (
        <section className="reviews-section">
            <div className="reviews-div">
                <h3>Reviews</h3>
                <div className="companies">
                    <img className="companies-img" alt="gokada" src={gokada} />
                    <img className="companies-img" alt="loystar" src={loystar} />
                    <img className="companies-img" alt="easy-gas" src={easyGas} />
                    <img className="companies-img" alt="nysc" src={nysc} />
                    <img className="companies-img" alt="max" src={max} />
                    <img className="companies-img" alt="360deg" src={deg360} />
                </div>
                {/*Small screen*/}
                <div className="review d-md-none">
                    <img alt="quote" src={quote} />
                    <h4>{reviewTitle}</h4>
                    <p>
                        {/* reviewBody - because on the small screen, the review replaces itself*/}
                        {reviewBody} 
                        <br />
                        -
                        {' '}
                        {reviewAuthor}
                    </p>
                </div>
                {/*Large screen*/}
                <div id="large-screen-reviews" className="justify-content-between p-5">
                {
                    reviews.map((review) => (
                        <div className="review d-md-flex d-none">
                            <img alt="quote" src={quote} />
                            <h4>{review.title}</h4>
                            <p>
                                {review.body}
                                <br />
                                -
                                {' '}
                                {review.author}
                            </p>
                        </div>
                    ))
                }
                </div>
                <div className="gap-5 review-control-buttons">
                    <button
                        className="review-control-button"
                        onClick={() => {
                            if (currentReview > 0) setCurrentReview(currentReview - 1)
                        }}
                    >
                        <i className="fa fa-arrow-left" />
                    </button>
                    <button
                        className="review-control-button"
                        onClick={() => {
                            if (currentReview < reviews.length - 1) setCurrentReview(currentReview + 1)
                        }}
                    >
                        <i className="fa fa-arrow-right" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Reviews
