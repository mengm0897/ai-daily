window.AI_DAILY={
  date:"2026-10-25",
  categories:[
    {id:"official",name:"官方 AI 动态",today:[
      {id:"o1",title:"OpenAI 与波兰 NASK 合作推进 AI 安全研究",summary:"OpenAI 与波兰国家研究院 NASK 签署合作意向，围绕能力评估、漏洞发现与防护加强开展研究；CERT Polska 此前已用 OpenAI 网络安全相关模型协助发现 MikroTik 漏洞。适合想了解「实验室如何和国家安全机构一起做安全」的读者。",source:"https://openai.com/index/openai-nask-ai-safety-security-partnership/",date:"2026-10-23"},
      {id:"o2",title:"Google Research：基础模型走进一线结核病筛查",summary:"从论文到 CE 认证器械，再到六国约 40 家机构部署：胸片 AI 可在约 45 秒内辅助分流，并开放 MedGemma 等基础模型供本地微调。非技术读者可把它读成「医疗 AI 怎样真正落到诊所」。",source:"https://research.google/blog/bringing-foundational-models-to-the-front-lines-of-tb-screening/",date:"2026-10-23"}
    ],history:[
      {id:"oh1",title:"OpenAI：前沿模型训练环境全面断网加固",summary:"官方宣布前沿模型训练与评测环境去掉实时联网，改用离线缓存网页；此前模型曾借 DNS 误配短暂触网。配合深度防御与高强度红队演练，已恢复强化学习训练，方便非技术读者理解「为什么训练要关网」。",source:"https://openai.com/index/securing-our-frontier-model-training-environment",date:"2026-10-23"},
      {id:"oh2",title:"OpenAI 公开支撑 10 亿用户的存储扩容实践（下篇）",summary:"工程博客讲 Habitat 如何与 Azure Cosmos DB 协作，在多租户与隔离之间反复权衡，服务超 500 PB 数据与海量读写；适合想了解 ChatGPT 背后基础设施长什么样的人。",source:"https://openai.com/index/scaling-storage-one-billion-users-part-two",date:"2026-10-23"},
      {id:"oh3",title:"Hugging Face：LitPivot 帮研究者用文献「改方向」",summary:"Ai2 与宾大合作的工具按问题/贡献/评估拆开研究设想，用相关论文做有出处的批评与改写建议；小样本研究显示比普通编辑器+聊天工具更贴文献，适合做选题与开题。",source:"https://huggingface.co/blog/allenai/litpivot",date:"2026-10-23"},
      {id:"oh4",title:"OpenAI Decisions API 正式上线",summary:"面向应用与 Agent 的快速决策接口全面可用，基于 GPT-6 Luna，可对分类、路由、评分等有限答案问题做到接近实时响应，并支持与 GPT-Live 语音场景原生联动。",source:"https://openai.com/index/decisions-api/",date:"2026-10-22"},
      {id:"oh5",title:"Anthropic 将 Agent Skills 捐赠给 AAIF",summary:"Agent Skills 开放标准移交 Agentic AI Foundation（Linux Foundation 旗下），与 MCP 同属中立治理；已有超 70 个平台接入，方便各家 Agent 共用同一套技能包格式。",source:"https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",date:"2026-10-22"},
      {id:"oh6",title:"Anthropic 推出 Claude Duet 研究预览",summary:"主动式个人 Agent 应用上线候补：可发早间简报、在云端电脑后台干活，敏感操作需你确认；美国 Pro / Max 用户可申请，适合想少盯聊天框的非技术用户。",source:"https://claude.com/resources/articles/claude-duet",date:"2026-10-21"},
      {id:"oh7",title:"xAI 推出 SpaceXSI 合作伙伴网络",summary:"官方伙伴计划分转型伙伴与 Marketplace 插件伙伴两类，提供培训与联合 go-to-market；早期已有逾 130 家公司参与，面向用 Grok 做企业落地的团队。",source:"https://x.ai/news/partnernetworkannouncement",date:"2026-10-22"},
      {id:"oh8",title:"DeepMind 发布全球森林类型图 ForTy",summary:"10 米分辨率把林地分成原生林、再生林、人工林、种植园、林农复合等类别，并提供 2017–2025 年变化时间序列，帮助分辨「绿了」是自然林还是种植园。",source:"https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",date:"2026-10-22"},
      {id:"oh9",title:"OpenAI 模型登陆 Google Cloud",summary:"OpenAI 宣布其旗舰模型可通过 Google Cloud Vertex AI 调用，企业客户可在现有 GCP 账单与合规框架下使用 GPT 系列能力，降低多云接入成本。",source:"https://openai.com",date:"2026-10-22"},
      {id:"oh10",title:"Hugging Face 推出模型卡可读性指南",summary:"统一模型卡章节结构，降低非研究背景读者理解门槛。",source:"https://huggingface.co",date:"2026-10-20"}
    ]},
    {id:"vibe",name:"非技术 Vibe Coding 实践",today:[
      {id:"v1",title:"Alex Finn：Claude 在 iPhone Duo 上的界面很「好看」",summary:"创作者分享 Claude 针对折叠双屏机的界面适配，称赞布局干净、适合边刷边聊；对非技术用户来说，是观察「AI 应用怎样为新硬件形态做体验」的一个轻松样本。",source:"https://x.com/AlexFinn/status/2114103128622846419",date:"2026-10-24"},
      {id:"v2",title:"Mundo：几张照片就能「走进」一个可模拟的房间",summary:"Hugging Face 博文介绍 Mundo：用少量实景照片重建场景，可换视角游览、改动物体，甚至让机器人在里面走位；适合 vibe 创作者找「从照片到可玩世界」的灵感（目前偏慢，细小物体交互仍弱）。",source:"https://huggingface.co/blog/Luo-Yihang/mundo-world-model",date:"2026-10-23"}
    ],history:[
      {id:"vh1",title:"Gemini 4 Argon：社区五件可玩作品合集",summary:"Google 官方精选用水上水上飞机模拟、野火地震三维地球、喷气发动机、单图变可交互马车、多人夺旗小游戏等例子，展示用自然语言+Antigravity 就能做出复杂交互界面，适合非工程师找灵感。",source:"https://blog.google/products-and-platforms/products/gemini/gemini-4-argon-builders/",date:"2026-10-23"},
      {id:"vh2",title:"swyx：Vibe Coding 出来的邮件也要自己读一遍",summary:"提醒：应用自动发出的邮件尤其是 vibe coding 生成的，真人仍会打开细看；上线前自己点开确认文案与语气，能少踩「AI 味太重」的坑。",source:"https://x.com/swyx/status/2113717251543367880",date:"2026-10-23"},
      {id:"vh3",title:"Bolt 原型到上线的三步检查清单",summary:"从提示词拆解、组件锁定到域名绑定的轻量流程记录。",source:"",date:"2026-10-19"},
      {id:"vh4",title:"用 Lovable 两小时搭出活动报名页",summary:"非工程师用自然语言描述流程，生成可部署报名表单，并接上简单邮件通知。",source:"",date:"2026-10-22"}
    ]},
    {id:"agent",name:"效率与 Agent",today:[
      {id:"a1",title:"Lee Robinson：帮 Grok Bot 提建议，精选可拿 100 美元",summary:"在 X 发起征集：回复线程里写最有用的 Bug 报告或功能建议，将挑选 5 条并通过 X Money 发放奖励；适合正在用 Agent / Bot 的人顺手反馈真实痛点。",source:"https://x.com/leerob/status/2113792409448714468",date:"2026-10-24"},
      {id:"a2",title:"社区热议：Claude Code 成不少人的主力编程 Agent",summary:"开发者分享用 CLAUDE.md、Skills 与子 Agent 把 Claude Code 配成「读仓库、改文件、跑命令」的长期搭档；周末讨论里它常被拿来和 Codex 对比工作流，而不是只比模型名字。",source:"https://x.com/i/trending/2113996709349277770",date:"2026-10-24"}
    ],history:[
      {id:"ah1",title:"Cursor Agent 可操控电脑与 iOS 模拟器",summary:"官方宣布 Agent 能驱动桌面应用（含 iOS Simulator）点击、输入、截图，用来测自己刚做的功能；配合本机 worker 与权限设置即可上手，适合想让 Agent「自己点一遍」验收的人。",source:"https://x.com/cursor_ai/status/2113661506634305834",date:"2026-10-23"},
      {id:"ah2",title:"Emil：用 AI 给自己做「造工具的工具」",summary:"建议多给自己造小工具——调动画旋钮、看性能、灌真实数据——再用 AI 去做「造这些工具」的元工具；把 Agent 用在重复打磨环节，而不是只生成一次页面。",source:"https://x.com/emilkowalski/status/2113707839760089198",date:"2026-10-23"},
      {id:"ah3",title:"Lenny 征集「不虚」的真实 AI 工作流",summary:"发起 Hype(less) 项目，收集真正能用、可复现的 AI 工作流进 newsletter，反对照片级演示但落地翻车；适合想对照自己日常用法的非技术创作者投稿或围观。",source:"https://x.com/lennysan/status/2113725944955535387",date:"2026-10-23"},
      {id:"ah4",title:"Uber 全员推广 ChatGPT Work",summary:"从千人试点扩到超 3 万名员工，在企业版里用 Agent 做多步任务，并打通 Drive、Gmail、日历与 Slack，适合看大公司如何把 Agent 铺到非工程岗位。",source:"https://openai.com/index/uber-chatgpt-work-rollout/",date:"2026-10-22"},
      {id:"ah5",title:"Claude Duet 多任务体验分享",summary:"创作者 Alex Finn 试用后称赞其多任务：一条对话线程里下指令，系统自动拆成任务列表并行推进，适合观察「主动式 Agent」日常用法。",source:"https://x.com/AlexFinn/status/2113073549397332479",date:"2026-10-22"},
      {id:"ah6",title:"Boris：Agent Skills 为何捐给基金会",summary:"Claude Code 负责人说明 Skills 已成行业通用做法，捐给 @AgenticAIFdn 与 MCP 并列，降低各工具间技能格式碎片化。",source:"https://x.com/bcherny/status/2113333859907747871",date:"2026-10-22"}
    ]},
    {id:"growth",name:"知识与成长",today:[
      {id:"g1",title:"Mollick：别再嘲笑实验室那些「夸张」的网络安全预警",summary:"Ethan Mollick 提醒：Anthropic 曾因称 Mythos 级模型改变攻防而被嘲，事实证明模型会找到新颖的协调与渗透路径；对非技术决策者，意味着要把「听起来太科幻」的安全评估当真一点。",source:"https://x.com/emollick/status/2114001653879672877",date:"2026-10-24"},
      {id:"g2",title:"周末热议：Vibe Coding 是爱好还是正经职业？",summary:"X 上围绕「用自然语言让 AI 出活算不算正经软件工作」再度升温；支持者强调交付质量与提示技巧，质疑者强调可维护与安全。对非技术创作者，关键是先分清原型与上线标准。",source:"https://x.com/i/trending/2114110271589687457",date:"2026-10-24"}
    ],history:[
      {id:"gh1",title:"哈佛研究：AI 同行评审整体优于专家",summary:"Ethan Mollick 转述：对 124 篇社科论文，Opus 4.8 在盲评中胜出约 87%，方法/来源/表达等维度全面领先且错误更少；学界需尽快想清楚如何把 AI 嵌进科研流程。",source:"https://x.com/emollick/status/2113483068174692831",date:"2026-10-23"},
      {id:"gh2",title:"无人岛实验：AI Agent 开始「像在玩」",summary:"Allie K. Miller 介绍 MIT 把 13 个 Claude Agent 独自放在虚拟岛上 30 小时、不给任务；它们自发做出很像玩耍的行为，提醒我们观察 Agent「闲下来」时会怎样。",source:"https://x.com/alliekmiller/status/2113749789326053667",date:"2026-10-23"},
      {id:"gh3",title:"Mollick：实验室内部模型优势或催生新业务",summary:"随着安全与研究优势拉大「内部模型 vs 对外发布」差距，OpenAI、Anthropic 可能更想把优势直接用在金融、生科等新市场——值得非技术决策者跟着想生态变化。",source:"https://x.com/emollick/status/2113681838611087572",date:"2026-10-23"},
      {id:"gh4",title:"AI 可完成工作量：从 4 分钟到 17 周",summary:"Ethan Mollick 对比：2024 年书出版时 AI 约能完成 4 分钟人类工作（约 50% 成功）；交稿时到 17 小时；书上市时已到约 17 周——提醒我们用「可委托时长」而不是模型名字衡量进步。",source:"https://x.com/emollick/status/2113323645284344215",date:"2026-10-22"},
      {id:"gh5",title:"用 Opus 5.5 做工时估算更靠谱",summary:"swyx 分享：把任务交给模型前，先让它按自己的节奏估工期，而不是套人类「2–3 个工作日」口径，委托越多，校准越重要。",source:"https://x.com/swyx/status/2113283272130412684",date:"2026-10-22"},
      {id:"gh6",title:"Google：AI 辅助盲扫超声接近专家孕周评估",summary:"前瞻多中心研究显示，低培训操作者用便携探头做标准「盲扫」，AI 估孕周误差约 4.18 天，不劣于专家测径；提示医疗 AI 如何扩大基层产检覆盖。",source:"https://research.google/blog/empowering-frontline-maternal-care-with-ai-assisted-ultrasound/",date:"2026-10-21"}
    ]}
  ]
};
