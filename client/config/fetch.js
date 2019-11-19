/**
 * @file:
 * @author: suedar(690372513@qq.com)
 * @Date: 2019-11-18 15:12:51
 * @LastEditors: suedar
 * @LastEditTime: 2019-11-19 15:08:29
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

    // let param = {
    //     credentials: 'include',
    //     mode: 'cors',
    //     headers
    // };

    // if (type === 'POST') {
    //     param = Object.assign(param, {
    //         method: 'post',
    //         body: data
    //     });
    // }
    // {
    //     data: [data],
    //     code: [code],
    //     message: [message]
    // }
    try {
        const response = await fetch(url);
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