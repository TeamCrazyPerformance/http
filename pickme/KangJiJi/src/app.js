import mainPage from './pages/mainPage';
import domHelper from './helper/domHelper';

// Routing
var app = {
  render: function() {
    this.pageChangeAndAddEvent(mainPage);
  },
  pageChangeAndAddEvent: function(pageComponent) {
    this.pageRendering(pageComponent);
  },
  pageRendering: function(pageComponent) {
    if(pageComponent || pageComponent.render) {
      domHelper.initDom();
      pageComponent.render();
    }
  }
}

export default app;