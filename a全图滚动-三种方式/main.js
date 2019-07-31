/********************** 第二种方法: 使用jQuery来实现全图滚动**********************/
// $(".navbar a").on('click', function (e) {
//     // console.log(e)
//     // console.log(this.hash)
//     if (this.hash !== '') {
//         e.preventDefault();
//         // 到每个链接的 hash 值
//         const hash = this.hash;
//         $("html,body").animate({
//             scrollTop: $(hash).offset().top
//         }, 800)
//     }
// })

/********************** 第三种方法: 使用插件 smooth-scroll **********************/
const scroll = new SmoothScroll(".navbar a[href*='#']", {
    speed: 800
})