var presenterPickHelper = {
  pickPresenter: function(informationOfParticipantList) {
    let informationOfParticipantListWithPercentage = this.equalityCalculatePercentage(informationOfParticipantList);
    let presenter = this.randPickWithPercentage(informationOfParticipantListWithPercentage);
    
    return presenter;
  },
  equalityCalculatePercentage: function(informationOfParticipantList) {
    let equalityPercent = 0;
    let lengthOfInformationOfParticipantList = informationOfParticipantList.length;
    let sortedInformationOfParticipantList = [...informationOfParticipantList].sort(function(a, b) {
      return b[1] - a[1];
    });

    equalityPercent = 100 / lengthOfInformationOfParticipantList;

    sortedInformationOfParticipantList.forEach(function changePresentationTimesToPercentage(informationOfParticipant, index) {
      // equality
      informationOfParticipant[1] = equalityPercent;
    });
    console.log(sortedInformationOfParticipantList);
    return sortedInformationOfParticipantList;
  },
  randPickWithPercentage: function(informationOfParticipantList) {
    let rand  = Math.floor(Math.random() * 100) + 1;
    let sumOfPercentage = 0;
    let listLength = informationOfParticipantList.length;

    for(let i = 0; i < listLength; i++) {
      sumOfPercentage += informationOfParticipantList[i][1];
      if(rand <= sumOfPercentage) {
        return informationOfParticipantList[i][0];
      }
    }
  }
}

export default presenterPickHelper;