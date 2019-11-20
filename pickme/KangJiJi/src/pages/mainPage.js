import increaseParticipantButtonComponent from '../components/increaseParticipantButtonComponent';
import setInformationOfParticipantComponent from '../components/setInformationOfParticipantComponent';
import pickPresenterButtonComponent from '../components/pickPresenterButtonComponent';
import showPresenterComponent from '../components/showPresenterComponent';
import presenterPickHelper from '../helper/presenterPickHelper';

const mainPage = {
  appendSetInformationOfParticipantComponent() {
    setInformationOfParticipantComponent.appendComponent();
  },
  increaseParticipant() {
    this.appendSetInformationOfParticipantComponent();
  },
  showPresenter(presenterName) {
    showPresenterComponent.setPresenter(presenterName);
  },
  pickPresenter() {
    const informationOfParticipants = setInformationOfParticipantComponent.getInformationOfParticipants();
    const presenterName = presenterPickHelper.pickPresenter(informationOfParticipants);
    this.showPresenter(presenterName);
  },
  render() {
    increaseParticipantButtonComponent.render(this.increaseParticipant.bind(this));
    setInformationOfParticipantComponent.render();
    pickPresenterButtonComponent.render(this.pickPresenter.bind(this));
    showPresenterComponent.render();
  },
};

export default mainPage;
