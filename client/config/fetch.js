/**
 * @file:
 * @author: suedar(690372513@qq.com)
 * @Date: 2019-11-18 15:12:51
 * @LastEditors: sunchao
 * @LastEditTime: 2019-11-30 21:24:41
 */

import { baseUrl } from './env'

export default async(url = '', data = {}, type = 'GET') => {
    type = type.toUpperCase();
    url = baseUrl + url;

    if (type === 'GET') {
        let dataStr = ''; // 数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    let params = {
        headers,
        method: 'GET'
    };

    if (type === 'POST') {
        params = Object.assign(param, {
            method: 'POST',
            body: data
        });
    }
    // {
    //     data: [data],
    //     code: [code],
    //     message: [message]
    // }
    try {
        const response = await fetch(url, params);
        const responseJson = await response.json();
        if (responseJson.code === 200) {
            return responseJson.data;
        } else {
            throw new Error(`Opps! Error occured. Error code: ${responseJson.code}. Error msssage: ${responseJson.message}.`)
        }
    } catch (error) {
        throw new Error(error)
    }
}