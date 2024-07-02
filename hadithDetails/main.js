let url = window.location.href;
let search = url.lastIndexOf("?") + 1;
let part = +url.slice(search);

let spinner = document.querySelector(".spinner");
let item_flex = document.querySelector(".item_flex");

fetch(`https://hadeethenc.com/api/v1/hadeeths/one/?language=ar&id=${part}`)
  .then((res) => res.json())
  .then((datas) => {
  spinner.style.display = "flex";

    console.log(datas);
    let { words_meanings } = datas;
    let { hints } = datas;
    let { reference } = datas;

    let arr = words_meanings.map((el) => {
      return `<li>${el.word}:<span>${el.meaning}</span></li>`;
    });

    let hints_arr = hints.map((el, index) => {
      return `<p>${index + 1}. ${el} </p>`;
    });


    let box = `
        <div class="item">
            <div class="hadiths">
                الحديث:  ${datas.hadeeth} <span>[${datas.grade}] [${datas.attribution}] </span>
            </div>
            <div class="surah_name">
                <h4><i class="fa-solid fa-bars-staggered"></i> الشرح</h4>
                <p>
                    ${datas.explanation}
                </p>
                <h4 class="words"><i class="fa-solid fa-bars-staggered"></i> معاني الكلمات</h4>
                
                ${arr}

                <section class="hints">
                    <h4> <i class="fa-regular fa-lightbulb"></i> فوائد الحديث</h2>
                    ${hints_arr}
                </section>

                <article>
                    <h4> <i class="fa-solid fa-bars-staggered"></i> المراجع</h2>
                    <li>${reference}</li>
                </article>
            </div>
        </div>
    `;
    item_flex.innerHTML = box;
    spinner.style.display = "none";

  });
