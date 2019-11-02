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
  addEvent: function() {
    console.log('showPresenterComponent');
  },
  render: function(renderingOption) {
    domHelper.render(this, renderingOption);
    this.addEvent();
  }
}

export default showPresenterComponent;