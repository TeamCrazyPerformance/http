import domHelper from './../helper/domHelper';

var showPresenterComponent = {
  componentHtml: `<div class="show-presenter-component__presenter-name"></div>`,
  componentClassName: `show-presenter-component`,
  eventHandler: Function.prototype,
  getComponentHtml: function() {
    return this.componentHtml;
  },
  getComponentClassName: function() {
    return this.componentClassName;
  },
  setEventHandler: function(eventHandler) {
    this.eventHandler = eventHandler;
  },
  setPresenter: function(presenter) {
    document.getElementsByClassName("show-presenter-component__presenter-name")[0].innerHTML = presenter;
  },
  addEvent: function() { },
  render: function(eventHandler) {
    this.setEventHandler(eventHandler);
    domHelper.render(this);
  }
}

export default showPresenterComponent;