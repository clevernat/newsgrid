// // Animate On Scroll Init
// AOS.init();



// Real Date In Read More Page
document.addEventListener('DOMContentLoaded', function() {
    const changeDate = document.querySelector(' span.real-date');
    
    const today = new Date();

    // changeDate.innerHTML = today    
   
    if(today.getUTCMonth() === 0) {
        changeDate.innerHTML = `January ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }else if(today.getUTCMonth() === 1) {
        changeDate.innerHTML = `February ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 2) {
        changeDate.innerHTML = `March ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 3) {
        changeDate.innerHTML = `April ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 4) {
        changeDate.innerHTML = `May ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 5) {
        changeDate.innerHTML = `June ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 6) {
        changeDate.innerHTML = `July ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 7) {
        changeDate.innerHTML = `August ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 8) {
        changeDate.innerHTML = `September ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 9) {
        changeDate.innerHTML = `October ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }
    else if(today.getUTCMonth() === 10) {
        changeDate.innerHTML = `November ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }else if(today.getUTCMonth() === 11) {
        changeDate.innerHTML = `December ${today.getUTCDate()}, ${today.getUTCFullYear()}`
    }else{
        changeDate.innerHTML = 'None...'
    }
})