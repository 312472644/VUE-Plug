import keyboard from './keyboard/index';
import timeline from './timeline/index';

const components = [keyboard, timeline];

const install = (vue) => {
    components.map(component => {
        vue.component(component.name, component);
    })
}

// 全局注册
if (typeof window !== undefined && window.vue) {
    install(window.vue);
}

//导出全部插件
export default {
    install
};

//按需导出插件
export {
    keyboard,
    timeline
}