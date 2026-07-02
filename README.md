# Huafeng Export Website

这是为济南华丰印务有限公司制作的外贸询盘型独立站，基于 Next.js App Router。

## 已包含内容

- 多语种页面：`/en`、`/zh`、`/es`、`/fr`、`/ru`、`/ar`
- 首页、产品列表、产品详情、资料下载、关于我们、联系我们、Thank You 页面
- 产品 JSON 数据：`data/products.json`
- 公司设置：`data/site.json`
- 翻译文案：`locales/en.json`、`locales/zh.json`
- 已支持阿拉伯语 RTL 方向
- 已整理素材目录：`public/images/`
- 产品介绍和证书 PDF：`public/catalogs/`
- SEO 基础：metadata、Open Graph、robots、sitemap、Product/Organization JSON-LD

## 上线前需要替换

1. 在 `data/site.json` 中替换：
   - `domain`
   - `email`
   - `phone`
   - `whatsapp`
2. 在 `app/layout.tsx`、`app/sitemap.ts`、`app/robots.ts`、`components/inquiry-form.tsx` 中把 `https://www.example.com` 替换成真实域名。
3. 表单当前使用 FormSubmit。第一次提交后，需要到收件邮箱中点击 FormSubmit 激活邮件。

## 常用命令

```bash
npm install
npm run dev
npm run build
npm run start
```

## 推荐部署

1. 上传到 GitHub。
2. 在 Vercel 导入仓库。
3. 设置真实域名。
4. 访问 `/robots.txt` 和 `/sitemap.xml` 确认可打开。
5. 在 Google Search Console 验证域名并提交 sitemap。
