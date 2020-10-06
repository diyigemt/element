module.exports = [{
  name: '会员管理',
  id: 'member',
  sub: [{
    name: '查看会员基本资料',
    component: 'ShowMembers'
  }, {
    name: '修改会员基本资料',
    component: 'EditMember'
  }]
}, {
  name: '订单管理',
  id: 'order',
  sub: [{
    name: '生成新订单',
    component: 'CreateOrder'
  }, {
    name: '查看历史订单',
    component: 'ShowOrder'
  }]
}, {
  name: '仓库管理',
  id: 'store',
  sub: [{
    name: '仓库管理',
    component: 'ShowStore'
  }]
}]