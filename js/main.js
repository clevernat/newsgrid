// Animate On Scroll Init
AOS.init();


// Footer Date
document.addEventListener('DOMContentLoaded', function() {
    const changeDate = document.querySelector('footer span.footer-date');
    
    const today = new Date();

    changeDate.innerHTML = today    
   
    if(today.getUTCMonth() === 0) {
        changeDate.innerHTML = `January ${today.getUTCFullYear()}`
    }else if(today.getUTCMonth() === 1) {
        changeDate.innerHTML = `February ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 2) {
        changeDate.innerHTML = `March ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 3) {
        changeDate.innerHTML = `April ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 4) {
        changeDate.innerHTML = `May ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 5) {
        changeDate.innerHTML = `June ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 6) {
        changeDate.innerHTML = `July ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 7) {
        changeDate.innerHTML = `August ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 8) {
        changeDate.innerHTML = `September ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 9) {
        changeDate.innerHTML = `October ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 10) {
        changeDate.innerHTML = `November ${today.getUTCFullYear()}`
    }else if(today.getUTCMonth() === 11) {
        changeDate.innerHTML = `December ${today.getUTCFullYear()}`
    }else{
        changeDate.innerHTML = 'None...'
    }
})












