//navigation
const navSelect = document.querySelectorAll('.navSelect');
const contentSections = document.querySelectorAll('.content'); 

navSelect.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
      
        const clickedSection = this.getAttribute('data-section');
        
        navSelect.forEach(n => n.classList.remove('active'));
        contentSections.forEach(c => c.classList.remove('active')); 
        
        this.classList.add('active');
        document.getElementById(clickedSection).classList.add('active');
    });
});

//dropdown button
function dropdownMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropdownBtn')) {
    let dropdowns = document.getElementsByClassName("dropdownContent");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
