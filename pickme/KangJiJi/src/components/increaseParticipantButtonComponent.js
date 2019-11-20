import domHelper from '../helper/domHelper';

var increaseParticipantButtonComponent = {
  componentHtml: `
    <input type="button" class="set-num-of-participant-component__num-submit-button" value="+">
  `,
  componentClassName: `set-num-of-participant-component`,
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
  increaseNumOfParticipant: function() {
    return this.eventHandler();
  },
  addEvent: function() {
    let button = document.getElementsByClassName('set-num-of-participant-component__num-submit-button')[0];
    button.addEventListener('click', this.increaseNumOfParticipant.bind(this));
  },
  render: function(eventHandler) {
    this.setEventHandler(eventHandler);
    domHelper.render(this);
  }
}

export default increaseParticipantButtonComponent;