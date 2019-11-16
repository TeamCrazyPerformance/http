import domHelper from './../helper/domHelper';

var setNumOfParticipantComponent = {
  componentHtml: `
    <input type="number" class="set-num-of-participant-component__num-input-component" name="quantity" value="1" min="1" max="100">
    <input type="button" class="set-num-of-participant-component__num-submit-button" value="Set Num">
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
  getNumOfParticipant: function() {
    let numInputBox = document.getElementsByClassName('set-num-of-participant-component__num-input-component')[0];
    return this.eventHandler(Number(numInputBox.value));
  },
  addEvent: function() {
    let button = document.getElementsByClassName('set-num-of-participant-component__num-submit-button')[0];
    button.addEventListener('click', this.getNumOfParticipant.bind(this));
  },
  render: function(eventHandler) {
    this.setEventHandler(eventHandler);
    domHelper.render(this);
  }
}

export default setNumOfParticipantComponent;