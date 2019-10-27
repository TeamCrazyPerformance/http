import pickMemberButton from './../components/pickMemberButton';
import plusMinusButton from './../components/plusMinusButton';

var mainPage = {
  people: [],
  render: function() {
    let pick = pickMemberButton();
    
    pick.render("append");
  }
}

export default mainPage;