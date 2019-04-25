import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Client = props => (
  <tr>
    <td>
      {props.client.client_name}
    </td>
    <td>
      {props.client.client_phonenumber}
    </td>
    <td>
      {props.client.client_conversation}
    </td>
    <td>
      {props.client.client_postcard}
    </td>
    <td>
      <Link to={"./EditPhoneRecord/"+props.client._id}>Edit</Link>
    </td>
  </tr>
)

export class CallList extends Component {

  constructor(props) {
  super(props);
  this.state = {clients: []};
}

// componentDidMount() {
//   return fetch (`url`)
//     function
//       method: "GET", 
//       mode: "cors"
// }

componentDidMount() {
  axios.get('http://localhost:4000/clients/')
      .then(response => {
          this.setState({ clients: response.data });
      })
      .catch(function (error){
          console.log(error);
      })
}

clientList() {
  return this.state.clients.map(function(currentClient, i){
      return <Client client={currentClient} key={i} />;
  })
}

  render() {
    return (
      <div>
        <h3>Client List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }} >
            <thead>
              <tr>
                <th>Client Name: </th>
                <th>Client PhoneNumber: </th>
                <th>Conversation summary: </th>
                <th>Postcard? </th>
              </tr>
            </thead>
            <tbody>
              { this.clientList() }
            </tbody>
          </table>
      </div>
    )
  }
}

export default CallList
