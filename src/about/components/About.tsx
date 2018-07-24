import * as React from 'react';

import '../styles/About.css';

import logo from '../../images/logo-dark.svg';

export default class About extends React.Component<any, any> {
  render() {
    return (
      <div className="About">
        <img src={logo} className="logo" height={128} />
        <p>
          Draco is a an extensible knowledge base of visualization design that you can use to find effective visualization designs.
        </p>
        <p>
          Learn more about Draco at <a href="https://uwdata.github.io/draco/">on GitHub</a>.
        </p>
      </div>
    )
  }
}
