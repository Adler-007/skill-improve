# 个人知识系统

一个基于 Vite + Vue 3 + TypeScript 的个人知识汇总展示网站。站点用于把 Markdown 或结构化笔记内容转换成网页形式，并统一进入首页、分类列表、文章列表和文章详情页展示。

## 内容分类

当前知识库按以下大类组织内容：

- 系统理解能力
- 全栈思维
- 工程转agent应用开发
- AI 工具使用
- 项目复盘
- 阅读笔记
- 方法论沉淀

## 主要功能

- 首页展示知识库概览、精选文章和最近更新。
- 文章列表支持按关键词、分类、标签和精选状态筛选。
- 文章详情页支持摘要、标签、目录、上一篇/下一篇和相关文章。
- 正文内容支持标题、段落、列表、引用、代码块和表格。
- 分类统计、标签统计和相关文章推荐由数据层自动生成。

## 技术栈

- Vite
- Vue 3
- TypeScript
- Vue Router

## 目录结构

```text
src/
├── components/       # 通用组件
├── data/             # 分类、文章和内容统计逻辑
├── router/           # 路由配置
├── services/         # 认证相关逻辑
├── styles/           # 全局样式
└── views/            # 页面视图
```

## 内容维护

新增或调整文章主要修改以下文件：

- `src/data/notes.ts`：文章元信息和正文内容。
- `src/data/categories.ts`：知识分类定义。
- `src/data/types.ts`：文章内容块类型定义。

文章需要包含 `id`、`title`、`category`、`tags`、`summary`、创建/更新时间、路由和正文内容。新增文章后会自动进入文章列表；如果分类匹配，也会自动计入分类统计。

最近新增内容：

- `全栈思维`：Controller、Service、Mapper 为什么要分三层？

## 本地启动

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

默认访问地址：

```text
http://127.0.0.1:5173
```

## 构建

```bash
npm run build
```

构建产物会生成在 `dist/` 目录。

## 预览构建产物

```bash
npm run preview
```
