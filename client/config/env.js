/**
 * @file:
 * @author: suedar(690372513@qq.com)
 * @Date: 2019-11-18 15:12:51
 * @LastEditors: suedar
 * @LastEditTime: 2019-11-19 11:40:49
 */

let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'https://www.easy-mock.com/mock/5dd251216d497660c3b63c7d/draw';

} else if (process.env.NODE_ENV === 'production') {

}

export {
    baseUrl
};
