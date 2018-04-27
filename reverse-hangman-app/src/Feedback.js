import React, { Component } from 'react';
import './Feedback.css';

class Feedback extends Component {
    render() {
        return(
            <div className="Feedback" id="feedback">
                <form>
                    <h3 id="formHeader">We Value Your Feedback</h3>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="firstName" className="labels">First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="lastName" className="labels">Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="exampleInputEmail1" className="labels">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>
                    <div className="form-row" id="formSecondRow">
                        <div className="form-group">
                            <label htmlFor="comment" className="labels">Comment:</label>
                            <textarea className="form-control" rows="12" id="comment"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Feedback;