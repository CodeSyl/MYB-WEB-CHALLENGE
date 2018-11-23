import React from 'react';
import classNames from 'classnames';
import './TabBar.scss';

class TabBar extends React.Component {
  state = {
    upcoming: true,
    friends: false
  }

  showContent = ({ target }) => {
    target.name === "upcoming" && this.setState(state => ({ ...state, upcoming: true, friends: false }))
    target.name === "friends" && this.setState(state => ({ ...state, upcoming: false, friends: true }))
  }

  render() {
    const { upcoming, friends } = this.state;

    return (
      <div>
        <div className="tab__bar">
          <div className={classNames({ "link": true, "active": upcoming })}>
            <a href="#" name="upcoming" onClick={this.showContent}>{this.props.children[0].props.title}</a>
          </div>
          <div className={classNames({ "link": true, "active": friends })}>
            <a href="#" name="friends" onClick={this.showContent}>{this.props.children[1].props.title}</a>
          </div>
        </div>

        {upcoming && this.props.children[0]}
        {friends && this.props.children[1]}

      </div>
    );

  }
}

export default TabBar;  