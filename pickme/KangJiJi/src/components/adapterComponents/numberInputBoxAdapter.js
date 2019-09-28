import numberInputBox from './../components/numberInputBox';

var numberInputBoxAdapter = new Object();
numberInputBoxAdapter.render = function(inputObject) {
  var minValue = inputObject.minValue >= 0 ? inputObject.minValue : -9999999999; // maxlength="10" effect
  var maxValue = inputObject.maxValue || 9999999999; // maxlength="10" effect
  var placeholder = inputObject.placeholder || "";
  var changeEventListener = inputObject.changeEventListener || function(object){};

  var view = numberInputBox.render(minValue, maxValue, placeholder);
  // 이벤트 리스너를 render가 끝난 뒤에 적용하는 법 찾아보기
  numberInputBox.afterRender(changeEventListener);
  return view;
}

export default numberInputBoxAdapter;