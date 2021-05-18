import React , { Component , Fragment } from 'react';
import Form from './Form'

class App extends Component {
    render(){
        return(
           <Fragment>
               <div>
                 <nav className=" blue-grey darken-3">
                     <div className="container">
                         <a className="brand-logo "  href="/">Homework</a>
                     </div>
                 </nav>
               </div>
               <div>
                   
               </div>
               <div>
                <Form></Form>
               </div>
            </Fragment>
        )
    }
}
export default  App;