import React, { Component, useState } from "react";
import { ScrollView, View, Linking } from "react-native";
import Markdown from "react-native-markdown-package";
import viewerStyle from "./Viewer.style";
import markdownStyle from "../utils/markdownStyle";

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**
`;

export default class Viewer extends Component<{}> {
  render() {
    const text = "";
    const md = text === "" ? mkdStr : text;
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={viewerStyle.scrollView}
      >
        <View style={viewerStyle.container}>
          <Markdown
            styles={markdownStyle.collectiveMd}
            onLink={(url: string) => Linking.openURL(url)}
          >
            {md}
          </Markdown>
        </View>
      </ScrollView>
    );
  }
}
