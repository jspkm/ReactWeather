var React = require('react');

var About = (props) => {
  return (
    <div>  
      <h2 className="text-center">About</h2>
      <p>This is a simple weather app built using React.
         Tech and tools used include:
      </p>

      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a>
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation / Zurb</a>
        </li>
        <li>
          <a href="https://heroku.com">Heroku</a>
        </li>
      </ul>

      <p>You can find the source code at <a href="https://github.com/jspkm/ReactWeather">github</a></p>
    </div>
  );
};

module.exports = About;
