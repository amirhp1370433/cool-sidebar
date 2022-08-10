const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");
let listItem = document.querySelectorAll('.list-item')
listItem.forEach(
    ( item , index) => {
        item.addEventListener('click' , (e)=>{
           item.classList = 'list-item active' 
         })
    }
)
dark.addEventListener("click", () => {
  sidebar.className = "sidebar";
  activeListItem.className = "list-item active";
  document.body.style.background = "#333"
});

night.addEventListener("click", () => {
    sidebar.className = "sidebar night";
    activeListItem.className = "list-item night active";
    document.body.style.background = "#555"
});

light.addEventListener("click", () => {
    sidebar.className = "sidebar light";
    activeListItem.className = "list-item light active";
    document.body.style.background = "#777"
});
 
 