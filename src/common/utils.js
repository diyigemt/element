import {confirmBoxConfig} from "@/common/const";
import {MessageBox} from 'element-ui';
import Vue from 'vue'
export function confirmBox(config) {
  Object.assign(confirmBoxConfig, config);
  let h = Vue.prototype.$createElement;
  let newData = [];
  for (let e of confirmBoxConfig.content.split('\n')) {
    newData.push(h('p', null, e));
  }
  return MessageBox.confirm('', {
    title: confirmBoxConfig.title,
    message: h('div', null, newData),
    confirmButtonText: confirmBoxConfig.confirmText,
    cancelButtonText: confirmBoxConfig.cancelText,
    type: confirmBoxConfig.type
  });
}