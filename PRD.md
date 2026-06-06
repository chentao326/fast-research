# FastResearch — 产品需求文档（PRD）

> 版本：v0.3  
> 日期：2026-06-06  
> 基于：Hermes Skill「fast-research」v1.3.0 实际跑通验证（香烟行业案例）  
> GitHub：https://github.com/chentao326/fast-research

---

## 零、当前状态

### 已交付：Hermes Skill 版（v1.3.0）

**Skill 文件**：

| 文件 | 内容 |
|------|------|
| SKILL.md | 五步工作流 + 搜索故障处理 + 美化自动化 |
| references/question-frameworks.md | 5 套提问框架（行业/技术/社会现象/公司/学术） |
| references/output-templates.md | 4 种输出模板 + 美化说明 |
| references/case-study-perfume.md | 香水案例完整拆解 |

**版本演变**：

| 版本 | 变更 |
|------|------|
| 1.0.0 | 初始五步工作流 |
| 1.1.0 | 搜索故障处理（lxml 兼容 + curl 替代 + DDG 退化应对 + 故障速查） |
| 1.2.0 | 集成 web-design-engineer + web-video-presentation（询问后触发） |
| 1.3.0 | 美化改为自动触发，无需用户额外指令 |

**已跑通验证**：香烟行业完整调研（五步走完，A+C+D 全产出）

---

### 香烟行业案例产出

```
/Volumes/My SSD/FastResearch/
├── 香烟行业调研报告.md          # A 文字稿（7 章，Markdown）
├── 香烟行业调研报告.html        # A 美化网页（侧边导航 + 横条图 + 税收对比卡）
├── 香烟行业-一页纸速览.md        # D 文字稿
├── 香烟行业-一页纸速览.html      # D 美化网页（深色名片，暖金 accent）
├── 香烟行业-科普视频文案.md      # C 文字稿（视频大纲）
├── 香烟行业-科普视频演示.html    # C 美化网页（6 场景，16:9，点击推进）
└── presentation/                # web-video-presentation 脚手架版本（待完善）
    ├── script.md                # Phase 1 口播稿（1300 字，6 段落）
    ├── outline.md               # Phase 1 开发计划（6 章，24 步）
    └── src/chapters/            # 6 个章节（Coldopen/Scale/Money/Monopoly/Ecig/Ending）
```

### 待开发：Web App 版

Skill 版验证了方法论可行性。Web App 版把流程做成独立产品。

---

## 一、产品概述

### 1.1 产品定位

基于「快速调研法」五步工作流的 AI 调研助手。输入话题 → 五步引导 → 自动产出**美化过的**结构化报告。

**两个交付形态**：

| 形态 | 用户 | 状态 |
|------|------|------|
| Hermes Skill | Hermes Agent 用户（当前用户） | ✅ v1.3.0 |
| Web App | 任何人 | 📋 本 PRD |

### 1.2 一句话价值

把「1-3 天了解一个行业 50-60 分」压缩到「30-60 分钟」。

### 1.3 目标用户

| 用户类型 | 核心场景 | 频率 |
|---------|---------|------|
| 求职者 | 面试前快速了解目标公司/行业 | 低频（每月几次） |
| 职场人 | 新业务评估、竞品分析 | 中频（每周 1-2 次） |
| 内容创作者 | 素材收集、视频/文章大纲 | 高频（每周 3-5 次） |
| 学生/研究者 | 学科启蒙、论文背景调研 | 低频 |
| 好奇者 | 单纯想了解某个话题 | 随机 |

### 1.4 竞品分析

| 竞品 | 优势 | 劣势 vs FastResearch |
|------|------|---------------------|
| Perplexity | 实时搜索强 | 缺工作流引导，只有「搜→答」 |
| ChatGPT Deep Research | 深度总结 | 慢（10-30 分钟），无五步框架 |
| 豆包浏览器插件 | 视频/网页总结快 | 只是工具，无调研方法论 |
| 各类 AI 搜索 | 速度快 | 没有「问题先行」「回归初心」 |

