import dva from 'dva';
import createLoading from 'dva-loading';
import './index.css';

// 1. 初始化dva，可以传递初始化参数 https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md
const app = dva();

// 2. 插件引入

// 引入loading插件
app.use(createLoading());

// 3. 模型加载
app.model(require('./models/users'));

// 4. 路由控制
app.router(require('./router'));

// 5. 启动
app.start('#root');
