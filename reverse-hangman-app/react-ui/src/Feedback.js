import React, { Component } from 'react';
import './Feedback.css';

class Feedback extends Component {
    render() {
        return(
            <div className="Feedback" id="feedback">
                <form>
                    <h3 id="formHeader">We Value Your Feedback</h3>
                    <div className="form-row">
                        <div className="form-group col-lg-4">
                            <label htmlFor="firstName" className="labels">First name</label>
                            <input type="text" className="form-control inputs" placeholder="First name" />
                        </div>
                        <div className="form-group col-lg-4">
                            <label htmlFor="lastName" className="labels">Last name</label>
                            <input type="text" className="form-control inputs" placeholder="Last name" />
                        </div>
                        <div className="form-group col-lg-4">
                            <label htmlFor="exampleInputEmail1" className="labels">Email address</label>
                            <input type="email" className="form-control inputs" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="form-row" id="formSecondRow">
                        <div className="form-group">
                            <label htmlFor="comment" className="labels">Comment:</label>
                            <textarea className="form-control" rows="12" id="comment"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-lg" id="submitBtn">Submit</button>
                </form>
            </div>
        );
    }
}

export default Feedback;