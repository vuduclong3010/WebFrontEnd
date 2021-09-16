const newInit = [
    {
        id: 1,
        img: 'img/anh1.jpg',
        title: 'Bật mí về rượu vang Barolo DOCG',
        desc: 'Barolo được mệnh danh là một trong những “niềm tự hào của nước Ý”. Vậy rượu vang Barolo có đặc trưng như th...'
    },

    {
        id: 2,
        img: 'img/anh2.jpg',
        title: 'SIÊU ƯU ĐÃI CUỐI NĂM | GIẢM SÂU LÊN ĐẾN 35%',
        desc: 'Nhằm tri ân đến các khách hàng trong suốt một năm vừa qua, Việt Ý Wine gửi đến quý khách hàn...'
    },

    {
        id: 3,
        img: 'img/anh3.jpg',
        title: 'Bật mí về rượu vang Barolo DOCG',
        desc: 'Barolo được mệnh danh là một trong những “niềm tự hào của nước Ý”. Vậy rượu vang Barolo có đặc trưng như th...'
    },

    {
        id: 4,
        img: 'img/anh4.jpg',
        title: 'Bật mí về rượu vang Barolo DOCG',
        desc: 'Barolo được mệnh danh là một trong những “niềm tự hào của nước Ý”. Vậy rượu vang Barolo có đặc trưng như th...'
    },

    {
        id: 5,
        img: 'img/anh5.jpg',
        title: 'Bật mí về rượu vang Barolo DOCG',
        desc: 'Barolo được mệnh danh là một trong những “niềm tự hào của nước Ý”. Vậy rượu vang Barolo có đặc trưng như th...'
    },

    {
        id: 6,
        img: 'img/anh6.jpg',
        title: 'Bật mí về rượu vang Barolo DOCG',
        desc: 'Barolo được mệnh danh là một trong những “niềm tự hào của nước Ý”. Vậy rượu vang Barolo có đặc trưng như th...'
    },

    {
        id: 7,
        img: 'img/anh7.jpg',
        title: 'Bật mí về rượu vang Barolo DOCG',
        desc: 'Barolo được mệnh danh là một trong những “niềm tự hào của nước Ý”. Vậy rượu vang Barolo có đặc trưng như th...'
    },

    {
        id: 8,
        img: 'img/anh8.jpg',
        title: 'SIÊU ƯU ĐÃI CUỐI NĂM | GIẢM SÂU LÊN ĐẾN 35%',
        desc: 'Nhằm tri ân đến các khách hàng trong suốt một năm vừa qua, Việt Ý Wine gửi đến quý khách hàn...'
    },

    {
        id: 9,
        img: 'img/anh9.jpg',
        title: 'Bật mí về rượu vang Barolo DOCG',
        desc: 'Barolo được mệnh danh là một trong những “niềm tự hào của nước Ý”. Vậy rượu vang Barolo có đặc trưng như th...'
    },

    {
        id: 10,
        img: 'img/anh10.jpg',
        title: 'Bật mí về rượu vang Barolo DOCG',
        desc: 'Barolo được mệnh danh là một trong những “niềm tự hào của nước Ý”. Vậy rượu vang Barolo có đặc trưng như th...'
    },

    {
        id: 11,
        img: 'img/anh11.jpg',
        title: 'Bật mí về rượu vang Barolo DOCG',
        desc: 'Barolo được mệnh danh là một trong những “niềm tự hào của nước Ý”. Vậy rượu vang Barolo có đặc trưng như th...'
    },

    {
        id: 12,
        img: 'img/anh12.jpg',
        title: 'Bật mí về rượu vang Barolo DOCG',
        desc: 'Barolo được mệnh danh là một trong những “niềm tự hào của nước Ý”. Vậy rượu vang Barolo có đặc trưng như th...'
    },
]

let pagination = {
    pagesize: 9,
    pageNumber: 1
}

pagination.pageCount = Math.ceil(newInit.length/pagination.pagesize)


function genNewsHtml(listNews) {
    $(".news").html('');
    $.each(listNews, function(index, item){
        let row = `<div class="col-lg-4 col-md-6">
                        <div class="item">
                            <div class="img">
                                <img src="${item.img}" />
                            </div>
                            <p class="title">
                                <a href="#">${item.title}</a>
                            </p>
                            <p class="desc">
                                ${item.desc}
                            </p>
                        </div>
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
genNewsHtml(newInit.slice(0, pagination.pagesize));
$(document).on('click', '.pagination li', function(){
    let page = $(this).attr('data-page');
    pagination.pageNumber = eval(page);
    genPagination();
    genNewsHtml(newInit.slice(pagination.pagesize * (pagination.pageNumber - 1), pagination.pagesize * pagination.pageNumber));
});

