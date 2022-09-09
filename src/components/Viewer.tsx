import React, { Component, useState } from "react";
import { ScrollView, View, Linking } from "react-native";
import Markdown from "react-native-markdown-package";
import viewerStyle from "./Viewer.style";
import markdownStyle from "../utils/markdownStyle";
import { defaultIntroText, example } from "../utils/markdownTexts";

export default class Viewer extends Component<{ text: string }> {
  render() {
    const markdownContent = this.props.text || defaultIntroText;
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={viewerStyle.scrollView}
      >
        <View style={viewerStyle.container}>
          <Markdown
            styles={markdownStyle}
            onLink={(url: string) => Linking.openURL(url)}
          >
            {markdownContent}
          </Markdown>
        </View>
      </ScrollView>
    );
  }
}
