import setNumOfParticipantComponent from './../components/setNumOfParticipantComponent';
import setInformationOfParticipantComponent from '../components/setInformationOfParticipantComponent.js';
import pickPresenterComponent from './../components/pickPresenterComponent';
import showPresenterComponent from './../components/showPresenterComponent';

var mainPage = {
  numOfParticipant: 1,
  appendSetInformationOfParticipantComponent: function() {
    setInformationOfParticipantComponent.render();
  },
  increaseNumOfParticipant: function(numOfParticipant) {
    this.appendSetInformationOfParticipantComponent();
  },
  getInformationOfParticipantList: function() {
    let informationOfParticipantWrapperDom = document.getElementsByClassName(setInformationOfParticipantComponent.getComponentClassName())[0];
    let informationOfParticipantDom = Array.from(informationOfParticipantWrapperDom.children);
    let informationOfParticipantList = informationOfParticipantDom.map(function getInformationOfParticipantFromDom(dom) {
      let informationOfParticipant = [dom.children[0].value, Number(dom.children[1].value)];
      return informationOfParticipant;
    });
    return informationOfParticipantList;
  },
  calculatePercentage: function(informationOfParticipantList) {
    let sumOfPresentationTimse = 0;
    let onePercentPoint = 0;
    let lengthOfInformationOfParticipantList = informationOfParticipantList.length;
    let sortedInformationOfParticipantList = [...informationOfParticipantList].sort(function(a, b) {
      return b[1] - a[1];
    });

    sortedInformationOfParticipantList.forEach(function sumPresentationTimes(informationOfParticipant) {
      sumOfPresentationTimse += informationOfParticipant[1];
    });

    onePercentPoint = 100 / sumOfPresentationTimse;

    let sortedPresentationPercentage = sortedInformationOfParticipantList.map(function calculatePresentationTimesToPercentage(informationOfParticipant) {
      return informationOfParticipant[1] * onePercentPoint;
    });

    sortedInformationOfParticipantList.forEach(function changePresentationTimesToPercentage(informationOfParticipant, index) {
      informationOfParticipant[1] = sortedPresentationPercentage[lengthOfInformationOfParticipantList - index - 1];
    });

    return sortedInformationOfParticipantList;
  },
  randPickWithPercentage: function(informationOfParticipantList) {
    let rand  = Math.floor(Math.random() * 100) + 1;
    let sumOfPercentage = 0;
    let listLength = informationOfParticipantList.length;

    console.log(informationOfParticipantList);
    for(let i = 0; i < listLength; i++) {
      sumOfPercentage += informationOfParticipantList[i][1];
      if(rand <= sumOfPercentage) {
        return informationOfParticipantList[i][0];
      }
    }
  },
  showPresenter: function(presenter) {
    showPresenterComponent.setPresenter(presenter);
  },
  pickPresenter: function() {
    let informationOfParticipantList = this.getInformationOfParticipantList();
    let informationOfParticipantListWithPercentage = this.calculatePercentage(informationOfParticipantList);
    let presenter = this.randPickWithPercentage(informationOfParticipantListWithPercentage);
    
    this.showPresenter(presenter);
  },
  render: function() {
    setNumOfParticipantComponent.render(this.increaseNumOfParticipant.bind(this));
    setInformationOfParticipantComponent.render();
    pickPresenterComponent.render(this.pickPresenter.bind(this));
    showPresenterComponent.render();
  }
}

export default mainPage;