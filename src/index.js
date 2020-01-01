import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import parseText from "./parseText";
import WordCloud from "./WordCloud";
import { Switch, Button } from "@blueprintjs/core";

import "./styles.css";

function App() {
  const [data, setData] = useState(null);
  const [angle, setAngle] = useState(60);
  const [fontSizeSmall, setFontSizeSmall] = useState(5);
  const [fontSizeLarge, setFontSizeLarge] = useState(45);
  const [showCounts, setShowCounts] = useState(true);
  const [countSize, setCountSize] = useState(5);

  useEffect(() => {
    d3.text("words.txt")
      .then(parseText)
      .then(setData);
  }, []);

  console.log(data);

  return (
    <div className="App">
      <div className="container ">
        <div className="title item-header">
          <h1>Hello Code Sandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>

        <div className="controls item-a">
          <label>
            Angles:
            <input
              type="text"
              value={angle}
              onChange={e => setAngle(e.target.value)}
            />
          </label>

          <label>
            Font Start:
            <input
              type="text"
              value={fontSizeSmall}
              onChange={e => setFontSizeSmall(e.target.value)}
            />
          </label>

          <label>
            Font Stop:
            <input
              type="text"
              value={fontSizeLarge}
              onChange={e => setFontSizeLarge(e.target.value)}
            />
          </label>

          <Switch
            checked={showCounts}
            label="Show Counts"
            onChange={e => setShowCounts(e.currentTarget.checked)}
          />
          <label>
            Count Size:
            <input
              type="text"
              value={countSize}
              onChange={e => setCountSize(e.target.value)}
            />
          </label>

          {/* <label>
                        Show Counts:
                        <input
                            type="checkbox"
                            checked={showCounts}
                            onChange={e => setShowCounts(e.currentTarget.checked)}
                        />
                        </label>
                        <Button
                        intent="success"
                        text="button content"
                        // onClick={incrementCounter}
                        /> */}
          {/* <input type="submit" value="Submit" /> */}
        </div>

        <div class="wordcloud item-b ">
          <svg width="800" height="800">
            <WordCloud
              words={data}
              // forCarol={chosenCarol}
              width={800}
              height={800}
              angle={angle}
              fontSizeLarge={fontSizeLarge}
              fontSizeSmall={fontSizeSmall}
              showCounts={showCounts}
              countSize={countSize}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
