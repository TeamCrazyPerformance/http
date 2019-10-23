import pickMemberButton from './../components/pickMemberButton';
import plusMinusButton from './../components/plusMinusButton';

var mainPage = {
  people: [],
  render: function() {
    let pick1 = pickMemberButton();
    let pick2 = pickMemberButton();
    let pick3 = pickMemberButton();
    
    pick1.render("append");
    pick2.render("append");
    pick3.render("append");
  }
}

export default mainPage;