// function prices() {
// 	const cards = document.querySelector(".cards");
// 	const switchInputs = document.querySelectorAll(".switch-wrapper input");
// 	const prices = cards.querySelectorAll(".price2-hide");
	
// 	const toggleClass = "hide";
// 	for (const switchInput of switchInputs) {
//   switchInput.addEventListener("input", function () {
//     for (const price of prices) {
//       price.classList.add(toggleClass);
//     }
//     const activePrices = cards.querySelectorAll(
//       `.price2-hide.${switchInput.id}`
//     );
//     for (const Price of activePrices) {
//       Price.classList.remove(toggleClass);
//     }
//   });
// 	}
// }

let Monthly = document.querySelector(".price1-hide");
let Yearly = document.querySelector('.price2-hide');

document.querySelector('.switch-wrapper input').addEventListener('change', e => {
  Monthly.style.display = e.target.checked ? 'block' : 'none';
  Yearly.style.display = e.target.checked ? 'none' : 'block';
})

function Product() {
  document.getElementsByClassName("mobile").classList.toggle("hide");
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


function Mobile() {
  document.getElementById("mobile-dropdown1").classList.toggle("show1");
}

window.onclick =function (event) {
  if (!event.target.matches(".mobile-btn1")) {
    var dropdowns = document.getElementsByClassName(".mobile-dropdown1");
    var i;
    for (i = 0; i <dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show1")) {
        openDropdown.classList.remove('show1')
      }
      
    }
  }
}

function mobileNav() {
  document.getElementById("mobile-container").classList.toggle("show-mobile-nav");
}




function Mobile2() {
  document.getElementById("mobile-dropdown2").classList.toggle("show1");
}

window.onclick =function (event) {
  if (!event.target.matches(".mobile-btn2")) {
    var dropdowns = document.getElementsByClassName(".mobile-dropdown2");
    var i;
    for (i = 0; i <dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show1")) {
        openDropdown.classList.remove('show1')
      }
      
    }
  }
}

function Click() {
  document.getElementById("btn-nav").classList.toggle("active")
}


function Click2() {
	document.getElementById("btn-nav2").classList.toggle("active")
}

function Btn() {
	document.getElementById("btn1").classList.toggle("list3-active")
}

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


const mainNav = document.querySelector(".main-nav");
const navigation = document.querySelector(".navigation2");

const options = {
  rootMargin:"-100px 0px 0px 0px"
};

const changeNav = new IntersectionObserver
  (function (entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      mainNav.classList.add("scrolled")
    } else {
      
    }
  })
}, options )

changeNav.observe(navigation);