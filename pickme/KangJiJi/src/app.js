import mainPage from './pages/mainPage';
import domHelper from './helper/domHelper';

// Routing
const app = {
  render() {
    // Add routing
    this.pageChange(mainPage);
  },
  pageChange(pageComponent) {
    this.pageRendering(pageComponent);
  },
  pageRendering(pageComponent) {
    if (pageComponent && pageComponent.render) {
      domHelper.initDom();
      pageComponent.render();
    }
  },
};

export default app;
