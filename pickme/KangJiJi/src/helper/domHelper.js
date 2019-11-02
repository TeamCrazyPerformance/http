var domHelper = {
  render: function(component, renderingOption) {
    this.innerHtml(component, renderingOption)
    .catch(function(err) {
      console.log("Error:", err);
    });
  },
  innerHtml: function(component, renderingOption) {
    return new Promise(function (resolve, reject) {
      if(!component.getComponentHtml) { reject(`This component does not have getComponentHtml method`); }

      var main = document.getElementById("app");

      var divWrapper = document.createElement("div");
      divWrapper.className = component.getComponentClassName();
      divWrapper.innerHTML = component.getComponentHtml();

      main.appendChild(divWrapper);

      resolve(component);
    });
  },
  initDom: function() {
    document.getElementById("app").innerHTML = ``;
  }
}

export default domHelper;
