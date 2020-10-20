import {confirmBoxConfig} from "@/common/const";
import {MessageBox} from 'element-ui';

export function confirmBox(render, config) {
  Object.assign(confirmBoxConfig, config);
  let newData = [];
  for (let e of confirmBoxConfig.content.split('\n')) {
    newData.push(render('p', null, e));
  }
  return MessageBox.confirm('', {
    title: confirmBoxConfig.title,
    message: render('div', null, newData),
    confirmButtonText: confirmBoxConfig.confirmText,
    cancelButtonText: confirmBoxConfig.cancelText,
    type: confirmBoxConfig.type
  });
}