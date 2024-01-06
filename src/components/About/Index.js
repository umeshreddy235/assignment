import React from 'react'
import './index.css'
import pic from "../../Assets/Images/girl.png"



const About = () => {


  return (
    <>
      <div className='homecontainer'>
      <div className='designone'>
            <div className='desincontainer' >
                  <h2 className='desiner'>UI/UX Designer</h2>
                  <h1 className='hello'>Hello,  my name<br/> is Madelyn Torff</h1>
                  <h3 className='carrer'>Short text with details about you, what you<br/> do or your professional career. You can add<br/> more information on the about page.</h3>
                  <button className='project'>Projects</button>
                  <button className='linkdin'>Linkdin</button>
              </div>
                <div>
                    <div className='imgone'>
                      <img src={pic} alt="img" className='imgcard' />          
                    </div>
                </div>
                
            </div>
      </div>
      
          
    </>
    
  )
}

export default About

