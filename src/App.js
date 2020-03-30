import React from "react";
import "./styles.css";

const notEqualTo = target => e => e !== target;

if (!Element.prototype.nearest) {
  Element.prototype.nearest = function(s) {
    var el = this;

    do {
      const targetEl = [...el.querySelectorAll(s)].find(notEqualTo(this));

      if (targetEl) return targetEl;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

const ListItem = ({ name, sub1, sub2 }) => (
  <li>
    <span className="left">
      <h1>{name}</h1>
      <div>
        <h3>{sub1}</h3>
        <h3>{sub2}</h3>
      </div>
    </span>
    <span className="right">
      <form>
        <label>
          <input type="radio" name={name} />
          opt1
        </label>
        <label>
          <input type="radio" name={name} />
          opt2
        </label>
      </form>
    </span>
  </li>
);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        {Array.from({ length: 4 }, (__, i) => (
          <ListItem
            key={i}
            name={`name ${i}`}
            sub1={`sub1 ${i}`}
            sub2={`sub2${i}`}
          />
        ))}
      </ul>
    </div>
  );
}
