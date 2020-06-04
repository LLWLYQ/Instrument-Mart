import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/seller/brand',
    method: 'get',
    params: query
  })
}

export function fetchShop(id) {
  return request({
    url: '/seller/shop/' + id,
    method: 'get'
  })
}

export function getCity(data) {
  return request({
    url: 'http://shop.yishangm.com/home/regions/index',
    method: 'post',
    data
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createShop(data) {
  return request({
    url: '/seller/shop',
    method: 'post',
    data
  })
}

export function getBalance(data) {
  return request({
    url: '/seller/user/balance',
    method: 'post',
    data
  })
}

export function createBrandTwo(data) {
  return request({
    url: '/seller/brand/addtwo',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
