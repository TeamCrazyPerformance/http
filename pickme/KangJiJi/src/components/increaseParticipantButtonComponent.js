import domHelper from '../helper/domHelper';

const increaseParticipantButtonComponent = {
  componentHtml: `
    <input type="button" class="set-num-of-participant-component__num-submit-button" value="+">
  `,
  componentClassName: 'set-num-of-participant-component',
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
  increaseNumOfParticipant() {
    return this.eventHandler();
  },
  addEvent() {
    const button = document.getElementsByClassName('set-num-of-participant-component__num-submit-button')[0];
    button.addEventListener('click', this.increaseNumOfParticipant.bind(this));
  },
  render(eventHandler) {
    this.setEventHandler(eventHandler);
    domHelper.render(this);
  },
};

export default increaseParticipantButtonComponent;
