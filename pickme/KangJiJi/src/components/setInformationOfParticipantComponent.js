import domHelper from '../helper/domHelper';

const setInformationOfParticipantComponent = {
  componentHtml: `<div class="set-information-of-participant-component__informaiton-form">
      <input type="text" class="set-information-of-participant-component__informaiton-form__participant-name">
      <input type="number" class="set-information-of-participant-component__informaiton-form__num-of-presentations">
    </div>`,
  componentClassName: 'set-information-of-participant-component',
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
  getInformationOfParticipants() {
    const informationOfParticipantWrapperDom = document.getElementsByClassName(this.getComponentClassName())[0];
    const informationOfParticipantDom = Array.from(informationOfParticipantWrapperDom.children);
    const informationOfParticipants = informationOfParticipantDom.map(function getInformationOfParticipantFromDom(dom) {
      const informationOfParticipant = [dom.children[0].value, Number(dom.children[1].value)];
      return informationOfParticipant;
    });
    return informationOfParticipants;
  },
  appendComponent() {
    domHelper.render(this, this.getComponentClassName());
  },
  addEvent() { },
  render(eventHandler) {
    this.setEventHandler(eventHandler);
    domHelper.render(this);
  },
};

export default setInformationOfParticipantComponent;
