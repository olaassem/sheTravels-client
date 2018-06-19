import React from 'react';
import './Main.css';
import {Switch, Route, Redirect} from 'react-router-dom';


import Landing from '../Landing/Landing';
import Homepage from '../Homepage/Homepage';
import Review from '../Review/Review';
import Explore from '../Explore/Explore';
import ReviewForm from '../ReviewForm/ReviewForm';



export default class Main extends React.Component{

  render(){
    return(
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/reviewform" component={ReviewForm} />
        </Switch>
      </main>
    )
  }
}

// export default class Main extends React.Component{
//
//   renderComponent(component){
//     //check if not localstorage(userid ex)
//     if(! localStorage.getItem('token')){
//       return <Redirect to="/"/>
//     } else {
//       return React.createElement(component, {} );
//     }
//   }
//
//   render(){
//     return(
//       <main>
//         <Switch>
//           <Route exact path="/" component={Landing} />
//           <Route exact path="/homepage" render={() => {return this.renderComponent(Homepage)}} />
//           <Route exact path="/review" render={() => {return this.renderComponent(Review)}} />
//           <Route exact path="/explore" render={() => {return this.renderComponent(Explore)}} />
          // <Route exact path="/reviewform" render={() => {return this.renderComponent(ReviewForm)}} />
//         </Switch>
//       </main>
//     )
//   }
// }
