import keyBoard from './keyboard/index';

const components = [keyBoard];

const install = (vue) => {
    components.map(component => {
        vue.component(component.name, component);
    })
}

// 全局注册
if (typeof window !== undefined && window.vue) {
    install(window.vue);
}

export default {
    install,
    ...components
};