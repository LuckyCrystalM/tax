import { request,uploadFile } from '../utils/request';
import Config from '../common/config';
//轮播图
export async function focusInfo() {
  return request(`${Config.API_HOST}/api/v1/focus`);
}
//媒体
export async function mediaInfo(params) {
  return request(`${Config.API_HOST}/api/v1/media/list?page=${params.page}`)
}
//媒体详情
export async function mediaDetailInfo(params) {
  return request(`${Config.API_HOST}/api/v1/media/detail/info?id=${params.id}`)
}
//广告图
export async function advertInfo() {
  return request(`${Config.API_HOST}/api/v1/advert/info`)
}
//获取验证码
export async function userCode(params) {
  return request(`${Config.API_HOST}/api/v1/user/code?phone=${params.phone}`)
}
//用户注册
export async function userRegister(params) {
  return request(`${Config.API_HOST}/api/v1/user/register`,{
    method:'POST',
    body:params
  })
}
//用户登录
export async function userLogin(params) {
  return request(`${Config.API_HOST}/api/v1/user/login`,{
    method:"POST",
    body:params
  })
}
//提交维修
export async function uploadInfo(params) {
  return uploadFile(`${Config.API_HOST}/api/maintain/upload`,params);
} 

