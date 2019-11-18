import domHelper from './../helper/domHelper';

var showPresenterComponent = {
  componentHtml: `<div class="show-presenter-component__presenter-name"></div>`,
  componentClassName: `show-presenter-component`,
  getComponentHtml: function() {
    return this.componentHtml;
  },
  getComponentClassName: function() {
    return this.componentClassName;
  },
  setPresenter: function(presenter) {
    document.getElementsByClassName("show-presenter-component__presenter-name")[0].innerHTML = presenter;
  },
  addEvent: function() { },
  render: function() {
    domHelper.render(this);
  }
}

export default showPresenterComponent;