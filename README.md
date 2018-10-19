/*
由于ts不支持.vue结尾的文件，所以为了让其支持`import App from './App.vue`,还需要vue-shims.d.ts定义.vue文件的类型，
告诉TS编辑器.vue文件其实就是vue；
*/