import React, { useState } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

export const Slider = ({ items, Heading }) => {
  const [data, setData] = useState(items.review)
  const [curSlide, setCurSlide] = useState(0)
  console.log(setData)

  const checkIndex = (position) => {
    if (position > data.length - 1) {
      return 0
    } else if (position < 0) {
      return data.length - 1
    }
    return position
  }

  const nextSlide = () => {
    setCurSlide(() => {
      let newSlide = curSlide + 1
      return checkIndex(newSlide)
    })
  }
  const prevSlide = () => {
    setCurSlide(() => {
      let newSlide = curSlide - 1
      return checkIndex(newSlide)
    })
  }
  return (
    <>
      <div className='about_sider'>
        <Heading title='What They Says?' />

        <div className='about_sider_content'>
          {data.map((slide, index) => (
            <div key={index}>
              {index === curSlide && (
                <div className='card'>
                  <div className='img'>
                    <img src={slide.cover} alt='' />
                  </div>
                  <div className='text'>
                    <p className="p-5">{slide.desc}</p>
                    <h3 style={{color:'white'}}>{slide.name}</h3>
                    <label>{slide.link}</label>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className='about_sider_content_slideButton'>
            
            <button className='icon' onClick={prevSlide}>
              <BsArrowLeft />
            </button>
            <button className='icon' onClick={nextSlide}>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
