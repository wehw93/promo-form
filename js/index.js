let loginButton = document.querySelector(`#login-button`);
let promocodeInput = document.querySelector(`#promocode`);
let validNode = document.querySelector(`#valid`);
let invalidNode = document.querySelector(`#invalid`);
let sushiNode = document.querySelector(`#sushi`);
loginButton.addEventListener(`click`,function (){
    if(promocodeInput.value ==``) {
        promocodeInput.classList.add(`is-invalid`);
        promocodeInput.classList.remove(`is-valid`);
        invalidNode.innerHTML = `нельзя использовать пустой промокод`;
    }
    else if (promocodeInput.value==`12345`) {
        promocodeInput.classList.add(`is-valid`);
        promocodeInput.classList.remove(`is-invalid`);
        validNode.innerHTML = `Ура ты смог навести 12345`;
    }
    else {
        promocodeInput.classList.add(`is-invalid`);
        promocodeInput.classList.remove(`is-valid`);
        invalidNode.innerHTML = `Увы,ты неправильно написал промокод(12345)`
    }
});
