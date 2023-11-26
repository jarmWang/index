/*
 * @Author: wbq
 * @Date: 2023-09-01 17:39:45
 * @LastEditTime: 2023-09-08 11:46:55
 * @LastEditors: wbq
 * @Description: 文件功能描述
 * @FilePath: \vue\demo\vue3\DemoV3\new-vue3\src\utils\draggable.js
 */

import store from "@/store/index";
export default {
    install(app) {
        app.directive('draggable', {
            mounted(el, binding) {
                let point = store.state.point.point
                let dragging = false;
                let offsetX, offsetY;


                // 透明蒙层，防止事件冒泡
                let model = document.createElement("div")
                model.style.width = 100 + '%'
                model.style.height = 100 + '%'
                model.style.zIndex = '-1'
                model.style.position = 'absolute'
                model.style.top = 0
                el.appendChild(model)


                el.addEventListener("mousedown", (e) => {
                    dragging = true;
                    offsetX = e.clientX - el.getBoundingClientRect().left;
                    offsetY = e.clientY - el.getBoundingClientRect().top;
                });

                document.addEventListener("mousemove", (e) => {
                    if (dragging) {
                        model.style.zIndex = '1'
                        let x = e.clientX - offsetX;
                        let y = e.clientY - offsetY;
                        // 限制元素的移动范围
                        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
                        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

                        const maxX = (x / viewportWidth) * 100;
                        const maxY = (y / viewportHeight) * 100;
                        x = Math.max(0, Math.min(x, maxX));
                        y = Math.max(0, Math.min(y, maxY));
                        // el.style.transform = `translate(${x}px, ${y}px)`;
                        el.style.top = y + '%';
                        el.style.left = x + '%';
                        // console.log(el.getBoundingClientRect(), x, y);
                    }
                });

                document.addEventListener("mouseup", (e) => {
                    if (dragging) {
                        dragging = false;
                        model.style.zIndex = '-1'
                    }
                });
            },
        })
    }
}