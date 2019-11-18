import setNumOfParticipantComponent from './../components/setNumOfParticipantComponent';
import setInformationOfParticipantComponent from '../components/setInformationOfParticipantComponent.js';
import pickPresenterButtonComponent from '../components/pickPresenterButtonComponent';
import showPresenterComponent from './../components/showPresenterComponent';

import presenterPickHelper from './../helper/presenterPickHelper';

var mainPage = {
  appendSetInformationOfParticipantComponent: function() {
    setInformationOfParticipantComponent.render();
  },
  increaseNumOfParticipant: function() {
    this.appendSetInformationOfParticipantComponent();
  },
  showPresenter: function(presenter) {
    showPresenterComponent.setPresenter(presenter);
  },
  pickPresenter: function() {
    let informationOfParticipantList = setInformationOfParticipantComponent.getInformationOfParticipantList();
    let presenter = presenterPickHelper.pickPresenter(informationOfParticipantList);
    this.showPresenter(presenter);
  },
  render: function() {
    setNumOfParticipantComponent.render(this.increaseNumOfParticipant.bind(this));
    setInformationOfParticipantComponent.render();
    pickPresenterButtonComponent.render(this.pickPresenter.bind(this));
    showPresenterComponent.render();
  }
}

export default mainPage;