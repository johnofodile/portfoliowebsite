var tablinks= document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
var sidemenu=document.getElementById("sidemenu");
const msg=document.getElementById("msg");


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyhA41dM8y4pjlmCuZKWQ6lV91r3ihbdXKLPBhB8reqqizOAgxeeRwlkiMsV0WfkPuX/exec'
  const form = document.forms['submit-to-google-sheet']

  







function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for( tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent succesfully"
        setTimeout(function(){
            msg.innerHTML="";
        },5000)
        form.reset();
    })
 
      .catch(error => console.error('Error!', error.message))
  })