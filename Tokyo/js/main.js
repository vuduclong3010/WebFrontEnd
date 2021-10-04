let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

// Menu
let menus = $$('.react-tabs__tab');
let hienthis = $$(".react-tabs__tab-panel");

menus.forEach(function(menu, index) {
    let hienthi = hienthis[index];

    menu.onclick = function() {
        $('.react-tabs__tab.active').classList.remove('active');
        $('.react-tabs__tab-panel.active').classList.remove('active');

        this.classList.add('active');
        hienthi.classList.add('active');
    }
});


// Portfolio
let portfolios = $$('.react-tabs__tab1');
let hienthisPortfolios = $$(".react-tabs__tab-panel_Portfolio");

console.log(portfolios);
portfolios.forEach(function(portfolio, index) {
    let hienthisPortfolio = hienthisPortfolios[index];

    portfolio.onclick = function() {
        $('.react-tabs__tab1.active').classList.remove('active');
        $('.react-tabs__tab-panel_Portfolio.active').classList.remove('active');
        
        this.classList.add('active');
        hienthisPortfolio.classList.add('active');
    }
});