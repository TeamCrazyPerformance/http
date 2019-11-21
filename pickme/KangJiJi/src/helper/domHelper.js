const domHelper = {
  render(component, parentClassName) {
    this.appendHtml(component, parentClassName)
      .then(this.addEvent)
      .catch(function errorHandling(err) {
        console.log('Error: ', err);
      });
  },
  appendHtml(component, parentClassName) {
    return new Promise(function appendHtml(resolve, reject) {
      if (!component.getComponentHtml) {
        reject(new Error('This component does not have getComponentHtml method'));
      }

      const parentComponent = parentClassName
        ? document.getElementsByClassName(parentClassName)[0]
        : document.getElementById('app');

      const divWrapper = document.createElement('div');
      divWrapper.className = component.getComponentClassName();
      divWrapper.innerHTML = component.getComponentHtml();

      if (!parentClassName) {
        parentComponent.appendChild(divWrapper);
      } else {
        parentComponent.appendChild(divWrapper.children[0]);
      }

      resolve(component);
    });
  },
  addEvent(component) {
    return new Promise(function addEvent(resolve, reject) {
      if (!component.addEvent) {
        reject(new Error('This component does not have addEvent method'));
      }
      component.addEvent();
      resolve(component);
    });
  },
  removeHtml() {
    console.log('This function remove component by class name');
  },
  initDom() {
    document.getElementById('app').innerHTML = '';
  },
};

export default domHelper;
