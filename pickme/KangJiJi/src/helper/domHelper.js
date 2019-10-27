var domHelper = {
  render: function(component, renderingOption) {
    this.innerHtml(component, renderingOption)
    // .then(this.eventListener)
    .catch(function(err) {
      console.log("Error:", err);
    });
  },
  innerHtml: function(component, renderingOption) {
    return new Promise(function (resolve, reject) {
      if(!component.getHtml) { reject(`This component does not have getHtml method`); }

      if(renderingOption === "append") {
        document.getElementById("app").innerHTML += (`${component.getHtml()}<br>`);
      } else if(renderingOption === "replace") {
        document.getElementById("app").innerHTML = component.getHtml();
      } else {
        reject(`Make sure to include the rendering option as a parameter. Append or replace.`);
      }
      
      // Array-like Object to Array
      let componentClassList = Array.from(document.getElementsByClassName(component.getClassName()));
      let dom = componentClassList[componentClassList.length - 1];
      console.log(componentClassList);
      dom.addEventListener("click", component.getEventListener());
      resolve(component);
    });
  },
  eventListener: function(dom) {
    return new Promise(function(resolve, reject) {
      if(!component.getEventListener) {
        reject('This component does not have getEventListener method: ', component);
      }
      
      console.log(component.getDom());

      component.getDom().addEventListener("click", component.getEventListener());
      
     resolve(component);
    });
  },
  domFinder: function(component) {
    let componentClassList = Array.from(document.getElementsByClassName(component.getClassName()));
    return componentClassList[componentClassList.length - 1];
  }
}

export default domHelper;