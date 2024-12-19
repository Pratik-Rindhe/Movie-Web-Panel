import Vue from 'vue'
import CButton from '../src/components/Button.vue'

const Components = {
    CButton
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
});

export {
    CButton
}