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
                  <a href="https://github.com/olaassem/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                </div>
              </div>
              <div className="col-6">
                <div className="linkedinIcon-container">
                  <a href="https://www.linkedin.com/in/ola-assem-7404a44/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
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
