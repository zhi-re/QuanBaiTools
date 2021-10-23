<template>
    <div class="links">
        <nya-container title="关于">
            <ul class="nya-list">
                <li>关于我：后端开发工程师
                    <a href="https://quanbai.com" target="_blank" rel="noopener noreferrer"
                    >我的博客
                    </a>
                </li>
                <li>关于本工具：基于开源项目
                    <a href="https://github.com/Ice-Hazymoon/MikuTools"
                       target="_blank" rel="noopener noreferrer"
                    >MikuTools
                    </a>
                    修改而来 非常感谢
                </li>
            </ul>
        </nya-container>

        <nya-container title="更新日志">
            <ul class="nya-list">
                <li>2021.11.23 增加图片压缩功能</li>
                <li>2021.10.15 上线</li>
            </ul>
        </nya-container>
    </div>
</template>

<script>
export default {
    name: 'Links',
    head() {
        return {
            title: this.title
        };
    },
    data() {
        return {
            title: `关于 - ${process.env.title}`,
            links: [
                {
                    title: '维护',
                    list: [
                        {
                            name: '全百',
                            description: '全心 百分',
                            link: 'https://quanbai.com'
                        }
                    ]
                },
                {
                    title: '更新日志',
                    list: [
                        {
                            name: '全百',
                            description: '全心 百分',
                            // link: 'https://quanbai.com'
                        }
                    ]
                },
                {
                    title: '其他',
                    list: [
                        {
                            name: '本站基于',
                            description: 'QuanBaiTools',
                            link: 'https://github.com/zhi-re/QuanBaiTools'
                        }
                    ]
                }
            ]
        };
    }
};
</script>
