import pinyin from './pinyin';

export default {
    title: '炙热工具',
    domain:
        process.env.NODE_ENV === 'development'
            ? 'tool.zhi.re'
            : 'tool.zhi.re',
    description: '工具集合',
    url:
        process.env.NODE_ENV === 'development'
            ? 'https://tool.zhi.re'
            : 'https://tool.zhi.re',
    apiUrl:
        process.env.NODE_ENV === 'development'
            ? 'http://tool.zhi.re'
            : 'https://tool.zhi.re',
    pinyin: pinyin,
    development: process.env.NODE_ENV === 'development',
    axios:
        process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:3001'
            : 'https://tool.zhi.re'
};
