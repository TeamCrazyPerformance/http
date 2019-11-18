import domHelper from './../helper/domHelper';

var setInformationOfParticipantComponent = {
  componentHtml: `
    <div class="set-information-of-participant-component__informaiton-form">
      <input type="text" class="set-information-of-participant-component__informaiton-form__participant-name">
      <input type="number" class="set-information-of-participant-component__informaiton-form__num-of-presentations">
    </div>
  `,
  componentClassName: `set-information-of-participant-component`,
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
  getInformationOfParticipantList: function() {
    let informationOfParticipantWrapperDom = document.getElementsByClassName(this.getComponentClassName())[0];
    let informationOfParticipantDom = Array.from(informationOfParticipantWrapperDom.children);
    let informationOfParticipantList = informationOfParticipantDom.map(function getInformationOfParticipantFromDom(dom) {
      let informationOfParticipant = [dom.children[0].value, Number(dom.children[1].value)];
      return informationOfParticipant;
    });
    return informationOfParticipantList;
  },
  addEvent: function() { },
  render: function(eventHandler) {
    this.setEventHandler(eventHandler);
    domHelper.render(this);
  }
}

export default setInformationOfParticipantComponent;