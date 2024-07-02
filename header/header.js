export default function headerFun({logo,home,readers,hadith,athan}){
    return (
    `   
    <nav class="navbar navbar-light navbar-expand-md justify-content-between">
        <a href="${home}" class="logo ml-auto">
            <img src="${logo}" alt="">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"   data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

        
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="readers_link nav-item active"><a class="nav-link" href="${home}">الصفحة الرئيسية</a></li>
                <li class="readers_link nav-item"><a class="nav-link" href="${readers}">القراء</a></li>
                <li class="readers_link nav-item"><a class="nav-link" href="${hadith}">أحاديث</a></li>
                <li class="readers_link nav-item"><a class="nav-link" href="${athan}">مواعيد الأذان</a></li>             
                <li><button id="radio" class="radio_iconer">
                <i id="radio_icone_navbar" class="fa-solid fa-play mb-0"></i>تشغيل الراديو </button></li>
            </ul>
        </div>
    </nav>

    `
    )
//     return (`
        
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

//     `)
}