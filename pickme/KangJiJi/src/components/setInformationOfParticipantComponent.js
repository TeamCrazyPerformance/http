import domHelper from './../helper/domHelper';

var setInformationOfParticipantComponent = {
  componentHtml: `
    <div class="set-information-of-participant-component__informaiton-form">
      <input type="text" class="set-information-of-participant-component__informaiton-form__participant-name">
      <input type="number" class="set-information-of-participant-component__informaiton-form__num-of-presentations">
    </div>
  `,
  componentClassName: `set-information-of-participant-component`,
  getComponentHtml: function() {
    return this.componentHtml;
  },
  getComponentClassName: function() {
    return this.componentClassName;
  },
  addEvent: function() { },
  render: function() {
    domHelper.render(this);
  }
}

export default setInformationOfParticipantComponent;