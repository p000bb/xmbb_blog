import axios from 'axios';

// 进行一些全局配置
// 公共路由(网络请求地址)
const app_key = '96B4B5059E3DB099C78FFA6E90182B33';
const secrect = 'Xgy0QvrQrDKUxi7cTDau1oxtJcxcbEA2tROf4yTDxOgVS3PzQXbohCFtwPYug'
axios.defaults.baseURL = 'http://hn216.api.yesapi.cn/';
// 请求响应超时时间
axios.defaults.timeout = 500;

// 封装自己的get/post方法
export default {
    get: function (path = '', data = {}) {
        return new Promise(function (resolve, reject) {
            axios.get(path, {
                params: {...data,app_key}
            })
                .then(function (response) {
                    // 按需求来，这里我需要的是response.data，所以返回response.data，一般直接返回response
                    resolve(response.data.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },
    post: function (path = '', data = {}) {
        return new Promise(function (resolve, reject) {
            axios.post(path, {...data,key})
                .then(function (response) {
                    resolve(response.data.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
};