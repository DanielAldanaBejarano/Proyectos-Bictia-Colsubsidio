function running() {
    let runnerOne = {
        name: document.getElementById('runnerOneName').value,
        age: document.getElementById('runnerOneAge').value,
        time: document.getElementById('runnerOneTime').value        
    }
    let runnerTwo = {
        name: document.getElementById('runnerTwoName').value,
        age: document.getElementById('runnerTwoAge').value,
        time: document.getElementById('runnerTwoTime').value        
    }

    if (runnerOne.time < runnerTwo.time) {
        swal({
            title: `Felicitaciones ${runnerOne.name}`,
            text: `Nombre: ${runnerOne.name}\nEdad: ${runnerOne.age}\nTiempo 1/4 milla: ${runnerOne.time}Seconds`,
            icon: "success",
        })
    }

    if (runnerTwo.time < runnerOne.time) {
        swal({
            title: `Felicitaciones ${runnerTwo.name}`,
            text: `Nombre: ${runnerTwo.name}\nEdad: ${runnerTwo.age}\nTiempo 1/4 milla: ${runnerTwo.time} Seconds`,
            icon: "success",
        })
    }

    if (runnerTwo.time == runnerOne.time) {
        swal({
            title: `Felicitaciones ${runnerOne.name} y ${runnerTwo.name} Ha sido un Empate`,
            text: `Tiempo 1/4 milla: ${runnerTwo.time} Seconds`,            
            icon: "info",
        })
    } 
}