var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-centered">Examples page</h1>
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
