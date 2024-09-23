import React from 'react'

const GroupVisitHero = () => {
  return (
    <section className='px pt-[35px]'>
        <h1 className='text-semibold-48'>Book a Group Visit</h1>
        <div className="w-[173px] h-[1px] bg-primary mt-[2px]"></div> 

        <p className='text-normal-28 max-w-[800px] mt-[30px]'>
            For group visits of 20 or more we offer a rate of 12$ per person.
            In order to be eligible:
        </p>

        <ul className='list-disc list-outside text-normal-21 mt-[20px] ml-[40px] max-w-[900px]'>
            <li>Reservations should be made 2 weeks in advanced </li>
            <li>Accepted credit cards are American Express, Discover, MasterCard, and Visa  </li>
            <li>On the day of your visit all members of group will be required to arrive at the same time </li>
            <li>For any further questions or assistance please email <span className='underline'>scheduling@fossildiscoverylab.org </span> 
                or <span className='underline'>call 215-763-8100</span> 
            </li>
        </ul>
    </section>
  )
}

export default GroupVisitHero
