let item_flex = document.querySelector(".item_flex");
let spinner = document.querySelector(".spinner");
spinner.style.display = "flex";

async function getAllReciters(){
  let data = await fetch(`https://mp3quran.net/api/v3/reciters`,{
    cache: "force-cache"
  });
  let result = await data.json();
  return result;
}

async function printAllReciters(){
  let {reciters} = await getAllReciters();
  spinner.style.display = "none";
  console.log(reciters);
  reciters.forEach((element,index) => {
    let box = `
      <a href="../SurahsForReader/index.html?${element.id}" class="item">
          <div class="right">
              <div class="rectangle">
                  <section>
                      ${index+1}
                  </section>
              </div>
              <div class="surah_name">
                  <li>${element.name}</li>
                  <li class="rwaya">${element.moshaf[0].name}</li>
              </div>
          </div>
      
      </a>
      `;
      item_flex.innerHTML += box;
  });
}
printAllReciters();

let footer_div = document.querySelector(".footer_div");
let boxer = `<footer class="text-center text-lg-start" style="border-top: 1px solid #464b50">
<!-- Copyright -->
<div class="text-center p-3" style="background-color: #1f2125e6; color: #FFF;">
    نفع الله بنا وبكم امة محمد عليه أفضل الصلاة والسلام <span>&hearts;</span> 
</div>
<!-- Copyright -->
</footer>`;

footer_div.innerHTML = boxer;
  // });



// https://www.mp3quran.net/api/v3/recent_reads?language=ar
// item_flex.innerHTML = ""
let search_div_inpt = document.getElementById("search_div_inpt");

search_div_inpt.addEventListener("keyup", myFun);

function myFun() {
  if (search_div_inpt.value !== "") {
    if (search_div_inpt.value.length > 0) {
      spinner.style.display = "flex";
      fetch(`https://www.mp3quran.net/api/v3/recent_reads?language=ar`)
        .then((el) => el.json())
        .then((data) => {
          item_flex.innerHTML = "";
          spinner.style.display = "none";
          let val = search_div_inpt.value;
          let { reads } = data;
          console.log(reads);
          for (let i = 0; i < reads.length; i++) {
            if (reads[i].name.includes(val)) {
              let box = `
                <a href="../SurahsForReader/index.html?${reads[i].id}" class="item">
                    <div class="right">
                        <div class="rectangle">
                            <section>
                                ${reads[i].id}
                            </section>
                        </div>
                        <div class="surah_name">
                            <li>${reads[i].name}</li>
                            <li class="rwaya">${reads[i].moshaf[0].name}</li>
                        </div>
                    </div>
                    
                </a>
                `;
              item_flex.innerHTML += box;
            }
          }
        });
    }
  }
}
