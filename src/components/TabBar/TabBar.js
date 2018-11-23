import React from 'react';
import './TabBar.scss';

class TabBar extends React.Component {
  state = {
    active: true
  }

  showContent = ({ target }) => {
    console.log("​TabBar -> showContent -> target", target)
  }

  render() {
    console.log("​render -> this.props.children", this.props.children);

    const Link = React.Children.map(this.props.children, child =>
      <div
        className="link"
        onClick={this.showContent}>
        <a href="#">{child.props.title}</a>
      </div>
    );

    return (
      <div>
        <div className="tab__bar">
          {Link}
        </div>
        {this.props.children}
      </div>
    );

  }
}

export default TabBar;  