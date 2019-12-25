import React from 'react';

import BComponent from './booking';
import Axios from 'axios';

class BookingComponent extends React.Component {

    state = {
      array:[]
    }

    componentDidMount() {
      Axios.get('http://localhost:8000/api/booking/')
      .then(res => {
        this.setState({
          array: res.data
        });
        console.log(res.data);
      })
    }

    render() {
        return (
            <BComponent data={this.state.array}/>
        )
    }
}

export default BookingComponent;