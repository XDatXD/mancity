// var header=document.getElementById('header');
// var mobileMenu=document.getElementById('mobile-menu');
// var headerHeight=header.clientHeight;

// //Đóng/mở mobile menu
// mobileMenu.onclick=function()
// {
//     var isclosed=header.clientHeight===headerHeight;
//     if(isclosed)
//     {
//         header.style.height='auto';
//     }
//     else{
//         header.style.height=null;
//     }
// }


// //Tự động đóng khi chọn menu
// var menuitems = document.querySelectorAll('#nav li a[href*="g"]');
// for(var i=0;i<menuitems.length;i++)
// {
//     var menuitem=menuitems[i];
// }


const buyBtns=document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalcontainer = document.querySelector('.js-modal-container')
const modalclose=document.querySelector('.js-modal-close')

//Hàm hiển thị modal mua áo (thêm class open vào modal)
function showbuyjerseys()
{
    modal.classList.add('open')
}
//Hàm ẩn modal mua áo (gỡ bỏ class open modal)
function hidebuyjerseys()
{
    modal.classList.remove('open')
}

//Lặp qua từng thẻ button và nghe hành vi click
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showbuyjerseys)
}

//Nghe hành vi click vào nut button close
modalclose.addEventListener('click', hidebuyjerseys)


modal.addEventListener('click', hidebuyjerseys)

modalcontainer.addEventListener('click', function(event){
    event.stopPropagation()   
})