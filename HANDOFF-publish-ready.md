# Handoff · AI Daily 上线包（萌萌确认：现在上线）

**致：AI Daily 网站管家**  
**来自：视觉 / 本地预览执行**  
**时间：2026-10-30 20:36 Asia/Shanghai (UTC+8)**  
**指令：萌萌要求把当前本地这版重新上线。请按本文件合入并发布。**

本地路径：`/workspace/ai-daily`  
预览（已通过）：`http://127.0.0.1:8765/`  
仓库：`https://github.com/mengm0897/ai-daily.git`（origin）  
**本交接人未 commit / 未 push** — 请管家按你们既有发布流程处理。

---

## 一句话

上线 **Aurora Luxe Light** 全站改造（阶段 ①–⑤）+ 首页 Hero：**仅 Flux Lines**（雾紫/奶油）背景 + **开屏级居中 SplitText「AI Daily」**。Soft Aurora **已删除**。不要动 `concepts/`、`preview/`。

---

## 相对线上的变化（管家需知）

### A. 全站 chrome / 布局 / 状态（阶段 ①–⑤，已合在静态页）
- 站点顶栏、wordmark、板块导航、日期条
- 首页板块卡、分类页、详情页结构与交互态（hover/focus/active）
- 响应式：断点、gutter、nav wrap、详情软限宽
- 气质：Aurora Luxe Light（cream `#F7F4EF` + fog purple `#6B4C9A`）

### B. 首页 Hero（预览已拍板 · 当前版）
| 项 | 现状 |
|----|------|
| 背景 | **只用** React Bits **Flux Lines**；配色 `#FFFFFF / #6B4C9A / #C9B8E0 / #F7F4EF`（**不是** indigo `#6366f1`） |
| Soft Aurora | **已移除**，不要再加回 |
| 标题 | SplitText「AI Daily」，fog purple，**居中**，开屏级字号 `clamp(140px, 26vw, 300px)` |
| 副文案 | 只留 badge「每日精选」+ 副标题「面向非技术读者的 AI 日报」；**无**日期/统计两行小字 |
| Hero 高度 | 约 `min-height: clamp(480px, 72vh, 820px)`，垂直居中 |
| 无障碍 | `prefers-reduced-motion` / `?heroShot=1` → 静态标题；Flux pause |

### C. 明确不要上线 / 不要改
- **`concepts/`** — 概念稿，勿部署、勿改
- **`preview/`** — 旧预览，勿部署、勿改
- **`preview-shots/`** — 仅本地验收截图，可不部署
- **`prototype/`** — 可选忽略
- 各阶段 `HANDOFF-phase*.md` / `HANDOFF-hero-*.md` — 过程文档，可不部署；**以本文件为准**

---

## 必须部署的文件

静态站根目录（GitHub Pages / 现有托管原样拷即可）：

```
ai-daily/
├── index.html          ← 必改（Hero mount + island 引用）
├── category.html       ← 必改（①–⑤ chrome/layout）
├── detail.html         ← 必改（①–⑤ chrome/layout）
├── style.css           ← 必改（全站 + hero）
├── data.js             ← 可保持现网最新日报数据；本轮视觉未改其内容逻辑
├── .nojekyll           ← 若 Pages 需要则保留
└── hero-react/
    └── dist/           ← ★ 必部署（已构建新鲜包）
        ├── hero.js     (~368KB)  Flux Lines + SplitText island
        └── hero.css    (~1.2KB)
```

`index.html` 尾部已挂：

```html
<link rel="stylesheet" href="hero-react/dist/hero.css">
<script type="module" src="hero-react/dist/hero.js"></script>
```

**务必带上 `hero-react/dist/`**，否则首页无 Flux / SplitText，只剩 fallback `h1`。

### 建议一并入库（便于以后改 Hero，非运行时必需）

```
hero-react/package.json
hero-react/package-lock.json
hero-react/vite.config.ts
hero-react/tsconfig.json
hero-react/src/**          （含 FluxLines、SplitText、HeroIsland、island.tsx）
```

**不要**提交 `hero-react/node_modules/`。

---

## 若需重建 island（dist 丢失或改源码后）

```bash
cd hero-react
npm install
npm run build
# 产出：hero-react/dist/hero.js + hero.css
```

要求：Node 能跑 Vite 6；`package.json` 里已有 `gsap`、`@gsap/react`、`react`、`react-dom`。  
当前本地 **dist 已于 2026-10-30 20:36 Asia/Shanghai 新鲜构建**，直接拷贝即可上线。

---

## 建议发布步骤（管家）

1. 从本工作区取上述「必须部署」文件（或 commit 后 push `main`/发布分支）。
2. **确认包含** `hero-react/dist/hero.js` + `hero.css`。
3. **不要**覆盖/删除线上的 `concepts/`、`preview/`（若仓库里仍有，保持原样即可；新站根也别依赖它们）。
4. 按现有 ai-daily 发布路径上线（Pages / CDN / 原流程）。
5. 验收：
   - 首页 Hero：Flux 雾紫奶油流线 + 超大居中「AI Daily」
   - 无 Soft Aurora；无 Hero 下日期/统计小字
   - 分类 / 详情页顶栏与卡片布局正常
   - 窄屏标题阶梯缩小、无横向滚动

本地对照预览：`http://127.0.0.1:8765/`（仅内网预览机；上线后用正式域名验）。

截图参考（可选）：`preview-shots/hero-split-text-{desktop,tablet,mobile}.png`

---

## Git 状态备忘（交接时）

未推送改动大致包括：

- 已跟踪修改：`index.html` `category.html` `detail.html` `style.css`
- 未跟踪：`hero-react/`（含 **dist**）、本文件 `HANDOFF-publish-ready.md`、过程 HANDOFF / `preview-shots/` 等

管家可自行：

```bash
# 示例 —— 按你们规范调整 message / 分支
git add index.html category.html detail.html style.css data.js .nojekyll \
  hero-react/dist hero-react/package.json hero-react/package-lock.json \
  hero-react/vite.config.ts hero-react/tsconfig.json hero-react/src \
  HANDOFF-publish-ready.md
git commit -m "feat: Aurora Luxe Light + Flux Lines hero splash (publish-ready)"
git push origin HEAD
```

**本交接未执行 push。**

---

## 联系口径（给萌萌 / 群）

> 当前本地拍板版已整理为上线包：`HANDOFF-publish-ready.md`。  
> Hero = Flux Lines（雾紫奶油）+ 大号居中 SplitText；Soft Aurora 已去掉；①–⑤ 全站 chrome 一并上。  
> 请管家部署时带上 `hero-react/dist/`，勿动 `concepts/`、`preview/`。萌萌要求现在上线。

