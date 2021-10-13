import { Component, jsx } from "panel";
import { defineAndMakeJsxFactory } from "./jsx";

class AnotherComponent extends Component<unknown> {
  get config() {
    return {
      template: () => <h1>here is another!</h1>,
    };
  }
}

export const AnotherComponentEl = defineAndMakeJsxFactory(
  `another-component`,
  AnotherComponent
);
