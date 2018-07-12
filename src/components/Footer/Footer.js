import React from 'react';
import './Footer.css';

export default class Footer extends React.Component{
  render(){
    return(
      <footer>
        <div className="row">
          <div className="col-12">
            <div className="footer-content">
              <a className="githubIcon-container" href="https://github.com/olaassem/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
              <a className="linkedinIcon-container" href="https://www.linkedin.com/in/ola-assem-7404a44/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
