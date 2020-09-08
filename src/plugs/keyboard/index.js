import keyBoard from './keyboard.vue';

keyBoard.install = (vue) => {
    vue.component(keyBoard.name, keyBoard);

};
export default keyBoard;