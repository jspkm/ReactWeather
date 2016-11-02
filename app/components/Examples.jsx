var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h2 className="text-center">Examples page</h2>
      <p>Here are few examples to try out</p>
      <ol>
        <li>
          <Link to='/?location=Palo Alto'>Palo Alto, CA</Link>
        </li>
        <li>
          <Link to='/?location=Seoul'>Seoul, Korea</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