**核心差异化**：不是「输入问题→出答案」，而是「引导你按方法论完成一次真正的研究」。不是替代你思考，而是逼你思考。

---

## 二、核心功能

### 2.1 五步调研工作流（P0）

每一步对应独立 UI 面板，不可跳过。

#### Step 1：问题先行

- 用户输入话题 + 动机（「你为什么感兴趣？」必填）
- 手动列 3+ 个具体问题
- AI 扩展按钮 → 返回 4-6 个角度，用户勾选补充
- 问题清单确认后锁定，固定在侧边栏作「指南针」
- **硬约束**：AI 不能自动填充问题，必须用户自己先写

#### Step 2：二手信息汇总

- 调用搜索 API（推荐 Tavily），覆盖 4-6 个角度
- 结果预览（标题 + 摘要 + 来源），用户可剔除
- AI 提炼 → 6 模块认知框架（定义 / 数据 / 结构 / 观点 / 争议 / 盲区）
- 用户勾选 2-3 个深挖方向进入第三步

#### Step 3：深度搜索

- 聊天界面，AI 针对盲区迭代问答
- 「逼问模式」按钮：一键发送「别说那么多，把最重要的两点揪出来」
- 自动携带第二步框架作上下文
- 来源追踪：每条信息标注搜索来源
- 用户手动进入下一步

#### Step 4：整理输出 + 自动美化

用户选格式 → 系统一次产出 Markdown 文字稿 + 美化网页。

| 输出 | 文字稿 | 美化引擎 | 美化产物 | 状态 |
|------|--------|---------|---------|------|
| A. 调研报告 | .md | web-design-engineer | 单文件 HTML（侧边导航 + 数据可视化 + 品牌排版） | ✅ 已验证 |
| B. PPT 大纲 | .md | — | 不美化（中间产物） | ✅ |
| C. 视频文案 | .md | web-video-presentation | 单文件 HTML（16:9 舞台，每步独占整屏，点击推进） | ✅ 简化版已验证 |
| D. 一页纸 | .md | web-design-engineer | 单文件 HTML（信息卡，大字号 + 强对比） | ✅ 已验证 |

**C 类型两种交付模式**：

| 模式 | 适用场景 | 产物 |
|------|---------|------|
| 简化版（当前） | 手动点击录屏 + 后期配音 | 单文件 HTML，6-8 场景 |
| 完整版（脚手架） | 需要音频合成、自动录屏、换主题 | Vite + React + TS 项目，narrations.ts 真相源，?auto=1 模式 |

完整版脚手架已搭建但字号/主题需优化。简化版已验证可用。

#### Step 5：回归初心

- 并排展示：用户最初的问题 + AI 答案
- 用户先自己回答 → 对比 AI → 标注差异
- 可选：AI 生成「高级问题」供挑战

### 2.2 调研历史（P1）

- 每次调研自动保存
- 历史列表：话题 + 日期 + 输出类型
- 可查看/删除/重新导出

### 2.3 分享功能（P2）

- 生成公开链接（只读）
- 导出飞书文档、Notion

---

## 三、搜索后端（实际验证）

Skill 版使用的是 Hermes 内置 web_search（基于 DuckDuckGo），实际跑通中遇到的坑：

| 问题 | 现象 | 修复 |
|------|------|------|
| lxml 兼容性 | `cannot import name 'etree' from 'lxml'` — lxml 6.x 移除 etree，ddgs 依赖旧 API | `pip install --force-reinstall "lxml>=6"` |
| DDG 质量退化 | 搜索返回游戏网站、Reddit 等完全无关结果 | 简化查询词、用英文搜中文内容、site: 限定域 |
| web_extract 误判 | 所有 URL 报 "Blocked: private/internal network" | 改用终端 curl 抓取 |
| Cloudflare 保护 | 部分站点返 "Just a moment..." | 跳过换源 |

**Web App 版方案**：使用 Tavily Search API（商业 API，中文好，月免 1000 次），彻底避开 DDG。

---

## 四、美化引擎（实际验证）

