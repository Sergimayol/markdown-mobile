import React, { Component, useState } from "react";
import { ScrollView, View, Linking } from "react-native";
import Markdown from "react-native-markdown-package";
import viewerStyle from "./Viewer.style";
import markdownStyle from "../utils/markdownStyle";

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

# This is Heading 1
## This is Heading 2
1. List1
2. List2
  This is a \`description\`  for List2 .\n
  * test
  * test
3. List3
4. List4.


You can also put some url as a link [like This](https://www.google.com) or write it as a plain text:
  https://www.google.com
  <mailme@gmail.com>

---

This text should be printed between horizontal rules

---

The following code is an example for codeblock:

    const a = function() {
      runSomeFunction()
    };

Below is some example to print blockquote

> Test block Quote
> Another  block Quote

this is _italic_ 
this is **strong**
Some *really* ~~basic~~ **Markdown**.


| # | Name   | Age 
|---|--------|-----|
| 1 | John   | 19  |
| 2 | Sally  | 18  |
| 3 | Stream | 20  |


this is an example for adding picture:

![Screen Shot 2019-10-05 at 3 19 33 AM](https://user-images.githubusercontent.com/26213148/66237659-d11f4280-e71f-11e9-91e3-7a3f08659d89.png)

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
            styles={markdownStyle}
            onLink={(url: string) => Linking.openURL(url)}
          >
            {md}
          </Markdown>
        </View>
      </ScrollView>
    );
  }
}
