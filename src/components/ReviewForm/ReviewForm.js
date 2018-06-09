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

              <div>
                <label  htmlFor="">When did you visit?</label>
                <input type="month" id="visitDate"/>
              </div>

              <div>
                <label htmlFor="">How long did you stay?</label>
                <input type="text" id="duration"/>
              </div>

              <div>
                <label htmlFor="">Overall Experience</label>
                <input type="text" id="rating"/>
              </div>


              <div>
                <label htmlFor="">Safety</label>
                <input type="text" id="safety"/>
              </div>

              <div>
                <label htmlFor="">Hospitality</label>
                <input type="text" id="hospitality"/>
              </div>

              <div>
                <label htmlFor="">Dress Code</label>
                <input type="text" id="dress"/>
              </div>

              <div>
                <label htmlFor="">Affordability</label>
                <input type="text" id="affordability"/>
              </div>

              <div>
                <label htmlFor="">Ease of getting there & out</label>
                <input type="text" id="access"/>
              </div>

              <div>
                <label htmlFor="">Review Title</label>
                <input type="text" id="title"/>
              </div>

              <div>
                <label htmlFor="">Review Summary</label>
                <input type="text" id="summary"/>
              </div>

              <div className="row">
                <div className="col-12">
                  <button class="submit-review-btn">Submit</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>

        <div>
          <form id="ratingForm">
            <fieldset class="rating">
                <legend>Please rate:</legend>
                <input type="radio" id="star5" className="rating" value="5" /><label for="star5" title="Rocked!">5 stars</label>
                <input type="radio" id="star4" className="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
                <input type="radio" id="star3" className="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
                <input type="radio" id="star2" className="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
                <input type="radio" id="star1" className="rating" value="1" /><label for="star1" title="Sucked big time">1 star</label>
              </fieldset>
            <div class="clearfix"></div>
          </form>
        </div>
      </div>



    )
  }
}
