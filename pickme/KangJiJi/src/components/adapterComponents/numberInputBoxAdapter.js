import numberInputBox from './../components/numberInputBox';

var numberInputBoxAdapter = new Object();
numberInputBoxAdapter.render = function(defaultValue) {
  var view = numberInputBox.render(defaultValue);
  return view;
}

export default numberInputBoxAdapter;