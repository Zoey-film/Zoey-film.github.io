# Personal Website

Zoey 的个人网站:作品集 + 博客 + 个人简介。基于 [Astro](https://astro.build) 构建,部署在 GitHub Pages。

## 本地开发

需要 Node >= 22.12(系统自带的 22.11.0 不够)。机器上已通过 Homebrew 装了 node@22,
在这个项目里使用它:

```bash
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"   # 或加进 ~/.zshrc
```

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # 产物输出到 ./dist/
npm run preview    # 本地预览 build 产物
```

## 项目结构

```
src/
  pages/           # 路由:index(首页)、projects(作品集)、about、blog/
  content/blog/    # 博客文章,Markdown/MDX,加文件即加文章
  components/      # Header、Footer 等公共组件
  layouts/         # 博客文章布局
  consts.ts        # 站点标题、描述
  styles/          # 全局样式
```

## 写博客

在 `src/content/blog/` 下新建 `.md` 或 `.mdx` 文件,frontmatter 需要 `title`、`description`、`pubDate`。

## 添加作品

编辑 `src/pages/projects.astro` 顶部的 `projects` 数组。

## 部署(首次设置)

1. 在个人 GitHub 账号下新建仓库,推荐命名为 `<username>.github.io`(这样网址就是根域名)。
2. 把 `astro.config.mjs` 里的 `site` 改成 `https://<username>.github.io`。
   如果仓库用了别的名字,还要加 `base: '/<repo-name>'`。
3. 推送代码:
   ```bash
   git remote add origin git@github.com:<username>/<repo>.git
   git push -u origin main
   ```
4. 在 GitHub 仓库 Settings > Pages 中,把 Source 设为 **GitHub Actions**。
5. 之后每次 push 到 main,`.github/workflows/deploy.yml` 会自动 build 并发布。

## 设计

深色 + 等宽字体的单栏布局(720px 居中),视觉语言参考 Notion 深色页面。
设计 token 都在 `src/styles/global.css` 顶部的 `:root` 里:背景 `#191919`、
正文 `#f0efed`、以及 `.label` 用的四个分区颜色(蓝/红/橙/绿)。

字体用 IBM Plex Mono(Google Fonts,通过 Astro 的 Fonts API 加载)。
参考站点用的 iA Writer Mono 是商业授权字体,而它本身就是从 IBM Plex Mono 衍生的,
所以骨架一致。

首页的分区列表写在 `src/pages/index.astro`,分区标题用 `<p class="label blue">` 这种写法。

## 待办

- [x] 替换 `your-username` 占位符(已改为 `Zoey-film`)
- [ ] 首页头像现在是一个 "Z" 字母方块,换成真实图片(放进 `src/assets/`,按
      `index.astro` 里的注释替换成 `<Image>`)
- [ ] 改写 `src/pages/about.astro` 为自己的简介/简历
- [ ] 删掉 `src/content/blog/` 里的示例文章,写第一篇
- [ ] 换掉 `src/assets/` 里的占位图和 `public/favicon.svg`(favicon 目前还是 Astro 的)
