import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <header id="body-header">
        <nav>

            <ul className="horizontal-list  text-center nav-menu">
                <li>
                    <a href="#"> Home </a>
                </li>
                <li>
                    <a href="#about"> About </a>
                </li>
                <li>
                    <a href="#skills"> Skills </a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </nav>

        <div id="name-social-container">
            <div className="text-center">
                <h1 id="my-name">
                    My Name
                </h1>
            </div>
            <div>
                <ul className="horizontal-list text-center social-icons">
                    <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                          <i className="fab fa-stack-overflow"></i>
                        </a>
                    </li>
                    <li>
                      <a href="#">
                          <i className="fab fa-google-plus-g"></i>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <i className="fab fa-facebook-f"></i>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <i className="fab fa-quora"></i>
                      </a>
                  </li>
                </ul>

            </div>

        </div>

    </header>
    <main>

        <section id="about">

          <div id="my-image">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000020_1549743985_macbook_mouse.jpg" />
          </div>
            <div id="about-para">

              <p>
                  Lorem Ipsum is simply dummy text of the printing and <span className="text-highlight">typesetting industry</span>. Lorem Ipsum has been the industry's standard <span className="text-highlight">dummy text ever</span> since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s <span className="text-highlight">with the release of Letraset</span> sheets containing Lorem Ipsum.
              </p>

          </div>
        </section>

        <section id="skills">
                  <h1 className="section-heading mb75px">
                    <span>
                      <i className="fas fa-chalkboard-teacher"></i>
                  </span>
                  <span>SKILLS</span>                    
                </h1>
  
                <div className="skills-display">

                  <div className="skill-progress">
                      <div className="fifty-percent mb-blue">
                          <div className="skill-name">
                              <span> C++ </span>
                          </div>
                      </div>
                  </div>
                  <div className="skill-progress">
                      <div className="eighty-five-percent mb-orange">
                          <div className="skill-name">
                              <span> HTML </span>
                          </div>
                      </div>
                  </div>
                  <div className="skill-progress">
                      <div className="eighty-percent mb-light-purple">
                          <div className="skill-name">
                              <span> CSS </span>
                          </div>
                      </div>
                  </div>
                  <div className="skill-progress">
                      <div className="fifty-percent mb-teal">
                          <div className="skill-name">
                              <span> Javascript </span>
                          </div>
                      </div>
                  </div>
                  <div className="skill-progress">
                      <div className="fifty-percent mb-blue">
                          <div className="skill-name">
                              <span> NodeJs </span>
                          </div>
                      </div>
                  </div>
                  <div className="skill-progress">
                      <div className="eighty-percent mb-light-purple">
                          <div className="skill-name">
                              <span> MongoDB </span>
                          </div>
                      </div>
                  </div>
  
              </div>

        </section>

        <section id="experience">
              <h1 className="section-heading mb75px">
                  <span><i className="fas fa-briefcase"></i></span>
                  <span>Work Experience</span>
              </h1>
              <div className="timeline">
                      <div className="timeline-box">
                        <div className="timeline-container">
                            <div className="timeline-logo">
                                <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
                            </div>
                            <h3 className="experience-designation  m0 m-blue"> Designation </h3>
                            <h4 className="experience-company-name"> Company Name </h4>
                            <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5>
    
                            <p className="experience-description text-align-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                      </div>
                          
                      <div className="timeline-box right ">
                        <div className="timeline-container">
                            <div className="timeline-logo">
                                <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
                            </div>
                            <h3 className="experience-designation  m0 m-blue"> Designation </h3>
                            <h4 className="experience-company-name"> Company Name </h4>
                            <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5>
                            <p className="experience-description text-align-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
               
                    <div className="timeline-box left ">
                      <div className="timeline-container">
                          <div className="timeline-logo">
                              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
                          </div>
                          <h3 className="experience-designation m0 m-blue"> Designation </h3>
                          <h4 className="experience-company-name"> Company Name </h4>
                          <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5>

                          <p className="experience-description text-align-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                      </div>
                  </div>
               
                    <div id="timeline-divider">
                      <div className="timeline-traveller">
                          <div>
                              <i className="fas fa-plane"></i>
                          </div>
                      </div>
      
                  </div>

              </div>



        </section>

        <section id="education">
            <h1 className="section-heading mb75px">
                <span>
                    <i className="fas fa-graduation-cap"></i>
                </span>
                <span> Education </span>
            </h1>
              
            <div className="timeline">

                <div className="timeline-box left ">
                  <div className="timeline-container">
                    <div className="timeline-logo">
                        <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png" />
                    </div>
                    <h3 className="experience-designation  m0 m-blue"> Degree </h3>
                    <h4 className="experience-company-name "> Institute Name </h4>
                    <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5>
                    <p className="experience-description text-align-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  </div>

                </div>
                <div className="timeline-box right ">
                  <div className="timeline-container">
                      <div className="timeline-logo">
                          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png" />
                      </div>
                      <h3 className="experience-designation  m0 m-blue"> Degree </h3>
                      <h4 className="experience-company-name "> Institute Name </h4>
                      <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5>
                      <p className="experience-description text-align-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  </div>
              </div>

              <div className="timeline-box left ">
                  <div className="timeline-container">
                      <div className="timeline-logo">
                          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png" />
                      </div>
                      <h3 className="experience-designation  m0 m-blue"> Degree </h3>
                      <h4 className="experience-company-name "> Institute Name </h4>
                      <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5>

                      <p className="experience-description text-align-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  </div>
              </div>
            
              <div id="timeline-divider">
                <div className="timeline-traveller">
                    <div>
                        <i className="fas fa-car-side"></i>
                    </div>
                </div>
            </div>

            </div>
                
        </section>

        
    </main>
    </>
  )
}

export default App
