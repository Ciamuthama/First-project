const cards = document.querySelector(".cards");
const switchInputs = document.querySelectorAll(".switch-wrapper input");
const prices = cards.querySelectorAll(".price1-hide");
const toggleClass = "hide";
for (const switchInput of switchInputs) {
  switchInput.addEventListener("input", function () {
    for (const price of prices) {
      price.classList.add(toggleClass);
    }
    const activePrices = cards.querySelectorAll(
      `.price1-hide.${switchInput.id}`
    );
    for (const activePrice of activePrices) {
      activePrice.classList.remove(toggleClass);
    }
  });
}

//Faq controls
class DisclosureButton {
  constructor(buttonNode) {
    this.buttonNode = buttonNode;
    this.controlledNode = false;


    var id = this.buttonNode.getAttribute('aria-controls');

    if (id) {
      this.controlledNode = document.getElementById(id);
    }

    this.buttonNode.setAttribute('aria-expanded', 'false');
    this.hideContent();

    this.buttonNode.addEventListener('click', this.onClick.bind(this));
    this.buttonNode.addEventListener('focus', this.onFocus.bind(this));
    this.buttonNode.addEventListener('blur', this.onBlur.bind(this));
  }

  showContent() {
    if (this.controlledNode) {
      this.controlledNode.style.display = 'block';
    }
  }

  hideContent() {
    if (this.controlledNode) {
      this.controlledNode.style.display = 'none';
    }
  }

  toggleExpand() {
    if (this.buttonNode.getAttribute('aria-expanded') === 'true') {
      this.buttonNode.setAttribute('aria-expanded', 'false');
      this.hideContent();
    } else {
      this.buttonNode.setAttribute('aria-expanded', 'true');
      this.showContent();
    }
  }

  /* EVENT HANDLERS */

  onClick() {
    this.toggleExpand();
  }

  onFocus() {
    this.buttonNode.classList.add('focus');
  }

  onBlur() {
    this.buttonNode.classList.remove('focus');
  }
}

/* Initialize Hide/Show Buttons */

window.addEventListener(
  'load',
  function () {
    var buttons = document.querySelectorAll(
      'button[aria-expanded][aria-controls]'
    );

    for (var i = 0; i < buttons.length; i++) {
      new DisclosureButton(buttons[i]);
    }
  },
  false
);


function Comparison() {
  document.getElementById("w-dropdown-list3").classList.toggle("show");
}

window.onclick =function (event) {
  if (!event.target.matches(".btn1")) {
    var dropdowns = document.getElementsByClassName("dropdown-toggle-container");
    var i;
    for (i = 0; i <dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove('show')
      }
      
    }
  }
}