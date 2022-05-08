import React from 'react'
import './Cards.css'

function Cards() {
  return (
    <section className='cards_section'>
        <div className="wrapper">
        <div className="title">
            <h2>Our <span>Hotels</span></h2>
        </div>
        <div className="FlexCards">
            {allCards.map((eachCard,index)=>{
                const { id, title, paragraph, img } = eachCard
                return(
                    <div className="flexCard" key={id}>
                        <div className="image-container">
                        <img src={img} alt="" />
                        </div>
                        <div className="text">
                            <h2>{title}</h2>
                            <p>{paragraph}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    </section>
  )
}
const allCards = [
    {
        id:1,
        title:'Our beds',
        paragraph:'confortable beds and ready day and night our offerings are flexible so you can customize them to your needs. Get started with your delivery people or connect with delivery people through the Abiani platform',
        img:'../../img/bed-min.jpg'
    },
    {
        id:2,
        title:'Our pools',
        paragraph:'Every where is clean and smell see our pool Stand out with in-app marketing to reach even more customers and increase sales.delivery people or connect with delivery people .',
        img:'../../img/blue-min.jpg'
    },
    {
        id:3,
        title:'Our gym',
        paragraph:'Gym with clean environment Turn customers into regulars with actionable data insights, respond to reviews or offer a loyalty program.',
        img:'../../img/steven-min.jpg'
    },
]
export default Cards