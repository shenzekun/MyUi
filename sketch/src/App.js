import React, { Component } from 'react';
import './App.css';
import 'wired-elements';
const cardWrap = {
  width: '300px',
  height: '900px'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <wired-card style={cardWrap} elevation="2">
          <p>List</p>
          <hr />
          <wired-checkbox text="Check"></wired-checkbox>
          <hr />
          <wired-combo selected="two">
            <wired-item value="one" text="Number one"></wired-item>
            <wired-item value="two" text="Number two"></wired-item>
            <wired-item value="three" text="Number three"></wired-item>
          </wired-combo>
          <hr/>
          <wired-icon-button class="red">favorite</wired-icon-button>
          <hr/>
          <wired-button>click</wired-button>
          <hr/>
          <wired-input placeholder="Enter name"></wired-input>
          <wired-input placeholder="Disabled" disabled></wired-input>
          <hr/>
          <wired-listbox>
            <wired-item value="one" text="No. one"></wired-item>
            <wired-item value="two" text="No. two"></wired-item>
          </wired-listbox>
          <wired-listbox horizontal selected="two" style={{marginTop: '10px'}}>
            <wired-item value="one" text="No. one"></wired-item>
            <wired-item value="two" text="No. two"></wired-item>
            <wired-item value="three" text="No. three"></wired-item>
          </wired-listbox>
          <hr/>
          <wired-progress value="10" min="5" max="15" style={{width: '200px'}}></wired-progress>
          <hr/>
          <wired-radio text="Radio Two" checked></wired-radio>
          <hr/>
          <wired-slider knobradius="15" value="10" min="5" max="15"></wired-slider>
          <hr/>
          <wired-textarea placeholder="Enter text" rows="3" style={{width: '200px'}}></wired-textarea>
          <hr/>
          <wired-toggle checked></wired-toggle>
          <hr/>
          <button id="btn">Click me!</button>
          <wired-tooltip position="left" for="btn" text="Above"></wired-tooltip>
        </wired-card>
      </div>
    );
  }
}

export default App;
