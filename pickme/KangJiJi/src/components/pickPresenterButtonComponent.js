import domHelper from '../helper/domHelper';

const pickPresenterButtonComponent = {
  componentHtml: '<input type="button" class="pick-presenter-component__pick-presenter-button" value="pick">',
  componentClassName: 'pick-presenter-component',
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
  pickPresenter() {
    return this.eventHandler();
  },
  addEvent() {
    const button = document.getElementsByClassName('pick-presenter-component__pick-presenter-button')[0];
    button.addEventListener('click', this.pickPresenter.bind(this));
  },
  render(eventHandler) {
    this.setEventHandler(eventHandler);
    domHelper.render(this);
  },
};

export default pickPresenterButtonComponent;
