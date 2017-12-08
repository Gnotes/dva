# [dva](https://github.com/dvajs/dva)

> 基于 redux、redux-saga 和 react-router 的轻量级前端框架

示例demo是基于dva `2.1.0`版本，跟着[12 步 30 分钟，完成用户管理的 CURD 应用 (react+dva+antd)](https://github.com/sorrycc/blog/issues/18)一步步完成的

## 知识储备

- [Generator 函数的含义与用法](http://www.ruanyifeng.com/blog/2015/04/generator.html)
  > 异步的另一种实现，通过不同线程之间切换执行权达到异步的目的
  > Generator 没有执行器，需要手动调用 `next` 函数
- [Thunk 函数的含义和用法](http://www.ruanyifeng.com/blog/2015/05/thunk.html)
  > Thunk 直译过来就是片段的意思，在代码编程中我理解为中间件函数(临时函数)
- [co 函数库的含义和用法](http://www.ruanyifeng.com/blog/2015/05/co.html)
  > co 是TJ对异步调用 `执行器` 的封装，通俗点就是`递归`解析执行
- [async 函数的含义和用法](http://www.ruanyifeng.com/blog/2015/05/async.html)
  > async 语法和Generator基本一致，本质的差异就是async自带执行器，不需要手动执行

## 基本概念

- [dva 的 8 个概念 ](https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md)
- [dva 的API](https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md)
- [dva 基础知识](https://github.com/dvajs/dva-knowledgemap)
- [roadhog](https://github.com/sorrycc/roadhog)
- [dva 入门：手把手教你写应用](https://github.com/sorrycc/blog/issues/8)
- [12 步 30 分钟，完成用户管理的 CURD 应用 (react+dva+antd)](https://github.com/sorrycc/blog/issues/18)