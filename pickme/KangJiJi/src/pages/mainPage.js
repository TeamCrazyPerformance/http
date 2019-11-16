import setNumOfParticipantComponent from './../components/setNumOfParticipantComponent';
import setInformationOfParticipantComponent from '../components/setInformationOfParticipantComponent.js';
import pickPresenterComponent from './../components/pickPresenterComponent';
import showPresenterComponent from './../components/showPresenterComponent';

var mainPage = {
  numOfParticipant: 1,
  InformationOfParticipant: Array.prototype,
  setNumOfParticipant: function(numOfParticipant) {
    this.numOfParticipant = numOfParticipant;
  },
  setInformationOfParticipant: function(InformationOfParticipant) {
    this.InformationOfParticipant = InformationOfParticipant;
  },
  appendSetInformationOfParticipantComponent: function() {
    setInformationOfParticipantComponent.render();
  },
  changeEventNumOfParticipant: function(numOfParticipant) {
    this.setNumOfParticipant(numOfParticipant);
    this.appendSetInformationOfParticipantComponent();
  },
  pickPresenter: function() {
    let informationOfParticipantWrapperDom = document.getElementsByClassName(setInformationOfParticipantComponent.getComponentClassName())[0];
    let informationOfParticipantDom = Array.from(informationOfParticipantWrapperDom.children);
    console.log(informationOfParticipantDom);

    // this.setInformationOfParticipant(setInformationOfParticipantComponent.getInformationOfParticipant());
    // pick presenter logic
  },
  render: function() {
    setNumOfParticipantComponent.render(this.changeEventNumOfParticipant.bind(this));
    setInformationOfParticipantComponent.render();
    pickPresenterComponent.render(this.pickPresenter.bind(this));
    showPresenterComponent.render();
  }
}

export default mainPage;