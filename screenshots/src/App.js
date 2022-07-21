import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Download from "./components/Download";
import Image from "./components/Image";
import Icons from "./components/Icons";
import Charts from "./components/Charts";
import ScreenshotPage from "./pages/ScreenshotPage";
import SideMenu from "./pages/SideMenu";
import DynamoChart from "./pages/DynamoChart"

export default () => {
  return (
    <Router>
      <hr />
      <Switch>
        <Route path="/download" component={Download} />
        <Route path="/image" component={Image} />
        <Route path="/icons" component={Icons} />
        <Route path="/charts" component={Charts} />
        <Route path="/" component={ScreenshotPage} />
        <Route path="/menu" component={SideMenu} />
        <Route path="/dynamo" component={DynamoChart} />
      </Switch>
    </Router>
  );
};
