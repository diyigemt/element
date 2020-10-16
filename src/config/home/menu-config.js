module.exports = [{
  name: '会员管理',
  id: 'member',
  sub: [{
    name: '创建新会员',
    component: 'NewMember'
  }, {
    name: '查看会员基本资料',
    component: 'ShowMembers'
  }, {
    name: '修改会员基本资料',
    component: 'EditMember',
    disabled: true,
    children: [{
      path: 'baseInfo',
      component: 'MemberBasicInfo'
    }, {
      path: 'orderInfo',
      component: 'MemberOrderInfo'
    }, {
      path: 'otherInfo',
      component: 'MemberOtherInfo'
    }]
  }],
  icon: 'el-icon-user'
}, {
  name: '订单管理',
  id: 'order',
  sub: [{
    name: '生成新订单',
    component: 'CreateOrder'
  }, {
    name: '查看历史订单',
    component: 'ShowOrder'
  }],
  icon: 'el-icon-tickets'
}, {
  name: '仓库管理',
  id: 'store',
  sub: [{
    name: '仓库管理',
    component: 'ShowStore'
  }],
  icon: 'el-icon-coin'
}, {
  name: '系统设置',
  id: 'settings',
  sub: [{
    name: '产品设置',
    component: 'GoodsSetting'
  }, {
    name: '活动设置',
    component: 'DiscountSetting'
  }],
  icon: 'el-icon-setting'
}]