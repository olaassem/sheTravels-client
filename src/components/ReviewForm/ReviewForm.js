import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {saveCurrentLocation, getPlaceDetails, postReview} from '../../actions/index';
import {required, notzero, nonEmpty} from '../validators';
import LoggedInNav from '../LoggedInNav/LoggedInNav';

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
        // userID: localStorage.getItem('userId'),
        name: localStorage.getItem('name'),
        age: localStorage.getItem('age'),
        country: localStorage.getItem('country'),
        picture: this.props.placeDetailsInfo.photos[0].photo_reference,
        address: this.props.currentLocation.address,
        formattedAddress: this.props.currentLocation.formattedAddress,
        visit: "",
        duration: "",
        rating: "",
        safety: "",
        dress: "",
        affordability: "",
        title: "",
        summary: "",
        submitted: Date.now()
      }
    }

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
      <div>
        <LoggedInNav />
        <div className="row">
        <div className="col-12">
          <div className="reviewform-container">
            <form className="review-form">
              <fieldset>
                <legend>Review {this.props.currentLocation.address}</legend>

                  <div className="row">
                    <div className="col-6">
                      <div className="question-container">
                        <p><img className="calendarIcon" src={Calendar} alt="calendar icon"/>When did you last visit?</p>
                        <input
                          type="month"
                          name="visit"
                          id="visit"
                          validate={[required, nonEmpty, notzero]}
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
                              validate={[required, nonEmpty, notzero]}
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
                                value="Incredible"
                                onChange={this.handleChange.bind(this)}/>
                              Incredible
                            </label>
                          </div>
                          <div className="col-12">
                            <label htmlFor="good">
                              <input
                                type="radio"
                                name="rating"
                                id="good"
                                value="Good"
                                onChange={this.handleChange.bind(this)}/>
                              Good
                            </label>
                          </div>
                          <div className="col-12">
                            <label htmlFor="average">
                              <input
                                type="radio"
                                name="rating"
                                id="average"
                                value="Average"
                                onChange={this.handleChange.bind(this)}/>
                              Average
                            </label>
                          </div>
                          <div className="col-12">
                            <label htmlFor="bad">
                              <input
                                type="radio"
                                name="rating"
                                id="bad"
                                value="Bad"
                                onChange={this.handleChange.bind(this)}/>
                              Bad
                            </label>
                          </div>
                          <div className="col-12">
                            <label htmlFor="awful">
                            <input
                              type="radio"
                              name="rating"
                              id="awful"
                              value="Horrible"
                              onChange={this.handleChange.bind(this)}/>
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
                                value="Very safe"
                                onChange={this.handleChange.bind(this)}/>
                              Very Safe
                            </label>
                          </div>
                          <div className="col-12">
                            <label htmlFor="safe">
                              <input
                                type="radio"
                                name="safety"
                                id="safe"
                                value="Safe"
                                onChange={this.handleChange.bind(this)}/>
                              Safe
                            </label>
                          </div>
                          <div className="col-12">
                            <label htmlFor="unsafe">
                              <input
                                type="radio"
                                name="safety"
                                id="unsafe"
                                value="Unsafe. Reconsider going."
                                onChange={this.handleChange.bind(this)}/>
                              Unsafe. Reconsider going.
                            </label>
                          </div>
                          <div className="col-12">
                            <label htmlFor="veryunsafe">
                              <input
                                type="radio"
                                name="safety"
                                id="veryunsafe"
                                value="Very Unsafe. Do not go."
                                onChange={this.handleChange.bind(this)}/>
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
                            value="Whatever you like"
                            onChange={this.handleChange.bind(this)}/>
                          Whatever you like
                        </label>
                      </div>
                      <div className="col-4">
                        <label htmlFor="modest">
                          <input
                            type="radio"
                            name="dress"
                            id="modest"
                            value="No sleeveless, cleavage, or above the knees"
                            onChange={this.handleChange.bind(this)}/>
                          No sleeveless, cleavage, or above the knees
                        </label>
                      </div>
                      <div className="col-4">
                        <label htmlFor="full">
                          <input
                            type="radio"
                            name="dress"
                            id="full"
                            value="Full cover up"
                            onChange={this.handleChange.bind(this)}/>
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
                            value="Very Expensive"
                            onChange={this.handleChange.bind(this)}/>
                          Very Expensive
                        </label>
    									</div>
    									<div className="col-7">
    										<label htmlFor="expensive">
                          <input
                            type="radio"
                            name="affordability"
                            id="expensive"
                            value="Expensive"
                            onChange={this.handleChange.bind(this)}/>
                          Expensive
                        </label>
    									</div>
    									<div className="col-7">
    										<label htmlFor="avg">
                          <input
                            type="radio"
                            name="affordability"
                            id="avg"
                            value="Average"
                            onChange={this.handleChange.bind(this)}/>
                          Average
                        </label>
    									</div>
    									<div className="col-7">
    										<label htmlFor="cheap">
                          <input
                            type="radio"
                            name="affordability"
                            id="cheap"
                            value="Cheap"
                            onChange={this.handleChange.bind(this)}/>
                          Cheap
                        </label>
    									</div>
                      <div className="col-7">
    										<label htmlFor="verycheap">
                          <input
                            type="radio"
                            name="affordability"
                            id="verycheap"
                            value="Very Cheap"
                            onChange={this.handleChange.bind(this)}/>
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
                          id="title"
                          validate={[required, nonEmpty, notzero]}
                          onChange={this.handleChange.bind(this)}/>
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
                          placeholder=""
                          validate={[required, nonEmpty, notzero]}
                          onChange={this.handleChange.bind(this)}>
                        </textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <button
                        className="submit-review-btn"
                        onClick={this.postNewReview.bind(this)}>
                        <Link className="submitform-link" to="/explore">Submit</Link>
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
    return{
      newReview: state.users.allreviews,
      currentLocation: state.location.currentSearchLocation,
      placeDetailsInfo: state.location.placeDetailsInfo
    }
}


export default connect(mapStateToProps, {saveCurrentLocation, getPlaceDetails, postReview})(ReviewForm);
