import React from 'react'
import './Products.css'
import fire from '../../assets/images/fire.png'
import circles from '../../assets/images/three-circles.png'
import heart from '../../assets/images/heart.png'
import star from '../../assets/images/leadership.png'
import clock from '../../assets/images/clock.png'
import sim from '../../assets/images/folder.png'
import delegation from '../../assets/images/delegation.png'
import tag from '../../assets/images/tag.png'
import groupImage from '../../assets/images/group-image.png'

function Products() {
  return (
    <section className="py-5 product-section">
        <div class="product-section-top">
            <div className="product-section-top-left">
                <h3 className="px-5 d-flex flex-column mb-4">
                    <span className="d-flex align-items-center gap-2">
                        <span>Who</span>
                        <img alt="fire" src={fire} />
                    </span>
                    <span>is this for?</span>
                </h3>
                <p className="px-5">A talent accelerator to reduce people management headaches</p>
            </div>
            <div className="px-5 d-flex flex-column flex-md-row gap-3 product-section-top-right">
                <div className="product-group">
                    <img alt="circle" src={circles} />
                    <p>Team Leads</p>
                    <p>Line Managers</p>
                </div>
                <div className="product-group">
                    <img alt="circle" src={circles} />
                    <p>Product Managers</p>
                    <p>Head of Businesses</p>
                </div>
                <div className="product-group">
                    <img alt="circle" src={circles} />
                    <p>COOs</p>
                    <p>HR Professionals</p>
                </div>
            </div>
        </div>
        <h4>The value of understanding people psychology in the workplace.</h4>
        <div className="product-section-bottom">
            <div className="product-properties gap-4">
                <div>
                    <div>
                        <img alt="reduced stress" src={heart} />
                        <p>Reduced Stress</p>
                    </div>
                    <div>
                        <img alt="effective leadership" src={star} />
                        <p>Effective<br />Leadership</p>
                    </div>
                    <div>
                        <img alt="productive workplace-culture" src={clock} />
                        <p>Productive<br />Workplace-Culture</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img alt="lesser micromanagement" src={sim} />
                        <p>Lesser<br />Micromanagement</p>
                    </div>
                    <div>
                        <img alt="better delegation" src={delegation} />
                        <p>Better<br />Delegation</p>
                    </div>
                    <div>
                        <img alt="increased work ownership" src={tag} />
                        <p>Increased<br />Work-ownership</p>
                    </div>
                </div>
            </div>
            <img className="product-img" alt="group" src={groupImage} />
        </div>
    </section>
  )
}

export default Products