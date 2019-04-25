import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router'
// import NewPhoneRecord from './NewPhoneRecord';
const URL = "mongodb://Tucker:Tucker@cluster0-shard-00-00-tihhu.mongodb.net:27017,cluster0-shard-00-01-tihhu.mongodb.net:27017,cluster0-shard-00-02-tihhu.mongodb.net:27017/ReactPhoneRecords?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"

export class CreatePhoneRecord extends Component {
  // constructor() {
    // this.state = {
    state = {
      client_name: "",
      client_phonenumber: "",
      client_conversation: "",
      client_postcard: false,
      fireRedirect: false
    };
  // }

  handleSubmit = e => {
    e.preventDefault();

    const newClient = {
      client_name: this.state.client_name,
      client_phonenumber: this.state.client_phonenumber,
      client_conversation: this.state.client_conversation,
      client_postcard: this.state.client_postcard
    };
    console.log(newClient);
    console.log(`Form submitted:`);
    console.log(`Client name: ${this.state.client_name}`);
    console.log(`Client Phone Number: ${this.state.client_phonenumber}`);
    console.log(`Client Postcard: ${this.state.client_conversation}`);

    // axios.post("mongodb://Tucker:Tucker@cluster0-shard-00-00-tihhu.mongodb.net:27017,cluster0-shard-00-01-tihhu.mongodb.net:27017,cluster0-shard-00-02-tihhu.mongodb.net:27017/ReactPhoneRecords?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", newClient)
    axios
      .post(URL, newClient)
      .then(res => console.log(res.data));

    this.setState({
      client_name: "",
      client_phonenumber: "",
      client_conversation: "",
      client_postcard: false,
      fireRedirect: true,
    });
    //router link
  };

  onChangeClientName = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeClientPhoneNumber = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeClientConversation = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onChangeClientPostcard = e => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Client Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Client Name"
              name="client_name"
              //   value={this.state.client_name}
              onChange={this.onChangeClientName}
            />
          </div>
          <div class="form-group">
            <label>Client Phone Number:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Client Phone Number"
              name="client_phonenumber"
              //   value={this.state.client_phonenumber}
              onChange={this.onChangeClientPhoneNumber}
            />
          </div>
          <div class="form-group">
            <label>Conversation: </label>
            <textarea
              class="form-control"
              placeholder="Details about the conversation"
              name="client_conversation"
              //   value={this.state.client_conversation}
              onChange={this.onChangeClientConversation}
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <div
                class="input-group-text"
                onChange={this.onChangeClientPostcard}
                name="client_postcard"
              >
                <label>PostCard sent to client?</label>
                Yes <input type="radio" name="client_postcard" value="true" />
                No <input type="radio" name="client_postcard" value="false" />
              </div>
            </div>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
          {fireRedirect && (
            <Redirect to='/' />
            /*{ <Redirect to={from || '/'} /> }*/
          )}
        </form>
      </div>
    );
  }
}

export default CreatePhoneRecord;
