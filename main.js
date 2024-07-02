let item_flex = document.querySelector(".item_flex");
let range = document.querySelector(".range section");
let range_icon = document.querySelector(".range i");
let mood = "down";
let spinner = document.querySelector(".spinner");

async function getAllSurahs() {
  
  let result = await fetch(`https://api.alquran.cloud/v1/quran/quran-uthmani`, {
    cache: "force-cache",
  });
  let data = await result.json();
  return data;
}

async function printAllData() {
  spinner.style.display = "flex";
  let { data } = await getAllSurahs();
  let { surahs } = data;
  printAllItems(surahs);
  spinner.style.display = "none";

  range.addEventListener("click", () => {
    item_flex.innerHTML = "";
    let reverseArr = surahs.reverse();
    if (mood == "down") {
      printAllItems(reverseArr);
      range.innerHTML = "رتب تنازلياً";
      range_icon.style.transform = "rotate(180deg)";
      mood = "up";
    } else {
      printAllItems(surahs);
      range.innerHTML = "رتب تصاعدياً";
      range_icon.style.transform = "rotate(0deg)";
      mood = "down";
    }
  });
}
printAllData();

function printAllItems(surahs) {
  surahs.forEach((element) => {
    let box = `
      <a href="display/index.html?${element.number}" class="item">
          <div class="right">
              <div class="rectangle">
                  <section>
                      ${element.number}
                  </section>
              </div>
              <div class="surah_name">
                  ${
                    element.number < 10
                      ? "00" + element.number
                      : element.number >= 10 && element.number < 100
                      ? "0" + element.number
                      : element.number
                  }
              </div>
          </div>
          <div class="left">
              <div class="ayat_num">${element.ayahs.length}  آيات </div>
          </div>
      </a>
      `;
    item_flex.innerHTML += box;
  });
}

let icon = document.querySelector(".icon");
let search_inpt = document.getElementById("search_inpt");
function searchFun() {
  if (search_inpt.value != "") {
    let val = search_inpt.value;
    icon.href = `search/index.html?q=${val}`;
  } else {
    alert("fill the input");
  }
}

icon.addEventListener("click", searchFun);
search_inpt.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (search_inpt.value != "") {
      let val = search_inpt.value;
      window.location.href = `search/index.html?q=${val}`;
    } else {
      alert("fill the input");
    }
  }
});
