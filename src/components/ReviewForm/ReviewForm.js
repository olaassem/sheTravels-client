import React from 'react';
import {connect} from 'react-redux';
import {postReview} from '../../actions/index';

import './ReviewForm.css';
import '../../grid.css';

import Hanger from '../../assets/hanger.png';
import Wallet from '../../assets/wallet.png';
import Calendar from '../../assets/calendar.png';
import Duration from '../../assets/duration.png';
import Safety from '../../assets/safety.png';
import Rating from '../../assets/rating.png';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        visit: "",
        duration: "",
        rating: "",
        safety: "",
        dress: "",
        affordability: "",
        title: "",
        summary: ""
      }
    }


  //match the 'name' of input to key in state
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  postNewReview(e){
    e.preventDefault();
    console.log(this.state);
    this.props.postReview(this.state);
  }


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
                    <input
                      type="month"
                      name="visit"
                      id="visit"
                      required
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="question-container">
                    <p><img className="durationIcon" src={Duration} alt="sand clock icon"/>How long did you stay?</p>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="duration"
                          id="duration"
                          required
                          onChange={this.handleChange.bind(this)}
                        />
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
                        <label htmlFor="incredible">
                          <input
                            type="radio"
                            name="rating"
                            id="incredible"
                            value="Incredible" />
                          Incredible
                        </label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="good">
                          <input
                            type="radio"
                            name="rating"
                            id="good"
                            value="Good" />
                          Good
                        </label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="average">
                          <input
                            type="radio"
                            name="rating"
                            id="average"
                            value="Average" />
                          Average
                        </label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="bad">
                          <input
                            type="radio"
                            name="rating"
                            id="bad"
                            value="Bad" />
                          Bad
                        </label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="awful">
                        <input
                          type="radio"
                          name="rating"
                          id="awful"
                          value="Horrible" />
                        Awful
                      </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="question-container">
                    <p><img className="safetyIcon" src={Safety} alt="safety pin icon"/>Personal Safety & Security</p>
                    <div className="row">
                      <div className="col-12">
                        <label htmlFor="verysafe">
                          <input
                            type="radio"
                            name="safety"
                            id="verysafe"
                            value="Very safe" />
                          Very Safe
                        </label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="safe">
                          <input
                            type="radio"
                            name="safety"
                            id="safe"
                            value="Safe" />
                          Safe
                        </label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="unsafe">
                          <input
                            type="radio"
                            name="safety"
                            id="unsafe"
                            value="Unsafe. Reconsider going." />
                          Unsafe. Reconsider going.
                        </label>
                      </div>
                      <div className="col-12">
                        <label htmlFor="veryunsafe">
                          <input
                            type="radio"
                            name="safety"
                            id="veryunsafe"
                            value="Very Unsafe. Do not go." />
                          Very Unsafe. Do not go.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="question-container">
                <p><img className="hangerIcon" src={Hanger} alt="clothes hanger icon"/>Acceptable Dress Code</p>
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="anything">
                      <input
                        type="radio"
                        name="dress"
                        id="anything"
                        value="Whatever you like" />
                      Whatever you like
                    </label>
                  </div>
                  <div className="col-4">
                    <label htmlFor="modest">
                      <input
                        type="radio"
                        name="dress"
                        id="modest"
                        value="No sleeveless, cleavage, or above the knees" />
                      No sleeveless, cleavage, or above the knees
                    </label>
                  </div>
                  <div className="col-4">
                    <label htmlFor="full">
                      <input
                        type="radio"
                        name="dress"
                        id="full"
                        value="Full cover up" />
                      Full cover up
                    </label>
                  </div>
                </div>
              </div>

              <div className="question-container">
                <p><img className="walletIcon" src={Wallet} alt=""/>Affordability</p>
                <div className="row">
									<div className="col-7">
										<label htmlFor="veryexpensive">
                      <input
                        type="radio"
                        name="affordability"
                        id="veryexpensive"
                        value="Very Expensive" />
                      Very Expensive
                    </label>
									</div>
									<div className="col-7">
										<label htmlFor="expensive">
                      <input
                        type="radio"
                        name="affordability"
                        id="expensive"
                        value="Expensive" />
                      Expensive
                    </label>
									</div>
									<div className="col-7">
										<label htmlFor="avg">
                      <input
                        type="radio"
                        name="affordability"
                        id="avg"
                        value="Average" />
                      Average
                    </label>
									</div>
									<div className="col-7">
										<label htmlFor="cheap">
                      <input
                        type="radio"
                        name="affordability"
                        id="cheap"
                        value="Cheap" />
                      Cheap
                    </label>
									</div>
                  <div className="col-7">
										<label htmlFor="verycheap">
                      <input
                        type="radio"
                        name="affordability"
                        id="verycheap"
                        value="Very Cheap" />
                      Very Cheap
                    </label>
									</div>
                </div>
              </div>

              <div className="question-container">
                <p>Review Title</p>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      name="title"
                      id="title"/>
                  </div>
                </div>
              </div>

              <div className="question-container">
                <p>Review Summary</p>
                <div className="row">
                  <div className="col-12">
                    <textarea
                      name="summary"
                      id="summary"
                      placeholder="">
                    </textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <button
                    className="submit-review-btn"
                    onClick={this.postNewReview.bind(this)}> Submit
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}


//mapping the state(this.reducer) to props(in component)
function mapStateToProps(state){
    return{
      //return key you want to use and the value from the reducer
      newReview: state.users.allreviews
    }
}


//calling connect function:  1.connect reducer with component, 2. connect action w component
export default connect(mapStateToProps, {postReview})(ReviewForm);
