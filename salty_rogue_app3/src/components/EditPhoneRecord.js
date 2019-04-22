import React, { Component } from 'react'
import { axios } from "axios";

export class EditPhoneRecord extends Component {
  constructor(props){
    super(props);
    
    this.onChangeClientName = this.onChangeClientName.bind(this);
    this.onChangeClientPhoneNumber = this.onChangeClientPhoneNumber.bind(this);
    this.onChangeClientConversation = this.onChangeClientConversation.bind(this);
    this.onChangeClientPostcard = this.onChangeClientPostcard.bind(this);
    // this.id = this.id.bind(this)
    // this.onChangeID = this.onChangeID.bind(this);
    
    this.state= {
      client_name:'',
      client_phonenumber:'',
      client_conversation:'',
      client_postcard:false,
      // _id: ''
    }
  }

  componentDidMount() {
    console.log(this.props.client.id)
    axios.get("http://localhost:4000/clients/"+this.props.client._id)
    // axios.get('http://localhost:4000/clients/'+this.props._id)
    // console.log(this.props.match.params.client_name+"'s Id #"+this.props.match.params._id)
    console.log(this.props.client_name+"'s Id #"+this.props._id)
      .then(response => {
        this.setState({
          client_name: response.data.client_name,
          client_phonenumber: response.data.client_phonenumber,
          client_conversation: response.data.client_conversation,
          client_postcard: response.data.client_postcard,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeClientName(e) {
    this.setState({
      client_name: e.target.value
    })
  }
  onChangeClientPhoneNumber(e) {
    this.setState({
      client_phonenumber: e.target.value
    })
  }
  onChangeClientConversation(e) {
    this.setState({
      client_conversation: e.target.value
    })
  }
  onChangeClientPostcard(e) {
    this.setState({
      client_postcard: !e.target.client_postcard
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      client_name: this.state.client_name,
      client_phonenumber: this.state.client_phonenumber,
      client_conversation: this.state.client_conversation,
      client_postcard: this.state.client_postcard,
    };
    console.log(obj)
    axios.post('http://localhost:4000/clients/update/'+this.props.match.params._id, obj)
      .then(res => console.log(res.data));
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h3 align="center">Update CallRecord</h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name: </label>
              <input 
                type="text"
                className="form-control"
                value={this.state.client_name}
                onChange={this.onChangeClientName}
                />
            </div>
            <div className="form-group">
              <label>PhoneNumber: </label>
              <input 
                type="text"
                className="form-control"
                value={this.state.client_phonenumber}
                onChange={this.onChangeClientPhoneNumber}
                />
            </div>
            <div className="form-group">
              <label>Conversation: </label>
              <input 
                type="text"
                className="form-control"
                value={this.state.client_conversation}
                onChange={this.onChangeClientConversation}
                />
            </div>
            <div className="form-group">
              <label>PostCard sent to client?</label>
                Yes <input type="radio" name="form-control" value="true" onChange={this.onChangeClientPostcard} />
                No <input type="radio" name="form-control" value="false" onChange={this.onChangeClientPostcard} />
              <label>PostCard: </label>
              <input 
                type="radio"
                className="form-control"
                value={this.state.client_postcard}
                onChange={this.onChangeClientPostcard}
                />
            </div>
            <br/>
            <div className="form-group">
              <input type="submit" value="UpdatePhoneRecord" className="btn btn-primary" name="submit" id="submit" />
            </div>
        </form>
      </div>
    )
  }
}

export default EditPhoneRecord
