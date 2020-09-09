import timeline from './timeline.vue';

timeline.install = (vue) => {
    vue.component(timeline.name, timeline);

};
export default timeline;