### 4.1 web-design-engineer

用于 A（报告）和 D（一页纸）。

**已验证的交付标准**：
- 单文件 HTML，浏览器直接打开
- 设计系统声明 → v0 草案 → 完整构建
- 使用 CSS 变量作设计 token（深色底 + 暖金 accent 已验证适用于烟草/商业类话题）
- 报告页：侧边导航、章节滚动、横条图/对比卡等数据可视化
- 一页纸：信息卡风格，大字号 + 留白 + 核心数据突出

### 4.2 web-video-presentation

用于 C（视频文案）。

**已验证的流程**：
- Phase 1：script.md（口播稿）+ outline.md（章节切分 + 信息池）
- Checkpoint Plan：5 件事一次对齐
- 最终交付：单文件 HTML（简化版）或 Vite 脚手架（完整版）

**简化版 vs 完整版对比**：

| 能力 | 简化版（单文件 HTML） | 完整版（Vite 脚手架） |
|------|---------------------|---------------------|
| 16:9 舞台 + 点击推进 | ✅ | ✅ |
| 视觉演示（条图/卡片/动画） | ✅ | ✅ |
| 逐章独立开发 | ❌（单文件） | ✅（独立文件夹） |
| narrations.ts 真相源 | ❌ | ✅ |
| 自动录屏 (?auto=1) | ❌ | ✅ |
| 音频合成 (Phase 3) | ❌ | ✅ |
| 换主题（覆盖 tokens.css） | ❌ | ✅ |
| 字号响应式 | ✅（vw/clamp） | ❌（当前写死 px，需修） |

**完整版已知问题**：
1. 章节字号写死 px，不如简化版的 vw/clamp 响应式
2. bold-signal 主题的 hot orange 偏硬，不如简化版的暖金适应性强

---

## 五、设计原则（Skill 版→Web App 版继承）

### 5.1 「AI 做 dirty work，人做 thinking」

- Step 1/5 的 AI 按钮有阻力——不让用户无脑点
- Step 2/4 的 AI 按钮显眼——鼓励用户让 AI 干活
- 全程侧边栏显示最初的问题列表

### 5.2 诚实边界

- 每次调研结束展示局限性：「给你的/没给你的」
- 数据标注来源（AI 知识库 vs 实时搜索 vs 搜索 API）
- 搜索挂了明确告知，不造假

### 5.3 美化即默认

- 用户不需要说「美化一下」
- A/C/D 类型 = Markdown + 美化网页，一次产出

---

## 六、技术方案（Web App 版）

### 6.1 技术栈

| 层 | 选型 | 理由 |
|----|------|------|
| 前端 | Next.js 14+ (App Router) | 已有经验（landing-generator），Vercel 零成本部署 |
| AI SDK | Vercel AI SDK | 流式输出、多模型切换 |
| 搜索 | Tavily Search API | 中文好，月免 1000 次，避开 DDG 不稳定性 |
| 数据库 | Vercel Postgres / Supabase | 调研历史 |
| 认证 | NextAuth.js | 轻量 OAuth |
| 部署 | Vercel | 免费额度够用 |
| UI | Tailwind CSS + shadcn/ui | 快速出界面 |
| 美化 | web-design-engineer + web-video-presentation | 复用 Skill 版逻辑 |

### 6.2 架构

```
用户 → Next.js App → AI API (DeepSeek / GPT / Claude)
                    → Tavily Search API
                    → 美化引擎 → 单文件 HTML 输出
                    → Vercel Postgres (调研历史)
```

### 6.3 关键技术决策

1. **搜索选 Tavily**：DDG 不稳定已验证（lxml 兼容性、质量退化），Tavily 有免费额度
2. **流式输出**：报告生成要流式
3. **上下文管理**：Step 1 问题列表贯穿全程
4. **美化自动化**：Skill 版 v1.3.0 已验证
5. **C 类型先用简化版**：单文件 HTML 已验证可用，完整版脚手架留到 Phase 2

### 6.4 成本估算

