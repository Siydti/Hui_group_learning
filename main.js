import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false



// 封装全局登录函数
// backpage, backtype 2个参数分别代表：
// backpage : 登录后返回的页面
// backtype : 打开页面的类型[1 : redirectTo 2 : switchTab]
Vue.prototype.checkLogin = function( backpage, backtype ){
    // 同步获取本地数据（uid、随机码、用户名、头像）
    var user_id = uni.getStorageSync('user_id');
    var user_nu = uni.getStorageSync('user_nu');
    var user_nm = uni.getStorageSync('user_nm');
    var user_fa = uni.getStorageSync('user_fa');
    if( user_id == '' || user_nu == '' || user_fa == ''){
        // 使用重定向的方式跳转至登录页面
        //uni.redirectTo({url:'../index/index?backpage='+backpage+'&backtype='+backtype});
        return false;
    }
    // 登录成功、已经登录返回数组 [用户 id, 用户随机码, 用户昵称, 用户表情]
    return [user_id, user_nu, user_nm, user_fa];
}
// 定义一个全局的请求地址
// Vue.prototype.apiServer = 'http://47.107.92.235/htx/public/index.php/'
Vue.prototype.apiServer = 'https:://htx.cdwhzl.com/index.php/'






App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
