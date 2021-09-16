const newProduct = [
    {
        id: 1,
        img: '/Anh/Product/AMA.jpg',
        hang: 'AMARONE',
        name: 'Amarone Della Valpolicella',
        linkProductDetails: '../ChiTietSP/Detail_Product1.html',
    },

    {
        id: 2,
        img: '/Anh/Product/HOANG-DE-CU-400x400.png',
        hang: 'DOLCE NOVELLA',
        name: 'dolce novella',
        huongvi: 'chat'
    },

    {
        id: 3,
        img: '/Anh/Product/DOLCE-NOVELLA-NEW.png',
        hang: 'DOLCE NOVELLA EXCLUSIVE',
        name: 'dolce novella exclusive',
        huongvi: 'Dang'
    },

    {
        id: 4,
        img: "/Anh/Product/MONTEPULCIANO-D'ABRUZZO.png",
        hang: "MONTEPULCIANO D'ABRUZZO",
        name: "montepulciano d'abruzzo"
    },

    {
        id: 5,
        img: '/Anh/Product/PRIMITIVO-PUGLIA.png',
        hang: 'PRIMITIVO PUGLIA',
        name: 'primittivo puglia'
    },

    {
        id: 6,
        img: '/Anh/Product/SANGIOVESE-PUGLIA.png',
        hang: 'SANGIOVESE PUGLIA',
        name: 'sangiovese puglia'
    },

    {
        id: 7,
        img: '/Anh/Product/PINOT-GRIGIO-PROVINCIA-DI-PAVIA.png',
        hang: 'PINOT GRIGIO',
        name: 'ponot grigio provincia di pavia'
    },

    {
        id: 8,
        img: '/Anh/Product/NEGROAMARO-PUGLIA.png',
        hang: 'NEGROAMARO',
        name: 'negroamaro puglia'
    },

    {
        id: 9,
        img: '/Anh/Product/PROCESSCO.png',
        hang: 'PROSECCO',
        name: 'Prosecco Monteverdi   '
    },

    {
        id: 10,
        img: '/Anh/Product/chianti-monteverdi (4).jpg',
        hang: ' CHIANTI',
        name: 'Chianti Monteverdi           '
    },

    {
        id: 11,
        img: '/Anh/Product/ruou-vang-barolo.jpg',
        hang: ' BAROLO',
        name: 'Barolo Monteverdi     '
    },

    {
        id: 12,
        img: '/Anh/Product/moscato.png',
        hang: " MOSCATO OLTREPO’ PAVESE",
        name: "Moscato Oltrepo’Pavese "
    }
]

let pagination = {
    pagesize: 9,
    pageNumber: 1
}

pagination.pageCount = Math.ceil(newProduct.length/pagination.pagesize)


function genNewsHtml(listNews) {
    $(".news").html('');
    $.each(listNews, function(index, item){
        let row = `<div class="col-md-6 col-lg-4 p-0">
                        <a href="${item.linkProductDetails}">
                                <div class="wine align-items-center">
                                <div class="img">
                                    <img src="${item.img}" alt="Amarone Della Valpolicella" class="img-fluid">
                                </div>
                                <div class="text-center">
                                    <h4 class="hang"> ${item.hang}</h4>
                                    <p class="name">${item.name}       </p>
                                </div>
                            </div>
                        </>
                    </div>`;
        $('.news').append(row);
    });
    
}

function genPagination(){
    $('.pagination').html('');
    for (let index = 1; index <= pagination.pageCount; index++) {
        let row = `<li data-page = "${index}">${index}</li>`
        if(index == pagination.pageNumber){
            row = `<li data-page = "${index}" class="active">${index}</li>`
        }
        $('.pagination').append(row);
    }
}
genPagination();
genNewsHtml(newProduct.slice(0, pagination.pagesize));
$(document).on('click', '.pagination li', function(){
    let page = $(this).attr('data-page');
    pagination.pageNumber = eval(page);
    genPagination();
    genNewsHtml(newProduct.slice(pagination.pagesize * (pagination.pageNumber - 1), pagination.pagesize * pagination.pageNumber));
});

