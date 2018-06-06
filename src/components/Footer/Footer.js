import React from 'react';
import './Footer.css';


export default class Footer extends React.Component{
  render(){
    return(
      <footer>
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
            <div className="row">
              <div className="col-6">
                <div className="githubIcon-container">
                  <a href="https://github.com/olaassem/" target="_blank"><img src="../../assets/logo.svg" alt="Github icon"/></a>
                </div>
              </div>
              <div className="col-6">
                <div className="linkedinIcon-container">
                  <a href="https://www.linkedin.com/in/ola-assem-7404a44/" target="_blank"><img src="../../assets/linkedinIcon.png" alt="LinkedIn icon"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </footer>
    )
  }
}
