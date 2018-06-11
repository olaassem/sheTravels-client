import React from 'react';

import './ReviewForm.css';
import '../../grid.css';

import Hanger from '../../assets/hanger.png';
import Wallet from '../../assets/wallet.png';
import Calendar from '../../assets/calendar.png';
import Duration from '../../assets/duration.png';
import Safety from '../../assets/safety.png';
import Rating from '../../assets/rating.png';

export default class ReviewForm extends React.Component{


  render(){
    return(
      <div className="row">
      <div className="col-12">
        <form className="review-form">
          <fieldset>
            <legend>Review "location"</legend>
              <div className="row">
                <div className="col-6">
                  <div className="question-container">
                    <p><img className="calendarIcon" src={Calendar} alt="calendar icon"/>When did you visit?</p>
                    <input type="month" id="visitDate"/>
                  </div>
                </div>
                <div className="col-6">
                  <div className="question-container">
                    <p><img className="durationIcon" src={Duration} alt="sand clock icon"/>How long did you stay?</p>
                    <div className="row">
                      <div className="col-12">
                        <input type="text" id="duration"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="question-container">
                    <p><img className="ratingIcon" src={Rating} alt="star with a plus sign icon"/>Overall Experience</p>
                    <div className="row">
                      <div className="col-12">
                        <label htmlFor="incredible"><input type="radio" name="experience" id="incredible" value="Incredible" />Incredible</label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="good"><input type="radio" name="experience" id="good" value="Good" />Good</label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="average"><input type="radio" name="experience" id="average" value="Average" />Average</label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="bad"><input type="radio" name="experience" id="bad" value="Aad" />Bad</label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="awful"><input type="radio" name="experience" id="awful" value="Awful" />Awful</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="question-container">
                    <p><img className="safetyIcon" src={Safety} alt="safety pin icon"/>Personal Safety & Security</p>
                    <div className="row">
                      <div className="col-12">
                        <label htmlFor="verysafe"><input type="radio" name="safety" id="verysafe" value="verysafe" />Very Safe</label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="safe"><input type="radio" name="safety" id="safe" value="safe" />Safe</label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="unsafe"><input type="radio" name="safety" id="unsafe" value="unsafe" />Unsafe. Reconsider going.</label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="veryunsafe"><input type="radio" name="safety" id="veryunsafe" value="veryunsafe" />Very Unsafe. Do not go.</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="question-container">
              <p><img className="hangerIcon" src={Hanger} alt="clothes hanger icon"/>Acceptable Dress Code</p>
              <div className="row">
                <div className="col-4">
                  <label htmlFor="anything"><input type="radio" name="dress" id="anything" value="whateveryouwant" />Whatever you like</label>
                </div>
                <div className="col-4">
                  <label htmlFor="modest"><input type="radio" name="dress" id="modest" value="Nosleevelessorabovetheknees" />No sleeveless, cleavage, or above the knees</label>
                </div>
                <div className="col-4">
                  <label htmlFor="full"><input type="radio" name="dress" id="full" value="fullcoverup" />Full cover up</label>
                </div>
              </div>
            </div>

              <div className="question-container">
                <p><img className="walletIcon" src={Wallet} alt=""/>Affordability</p>
                <div className="row">
									<div className="col-7">
										<label htmlFor="veryexpensive"><input type="radio" name="budget" id="veryexpensive" value="VeryExpensive" />Very Expensive</label>
									</div>
									<div className="col-7">
										<label htmlFor="expensive"><input type="radio" name="budget" id="expensive" value="Expensive" />Expensive</label>
									</div>
									<div className="col-7">
										<label htmlFor="avg"><input type="radio" name="budget" id="avg" value="Average" />Average</label>
									</div>
									<div className="col-7">
										<label htmlFor="cheap"><input type="radio" name="budget" id="cheap" value="Cheap" />Cheap</label>
									</div>
                  <div className="col-7">
										<label htmlFor="verycheap"><input type="radio" name="budget" id="verycheap" value="VeryCheap" />Very Cheap</label>
									</div>
                </div>
              </div>

              <div className="question-container">
                <p>Review Title</p>
                <div className="row">
                  <div className="col-12">
                    <input type="text" id="title"/>
                  </div>
                </div>
              </div>

              <div className="question-container">
                <p>Review Summary</p>
                <div className="row">
                  <div className="col-12">
                    <textarea id="summary"></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <button className="submit-review-btn">Submit</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
