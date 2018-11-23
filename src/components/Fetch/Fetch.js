import React from 'react';
import axios from 'axios';

class Fetch extends React.Component {
  state = {
    isLoading: false,
    hasFailed: false,
    data: null,
  }

  async componentDidMount() {
    try {
      this.setState(state => ({ ...state, isLoading: true }));
      const { data } = await axios.get(this.props.path);
      this.setState(state => ({ ...state, data: data, isLoading: false }));
    } catch (error) {
      this.setState(state => ({ ...state, hasFailed: true }))
    }
  }

  render() {
    return this.props.children(this.state);
  }
}
export default Fetch;
