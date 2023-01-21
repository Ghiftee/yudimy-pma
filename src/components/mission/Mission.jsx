import React from 'react'
import './Mission.css'
import mission from '../../assets/images/meeting.png'

function Mission() {
  return (
    <section className="mission-section p-4">
      <img className="p-2 mb-5" alt="Meeting" src={mission} />
      <div>
        <h3 className="mb-5">Unlock the power of people for a stree-free work environment</h3>
        <p>
            Employee management in today's workplace can be difficult if you don't understand why people act the way they do and what drives and motivates them.
            <br />
            <br />
            Yudimy’s People Management Accelerator  (PMA) is an immersive accelerator that helps managers, leaders and people operators develop effective people management skills by understanding people psychology.
        </p>
      </div>
    </section>
  )
}

export default Mission