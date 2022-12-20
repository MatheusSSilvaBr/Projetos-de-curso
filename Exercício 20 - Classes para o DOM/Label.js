const Component = require("./Component.js");

class Label extends Component {
  constructor(text, parent, options) {
    super("label", parent, Object.assign({}, options, { textContent: text }));
  }
}

module.exports = Label;
