var domHelper = {
  render: function(component) {
    this.appendHtml(component)
    .then(this.addEvent)
    .catch(function(err) {
      console.log("Error:", err);
    });
  },
  appendHtml: function(component) {
    return new Promise(function (resolve, reject) {
      if(!component.getComponentHtml) { reject(`This component does not have getComponentHtml method`); }

      let parentComponent = document.getElementById("app");
      let divWrapper = document.createElement("div");

      if(!!document.getElementsByClassName(component.getComponentClassName())[0]) {
        // Append
        parentComponent = document.getElementsByClassName(component.getComponentClassName())[0];
        divWrapper.innerHTML = component.getComponentHtml();
        parentComponent.appendChild(divWrapper.children[0]);
      } else {
        // InnerHTML is remove previous event listener.
        divWrapper.className = component.getComponentClassName();
        divWrapper.innerHTML = component.getComponentHtml();
        parentComponent.appendChild(divWrapper);
      }

      resolve(component);
    });
  },
  addEvent: function(component) {
    return new Promise(function(resolve, reject) {
      if(!component.addEvent) { reject(`This component does not have addEvent method`); }
      
      component.addEvent();
      resolve(component);
    });
  },
  removeHtml: function() {
    console.log('This function remove component by class name');
  },
  initDom: function() {
    document.getElementById("app").innerHTML = ``;
  }
}

export default domHelper;
