import React from 'react'
import './Services.css'

function Services() {
  return (
    <section className='services_section'>
        <div className="wrapper">
            <div className="title">
                <h2>our <span>Services</span></h2>
            </div>
            <div className="grid_services">
                {cards.map((card,index)=>{
                    const { id, title, paragraph, btnText } = card
                    return(
                        <div className="card" key={id}>
                            <h2>{title}</h2>
                            <p>{paragraph}</p>
                            <button className='btn'>{btnText}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

const cards = [
    {
        id:1,
        title:'Hotel',
        paragraph:'A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger.',
        btnText:'book now'
    },
    {
        id:2,
        title:'Restuarent',
        paragraph:'A restaurant is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.',
        btnText:'Deliver  now'
    },
    {
        id:3,
        title:'Conferences',
        paragraph:'A conference is a meeting of two or more experts to discuss and exchange opinions or new information about a particular topic, are the main purpose of conferences..',
        btnText:'book now'
    },
    {
        id:4,
        title:'wedding',
        paragraph:' wedding is a ceremony where two people are united in marriage. Wedding traditions and customs vary greatly between cultures, ethnic groups, religions, countries, and social classes..',
        btnText:'book now'
    },
    {
        id:5,
        title:'Massage',
        paragraph:'Massage is the manipulation of the bodys soft tissues. Massage techniques are commonly applied with hands, fingers, elbows, knees, forearms, feet, or a device.',
        btnText:'book now'
    },
    {
        id:6,
        title:'parties',
        paragraph:'A party is a gathering of people who have been invited by a host for the purposes of socializing, conversation, or as part of a festival or celebration of a special occasion.',
        btnText:'book now'
    },
]
export default Services