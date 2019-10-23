var numberInputBox = {
  className: "numberInputBox",
  dom: Object.prototype,
  getHtml: function(eventListener, callback) {
    return `<input type="number" class="numberInputBox" min="0" max="9999" />`;
  },
  getClassName: function() {
    return this.className;
  },
  setDom: function(dom) {
    this.dom = dom;
    return;
  },
  getDom: function() {
    return this.dom;
  },
  getEventListener: function() {
    
  }
}

export default numberInputBox;