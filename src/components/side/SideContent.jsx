import React from "react"
import { side, socialIcon } from "../../data/data"
import sideImg from "../../images/side.jpg"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { FiDownloadCloud } from "react-icons/fi"






const Progress = ({ done, title, back }) => {
  return (
    <div className='progress'>
      <div
        className={`progress_done ${back}`}
        style={{
          opacity: 1,
          width: `${done}%`,
        }}
      ></div>
          <div className="num">
            <h4>{done}.</h4>
          </div>
          <div className="skill">
          <h4>{title}</h4>

          </div>
    </div>
  )
}



const SideContent = () => {
  return (
    <section className='sideContent'>
    <div className='sideContent_top'>
      <div className='sideContent_top_img'>
        <img src={sideImg} alt='side' width='100%' />
        <div className='sideContent_top_img_name'>
          <h3>Linda M. Bellamy</h3>
          <span>Sr. Developer</span>
        </div>
      </div>
      <div className='sideContent_top_social'>
        {socialIcon.map((icons) => (
          <div  key={icons.id} className={icons.class}>
            <span>{icons.icon}</span>
          </div>
        ))}
      </div>
    </div>
    <div className='sideContent_bottom'>
      <div className='sideContent_bottom_skill'>
        {side.map((item) => (
          <div  key={item.id} className='sideContent_skill_box'>
            <Progress title={item.text} done={item.num} back={item.class} />
          </div>
        ))}
      </div>

      <div className='sideContent_bottom_buttonGroup'>
        <button className='sm_button'>
          <span>
            <FiDownloadCloud className='button_bicon' />
          </span>
        </button>
        <button className='button big'>
          <RiMoneyDollarCircleLine className='button_bicon' />
          <span>HIRE ME</span>
        </button>
      </div>
    </div>
  </section>
  )
}
export default SideContent