import React from 'react'
import "./Intro.css"
import people_circle from '../../assets/images/none.png'

function Intro() {
  return (
    <div>
        <section id="intro-section">
            <h1>
                Increasing team effectiveness by understanding
                <br />
                <span className="purple">people psychology</span>
            </h1>
            <button className="color-gradient-1 text-light border-0 rounded-2 px-3 py-2">Watch free lesson</button>
            <img className="w-100 mt-4" alt="people-circle" src={people_circle} />
            <div id="missions-container" className="d-flex flex-column gap-3 w-100 p-5">
                <div>Knowledge sessions</div>
                <div>Actionable playbooks</div>
                <div>Objective support</div>
            </div>
        </section>
    </div>
  )
}

export default Intro