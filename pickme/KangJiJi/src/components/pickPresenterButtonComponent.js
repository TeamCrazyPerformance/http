import domHelper from '../helper/domHelper';

var pickPresenterButtonComponent = {
  componentHtml: `<input type="button" class="pick-presenter-component__pick-presenter-button" value="pick">`,
  componentClassName: `pick-presenter-component`,
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
  pickPresenter: function() {
    return this.eventHandler();
  },
  addEvent: function() {
    let button = document.getElementsByClassName('pick-presenter-component__pick-presenter-button')[0];
    button.addEventListener('click', this.pickPresenter.bind(this));
  },
  render: function(eventHandler) {
    this.setEventHandler(eventHandler);
    domHelper.render(this);
  }
}

export default pickPresenterButtonComponent;