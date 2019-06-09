import React, {Component} from 'react';

class Content extends Component {
  render() {
    return (
      <div>
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      </div>
    );
  }
}

export default Content;
