import setNumOfParticipantComponent from './../components/setNumOfParticipantComponent';
import setInformationOfParticipantComponent from '../components/setInformationOfParticipantComponent.js';
import pickPresenterComponent from './../components/pickPresenterComponent';
import showPresenterComponent from './../components/showPresenterComponent';

var mainPage = {
  render: function() {
    setNumOfParticipantComponent.render('append');
    setInformationOfParticipantComponent.render('append');
    pickPresenterComponent.render('append');
    showPresenterComponent.render('append');
  }
}

export default mainPage;