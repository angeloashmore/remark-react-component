var React = require('react'),
  mdast = require('mdast'),
  reactRenderer = require('mdast-react');

/**
 * This component is wrapped around any part of a page.
 * When that part of the page is clicked, it selects
 * the text within.
 */
var MdastComponent = React.createClass({
  displayName: 'MdastComponent',
  propTypes: {
    children: React.PropTypes.any.isRequired
  },
  render: function() {
    return mdast().use(reactRenderer).process(this.props.children);
  }
});

module.exports = MdastComponent;
