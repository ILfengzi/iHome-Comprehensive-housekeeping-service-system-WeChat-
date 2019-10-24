/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-09 11:02:29
 * @LastEditTime: 2019-10-23 17:56:17
 * @LastEditors: Wanlin Chen
 */

import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

const state = {
  // 判断用户是否授权，如果授权则改为 true，然后将用户信息赋给user
  isAuthenticated: false,
  user: null,
  fakeId:"",  //后端返回的非openid的用户唯一凭证
  position: "",
  inputVal: "",
  searchResults: null, //搜索结果
  serviceDetail: null,  //服务详情
  orderForm: null, //下单详情
  userAddress: null, //用户默认地址、选取的下单地址
  orderForm: null, //下单
  orderDetail:null //用户订单详情
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
