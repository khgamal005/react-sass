import React from "react"

export const Services = ({ items, Heading }) => {
  return (
    <>
      <div className='about_services'>
        <Heading title='What I Do?' />
        <div className='about_services_boxs'>
          {items.serives.map((item ,idx) => (
              <div key={idx} className='card'>
                <div className='icon'>
                  <span>{item.icon}</span>
                </div>
                <div className='text'>
                  <h3 style={{color:'white'}}>{item.title}</h3>
                  <label>{item.text}</label>
                  <p>{item.decs}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  )
}
