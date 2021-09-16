const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab_item');
const panes = $$('.tab_pane');

tabs.forEach(function(tab, index) {
    const pane = panes[index];
    tab.onclick = function() {
        $('.tab_item.active').classList.remove('active');
        $('.tab_pane.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
    }
})