import React, { Component } from 'react'

export class NewPhoneRecord extends Component {
  render() {
    return (
      <div>
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Client Name:</label>
                <input type="text" class="form-control" placeholder="Client Name" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Client Phone Number:</label>
                <input type="text" class="form-control" placeholder="Client Phone Number:" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Conversation: </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Describe the phone coversation. What was asked? By whom?"></textarea>
            </div>
        </form>
      </div>
    )
  }
}

export default NewPhoneRecord
