import pickMeContainer from './src/containers/pickMeContainer';

var start = function() {
  const app = null || document.getElementById('app');

  app.innerHTML = pickMeContainer.render();
}

window.addEventListener('load', start);