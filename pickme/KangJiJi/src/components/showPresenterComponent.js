import domHelper from '../helper/domHelper';

const showPresenterComponent = {
  componentHtml: '<div class="show-presenter-component__presenter-name"></div>',
  componentClassName: 'show-presenter-component',
  eventHandler: Function.prototype,
  getComponentHtml() {
    return this.componentHtml;
  },
  getComponentClassName() {
    return this.componentClassName;
  },
  setEventHandler(eventHandler) {
    this.eventHandler = eventHandler;
  },
  setPresenter(presenter) {
    document.getElementsByClassName('show-presenter-component__presenter-name')[0].innerHTML = presenter;
  },
  addEvent() { },
  render(eventHandler) {
    this.setEventHandler(eventHandler);
    domHelper.render(this);
  },
};

export default showPresenterComponent;
