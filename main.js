document.addEventListener('DOMContentLoaded',() => {
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click' , () => {
    document.body.classList.toggle('dark-mode');

});
});
if(body.classList.contains('dark-mode')){
    body.classList.remove('dark-mode');

}
else{
    body.classList.add('dark-mode');
}
