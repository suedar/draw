/**
 * @file:
 * @author: suedar(690372513@qq.com)
 * @Date: 2019-11-18 15:12:51
 * @LastEditors: sunchao
 * @LastEditTime: 2019-11-20 21:44:21
 */

import fetch from '../config/fetch'

export const getDraw = () => fetch('/draw');
export const getPreview = params => fetch('/preview', params, 'POST');
