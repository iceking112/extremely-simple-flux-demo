var React = require('react');

var MyTB = function(props) {
  var items = props.items;
  var itemHtml = items.map(function (listItem, i) {
    return <li key={i}>我写死的test</li>;
  });

  return <div>
    <ul>{itemHtml}</ul>
    <button onClick={props.onClick}>My Item</button>
  </div>;
};

module.exports = MyTB;
