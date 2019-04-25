import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class EditPhoneRecord extends Component {
  constructor(props){
    super(props);

    this.state= {
      pathname: this.props.location.pathname,
      UpdatedPhoneRecord: [],
      PhoneRecordOriginal: [],
      client_name: [],
      client_phonenumber: [],
      client_conversation: [],
      client_postcard: [],
    }
  }

  componentDidMount = async () => {
    const recordID=this.props.match.params.id
    console.log(recordID)
    console.log(`http://localhost:4000/clients/${recordID}`)
    await fetch(`http://localhost:4000/clients/${recordID}`)
      .then(res => res.json())
      .then(response => {
        this.setState({UpdatedPhoneRecord: response})
        this.setState({PhoneRecordOriginal: response})
        this.setState({client_name: response.client_name})
        this.setState({client_phonenumber: response.client_phonenumber})
        this.setState({client_conversation: response.client_conversation})
        this.setState({client_postcard: response.client_postcard})
        console.log(response)
      })
  };
  
  // handleChange = async (e) => {
  //   await this.setState({
  //       // client_name: response.client_name,
  //       // client_phonenumber: response.client_phonenumber,
  //       // client_conversation: response.client_conversation,
  //       // client_postcard: response.client_postcard
  //   }, console.log(this.state.UpdatedPhoneRecord));
  //   const NewRecord = this.state.UpdatedPhoneRecord
  //   const UpdatedRecord = Object.assign(this.state.PhoneRecordOriginal, NewRecord)
  //   this.setState({UpdatedPhoneRecord : UpdatedRecord})
  // };

  handleSubmit = async (e) => {
    e.preventDefault()
    const recordID=this.props.match.params.id
    const newUpdate = {
      client_name: this.state.client_name,
      client_phonenumber: this.state.client_phonenumber,
      client_conversation: this.state.client_conversation,
      client_postcard: this.state.client_postcard,
    }
    const data = JSON.stringify(newUpdate)
    console.log(data)
    console.log('Fetch', recordID)
    await fetch(`http://localhost:4000/clients/${recordID}`, {
        method: "PUT",
        body: data,
        headers: {
          "Content-Type": "application/json"
        }
      });
    console.log(data)
      this.props.history.push('/')
  };

  render() {
    return (
      <div>
        <h3 align="center">Update Call Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <div className="form-group">
              <label>Name: </label>
              <textarea 
                type="text"
                className="form-control"
                name="Client_Name"
                value={this.state.client_name}
                placeholder={this.state.PhoneRecordOriginal.client_name}
                // onChange={this.handleChange}
                onChange={(e) => this.setState({client_name: e.target.value})}
                />
            </div>
            <div className="form-group">
              <label>PhoneNumber: </label>
              <textarea 
                type="text"
                className="form-control"
                value={this.state.client_phonenumber}
                placeholder={this.state.PhoneRecordOriginal.client_phonenumber}
                name="Client_PhoneNumber"
                // onChange={this.handleChange}
                onChange={(e) => this.setState({client_phonenumber: e.target.value})}
                />
            </div>
            <div className="form-group">
              <label>Conversation: </label>
              <textarea 
                type="text"
                className="form-control"
                value={this.state.client_conversation}
                placeholder={this.state.PhoneRecordOriginal.client_conversation}
                name="Client_Conversation"
                onChange={(e) => this.setState({client_conversation: e.target.value})}
                />
            </div>
            <div className="form-group">
              <label>PostCard sent to client?</label>
              <select name="PostCard" id="PostCard" className="form-control" value={this.state.UpdatedPhoneRecord.PostCard} onChange={this.handleChange} placeholder="PostCard">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <br/>
            <div className="form-group">
              <button type="submit" value="UpdatePhoneRecord" className="btn btn-primary" name="submit" id="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditPhoneRecord
