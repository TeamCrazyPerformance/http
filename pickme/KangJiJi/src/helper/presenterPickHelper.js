const presenterPickHelper = {
  pickPresenter(informationOfParticipants) {
    const informationOfParticipantsWithPercentage = this.anotherEqualityCalculatePercentage(informationOfParticipants);
    const presenter = this.randPickWithPercentage(informationOfParticipantsWithPercentage);
    return presenter;
  },
  equalityCalculatePercentage(informationOfParticipants) {
    let equalityPercent = 0;
    const lengthOfInformationOfParticipants = informationOfParticipants.length;
    const sortedInformationOfParticipants = [...informationOfParticipants].sort(function descSort(a, b) {
      return b[1] - a[1];
    });

    equalityPercent = 100 / lengthOfInformationOfParticipants;

    sortedInformationOfParticipants.forEach(function changePresentationTimesToPercentage(informationOfParticipant) {
      informationOfParticipant[1] = equalityPercent;
    });
    return sortedInformationOfParticipants;
  },
  anotherEqualityCalculatePercentage(informationOfParticipants) {
    const sortedInformationOfParticipants = [...informationOfParticipants].sort(function ascSort(a, b) {
      return a[1] - b[1];
    });

    sortedInformationOfParticipants.forEach(function changePresentationTimesToPercentage(informationOfParticipant, index) {
      if (index === 0) {
        informationOfParticipant[1] = 100;
      } else {
        informationOfParticipant[1] = 0;
      }
    });

    return sortedInformationOfParticipants;
  },
  randPickWithPercentage(informationOfParticipants) {
    const listLength = informationOfParticipants.length;
    const rand = Math.floor(Math.random() * 100) + 1;
    let sumOfPercentage = 0;

    for (let i = 0; i < listLength; i += 1) {
      sumOfPercentage += informationOfParticipants[i][1];
      if (rand <= sumOfPercentage) {
        return informationOfParticipants[i][0];
      }
    }

    return false;
  },
};

export default presenterPickHelper;
