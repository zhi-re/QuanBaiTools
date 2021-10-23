<template>
    <div class="image_patina">
        <nya-container title="图片压缩">
            <el-upload
                class="upload-demo"
                drag
                action="tools/ysImg"
                multiple
                :name="fileName"
                :before-upload="beforeUpload"
                :on-success="handleSuccess"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过10MB</div>
            </el-upload>

        </nya-container>


        <nya-container title="说明">
            <ul class="nya-list">
                <li>可以把图片压缩到1M内。</li>
                <li>无损压缩，支持PNG和JPG格式，图片不能超过10M。</li>
                <li>如果处理时间过长或处理失败，请使用其他浏览器，推荐使用 Chrome</li>
            </ul>
        </nya-container>
    </div>
</template>

<script>
let VueSlider;
import 'vue-slider-component/theme/default.css';

if (process.browser) {
    VueSlider = require('vue-slider-component');
}

export default {
    name: 'ImagePatina',
    head() {
        return this.$store.state.currentTool.head;
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        VueSlider
    },
    data() {
        return {
            fileName: 'file'
        };
    },
    computed: {},
    watch: {
        quality() {
            this.resetProcess();
        }
    },
    mounted() {
    },
    methods: {
        beforeUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';
            console.log(file.size);
            const isLt10M = file.size / 1024 / 1024 > 10;
            console.log(isLt10M);
            if (!isJPG && !isPNG) {
                this.$message.error(' 不支持非JPG和PNG格式!');
            }
            if (isLt10M) {
                this.$message.error('上传图片大小不能超过10MB!');
            }
            // eslint-disable-next-line no-undef
            var r = (isJPG || isPNG) && !isLt10M;
            console.log(r);
            return r;
        },
        // eslint-disable-next-line no-unused-vars
        handleSuccess(response, file, fileList) {
            if (!response) {
                return;
            }
            console.log('res:' + response);
            window.location.href = 'tools/download?filename=' + response;
        }
    }
};
</script>

<style lang="scss">
.upload-demo {
    text-align: center;
}

.image_patina {
    .nya-subtitle {
        margin-top: 15px;
    }

    .vue-slider {
        margin-bottom: 15px;
    }

    .preview {
        width: 100%;
        font-size: 0;
        display: flex;
        justify-content: space-between;

        .nya-subtitle {
            padding: 0;
        }

        div {
            width: 50%;
            padding: 0 20px;
            box-sizing: border-box;
            display: inline-block;
        }

        @media (max-width: 600px) {
            div {
                width: 100%;
                display: block;
            }
            display: block;
        }

        img {
            width: 100%;
        }
    }
}
</style>
