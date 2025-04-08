# ChatSavvy

ChatSavvy是一款用于WhatsApp和Instagram聊天记录管理的应用程序，允许用户导出、分析和组织他们的对话历史。

![ChatSavvy Preview](./preview.png)

## 功能特点

- **多格式导出**：导出聊天记录为HTML、PDF、Word、Excel、TXT格式
- **高级分析**：查看消息统计、活跃时间、关键词等详细数据可视化
- **数据隐私**：所有处理在用户设备上进行，数据不会离开您的电脑
- **多平台支持**：支持WhatsApp和Instagram聊天记录
- **直观界面**：小清新风格的用户界面，简单易用

## 技术栈

- **前端**：Next.js, TypeScript, Tailwind CSS
- **UI库**：React, Framer Motion
- **数据处理**：Chart.js, jsPDF, xlsx, docx
- **国际化**：i18next

## 安装与运行

### 前置要求

- Node.js 16.0+
- npm 或 yarn

### 安装步骤

1. 克隆仓库

```bash
git clone https://github.com/yourusername/chat-savvy.git
cd chat-savvy
```

2. 安装依赖

```bash
npm install
# 或者
yarn install
```

3. 运行开发服务器

```bash
npm run dev
# 或者
yarn dev
```

4. 打开浏览器访问 `http://localhost:3000`

## 构建生产版本

```bash
npm run build
npm run start
# 或者
yarn build
yarn start
```

## 项目结构

```
ChatSavvy/
├── src/              # 源代码
│   ├── components/   # React组件
│   ├── pages/        # 页面
│   ├── styles/       # 样式文件
│   ├── hooks/        # React钩子
│   ├── utils/        # 工具函数
│   └── services/     # API和服务
├── public/           # 静态资源
└── ...               # 配置文件
```

## 贡献指南

1. Fork该项目
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启Pull Request

## 许可证

根据MIT许可证分发。查看`LICENSE`文件了解更多信息。

## 联系方式

项目链接: [https://github.com/yourusername/chat-savvy](https://github.com/yourusername/chat-savvy) 