// 使用ES6的解构　和　forEach　方法来实现
// const [current, imgs] = [document.querySelector("#current"),
// document.querySelectorAll(".imgs img")]

// imgs.forEach(img => img.addEventListener("click", (e) => {
//     current.src = e.target.src
// }))

// 使用ES５获取元素
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");

const opacity = 0.4;

// 默认选中的元素
imgs[0].style.opacity = opacity;

imgs.forEach(img => {
    img.addEventListener("click", imgClick)
});

function imgClick(e) {
    // 去掉所有图片上的透明度
    imgs.forEach(img => img.style.opacity = 1);

    // 拿到点击的图片路径，　赋值给大图的图片路径
    current.src = e.target.src;

    // 动画效果，添加fade-in类
    current.classList.add("fade-in");

    // 移除动画效果
    setTimeout(() => current.classList.remove("fade-in"), 500)

    // 给点击的图片一个透明度
    e.target.style.opacity = opacity;
}