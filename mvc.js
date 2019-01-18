/**MODEL**/
const model = {
  currentCat: null,
  adminView: false,
  allCats: [
    { name: "Puss In Boots",
      imageURL: "https://farm9.staticflickr.com/8514/8488238232_ef575e639f_m.jpg",
      numClicks: 0
    },
    { name: "Hello Kitty",
      imageURL: "https://media.altpress.com/uploads/2018/07/Hello_Kitty-696x696.jpg",
      numClicks: 0
    },
    { name: "Garfield",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/e/e7/GarfieldStanding.jpg",
      numClicks: 0
    },
    { name: "Felix",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Felix_the_cat.svg",
      numClicks: 0
    },
    { name: "Tom",
      imageURL: "http://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG66.png",
      numClicks: 0
    },
    { name: "Pusheen",
      imageURL: "https://www.licenseglobal.com/sites/default/files/images/PusheenMoreLicensees.jpg",
      numClicks: 0
    }
  ]
}

/**VIEW**/
const view = {
  renderList: function() {
    const allCats = controller.getAllCats();
    for (let i = 0; i < allCats.length; i++) {
      const cat = allCats[i];
      const btn = document.createElement('button');
      const list = document.getElementById('catList');

      btn.textContent = cat.name;
      list.appendChild(btn);

      btn.addEventListener('click', function() {
        controller.selectCat(cat);
        view.renderCat(cat);
      });
    }
  },

  initCat: function() {
    this.catTitle = document.getElementById("catTitle");
    this.catCounter = document.getElementById("catCounter");
    this.catImg = document.getElementById("catImg");

    this.catImg.addEventListener('click', function(e) {
      controller.addClick(model.currentCat);
    })

    this.renderCat(model.currentCat);
  },

  renderCat: function(cat) {
    catTitle.textContent = cat.name;
    catCounter.textContent = "Number of Clicks: " + cat.numClicks;
    catImg.setAttribute("src", cat.imageURL);
    catImg.setAttribute("class", "cat-pic");
    catImg.setAttribute("alt", "Photo of " + cat.name);
  },

  initAdmin: function() {
    // Add event listeners to admin buttons
    this.admBtn = document.getElementById("admBtn");
    this.admForm = document.getElementById("admForm");
    this.admSubmit = document.getElementById("admSubmit");
    this.admCancel = document.getElementById("admCancel");
    this.admCatName = document.getElementById("admCatName");
    this.admNumClicks = document.getElementById("admNumClicks");
    this.admImgUrl = document.getElementById("admImgUrl");

    admBtn.addEventListener('click', function() {
      controller.showAdminView();
    })

    admCancel.addEventListener('click', function() {
      controller.hideAdminView();
    })

    admSubmit.addEventListener('click', function(e) {
      e.preventDefault();
      controller.updateCatDetails();
    })
  }
}

/**CONTROLLER**/
const controller = {
  init: function() {
    // Set default cat to first cat for display
    model.currentCat = model.allCats[0];
    // Display list of cat names and default cat image
    view.renderList();
    view.initCat();
    view.initAdmin();
  },

  // Get all cats from the model
  getAllCats: function() {
    return model.allCats;
  },

  // Udpate current cat in the model
  selectCat: function(cat) {
    model.currentCat = cat;
  },

  // Increments the number of clicks for the current cat
  addClick: function(cat) {
    model.currentCat.numClicks++;
    view.renderCat(cat);
  },

  showAdminView: function() {
    // Show when Admin button clicked
    admForm.style.visibility = "visible";
  },

  hideAdminView: function() {
    // Hide when Cancel button clicked
    admForm.style.visibility = "hidden";
  },

  updateCatDetails: function(e) {
    // Update cat info with new inputs when Save button clicked
    console.log("update details");
    const newCatName = admCatName.value;
    const newNumClicks = admNumClicks.value;
    const newImgUrl = admImgUrl.value;

    // get cat and set cat data to new data
    // set conditionals - if blank do not update
    model.currentCat.name = newCatName;
    model.currentCat.numClicks = newNumClicks; //not working yet
    model.currentCat.imageURL = newImgUrl;

    // update view with new cat info
  }
}

controller.init();
