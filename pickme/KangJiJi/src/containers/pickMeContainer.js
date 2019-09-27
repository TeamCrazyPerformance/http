import numberInputBoxAdapter from './../components/adapterComponents/numberInputBoxAdapter';







var pickMeContainer = new Object();
pickMeContainer.render = function() {
  var view = '';

  view = view.concat(numberInputBoxAdapter.render(/*defaultValue*/3));

  return view;
}

export default pickMeContainer;