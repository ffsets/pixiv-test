import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Splash from "./Components/Splash";
import PixivAppApi from "pixiv-app-api";

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100%"
});

const Title = styled(Typography)({
  margin: "1em"
});

const pixiv = new PixivAppApi("user_htup3874", "fGs82D8fbGykrnq");

const App = props => {
  return (
    <Root>
      <Title variant="h3">Pixiv App</Title>
      <Splash logged={true} pixiv={pixiv} />
    </Root>
  );
};

class App1 extends React.Component {
  constructor(props) {
    super(props);

    this.pixiv = new PixivAppApi("user_htup3874", "fGs82D8fbGykrnq");
    this.state = {
      logged: false
    };
  }

  async pixivStart() {
    await this.pixiv.login().catch(reason => {
      console.log("pixiv login failed: " + reason);
      return 1;
    });

    console.log("pixiv login successful");

    return 0;
  }

  componentDidMount() {
    if (!this.state.logged)
      this.pixivStart().then(result => {
        if (!result) {
          this.setState({ logged: true });
        }
      });
  }

  render() {
    return (
      <Root>
        <Title variant="h3">Pixiv App</Title>
        <Splash logged={this.state.logged} pixiv={this.pixiv} />
      </Root>
    );
  }
}

export default App;
