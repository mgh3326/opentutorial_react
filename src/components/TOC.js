import React, {Component} from 'react';

class Toc extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('===> TOC render shouldComponentUpdate',
      nextProps.data
      , this.props.data
    );
    if (this.props.data === this) {
      return false;
    }
    return true;
  }

  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}><a href={"/content/" + data[i].id}
                                data-id={data[i].id}
                                onClick={function (e) {
                                  e.preventDefault();
                                  this.props.onChangePage(e.target.dataset.id);
                                }.bind(this)}
        >{data[i].title}</a></li>);
      i = i + 1;
    }

    return (
      <div>
        <nav>
          {lists}
        </nav>
      </div>
    );
  }
}

export default Toc;