| 项目 | 月度估算 |
|------|---------|
| Vercel 部署 | $0（免费额度） |
| Vercel Postgres | $0（256MB 免费） |
| AI API（DeepSeek） | $10-20（每次调研 ~50K token） |
| Tavily Search | $0（1000 次/月免费） |
| **总计** | **$15-30/月** |

---

## 七、开发路线图

### Phase 0：已完成 ✅

- [x] Hermes Skill v1.3.0（五步工作流 + 搜索故障处理 + 美化自动化）
- [x] 香烟行业完整案例跑通（A+C+D 全产出）
- [x] 搜索后端问题全部修复（lxml + pip + curl 替代）
- [x] GitHub 仓库 https://github.com/chentao326/fast-research
- [x] web-video-presentation 脚手架版本搭建（待完善字号/主题）
- [x] 本 PRD v0.3

### Phase 1：MVP（1-2 周）

- [ ] Next.js 项目初始化 + Tailwind + shadcn/ui
- [ ] Step 1-5 五个面板
- [ ] Tavily Search 集成
- [ ] 四种输出 + 美化自动触发
- [ ] 调研历史（Vercel Postgres）
- [ ] Vercel 部署

### Phase 2：增强（2-3 周）

- [ ] C 类型完整版脚手架（字号 vw 化 + 主题调优）
- [ ] 音频合成集成（脚手架 Phase 3）
- [ ] 分享链接 + PDF 导出
- [ ] 飞书文档导出
- [ ] 移动端适配

### Phase 3：生态（1-2 月）

- [ ] 浏览器插件
- [ ] 自定义输出模板
- [ ] 团队协作版
- [ ] Obsidian / Notion 集成

---

## 八、成功指标

| 指标 | 目标值 | 测量方式 |
|------|--------|---------|
| 完课率（五步走完） | > 60% | Step 5 完成 / Step 1 开始 |
| 输出留存率 | > 40% | 导出/分享/保存 |
| 人均调研时长 | 30-45 分钟 | Step 1 到 Step 5 耗时 |
| 用户满意度 | 4.0/5 | Step 5 结束后评分 |

---

## 九、风险

| 风险 | 概率 | 应对 |
|------|------|------|
| Tavily 成本超预期 | 中 | 控制每步搜索次数；缓存常见话题 |
| 用户跳过 Step 1/5 | 高 | 制造「温和的阻力」——可跳过但看到成本 |
| AI 输出质量不稳定 | 中 | 输出后强制用户审核 + 编辑 |
| C 类型完整版字号问题 | 已确认 | Phase 2 修：章节 CSS 改用 vw/clamp |
| 跟 ChatGPT Deep Research 重叠 | 低 | 差异化在工作流和「逼人思考」 |

---

## 十、Skill 版 → Web App 版迁移对照

| 维度 | Skill 版（已交付） | Web App 版（本 PRD） |
|------|-------------------|---------------------|
| 入口 | Hermes 对话 | 浏览器 URL |
| 搜索 | web_search（DDG，不稳定） | Tavily API（稳定） |
| 输出 | 本地 .md + .html | 在线预览 + 导出 |
| 美化 | 同左 | 同左，集成到 Web 流程 |
| 存储 | 无 | Vercel Postgres |
| 分享 | 无 | 公开链接 |
| 用户 | Hermes 用户 | 任何人 |
| C 类型 | 简化版单文件 HTML | 简化版（Phase 1）→ 完整版脚手架（Phase 2） |

---

## 附录：已修复的搜索故障

| 故障 | 修复命令 |
|------|---------|
| lxml 6.x 不兼容 ddgs | `~/.hermes/hermes-agent/venv/bin/python -m pip install --force-reinstall "lxml>=6"` |
| venv 无 pip | `~/.hermes/hermes-agent/venv/bin/python -m ensurepip` |
| web_extract 误判内网 | 改用 `curl -sL --max-time 15 "URL" | sed 's/<[^>]*>//g'` |
| DDG 质量退化 | 简化查询词、英文搜中文、site: 限定域 |
