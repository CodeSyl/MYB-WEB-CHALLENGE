import React from 'react';
import './TabBar.scss';

class TabBar extends React.Component {

  render() {
    const Link = React.Children.map(this.props.children, child => {
      return (
        <div className="link">{child.props.title}</div>
      );
    });

    return (
      <div className="tab__bar">
        {Link}
      </div>
    );

  }
}

export default TabBar;  