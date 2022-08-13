// op navbar dropdown 
const topicon = document.querySelector(".top-icon");
const usermenu = document.querySelector(".users-option-list");

topicon.addEventListener('click',()=>{
    if(usermenu.classList.contains("show")){
       usermenu.classList.remove("show");
       topicon.classList.remove("arrowup");
    }else{
       usermenu.classList.add("show");
       topicon.classList.add("arrowup");
    }
    
   });



// sidebar logs dropdown 
const logssvg = document.querySelector(".arrow-down");
const logsdropdown = document.querySelector(".dropdown-logs");
const loglisttab = document.querySelector(".logs-list");

logssvg.addEventListener('click',()=>{
 if(logsdropdown.classList.contains("show")){
    logsdropdown.classList.remove("show");
    logssvg.classList.remove("arrowup");
 }else{
    logsdropdown.classList.add("show");
    logssvg.classList.add("arrowup");
    loglisttab.classList.add("active");
 }
 
});



// sidebar list active and show contents
const sidebarlist = document.querySelector(".sidebar-list");
const listitem = document.querySelectorAll(".sidebar-list li");
const maincontent = document.querySelectorAll(".main-content");

sidebarlist.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if(id ){
        listitem.forEach((list)=>{
            list.classList.remove("active");
        })
        e.target.classList.add("active");
        const active_id = document.getElementById(id);
      //   console.log(id)
        maincontent.forEach((content)=>{
         content.classList.remove("display");
        })
        active_id.classList.add("display");
    }
   
});

// navs and tabs 
