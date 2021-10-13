import { Component, h } from "panel";
import "./child-component";

class SampleApp extends Component<unknown> {
  get config() {
    return {
      template: () => h("child-component"),
    };
  }
}

if (!customElements.get("sample-app")) {
  customElements.define("sample-app", SampleApp);
}

const sampleAppEl = document.createElement("sample-app");
document.body.append(sampleAppEl);
