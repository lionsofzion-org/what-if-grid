module.exports = {
    title: "What if?",
    description: "Renovamen's messy notebook.",
    head: [
        ['link', { rel: 'icon', href: '/favicon.svg' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    dest: "dist",
    themeConfig: {
        logo: '/favicon.svg',
        smoothScroll: true,
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        sidebarDepth: 5,
        repo: 'Renovamen/what-if',
        docsDir: 'notes',
        editLinks: true,
        editLinkText: 'Edit this page on Github',
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 作者
        author: 'Renovamen',
        // 项目开始时间
        startYear: '2017',
        nav: [
            {
                text: 'Stupid AI',
                items: [
                    {
                        text: 'Machine Learning',
                        link: '/ai/ml/'
                    },
                    {
                        text: 'Deep Learning',
                        link: '/ai/dl/'
                    },
                    {
                        text: 'Statistical NLP',
                        link: '/ai/nlp/'
                    }
                ]
            },
            {
                text: 'Math',
                items: [
                    {
                        text: 'Linear Algebra',
                        link: '/math/linear-algebra/'
                    },
                    {
                        text: 'Information Theory',
                        link: '/math/information-theory/'
                    }
                ]
            },
            {
                text: 'Papers',
                link: '/papers/',
            },
            {
                text: 'Snippets',
                link: '/snippets/',
            },
            {
                text: 'Me?',
                items: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/Renovamen',
                    },
                    {
                        text: 'Blog',
                        link: 'https://renovamen.ink',
                    }
                ]
            }
        ],
        sidebar: {
            '/ai/ml/': [
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        'basic-ml/loss-function',
                    ],
                },
                {
                    title: '优化算法',
                    collapsable: false,
                    children: [
                        'optimization/conjugate-gradient',
                        'optimization/proximal-gradient',
                    ],
                },
                {
                    title: '概率图模型',
                    collapsable: false,
                    children: [
                        'pcg/',
                        'pcg/bayesian-network',
                        'pcg/parameters-learning-no-latent',
                        'pcg/parameters-learning-latent',
                        'pcg/variational-inference'
                    ],
                }
            ],
            '/ai/dl/': [
                {
                    title: '前馈神经网络',
                    collapsable: false,
                    children: [
                        'fnn/net-structure',
                        'fnn/activation-function',
                        'fnn/parameters-estimation',
                        'fnn/deep-neural-network'
                    ],
                },
                {
                    title: '生成模型',
                    collapsable: false,
                    children: [
                        'generative-models/vae',
                        'generative-models/gan'
                    ],
                }
            ],
            '/ai/nlp/': [
                {
                    title: '语言模型',
                    collapsable: false,
                    children: [
                        'language-modeling/',
                        'language-modeling/markov-models',
                        'language-modeling/trigram-language-models',
                        'language-modeling/smoothed-estimation-of-trigram-models'
                    ],
                },
                {
                    title: '标注问题和隐马尔科夫模型',
                    collapsable: false,
                    children: [
                        'tagging-problems-hmms/',
                        'tagging-problems-hmms/pos-tagging-named-entity-recognition',
                        'tagging-problems-hmms/gm-and-ncm',
                        'tagging-problems-hmms/generative-tagging-models',
                        'tagging-problems-hmms/trigram-hmms',
                        'tagging-problems-hmms/advanced-material'
                    ],
                },
                {
                    title: '对数线性模型',
                    collapsable: false,
                    children: [
                        'log-linear-models/',
                        'log-linear-models/definitions',
                        'log-linear-models/features',
                        // 'log-linear-models/parameter-estimation'
                    ],
                },
                {
                    title: '概率上下文无关文法',
                    collapsable: false,
                    children: [
                        'pcfgs/',
                        'pcfgs/cfgs'
                    ],
                }
            ],
            '/math/linear-algebra/': [
                {
                    title: '线性代数',
                    collapsable: false,
                    children: [
                        'matrix-multiplication',
                        'matrix-elimination',
                        'solution',
                        'linear-independence'
                    ],
                }
            ],
            '/math/information-theory/': [
                {
                    title: '信息论',
                    collapsable: false,
                    children: [
                        'divergence'
                    ]
                }
            ],
            '/papers/': [
                {
                    title: 'NLP',
                    collapsable: false,
                    children: [
                        'nlp/kg-application'
                    ],
                },
                {
                    title: 'CV',
                    collapsable: false,
                    children: [
                        'cv/image-aesthetic-assessment',
                        'cv/reid'
                    ],
                },
                {
                    title: 'DL',
                    collapsable: false,
                    children: [
                        'dl/continual-learning',
                        'dl/meta-learning',
                        'dl/misc'
                    ],
                }
            ],
        },
    },
    markdown: {
        // lineNumbers: true,
        extendMarkdown: md => {
            md.set({
                html: true
            })
            md.use(require('@liradb2000/markdown-it-katex'))
        }
    }
}