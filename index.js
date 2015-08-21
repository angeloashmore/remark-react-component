var React = require('react'),
    MdastComponent = require('mdast-react-component');

var App = React.createClass({
    getInitialState() {
      return { text: '# hello world' };
    },
    onChange(e) {
      this.setState({ text: e.target.value });
    },
    render() {
      return (<div>
        <textarea
          value={this.state.text}
          onChange={this.onChange} />
        <div id='preview'>
          <MdastComponent>
            {this.state.text}
          </MdastComponent>
        </div>
      </div>);
    }
});

React.render(<App />, document.getElementById('app'));
