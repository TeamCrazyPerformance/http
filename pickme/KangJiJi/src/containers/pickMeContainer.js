import numberInputBoxAdapter from './../components/adapterComponents/numberInputBoxAdapter';




var sayHello = function(numberInputBox) {
  console.dir(numberInputBox);

  return numberInputBox;
}


var pickMeContainer = new Object();
pickMeContainer.render = function() {
  var view = '';

  view = view.concat(numberInputBoxAdapter.render({
    minValue: 0,
    maxValue: 200,
    placeholder: 'PTNum',
    changeEventListener: sayHello
  }));

  return view;
}

export default pickMeContainer;