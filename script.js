let h1 = document.querySelector('h1');

window.addEventListener('load', () => {

    let h1Text = h1.innerText.split('');
    h1.innerHTML = '';

    h1Text.forEach((letra, i) => {
        setTimeout(()=>{
            h1.innerHTML += letra;
        }, 75 * i)
    });

});