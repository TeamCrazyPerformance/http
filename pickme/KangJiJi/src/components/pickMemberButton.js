import domHelper from './../helper/domHelper';

var pickMemberButton = function(eventListener, callback) {
  return {
    className: "pickMemberButton",
    eventListener: eventListener || Function.prototype,
    callback: callback || Function.prototype,
    dom: Object.prototype,
    render: function(renderingOption) {
      domHelper.render(this, renderingOption);
    },
    getHtml: function() {
      return `<button type="button" class=${this.className}>Pick</button>`;
    },
    getClassName: function() {
      return this.className;
    },
    getEventListener: function() {
      return function() { console.log('hihi'); };
    },
    setDom: function(dom) {
      this.dom = dom;
      return;
    },
    getDom: function() {
      return this.dom;
    }
  };
}

export default pickMemberButton;