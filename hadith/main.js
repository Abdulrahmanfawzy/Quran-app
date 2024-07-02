let item_flex = document.querySelector(".item_flex");
let spinner = document.querySelector(".spinner");

async function getAllHadith() {
  let data = await fetch(`https://hadeethenc.com/api/v1/categories/list/?language=ar`, {
    cache: "force-cache",
  });
  let result = await data.json();
  return result;
}

async function printAllHadith() {
  spinner.style.display = "flex";
  let data = await getAllHadith();
  spinner.style.display = "none";
  data.forEach((element, index) => {
    let box = `
    <a href="../displayHadith/index.html?${element.id}" class="item">
        <div class="right">
            <div class="rectangle">
                <section>
                    ${index+1}
                </section>
            </div>
            <div class="surah_name">
                ${element.title}
            </div>
        </div>
    </a>
    `;
    item_flex.innerHTML += box;
  });
}
printAllHadith();
