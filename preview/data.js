/* AI Daily prototype sample data (isolated; does not affect live site)
   Shape matches live data.js: date + categories[{id,name,today[],history[]}]
   items: {id,title,summary,source,date} — extra fields ignored by pages */
window.AI_DAILY = {
  date: "2026-10-22",
  categories: [
    {
      id: "official",
      name: "官方 AI 动态",
      today: [
        {
          id: "o1",
          title: "OpenAI 模型正式登陆 Google Cloud，企业调用路径被打通",
          summary: "OpenAI 模型现可通过 Google Cloud 提供，意味着企业不必再在「自建通道」与「官方直连」之间二选一。对采购与合规团队，这是一次基础设施层面的变化。",
          source: "https://openai.com/blog",
          date: "2026-10-22"
        },
        {
          id: "o2",
          title: "Grok Bot 支持事件响应：Agent 从「对话」迈向「可触发」",
          summary: "Grok Bot 新增事件响应能力，允许外部事件驱动回复与动作。这把「聊得动」推进到「听得到系统信号」。",
          source: "https://x.ai",
          date: "2026-10-22"
        }
      ],
      history: [
        {
          id: "oh1",
          title: "Anthropic 发布新一轮安全评估报告摘要",
          summary: "官方公布模型安全测评框架更新，强调红队与外部审计节奏。",
          source: "https://www.anthropic.com/news",
          date: "2026-10-21"
        }
      ]
    },
    {
      id: "vibe",
      name: "非技术 Vibe Coding 实践",
      today: [
        {
          id: "v1",
          title: "用一句话规格书，比堆 Prompt 更能稳住生成结果",
          summary: "多位 vibe coding 实践者复盘：先写「用户是谁 / 完成什么 / 绝不做什么」，再交给 Lovable、Bolt 或 v0，返工率明显下降。",
          source: "https://x.com",
          date: "2026-10-22"
        }
      ],
      history: []
    },
    {
      id: "agent",
      name: "效率与 Agent",
      today: [
        {
          id: "a1",
          title: "把重复问答收成「工具调用清单」，比再开一个聊天窗口更省事",
          summary: "效率向实践者建议：先盘点本周三次以上的同类请求，写成可复用的工具/脚本入口，再让 Agent 去调，而不是每次从零描述。",
          source: "https://x.com",
          date: "2026-10-22"
        }
      ],
      history: []
    },
    {
      id: "growth",
      name: "知识与成长",
      today: [],
      history: [
        {
          id: "g1",
          title: "用「教别人一遍」检验你是否真读懂一篇技术长文",
          summary: "非技术背景读者常用的方法：读完后用三句话讲给同事听；讲不清的地方就是下次精读的入口。",
          source: "",
          date: "2026-10-20"
        }
      ]
    }
  ]
};
