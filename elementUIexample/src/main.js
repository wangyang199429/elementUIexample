import Vue from 'vue'
// import ui from '../node_modules/wy94-ui/dist/wy94-ui.umd.min.js'
// import '../node_modules/wy94-ui/dist/wy94-ui.css'
import ui from 'wy94-ui'
// import 'itcast-ui/lib/itcast-ui.css/'
// import App from './App.vue'
// import App from './App-button.vue'
// import App from './App-dialog.vue'
// import App from './App-input.vue'
// import App from './App-radio.vue'
// import App from './App-switch.vue'
import App from './App-form.vue'
// import App from './App-checkbox-group.vue'
// import HmButton from './components/button.vue'
// import HmDialog from './components/dialog.vue'
// import HmInput from './components/input.vue'
// import HmSwitch from './components/switch.vue'
// import HmRadio from './components/radio.vue'
// import HmRadioGroup from './components/radio-group.vue'
// import HmCheckbox from './components/checkbox.vue'
// import HmCheckboxGroup from './components/checkbox-group.vue'
// import HmForm from './components/form.vue'
// import HmFormItem from './components/form-item.vue'
// import './components/fonts/font.scss'

// Vue.config.productionTip = false
// Vue.component(HmButton.name, HmButton)
// Vue.component(HmDialog.name, HmDialog)
// Vue.component(HmInput.name, HmInput)
// Vue.component(HmSwitch.name, HmSwitch)
// Vue.component(HmRadio.name, HmRadio)
// Vue.component(HmRadioGroup.name, HmRadioGroup)
// Vue.component(HmCheckbox.name, HmCheckbox)
// Vue.component(HmCheckboxGroup.name, HmCheckboxGroup)
// Vue.component(HmForm.name, HmForm)
// Vue.component(HmFormItem.name, HmFormItem)
Vue.use(ui)
new Vue({
  render: h => h(App)
}).$mount('#app')
