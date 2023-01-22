import React from 'react'
import './Topics.css'

function Topics() {
    return (
        <section id="topics-section"> 
            <h2>Some topics we cover</h2>
            <div className='topic-boxes'>
                <div className='topic-box-comp bg-1'>
                    <h4> Talent archetypes that work
                    best with your personality type </h4>
                    <p>The sooner you hire the right team members, the better. Not every talent archetype compliments you, others, or the DNA of your organization. This lesson delves into the specifics of various talent archetypes, as well as the roles and work environments that they thrive in.
                    </p>
                </div>
                <div className='topic-box-comp bg-2'>
                    <h4> Expectation management 
                    for  different talent archetype </h4>
                    <p>Often, simply assigning OKR does not help your team get things done. In this lesson, we'll look at how understanding your team members' work habits may help you spend less time micromanaging them, improve communication, and boost team productivity by offering them tasks they can do.
                    </p>
                </div>
                <div className='topic-box-comp bg-3'>
                    <h4> Helping Independent extroverts 
                    succeed at work  </h4>
                    <p>Independent extroverts can be tough to manage if you don't understand how they process information and make decisions. Despite being superb executors, they are prone to making mistakes that can send team projects back 10 steps. This lesson explains how independent extroverts comprehend instructions and prioritize tasks and strategies for engaging them effectively at work.
                    </p>
                </div>
                <div className='topic-box-comp bg-4'>
                    <h4> Managing young talent (Gen Z) </h4>
                    <p>It can be both exhilarating and frustrating to manage young talent, but every time a new group of talent enters the market, they are frequently and consistently misinterpreted. In this lesson, we will cover some of the principles of understanding young people's career drivers, motivators, and engagement styles, as well as how to harness them for optimum team performance.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Topics