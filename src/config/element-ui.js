import Vue from 'vue';
import {
  Button,
  ButtonGroup,
  Loading,
  MessageBox,
  Message
} from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small' };

Vue
  .use(Button)
  .use(ButtonGroup)
  .use(Loading)
;

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
