import domHelper from './../helper/domHelper';

var setNumOfParticipantComponent = {
  componentHtml: `
  <input type="number" class="set-num-of-participant-component__num-input-component" name="quantity" value="1" min="1" max="5">
  <input type="button" class="set-num-of-participant-component__num-submit-button" value="Set Num">
  `,
  componentClassName: `set-num-of-participant-component`,
  getComponentHtml: function() {
    return this.componentHtml;
  },
  getComponentClassName: function() {
    return this.componentClassName;
  },
  addEvent: function() {
    let button = document.getElementsByClassName('set-num-of-participant-component__num-submit-button')[0];
    
    button.addEventListener('click', function() {
        console.log('hihi');
    });
  },
  render: function(renderingOption) {
    domHelper.render(this, renderingOption);
    this.addEvent();
  }
}

export default setNumOfParticipantComponent;