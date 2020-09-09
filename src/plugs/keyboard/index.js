import keyboard from './keyboard.vue';

keyboard.install = (vue) => {
    vue.component(keyboard.name, keyboard);

};
export default keyboard;