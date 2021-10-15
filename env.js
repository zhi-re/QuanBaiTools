import pinyin from './pinyin';

export default {
    title: '全百',
    domain:
        process.env.NODE_ENV === 'development'
            ? 'tools.quanbai.com'
            : 'tools.quanbai.com',
    description: '工具集合',
    url:
        process.env.NODE_ENV === 'development'
            ? 'http://tools.quanbai.com'
            : 'https://tools.quanbai.com',
    apiUrl:
        process.env.NODE_ENV === 'development'
            ? 'http://tools.quanbai.com'
            : 'https://tools.quanbai.com',
    pinyin: pinyin,
    development: process.env.NODE_ENV === 'development',
    axios:
        process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:3001'
            : 'https://tools.quanbai.com'
};
