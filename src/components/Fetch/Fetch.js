// @flow

import * as React from 'react';
import axios from 'axios';

type Props = {
  path: string,
  children: React.Element
};

type State = {
  isLoading: boolean,
  hasFailed: boolean,
  data: any,
};

class Fetch extends React.Component<Props, State> {
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
