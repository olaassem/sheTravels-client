import React from 'react';

import './ReviewForm.css';
import '../../grid.css';



export default class ReviewForm extends React.Component{

// componentDidMount(){
//   $("form#ratingForm").submit(function(event){
//     event.preventDefault(); // prevent the default click action from being performed
//       if ($("#ratingForm :radio:checked").length == 0) {
//         $('#status').html("nothing checked");
//         return false;
//       } else {
//         $('#status').html( 'You picked ' + $('input:radio[name=rating]:checked').val() );
//           }
//       });
//   });



  render(){
    return(
      <div className="row">
      <div className="col-12">
        <form className="review-form">
          <fieldset>
            <legend>Review "location"</legend>
              <div className="question-container">
                <label htmlFor="">When did you visit?</label>
                <br/>
                <input type="month" id="visitDate"/>
              </div>

              <div className="question-container">
                <label htmlFor="">How long did you stay?</label>
                <br/>
                <input type="text" id="duration"/>
              </div>

              <div className="question-container">
                <label htmlFor="">Overall Experience</label>
								<div className="row">
									<div className="col-7">
										<label htmlFor="incredible"><input type="radio" name="experience" value="Incredible" />Incredible</label>
									</div>
									<div className="col-7">
										<label htmlFor="good"><input type="radio" name="experience" value="Good" />Good</label>
									</div>
									<div className="col-7">
										<label htmlFor="average"><input type="radio" name="experience" value="Average" />Average</label>
									</div>
									<div className="col-7">
										<label htmlFor="bad"><input type="radio" name="experience" value="Bad" />Bad</label>
									</div>
                  <div className="col-7">
										<label htmlFor="awful"><input type="radio" name="experience" value="Awful" />Awful</label>
									</div>
                </div>
              </div>

              <div className="question-container">
                <label htmlFor="">Personal Safety & Security</label>
                <div className="row">
									<div className="col-3">
										<label htmlFor="verysafe"><input type="radio" name="safety" value="verysafe" />Very Safe</label>
									</div>
									<div className="col-3">
										<label htmlFor="safe"><input type="radio" name="safety" value="safe" />Safe</label>
									</div>
									<div className="col-3">
										<label htmlFor="unsafe"><input type="radio" name="safety" value="unsafe" />Unsafe. Reconsider going.</label>
									</div>
                  <div className="col-3">
									  <label htmlFor="veryunsafe"><input type="radio" name="safety" value="veryunsafe" />Very Unsafe. Do not go.</label>
								</div>
              </div>
            </div>

              <div className="question-container">
                <label htmlFor="">Friendliness</label>
                <br/>
                <input type="text" id="hospitality"/>
              </div>

              <div className="question-container">
                <label htmlFor="">Dress Code</label>
                <br/>
                <input type="text" id="dress"/>
              </div>

              <div className="question-container">
                <label htmlFor="">Affordability</label>
                <br/>
                <div className="row">
									<div className="col-7">
										<label htmlFor="VeryExpensive"><input type="radio" name="budget" value="VeryExpensive" />Very Expensive</label>
									</div>
									<div className="col-7">
										<label htmlFor="Expensive"><input type="radio" name="budget" value="Expensive" />Expensive</label>
									</div>
									<div className="col-7">
										<label htmlFor="Average"><input type="radio" name="budget" value="Average" />Average</label>
									</div>
									<div className="col-7">
										<label htmlFor="cheap"><input type="radio" name="budget" value="Cheap" />Cheap</label>
									</div>
                  <div className="col-7">
										<label htmlFor="verycheap"><input type="radio" name="budget" value="VeryCheap" />Very Cheap</label>
									</div>
                </div>
              </div>

              <div className="question-container">
                <label htmlFor="">Ease of getting there & out</label>
                <br/>
                <input type="text" id="access"/>
              </div>

              <div className="question-container">
                <label htmlFor="">Review Title</label>
                <br/>
                <input type="text" id="title"/>
              </div>

              <div className="question-container">
                <label htmlFor="">Review Summary</label>
                <br/>
                <textarea id="summary"></textarea>
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
