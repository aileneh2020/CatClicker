const allCats = [
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

// Loop through array of cat objects and create a button for each cat
for (let i = 0; i < allCats.length; i++) {
  const cat = allCats[i];
  const btn = document.createElement('button');
  const list = document.getElementById('catList');

  btn.textContent = cat.name;
  list.appendChild(btn);

  btn.addEventListener('click', function() {
      showCat(cat);
  })
}

// Display selected cat
function showCat(cat) {
  const display = document.getElementById("catDisplay");
  const catTitle = document.createElement("h2");
  const catCounter = document.createElement("p");
  const catImg = document.createElement("img");

  // Clear out any previous cat picture
  display.innerHTML = '';

  // Create html elements
  catTitle.textContent = cat.name;
  catCounter.textContent = "Number of Clicks: " + cat.numClicks;
  catImg.setAttribute("src", cat.imageURL);
  catImg.setAttribute("class", "cat-pic");
  catImg.setAttribute("alt", "Photo of " + cat.name);

  // Display cat image and info
  display.appendChild(catTitle);
  display.appendChild(catCounter);
  display.appendChild(catImg);

  // Update number of clicks each time cat image is clicked
  catImg.addEventListener('click', function() {
    cat.numClicks++;
    catCounter.textContent = "Number of Clicks: " + cat.numClicks;
  })
}
