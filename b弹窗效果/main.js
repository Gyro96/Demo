// 获取按钮元素
var modalBtn = document.getElementById("modalBtn");
// 获取弹窗元素
var modal = document.getElementById("simpleModal");
// 获取关闭按钮元素
var closeBtn = document.querySelector(".closeBtn");

// 监听点击 打开弹窗事件
modalBtn.addEventListener('click', openModal);
// 监听点击 关闭弹窗事件
closeBtn.addEventListener('click', closeModal);
// 监听 window 实现点击阴影部分关弹窗
window.addEventListener('click', outsideClick);

// 打开弹窗事件
function openModal() {
    modal.style.display = 'block';
}
// 关闭弹窗事件
function closeModal() {
    modal.style.display = 'none';
}
// 点击阴影关闭弹窗事件
function outsideClick(e) {
    if (e.target.className == "modal") {
        modal.style.display = "none"
    }
}
