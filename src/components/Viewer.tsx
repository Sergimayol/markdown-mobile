import React, { Component, useState } from "react";
import { ScrollView, View, Linking } from "react-native";
import Markdown from "react-native-markdown-package";
import viewerStyle from "./Viewer.style";
import markdownStyle from "../utils/markdownStyle";

const example = `
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

const defaultIntroText = `
# Hello👋!!

--- 

- This is Mobile app to preview markdown files.

## Getting Started🚀

- Click on the menu button \`Open file\` (on the top left corner) to select a markdown file from your device.

## Features✔️

- [x] Open markdown file from your device
- [x] Preview markdown file
- [ ] Edit markdown file
- [ ] Add a complete markdown renderer (including all md syntax and latex)

## Bugs🐞 and Issues🤔

- If you encounter any bugs or issues, feel free to open an issue [here]("https://github.com/Sergimayol/markdown-mobile/issues").
- Also this is an open source project, so feel free to contribute to this project with a pull request.

## License📜
- [MIT](https://github.com/Sergimayol/markdown-mobile/blob/main/LICENSE)

---
`;

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
