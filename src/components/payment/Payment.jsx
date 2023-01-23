import React from 'react';
import switchChange from '../../assets/images/switch.png';
import './Payment.css';

function payment() {
  return (
    <section>
        <div id='learning-options'>
            <h2>Learning options</h2>
            <p>Choose the learning plan for you.</p>
        </div>
        <div id='currencies'>
            <p>USD</p>
            <span><img alt="switch-change" src={switchChange}/> NGN</span>
        </div>
        <div id='payment-offers'>
        {/*first box*/}
            <div id='offer-type-1'>
                <div className='d-flex flex-column'>
                    <p className='offer-type-p1'>DIY</p>
                    <div className='d-flex align-items-center gap-1 offer-type-aside'>
                        <p className='offer-type-p2'>N22,500</p>
                        <span> / lesson</span>
                    </div>
                    <p className='offer-type-p3'>Early bird offer</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <p className='offer-type-p4'>
                        Begin boosting your people management abilities by picking specific classes of interest, and discover what you need to optimize the performance of your team.
                        <br/><br/>
                        Each session includes a replay, case studies, and exercises.
                    </p>
                    <button type='button' className='offer-button'>Explore lessons</button>
                </div>
            </div>
            {/*second box*/}
            <div id='offer-type-2'>
                <div className='d-flex flex-column'>
                    <p className='offer-type-p1'>3 days Bootcamp</p>
                    <div className='d-flex align-items-center gap-1 offer-type-aside'>
                        <p className='offer-type-p2'>N50,000</p>
                        <span> / learner</span>
                    </div>
                    <p className='offer-type-p3'>Early bird offer</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <p className='offer-type-p4'>
                        Create a team workflow that enhances your team's performance by understanding the basics of your talent archetypes and the talent archetypes present within your team. 
                        <br/><br/>
                        We delve deeply into several dimensions, what it takes, and how to position yourself to win during this three-day boot camp. Participants in the Bootcamp are added to the support group and have access to speak with coaches.
                    </p>
                    <button type='button' className='offer-button-2'>View Curriculum</button>
                </div>
            </div>
            {/*third box*/}
            <div id='offer-type-3'>
                <div className='d-flex flex-column'>
                    <p className='offer-type-p5'>Team Plan</p>
                    <p className='offer-type-p6'>Customized just for you</p>
                    <p className='offer-type-p3'>Early bird offer</p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <p className='offer-type-p4'>
                        Give your team leaders and supervisors the tools they need to lead others effectively.
                        <br/><br/>
                        Your leaders will gain a better understanding of themselves, how to develop successful team-building skills, and how to maximize the potential of those on their team by going through the People Management Accelerator Experience. 
                        <br/><br/>
                        Your team is just as competent as the managers who lead them. We are aware that each organizational unit has its own unique DNA. We provide coaching programs in addition to special pieces of training created to meet your organization's needs.
                    </p>
                    <button type='button' className='offer-button-3'>Request Quote</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default payment;