import { Component, jsx } from "panel";
import { AnotherComponentEl } from "./another-component";
import { defineAndMakeJsxFactory } from "./jsx";

class ChildComponent extends Component<unknown> {
  get config() {
    return {
      template: () => (
        <>
          <h1>Hello</h1>
          <AnotherComponentEl />
        </>
      ),
    };
  }
}

export const ChildComponentEl = defineAndMakeJsxFactory(
  `child-component`,
  ChildComponent
);
