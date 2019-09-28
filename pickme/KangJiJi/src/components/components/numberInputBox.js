var numberInputBox = new Object();

numberInputBox.render = function(minValue, maxValue, placeholder) {
  var view = `<input
      type="number"
      name="number input"
      class="numberInputBox"
      min="${minValue}"
      max="${maxValue}"
      placeholder="${placeholder}"
    />`;

  return view;
}

numberInputBox.afterRender = function(changeEventListener) {
  document.getElementsByClassName("numberInputBox")[0].addEventListener("change", function() {
    changeEventListener(this);
  });
}

export default numberInputBox;


















// let About = {
//   render : async () => {
//       let view =  /*html*/`
//           <section class="section">
//               <h1> About </h1>
//               <button id="myBtn"> Button</button>
//           </section>
//       `
//       return view
//   },
//   after_render: async () => {
      
//   }

// }

// export default About;