import React from 'react';
import classNames from 'classnames';
import './TabBar.scss';

class TabBar extends React.Component {
  state = {
    upComing: true,
    friends: false
  }

  showContent = ({ target }) => {

    target.name === "upcoming" && this.setState(state => ({ ...state, upComing: true, friends: false }))
    target.name === "friends" && this.setState(state => ({ ...state, upComing: false, friends: true }))
  }

  render() {
    const { upComing, friends } = this.state;
    return (
      <div>
        <div className="tab__bar">
          <div className={classNames({ "link": true, "active": upComing })}>
            <a name="upcoming" href="#" onClick={this.showContent}>{this.props.children[0].props.title}</a>
          </div>
          <div className={classNames({ "link": true, "active": friends })}>
            <a href="#" name="friends" onClick={this.showContent}>{this.props.children[1].props.title}</a>
          </div>
        </div>

        {upComing && this.props.children[0]}
        {friends && this.props.children[1]}
      </div >
    );

  }
}

export default TabBar;  