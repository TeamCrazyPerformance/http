import domHelper from './../helper/domHelper';

var pickPresenterComponent = {
  componentHtml: `<input type="button" class="pick-presenter-component__pick-presenter-button" value="pick">`,
  componentClassName: `pick-presenter-component`,
  getComponentHtml: function() {
    return this.componentHtml;
  },
  getComponentClassName: function() {
    return this.componentClassName;
  },
  addEvent: function() {
    console.log('pickPresenterComponent');
  },
  render: function(renderingOption) {
    domHelper.render(this, renderingOption);
    this.addEvent();
  }
}

export default pickPresenterComponent;