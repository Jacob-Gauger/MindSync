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

class Streaks{
    constructor(name, count){
        this.name = name; // call it streaks later when calling
        this.count = count; // num of days streak is going
    }
}

