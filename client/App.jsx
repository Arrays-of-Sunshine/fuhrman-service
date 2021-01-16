import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      view: "view"
    }
  }

  //`/products/${id}/product_images`
  componentDidMount() {
    axios.get('/2')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
    <h1>it is working now!</h1>
    );
  }
}

export default App;