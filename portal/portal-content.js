/* ═══════════════════════════════════════════════════════════════════
 * PORTAL CONTENT — Course catalog for the AI Academy student portal.
 *
 * Each entry is a full course with nested sessions. Fields used by the
 * UI: id, title, titleEn, subtitle, persona, avatar, outcomes, skills,
 * icon, color, sessions[].{n,titleEn,tools,learn,gallery,recipe,quiz,hw}.
 *
 * Extensibility: append a new course to PORTAL_CONTENT to add a new
 * track (e.g. "AI for Educators" with track:"educators"). The
 * track decorator below back-fills metadata for legacy courses.
 * ═══════════════════════════════════════════════════════════════════ */
window.PORTAL_CONTENT=[
{id:1,title:'AI Foundations',titleEn:'AI Foundations',subtitle:'First steps into AI',persona:'Complete Beginners',avatar:'\u{1F331}',outcomes:['Write professional AI prompts from scratch','Use ChatGPT, Claude & Gemini confidently','Build your personal AI toolkit for daily work'],skills:['Prompt Writing','RCTF Method','AI Tools','Image Generation'],icon:'\u{1F680}',color:'#C4956A',sessions:[
{n:1,titleEn:'What AI really is',tools:'ChatGPT',
learn:[
{type:'callout',icon:'\u{1F680}',label:'Your First Win',content:'<strong>Try this before reading anything else.</strong> Edit the prompt below, click \u201CTry it\u201D, and see what changes when you give AI real context.'},
{type:'prompt-playground',starter:'I run a small bakery in Yerevan called "Sweet Moments". My audience is women 25-40 who care about quality. Write an Instagram caption for our new honey-walnut cake launch.',responses:[
{prompt:'write a post',response:'Here\'s a generic social media post:\n\n"Check out our latest products! We offer great quality at amazing prices. Visit us today! #business #sale"\n\n\u274C Too generic. AI doesn\'t know your business, audience, or tone.'},
{prompt:'bakery yerevan cake',response:'\u{1F382} Sweet Moments | Yerevan\n\n"Some recipes carry generations of love. Our new honey-walnut cake is handcrafted from grandmother\'s recipe \u2014 with the finest Armenian honey and Ararat valley walnuts.\n\nFirst 50 orders get a free coffee pairing \u2615\n\nTag someone who deserves a sweet moment today \u{1F49B}"\n\n#SweetMomentsYerevan #ArmenianBakery #HoneyWalnutCake #YerevanFood'},
{prompt:'default',response:'Try adding more context!\n\nTell the AI:\n\u2022 Who you are (your business/role)\n\u2022 Who your audience is\n\u2022 What specifically you need\n\u2022 What tone/style you want\n\nThe more specific you are, the better the result.'}
]},
{type:'visual-tip',tips:[
{icon:'\u{1F91D}',title:'AI is a Partner, Not a Search Engine',desc:'Google finds existing pages. AI creates new content tailored to YOUR situation.'},
{icon:'\u{1F3AF}',title:'Context is Everything',desc:'The more AI knows about you, the better the output. Always say who you are and what you need.'},
{icon:'\u{1F504}',title:'Iterate, Don\'t Restart',desc:'First response isn\'t perfect? Say "make it shorter" or "more professional". Refine in the same chat.'}
]},
{type:'visual-compare',
bad:{prompt:'Write a post for my business',result:'AI gives a generic, useless template. No personality, no brand voice, nothing you\'d actually post.'},
good:{prompt:'I run a bakery in Yerevan called "Sweet Moments". My audience is women 25-40 who care about quality. Write an Instagram caption for our new honey-walnut cake launch.',result:'A warm, emotionally resonant caption with Armenian cultural touches, perfect brand voice, relevant hashtags \u2014 ready to post immediately.'}
},
{type:'callout',icon:'\u{1F4A1}',label:'Key Insight',content:'<strong>Context is the superpower.</strong> Same tool, same question \u2014 wildly different results. The only difference is how much context you give.'},
{type:'key-points',points:['AI is not Google \u2014 talk to it, give context, have a conversation','Always provide context \u2014 who you are, what you need, why','Try solving a real problem in your first session','Iterate in the same chat \u2014 refine, don\'t restart','Your first prompt is a starting point, not the destination']}
],
gallery:[
{prompt:'Write a post for my business',tool:'ChatGPT',imageUrl:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',gradient:'linear-gradient(135deg,#1a1008,#5c3317 50%,#c4956a)',descResult:'\u274C Too vague \u2014 ChatGPT asked follow-up questions and gave generic output. Without context, AI cannot help you.'},
{prompt:'I run a small bakery in Yerevan called "Sweet Moments". My audience is women 25-40 who care about quality. Write an Instagram caption for our new honey-walnut cake launch.',tool:'ChatGPT',imageUrl:'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',gradient:'linear-gradient(135deg,#2c1810,#8B4513 80%,#c4956a)',descResult:'\u2705 With context: warm, emotionally resonant caption perfectly matching the brand tone \u2014 zero editing needed. Same tool, completely different result.'},
{prompt:'You are my creative brainstorming partner. I\'m stuck on naming my new Armenian streetwear brand. The vibe: bold, modern, culturally rooted. Give me 10 name ideas with explanations.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#0d1117,#2c1a0a 50%,#8B4513)',descResult:'10 brand names from Armenian mythology to bilingual wordplays. 3 were immediately usable including "ARIQ" (play on "ariq" = proud). Brainstorming that would take hours \u2014 done in 12 seconds.'}
],
recipe:[
{step:1,title:'Open ChatGPT',desc:'Go to chat.openai.com or use the app. Create a free account. GPT-4o is available free.',tip:'<strong>Tip:</strong> Bookmark it. You\'ll use this every day.'},
{step:2,title:'Give context first',desc:'Before asking anything, tell ChatGPT who you are. "I\'m a [job] working on [project]. I need..." This single habit improves 80% of results.',tip:'<strong>Think of it as:</strong> Briefing a new colleague who needs your background to help you well.'},
{step:3,title:'Iterate in the same chat',desc:'If the first answer isn\'t right, say "Make it shorter", "More professional", or "Give me 3 options". ChatGPT remembers the full conversation.',tip:'<strong>Rule:</strong> Best results come after 2-3 iterations, not the first response.'}
],
quiz:[
{q:'What is the most important thing to include in any AI prompt?',opts:['Formal language','Context about who you are and what you need','As many details as possible','The word "please"'],correct:1,explain:'Context is everything. AI generates based on what it knows about your situation. Without context = generic output. With context = personalized, actionable results.'},
{q:'What should you do when ChatGPT\'s first response isn\'t right?',opts:['Start a new conversation','Rephrase the same question','Iterate and refine in the same chat','Try a different AI tool'],correct:2,explain:'ChatGPT retains context within a conversation. Refining ("make it shorter", "add examples") gives better results. Starting over loses all context.'}
],
hw:{brief:'You\'re a freelancer who needs to write 3 real things for your work this week. Use ChatGPT to create them — not for practice, for actual use.',deliverables:['3 real outputs you\'ll actually use (email, post, plan, etc.)','Screenshot of your best prompt + result','One "before vs after" — show your first attempt and your improved version'],steps:['Open ChatGPT (chat.openai.com)','Pick 3 REAL tasks from your actual work or life','Write each prompt with context: who you are, what you need, why','Run it, read the result, then iterate: "make it shorter" or "more professional"','Screenshot your best result with the prompt visible'],checklist:['Each prompt includes context about who you are','You iterated at least once (not just first response)','The outputs are things you\'d actually use, not generic','You can explain WHY the good version worked better'],pro_tip:'The best homework is one where you actually SEND the email or POST the content. Real stakes = real learning.'}},

{n:2,titleEn:'Good vs Bad Prompt (RCTF)',tools:'ChatGPT, Claude',
learn:[
{type:'visual-tip',tips:[
{icon:'\u{1F3AF}',title:'The RCTF Formula',desc:'Every great prompt has 4 parts: Role + Context + Task + Format. Use all 4 = usable output on first try.'},
{icon:'\u{1F3AD}',title:'R = Role',desc:'"You are a [expert]..." — this one line sets AI\'s entire expertise level.'},
{icon:'\u{1F30D}',title:'C = Context',desc:'Your situation, business, audience. More context = less generic output.'},
{icon:'\u{1F4DD}',title:'T + F = Task & Format',desc:'What you need + how you want it. "Write 5 options as bullet points."'}
]},
{type:'prompt-anatomy',
prompt:"You are a professional social media strategist. I run a small coffee shop in Yerevan called 'Latte Lab' targeting 18-30 year olds who value specialty coffee. Write a 1-week Instagram content plan with 7 post ideas, each with a caption and 5 hashtags.",
segments:[
{text:"You are a professional social media strategist",cat:'role',explain:'\u{1F3AD} <strong>ROLE</strong> \u2014 Tell AI who to be. This sets the entire expertise level. A "social media strategist" thinks about engagement, algorithms, brand voice \u2014 very differently from a generic assistant.'},
{text:"I run a small coffee shop in Yerevan called 'Latte Lab' targeting 18-30 year olds who value specialty coffee",cat:'context',explain:'\u{1F30D} <strong>CONTEXT</strong> \u2014 Your specific situation. Location (Yerevan), business name, audience segment \u2014 this prevents generic output and makes results immediately applicable.'},
{text:"Write a 1-week Instagram content plan with 7 post ideas",cat:'task',explain:'\u{1F3AF} <strong>TASK</strong> \u2014 Be precise. "1-week plan with 7 post ideas" gives you a structured deliverable. Compare to "help me with Instagram" \u2014 same intent, but specific task gets specific results.'},
{text:"each with a caption and 5 hashtags",cat:'format',explain:'\u{1F4D0} <strong>FORMAT</strong> \u2014 Define output structure. "Caption + 5 hashtags per post" means you get something copy-paste ready, not a wall of text you need to restructure.'}
]},
{type:'key-points',points:['R = Role: "You are a [expert]" \u2014 sets AI\'s mindset','C = Context: Your situation, business, audience \u2014 the more specific, the better','T = Task: What you want \u2014 use action verbs, be precise','F = Format: How you want the output \u2014 bullets, table, length','Use all 4 or just 2-3 \u2014 but always have Role + Task minimum']},
{type:'callout',icon:'\u{1F4A1}',label:'Pro Trick: Meta-Prompting',content:'Ask AI to build your prompt: <em>"You are a prompt engineering expert. I need [output]. Ask me 5 questions first, then write the optimal prompt."</em> Use this when you\'re stuck!'}
],
gallery:[
{prompt:'BAD: "Help me with my business"\n\nGOOD: You are a startup advisor. I\'m launching an AI education startup in Armenia targeting 18-30 year olds. My challenge is pricing vs free YouTube content. Give me 3 pricing models with pros/cons.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#0a1a0a,#1a4a1a 50%,#5aad6a)',descResult:'RCTF version: 3 specific pricing models (freemium, cohort, subscription) with pros/cons for the Armenian market. Bad prompt got: "What kind of business is it?"'},
{prompt:'You are a professional email writer. I\'m a young agency owner in Armenia. I sent a proposal 2 weeks ago with no response. Write a 3-sentence follow-up that\'s confident but not desperate.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#0f0c29,#302b63)',descResult:'Direct, professional email with value reminder \u2014 not a generic "just checking in." Ready to send immediately.'},
{prompt:'You are a TikTok strategist for Gen Z. My client is an Armenian jewelry brand targeting women 20-28. Create a 4-week calendar: weekly themes, 4 videos per week, hook line for each.',tool:'ChatGPT',imageUrl:'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop',gradient:'linear-gradient(135deg,#2d1b69,#6B21A8)',descResult:'4 themed weeks with 16 video concepts. Hooks like "You\'ve been wearing the wrong jewelry" \u2014 tested for TikTok algorithm patterns.'}
],
recipe:[
{step:1,title:'Write the ROLE first',desc:'Start with "You are a [specific expert]..." The more specific, the better the expertise AI applies.',tip:'<strong>Best format:</strong> "You are a senior [profession] with [X] years experience" signals the depth you expect.'},
{step:2,title:'Add your CONTEXT',desc:'Describe your situation: business, audience, goal, constraints. What makes your situation unique?',tip:'<strong>Key rule:</strong> Pretend AI just joined your team today. What briefing do they need?'},
{step:3,title:'State the TASK precisely',desc:'Use action verbs: Write, Create, Analyze, List, Compare, Summarize. Add specifics: "Write 5 options", "List in order of priority."',tip:'<strong>Avoid:</strong> "help me with", "tell me about" \u2014 vague words get vague answers.'},
{step:4,title:'Define the FORMAT',desc:'Specify: "as bullets", "in a table", "under 150 words", "in formal Armenian." This makes output immediately usable.',tip:'<strong>Pro tip:</strong> Add "formatted as [structure]" at the end of any prompt.'}
],
quiz:[
{q:'Which RCTF element has the most impact on output quality?',opts:['Format','Role \u2014 it sets expertise and perspective','Task','Context'],correct:1,explain:'Role determines knowledge base, style, and expertise level. Same task given to "marketing intern" vs "CMO with 15 years experience" = dramatically different quality.'},
{q:'Which is the best prompt?',opts:['Write me a business email','Email about meetings','You are a senior consultant. Decline a client meeting politely, keep relationship warm. 3 sentences.','Help me write something professional'],correct:2,explain:'Option 3 has Role + Task + Context + Format. The others are too vague. Notice the good prompt is longer \u2014 specificity wins.'}
],
hw:{brief:'Write 5 prompts for real tasks using the RCTF framework. Each must clearly show Role + Context + Task + Format. Then run them and rate the quality.',deliverables:['5 RCTF prompts, each labeled with R / C / T / F','Screenshots of the results from ChatGPT or Claude','A rating (1-5 stars) for each result with 1 sentence why'],steps:['Pick 5 real tasks from your work or life','For each, write: Role + Context + Task + Format','Run each prompt in ChatGPT','Rate each result 1-5 stars','Rewrite your weakest prompt and compare'],checklist:['All 4 RCTF elements are present in each prompt','Tasks are real (not made-up exercises)','At least one prompt was rewritten and improved','You can name which element (R/C/T/F) had the most impact'],pro_tip:'The weakest element is usually Context. If your result is generic, add more specific details about YOUR situation.'}},

{n:3,titleEn:'Your AI Toolkit',tools:'ChatGPT, Claude, Gemini, Perplexity',
learn:[
{type:'callout',icon:'\u{1F527}',label:'Key Principle',content:'No single tool wins everything. The real skill: <strong>knowing which tool to use when</strong>.'},
{type:'method-compare',methods:[
{icon:'\u{1F916}',name:'ChatGPT (GPT-4o)',desc:'Best all-rounder. Writing, brainstorming, coding, analysis. Great conversation memory. Plugins available.',when:'Daily tasks, content, coding, email'},
{icon:'\u{1F9E0}',name:'Claude (Sonnet)',desc:'Best for long documents and nuanced analysis. 200k token context. More careful, thoughtful tone.',when:'Long documents, analysis, research, legal'},
{icon:'\u264A',name:'Gemini (Google)',desc:'Live Google Search integration. Pulls current information. Great for fact-checking and research.',when:'Current events, research, fact-checking'},
{icon:'\u{1F50D}',name:'Perplexity AI',desc:'AI search engine with cited sources. Shows exactly where information comes from.',when:'Research, verifying facts, academic sourcing'},
]},
{type:'key-points',points:['ChatGPT for daily tasks, Claude for deep work, Gemini for research','Test the same prompt in 2+ tools to calibrate','Free tiers of all 4 are genuinely useful','The 80/20 rule: 80% of tasks work in ChatGPT. Others shine for the 20%.']}
],
gallery:[
{prompt:'Same prompt in 3 tools: "Brand positioning statement for Armenian AI education startup targeting young professionals."',tool:'ChatGPT vs Claude vs Gemini',gradient:'linear-gradient(135deg,#0d1117,#2d2d2d 50%,#4a4a4a)',descResult:'ChatGPT: punchy marketing copy. Claude: nuanced with cultural context. Gemini: included market data with sources. All useful for different stages.'},
{prompt:'Perplexity: "Top 5 AI image generation tools by user growth in 2025?"',tool:'Perplexity AI',gradient:'linear-gradient(135deg,#001a33,#0066cc)',descResult:'5 tools with usage stats, growth rates, links to 8 sources. This sourced research would take 30 min manually \u2014 took 12 seconds.'}
],
recipe:[
{step:1,title:'Create accounts on all 4',desc:'ChatGPT, Claude, Gemini, Perplexity. All free tiers. 5 minutes each today.',tip:'<strong>Priority:</strong> ChatGPT first (most versatile), then Claude, then Gemini.'},
{step:2,title:'Same prompt, 2+ tools',desc:'Take a real task and run it through ChatGPT AND Claude. Compare quality, tone, approach.',tip:'<strong>Best comparison:</strong> A writing task for your actual work.'},
{step:3,title:'Build your personal stack',desc:'Over 2 weeks, note which tool you reach for when. Document it \u2014 that\'s your AI workflow.',tip:'<strong>80/20:</strong> 80% ChatGPT. Other tools for the 20% where they shine.'}
],
quiz:[
{q:'15-page legal contract analysis \u2014 which tool?',opts:['ChatGPT','Claude (long context + careful analysis)','Gemini','Perplexity'],correct:1,explain:'Claude handles 200k tokens and excels at careful document analysis. For long contracts needing consistent reasoning throughout \u2014 Claude\'s core strength.'},
{q:'Current market data about AI adoption rates \u2014 best tool?',opts:['ChatGPT','Claude','Perplexity AI (live search + citations)','Gemini'],correct:2,explain:'Perplexity queries live sources with citations. For current data that changes constantly, you need live search + sourcing, not static training data.'}
],
hw:{brief:'Run the SAME prompt through 3 different AI tools and write a mini comparison. Which tool won for THIS specific task, and why?',deliverables:['1 detailed RCTF prompt (the same one used in all 3 tools)','Screenshots from ChatGPT, Claude, and Gemini/Perplexity','A comparison: which tool won and why (3-5 sentences)'],steps:['Write one detailed prompt using RCTF method','Run it in ChatGPT — screenshot the result','Run the same prompt in Claude — screenshot','Run it in Gemini or Perplexity — screenshot','Write: which was best for THIS task? Why?'],checklist:['The EXACT same prompt was used in all 3 tools','Screenshots are clear and readable','Your comparison explains WHY one tool was better (not just "it was better")','You identified what each tool did differently'],pro_tip:'Best comparison tasks: something with research (tests Perplexity), something long-form (tests Claude), something creative (tests ChatGPT).'}},

{n:4,titleEn:'First AI Image',tools:'Google Flow, Flux, Canva AI',
learn:[
{type:'callout',icon:'\u{1F309}',label:'Bridge to Images',content:'You\'ve mastered text AI. Now the same thinking applies to images \u2014 just with different building blocks. Same mental model (give context, iterate, refine), new tools (Google Flow, Flux, Canva).'},
{type:'visual-tip',tips:[
{icon:'\u{1F4F7}',title:'Same Logic, New Building Blocks',desc:'Image prompts use: subject + lighting + camera + style + mood. Specificity = quality.'},
{icon:'\u{1F4A1}',title:'Lighting is #1',desc:'The single most powerful variable. "Golden hour" vs "neon night" = completely different image from same prompt.'},
{icon:'\u{1F504}',title:'Generate 4, Pick Best, Refine',desc:'Never stop at first result. Generate multiple, pick the best direction, then iterate.'}
]},
{type:'prompt-anatomy',
prompt:"Street portrait of a young woman in old Yerevan, sunset golden hour, shallow depth of field, 85mm lens, film photography aesthetic, warm amber tones",
segments:[
{text:"Street portrait of a young woman",cat:'subject',explain:'\u{1F464} <strong>SUBJECT</strong> \u2014 Who or what is in the image? Be specific: "young woman" not just "woman", "street portrait" tells the pose/style.'},
{text:"in old Yerevan",cat:'context',explain:'\u{1F3DB} <strong>ENVIRONMENT</strong> \u2014 "Old Yerevan" implies tuff stone buildings, narrow streets, ornate balconies. Location adds cultural texture and visual context.'},
{text:"sunset golden hour",cat:'lighting',explain:'\u{1F4A1} <strong>LIGHTING</strong> \u2014 The most powerful image variable. Golden hour = warm, orange-pink light from low angle, long shadows, flattering glow. Try: "harsh midday sun", "soft overcast", "dramatic side lighting", "neon night".'},
{text:"shallow depth of field, 85mm lens",cat:'technical',explain:'\u{1F4F7} <strong>TECHNICAL</strong> \u2014 85mm = portrait compression, flattering proportions. Shallow DoF = blurred background (bokeh), professional look. Other combos: "wide 24mm" (environmental), "macro" (extreme closeup).'},
{text:"film photography aesthetic",cat:'style',explain:'\u{1F3A8} <strong>STYLE</strong> \u2014 "Film photography" = grain, slightly desaturated colors, organic imperfections. Other styles: "Lomography", "daguerreotype", "digital sharp", "painterly", "Wes Anderson".'},
{text:"warm amber tones",cat:'mood',explain:'\u{1F321} <strong>MOOD</strong> \u2014 Color temperature = emotional tone. Warm amber = cozy, nostalgic. Cool blue = dramatic, modern. This is your final mood dial.'}
]},
{type:'key-points',points:['Google ImageFX is free and professional quality \u2014 start here','Lighting is the #1 most powerful variable','Name film stocks (Kodak Portra, Fuji Velvia) for rich color','Use camera specs (85mm f/1.4) to control depth and compression','Generate 4, pick best, refine \u2014 iteration is the process']},
{type:'cheat-sheet',icon:'\u{1F4A1}',title:'Lighting Options',items:[
{name:'Golden Hour',desc:'Warm orange-pink light, long shadows, flattering glow',tag:'warm'},
{name:'Rembrandt',desc:'Triangle of light on shadowed cheek, dramatic one-side',tag:'dramatic'},
{name:'Soft Window',desc:'Gentle, diffused light from one side. Indoor portraits',tag:'neutral'},
{name:'Neon Night',desc:'Colorful artificial lights, urban, cinematic',tag:'cool'},
{name:'Harsh Midday',desc:'Direct overhead sun, strong shadows, high contrast',tag:'dramatic'},
{name:'Backlit / Rim',desc:'Light behind subject, glowing edges, silhouette feel',tag:'warm'},
{name:'Studio Softbox',desc:'Clean, even, commercial. Product photography standard',tag:'neutral'},
{name:'Candlelight',desc:'Warm flickering, intimate, low-key',tag:'warm'}
]},
{type:'cheat-sheet',icon:'\u{1F39E}',title:'Film Stocks & Styles',items:[
{name:'Kodak Portra 400',desc:'Warm skin tones, lifted shadows, natural look',tag:'warm'},
{name:'Fuji Velvia 50',desc:'Hyper-saturated colors, vivid landscapes',tag:'dramatic'},
{name:'Ilford HP5',desc:'Classic black & white, grain, timeless',tag:'neutral'},
{name:'Cinestill 800T',desc:'Tungsten-balanced, halation glow, night scenes',tag:'cool'},
{name:'Kodak Ektar 100',desc:'Ultra-sharp, vivid, fine grain',tag:'warm'},
{name:'Lomography',desc:'Cross-processed, vivid, intentionally imperfect',tag:'dramatic'}
]},
{type:'cheat-sheet',icon:'\u{1F4F7}',title:'Camera + Lens Combos',items:[
{name:'85mm f/1.4',desc:'Portrait king \u2014 creamy bokeh, flattering compression',tag:'warm'},
{name:'50mm f/1.8',desc:'Natural perspective, versatile all-rounder',tag:'neutral'},
{name:'35mm f/2',desc:'Environmental portraits, street photography',tag:'neutral'},
{name:'24mm wide',desc:'Dramatic perspective, architecture, landscapes',tag:'cool'},
{name:'Macro 100mm',desc:'Extreme close-up, tiny details, product texture',tag:'dramatic'},
{name:'Anamorphic',desc:'Oval bokeh, horizontal flares, cinematic feel',tag:'dramatic'}
]}
],
gallery:[
{prompt:'Street portrait of a young woman in old Yerevan, sunset golden hour, shallow depth of field, 85mm lens, film photography, warm amber tones',tool:'Google Flow',imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop',gradient:'linear-gradient(135deg,#3d2000,#8B4513 45%,#c4956a)',descResult:'Warm cinematic portrait with beautiful bokeh. The 85mm + golden hour created the signature "Armenian summer" feel.'},
{prompt:'Ararat mountain at dawn, pink and gold sky, Armenian monastery silhouette, long exposure mist, epic landscape, ultra-wide lens, National Geographic quality',tool:'Google Flow',gradient:'linear-gradient(135deg,#0a0a1a,#1a1a4a 40%,#c4956a 80%,#ff6b35)',descResult:'Epic landscape with mountain and monastery in perfect silhouette. Long-exposure mist added painterly quality.'},
{prompt:'Traditional Armenian pomegranate, floating mid-air, dark studio background, dramatic spotlight, ruby-red, water droplets, fruit photography, advertising quality',tool:'Google Flow',imageUrl:'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=300&fit=crop',gradient:'linear-gradient(135deg,#1a0000,#8B0000 50%,#E05A5A)',descResult:'Commercial-quality pomegranate shot. Water droplets catching spotlight, floating pose + dramatic light = fine art product shot.'}
],
recipe:[
{step:1,title:'Open Google ImageFX (free)',desc:'Go to labs.google.com and find ImageFX. Sign in with Google. Free and high quality.',tip:'<strong>Alternative:</strong> Canva AI is even easier for beginners.'},
{step:2,title:'Start simple \u2014 5 words',desc:'Type: "Portrait of a young woman, golden hour." Generate. See what you get before adding complexity.',tip:'<strong>Why simple first?</strong> See what AI defaults to so you know what to change.'},
{step:3,title:'Add lighting (most impact)',desc:'Add a lighting description. Compare "portrait" vs "portrait, Rembrandt lighting" vs "portrait, golden hour" \u2014 generate all three.',tip:'<strong>Best lighting keywords:</strong> golden hour, Rembrandt, dramatic side lighting, soft window, neon, harsh midday.'},
{step:4,title:'Add style + camera specs',desc:'Append: "film photography, Kodak Portra 400, 85mm f/1.4". Generate and compare. Massive quality jump.',tip:'<strong>Film stocks:</strong> Kodak Portra 400 (warm skin), Fuji Velvia (saturated), Ilford HP5 (B&W), Lomography (vivid).'}
],
quiz:[
{q:'Which addition creates the most dramatic improvement in an image prompt?',opts:['Adding "high resolution" or "4K"','Lighting description (golden hour, Rembrandt)','Making the prompt longer','Adding "beautiful" or "perfect"'],correct:1,explain:'Lighting is the #1 photography variable. "Golden hour" vs "harsh midday" vs "neon night" creates completely different realities from the same scene.'},
{q:'What does "85mm f/1.4" do in an image prompt?',opts:['Higher resolution','Blurred background (bokeh) and portrait compression','Changes color temperature','Adds film grain'],correct:1,explain:'85mm = portrait compression (flattering faces). f/1.4 = shallow depth of field = beautiful blurred background (bokeh). This is the signature of professional portraits.'}
],
hw:{brief:'Generate 3 portrait images, each using a DIFFERENT lighting + film stock combination. Same subject, different look. This teaches you the most powerful image variables.',deliverables:['3 AI-generated images with different lighting','The prompt used for each image (screenshot with prompt visible)','A 1-sentence note on each: what mood does this lighting create?'],steps:['Open Google ImageFX (labs.google.com)','Image 1: Portrait with golden hour + Kodak Portra 400','Image 2: Same subject with Rembrandt lighting + Ilford HP5 (B&W)','Image 3: Your creative choice — pick any lighting + film stock from the cheat sheets','Screenshot all 3 with prompts visible'],checklist:['Each image uses a NAMED lighting type (not just "good lighting")','Each image uses a NAMED film stock','The 3 images look noticeably different from each other','You included camera specs (lens mm, aperture)'],pro_tip:'Put all 3 images side by side. If they don\'t look dramatically different, your lighting descriptions aren\'t specific enough.'}}
]},

{id:2,title:'AI Image Mastery',titleEn:'AI Image Mastery',subtitle:'From first image to pro-quality visuals',persona:'Visual Creators',avatar:'\u{1F3A8}',outcomes:['Generate stunning AI images with any style','Master face & character consistency','Create commercial-grade product photography','Build pro image workflows in 2+ tools'],skills:['Image Prompting','Face Consistency','Nano Banana Pro','Flux','Google Flow'],icon:'\u{1F3A8}',color:'#9B7ED8',sessions:[
{n:1,titleEn:'Image Prompting Deep Dive',tools:'Google Flow, Nano Banana Pro, Flux',
learn:[
{type:'visual-tip',tips:[
{icon:'\u{1F3AD}',title:'5 Layers of Pro Prompting',desc:'Genre opener → Subject → Named lighting → Camera fingerprint → Publication reference.'},
{icon:'\u2B06\uFE0F',title:'Each Layer = Quality Jump',desc:'Start with genre opener alone, then add layers one by one. Watch quality dramatically increase.'}
]},
{type:'prompt-anatomy',
prompt:"Editorial fashion portrait, Armenian woman, late 20s, wearing silk dress with traditional ornament details, Rembrandt lighting with strong shadows, Canon 5D 85mm f/1.4, film grain, Kodak Portra 400, Vogue magazine aesthetic",
segments:[
{text:"Editorial fashion portrait",cat:'mood',explain:'\u{1F3AD} <strong>GENRE OPENER</strong> \u2014 Sets the entire visual language. "Editorial fashion" = professional positioning, intentional composition, magazine quality. Other openers: "street documentary", "cinematic still", "fine art", "commercial product".'},
{text:"Armenian woman, late 20s",cat:'subject',explain:'\u{1F464} <strong>SPECIFIC SUBJECT</strong> \u2014 Ethnic specificity affects features, coloring, cultural context. Age range (more useful than exact age) creates authentic rather than generic faces.'},
{text:"wearing silk dress with traditional ornament details",cat:'context',explain:'\u{1F457} <strong>CULTURAL DETAILS</strong> \u2014 Specific fabric (silk = luxury, movement) + cultural reference (traditional ornament) bridges contemporary fashion with heritage \u2014 powerful creative direction.'},
{text:"Rembrandt lighting with strong shadows",cat:'lighting',explain:'\u{1F4A1} <strong>NAMED LIGHTING</strong> \u2014 Rembrandt = triangle of light on shadowed cheek, dramatic one-side illumination. Others: Butterfly (glamour), Split (half face), Loop (slight shadow), Clamshell (beauty).'},
{text:"Canon 5D 85mm f/1.4",cat:'technical',explain:'\u{1F4F7} <strong>CAMERA FINGERPRINT</strong> \u2014 Canon 5D = warm, natural. 85mm f/1.4 = portrait compression + creamy bokeh. Each brand has a signature: Canon (warm), Nikon (cooler, sharper), Leica (unique rendering).'},
{text:"film grain, Kodak Portra 400",cat:'style',explain:'\u{1F39E} <strong>FILM STOCK</strong> \u2014 Kodak Portra 400: warm skin tones, lifted shadows, slight pink bias. Others: Fuji Provia (vivid), Fuji 400H (cool, faded), Ilford HP5 (B&W), Cinestill 800T (tungsten, halation).'},
{text:"Vogue magazine aesthetic",cat:'style',explain:'\u{1F4F0} <strong>PUBLICATION REFERENCE</strong> \u2014 "Vogue" encodes quality bar, art direction, lighting approach all at once. Others: Monocle (minimal), NatGeo (authentic), Kinfolk (soft), Dazed (experimental).'}
]},
{type:'key-points',points:['Start with GENRE OPENER: "editorial fashion", "cinematic still", "street documentary"','Use NAMED LIGHTING: Rembrandt, Butterfly, Split, Clamshell','Name FILM STOCKS: Kodak Portra, Fuji Velvia, Ilford HP5','Camera combos: Canon 5D 85mm (warm), Leica M10 50mm (journalistic)','PUBLICATION REFERENCE as quality benchmark: Vogue, NatGeo, Monocle']},
{type:'callout',icon:'\u26D4',label:'Negative Prompting',content:'Tell AI what to <em>exclude</em>: <em>"no blur, no watermark, no extra hands, no distorted face."</em> Add this to every portrait/product shot.'},
{type:'key-points',points:['Negative prompts prevent artifacts before generation \u2014 saves regeneration cycles','Portrait: no blur, no extra fingers, no distorted face, no watermark','Product: no cluttered background, no harsh shadows on product, no reflections','Cinematic: no oversaturation, no noise, no amateur look','Always write your negative prompt alongside positive \u2014 treat it as part of the formula']},
{type:'cheat-sheet',icon:'\u{1F3AD}',title:'Genre Openers',items:[
{name:'Editorial Fashion',desc:'Magazine-quality, intentional composition'},
{name:'Street Documentary',desc:'Candid, authentic, raw reality'},
{name:'Cinematic Still',desc:'Movie frame, dramatic lighting, narrative'},
{name:'Fine Art Portrait',desc:'Gallery-worthy, conceptual, artistic'},
{name:'Commercial Product',desc:'Clean, sellable, advertising-ready'},
{name:'Lifestyle',desc:'Natural, relatable, aspirational daily life'}
]},
{type:'cheat-sheet',icon:'\u{1F4F0}',title:'Publication References',items:[
{name:'Vogue',desc:'High fashion, luxury, art-directed'},
{name:'National Geographic',desc:'Documentary, authentic, epic scale'},
{name:'Monocle',desc:'Minimal, clean, sophisticated'},
{name:'Dazed',desc:'Experimental, edgy, avant-garde'},
{name:'Kinfolk',desc:'Soft, intimate, lifestyle'},
{name:'Wired',desc:'Tech, futuristic, digital culture'}
]}
],
gallery:[
{prompt:'Editorial fashion portrait, Armenian woman, Rembrandt lighting, Canon 5D 85mm f/1.4, Kodak Portra 400, Vogue aesthetic',tool:'Nano Banana Pro',gradient:'linear-gradient(135deg,#1a0533,#6B21A8 55%,#9B7ED8)',descResult:'Magazine-quality portrait with Kodak Portra warmth. Traditional details in high fashion composition. Could be mistaken for a real editorial.'},
{prompt:'Young man in dimly lit Armenian caf\u00e9 at night, neon reflections on wet cobblestones, Leica street photography, Fuji 800Z, melancholy atmosphere',tool:'Google Flow',gradient:'linear-gradient(135deg,#0f0c29,#302b63 50%,#1a1a3e)',descResult:'Wong Kar-wai-inspired mood. Fuji 800Z delivered perfect high-ISO grain \u2014 blue shadows, warm highlights. Instantly cinematic.'},
{prompt:'Surreal fashion: model wearing crown of pomegranates and apricots, floating petals, golden dust, ethereal light, magical realism, Eugenio Recuenco style',tool:'Nano Banana Pro',gradient:'linear-gradient(135deg,#4a1942,#c77dff 50%,#ff9a56)',descResult:'Theatrical surrealist combining Armenian symbols (pomegranate, apricot) with fantasy. Named photographer reference nailed the operatic composition.'},
{prompt:'Minimalist lifestyle: hands holding Armenian coffee cup, white linen, morning window light, flat lay, airy editorial, Canon 100mm macro',tool:'Google Flow',gradient:'linear-gradient(135deg,#1a1a1a,#3d3520 50%,#C4956A)',descResult:'Clean brand-ready lifestyle image. Flat lay + morning light = aspirational but authentic. One of the most versatile commercial formats.'}
],
recipe:[
{step:1,title:'Genre opener',desc:'First 2-3 words set everything. Try: "Editorial fashion portrait", "Street documentary", "Cinematic still". Generate 4 images with just this.',tip:'<strong>Why:</strong> Genre encodings carry entire visual language systems.'},
{step:2,title:'Subject + cultural specifics',desc:'Add who/what with cultural details: ethnicity, age, clothing, cultural references.',tip:'<strong>Cultural anchors:</strong> Armenian architecture, pomegranates, traditional patterns create unique images.'},
{step:3,title:'Named lighting setup',desc:'Choose: Rembrandt (dramatic), Butterfly (glamour), Split (half face), Golden Hour (warm).',tip:'<strong>Pro move:</strong> Learn 5 lighting names. They encode entire technical setups.'},
{step:4,title:'Camera + film stock',desc:'"Canon 5D, 85mm f/1.4, Kodak Portra 400" = complete photographic fingerprint.',tip:'<strong>Starter combos:</strong> Canon 85mm Portra (portraits), Leica 35mm Tri-X (street), Hasselblad Velvia (landscapes).'},
{step:5,title:'Publication reference',desc:'End with: "Vogue magazine", "Annie Leibovitz style", "National Geographic." Sets quality ceiling.',tip:'<strong>Power references:</strong> Vogue (fashion), NatGeo (documentary), Wired (tech), Monocle (minimal).'}
],
quiz:[
{q:'Most powerful combination for controlling color mood?',opts:['Adding "beautiful vibrant colors"','Named lighting + specific film stock reference','Resolution keywords like "8K"','Color words like "warm"'],correct:1,explain:'Lighting sets physical quality, film stock adds complete color science. Together = unmistakable, coherent aesthetic. Vague words work at much lower precision.'},
{q:'Why is "Vogue aesthetic" better than "professional quality"?',opts:['Same thing','More training data','Encodes complete visual style: art direction, lighting, composition, quality in 3 words','Faster generation'],correct:2,explain:'"Vogue" carries decades of visual culture. AI learned the entire system. "Professional quality" is subjective and vague. References are shorthand for complete visual languages.'}
],
hw:{brief:'Create 4 images using the 5-layer prompting method: genre opener + subject + named lighting + camera fingerprint + publication reference. Show the quality jump as you add each layer.',deliverables:['4 images showing progressive quality improvement','Image 1: just genre + subject (2 layers)','Image 2: add named lighting (3 layers)','Image 3: add camera specs (4 layers)','Image 4: add publication reference (5 layers)'],steps:['Choose a subject for all 4 images','Image 1: "Editorial portrait, Armenian woman" (genre + subject only)','Image 2: Add lighting: "+ Rembrandt lighting with strong shadows"','Image 3: Add camera: "+ Canon 5D 85mm f/1.4, Kodak Portra 400"','Image 4: Add reference: "+ Vogue magazine aesthetic"','Screenshot all 4 in order'],checklist:['All 4 images use the same subject','Each image ADDS one new layer (don\'t rewrite from scratch)','The quality improvement is visible between images','You used NAMED references (not generic descriptions)'],pro_tip:'Save your 5-layer prompt as a template. Change the subject and you have instant quality for any future image.'}},

{n:2,titleEn:'Face Consistency & Character',tools:'Kling AI, Flux, Nano Banana Pro',
learn:[
{type:'visual-tip',tips:[{icon:'\u{1F464}',title:'The Character Bible',desc:'Write ONE fixed character description. Copy it into every prompt. Same face, same outfit = consistency.'},{icon:'\u{1F4CB}',title:'Fix → Vary',desc:'Keep character description identical, only change pose, location, and action between images.'}]},
{type:'prompt-anatomy',
prompt:"Consistent character: young Armenian woman entrepreneur, sharp cheekbones, dark eyes, short wavy black hair, confident expression, always wearing gold hoop earrings. Scene: bright open-plan office, morning light, laptop open",
segments:[
{text:"Consistent character:",cat:'subject',explain:'\u{1F3AD} <strong>CHARACTER DECLARATION</strong> \u2014 "Consistent character:" tells AI this is a recurring persona. All subsequent descriptions become fixed traits.'},
{text:"young Armenian woman entrepreneur, sharp cheekbones, dark eyes, short wavy black hair, confident expression",cat:'subject',explain:'\u{1F512} <strong>FIXED TRAITS</strong> \u2014 These must appear identically in every prompt. "Short wavy black hair" is more consistent than "dark hair." Include distinctive features.'},
{text:"always wearing gold hoop earrings",cat:'context',explain:'\u{1F48E} <strong>SIGNATURE ELEMENTS</strong> \u2014 Accessories anchor consistency better than hair/face alone. "Always" reinforces this is fixed.'},
{text:"Scene: bright open-plan office, morning light, laptop open",cat:'context',explain:'\u{1F3AC} <strong>SCENE</strong> \u2014 Separate character from scene with "Scene:" to help AI maintain fixed character while varying setting.'}
]},
{type:'key-points',points:['Create a "Character Bible" \u2014 fixed prompt you copy for every scene','Signature accessories anchor consistency better than face descriptions alone','Same exact wording every time \u2014 any change breaks consistency','For 90%+ consistency: use reference image features in Kling/Flux','3-4 shots achievable from text alone; more shots need reference images']}
],
gallery:[
{prompt:'[Character bible] Armenian entrepreneur, sharp cheekbones, dark eyes, wavy hair, gold hoops. Scene: conference stage, spotlight, dark suit, wide shot',tool:'Nano Banana Pro',gradient:'linear-gradient(135deg,#2d1b69,#553c9a 50%,#9B7ED8)',descResult:'Consistent character from previous shot \u2014 same facial structure, same earrings, same energy. Different scene, same person.'},
{prompt:'[Same character] Scene: coffee shop Saturday morning, relaxed smile, denim jacket, natural window light, lifestyle feel',tool:'Flux',gradient:'linear-gradient(135deg,#1a0533,#7B2FBE)',descResult:'Lifestyle scene with similar facial structure. Casual vs formal achieved by changing only clothing and lighting. Gold hoops still visible.'}
],
recipe:[
{step:1,title:'Write your Character Bible',desc:'3-4 sentence description: face shape, eyes, hair (length+texture+color), distinguishing features, signature accessories, style.',tip:'<strong>Template:</strong> "[age, ethnicity], [facial features], [hair], [signature items], [style]"'},
{step:2,title:'Test across 3 scenes',desc:'Copy character bible verbatim to 3 different scenes. Evaluate consistency: what stays? What drifts?',tip:'<strong>What stays:</strong> Face shape, hair, accessories. <strong>What drifts:</strong> Exact eye color, skin tone.'},
{step:3,title:'Use reference images',desc:'Upload a reference portrait to Kling\'s image variation feature for 90%+ consistency.',tip:'<strong>Best reference:</strong> Clean, front-facing, well-lit portrait.'}
],
quiz:[
{q:'Most effective way to maintain character consistency?',opts:['Same background every time','Fixed "character bible" copied to every prompt','Just hair and eye color','Same lighting'],correct:1,explain:'A character bible gives AI the most consistent starting point. Copy-pasting verbatim prevents drift. Adding reference images jumps from ~60% to 90%+.'},
{q:'Best consistency anchors?',opts:['General style like "casual"','Specific accessories: "gold hoop earrings", "sharp cheekbones"','Colors like "always red"','Moods like "confident"'],correct:1,explain:'Specific physical features and accessories are concrete and uniquely rendered. Abstract descriptions like "elegant" are inconsistent.'}
],
hw:{brief:'Build a Character Bible and generate 6 consistent images of the same character — each with a different angle, pose, and lighting. This is the core skill for brand visual work in Session 6.',deliverables:['Your Character Bible (written description you\'ll use in every prompt)','6 images: same character, 3 different angles + 3 different lighting setups','A comparison note: what stayed consistent, what drifted?'],steps:['Write your Character Bible: age, face shape, eyes, hair (length+texture+color), signature accessories, style','Shot 1: Front-facing, neutral studio light — this is your reference shot','Shot 2: 3/4 angle, soft morning window light','Shot 3: Side profile, dramatic Rembrandt lighting','Shot 4: Same front-facing, golden hour outdoor','Shot 5: Same 3/4, night scene with warm artificial light','Shot 6: Action pose of your choice — walking, laughing, working'],checklist:['Same Character Bible text used in ALL 6 prompts (copy-paste, never rewrite)','Each image clearly specifies angle AND lighting separately','At least 4 out of 6 images look like the same person','You can see the lighting difference between shots visually'],pro_tip:'The front-facing reference shot (Shot 1) is your anchor. When consistency breaks, go back to this image and use it as img2img reference in the next session.'}},

{n:3,titleEn:'Product & Commercial Photography',tools:'Google Flow, Flux, Adobe Firefly',
learn:[
{type:'callout',icon:'\u{1F4B0}',label:'Why This Matters',content:'AI replaces <strong>$3,000-8,000</strong> photo shoots. Formula: product description + surface + dynamic element + rim lighting + quality anchor.'},
{type:'prompt-anatomy',
prompt:"Commercial product photography, luxury perfume bottle, floating on black marble surface, golden liquid splash frozen in motion, dramatic rim lighting from behind, pure black background, ultra-sharp focus, advertisement quality, 8K",
segments:[
{text:"Commercial product photography",cat:'mood',explain:'\u{1F4E6} <strong>GENRE = INTENT</strong> \u2014 "Commercial" signals sellable, aspirational, precise. AI understands: perfect lighting, clean composition, brand-ready quality.'},
{text:"luxury perfume bottle",cat:'subject',explain:'\u{1F48E} <strong>PRODUCT + POSITIONING</strong> \u2014 "Luxury" is crucial. Adjectives encode brand positioning: luxury, artisanal, eco-friendly, futuristic. Each gets different visual treatment.'},
{text:"floating on black marble surface",cat:'context',explain:'\u{1F3D7} <strong>SURFACE SELECTION</strong> \u2014 Most impactful background choice. Black marble = luxury. White acrylic = tech. Raw wood = artisanal. Brushed metal = industrial.'},
{text:"golden liquid splash frozen in motion",cat:'subject',explain:'\u{1F4A7} <strong>DYNAMIC ELEMENT</strong> \u2014 Motion transforms static products into stories. "Frozen in motion" implies high-speed photography \u2014 drama and energy.'},
{text:"dramatic rim lighting from behind",cat:'lighting',explain:'\u2728 <strong>RIM LIGHTING</strong> \u2014 Light from behind creates a glowing outline (halo) that separates product from background. Essential for luxury shots.'},
{text:"ultra-sharp focus, advertisement quality, 8K",cat:'technical',explain:'\u{1F3AF} <strong>QUALITY ANCHORS</strong> \u2014 This closing formula signals maximum quality. Use on every commercial prompt: "advertisement quality, ultra-sharp, hyperrealistic."'}
]},
{type:'key-points',points:['Surface = mood setter: marble=luxury, wood=artisanal, white=clean','Always add dynamic element: splash, smoke, pour, floating','Rim lighting creates luxury "halos" \u2014 use on everything','Close every commercial prompt with quality anchors','Food/drink: always add "water droplets" for freshness']}
],
gallery:[
{prompt:'Luxury perfume, black marble, golden splash frozen, rim lighting, pure black bg, advertisement quality, 8K',tool:'Google Flow',gradient:'linear-gradient(135deg,#000,#1a1a0d 50%,#c4a44a)',descResult:'High-impact commercial. Golden splash as dynamic focal point. Rim lighting halo against black. Indistinguishable from studio shoot.'},
{prompt:'Artisan Armenian honey jar, dark oak surface, golden honey drip in motion, dried herbs scattered, warm afternoon window light, premium food photography',tool:'Google Flow',gradient:'linear-gradient(135deg,#1a0a00,#7d4e1e 50%,#e8a838)',descResult:'Warm storytelling product shot. Honey drip as hero moment. Herbs added "artisanal" positioning. Window light = authentic warmth.'},
{prompt:'Premium headphones floating in white space, subtle shadow, Apple campaign aesthetic, ultra-sharp, minimalist, hyperrealistic',tool:'Flux',gradient:'linear-gradient(135deg,#0a0a0a,#1a1a1a 50%,#3a3a3a)',descResult:'Apple-style product shot. Floating + shadow + cleanliness. The "Apple aesthetic" reference did enormous work.'}
],
recipe:[
{step:1,title:'Product + positioning',desc:'"[Brand tier] [product]" \u2014 luxury ceramic mug, artisanal olive oil, minimalist tech device.',tip:'<strong>Tier modifiers:</strong> luxury (gold, dark), artisanal (warm, organic), minimalist (white, clean).'},
{step:2,title:'Choose surface',desc:'Match surface to brand: black marble (luxury), white acrylic (tech), wood (artisanal), linen (lifestyle).',tip:'<strong>Rule:</strong> Surface and product tier must always match.'},
{step:3,title:'Add dynamic element',desc:'"Honey drip in motion", "floating mid-air", "liquid splash frozen", "scattered petals."',tip:'<strong>By product:</strong> Food=drip/steam. Beauty=splash. Tech=floating. Fashion=fabric movement.'},
{step:4,title:'Lighting + quality close',desc:'"Dramatic rim lighting" + "ultra-sharp focus, advertisement quality, hyperrealistic." Add to every commercial prompt.',tip:'<strong>Always add the closing formula.</strong> It consistently upgrades output quality.'}
],
quiz:[
{q:'Most premium surface/background for luxury products?',opts:['Bright white','Dark marble + rim lighting','Natural outdoor','Colorful gradient'],correct:1,explain:'Dark marble + rim lighting = luxury visual code used by Chanel, Dior, Rolex. Now usable in AI prompts.'},
{q:'Why add a "dynamic element" to product prompts?',opts:['Better quality','Creates visual storytelling \u2014 product feels alive','Required for it to work','Faster generation'],correct:1,explain:'Static = lifeless. Motion (splash, pour, float) implies action, suggests story, creates focal point. Far more engaging for advertising.'}
],
hw:{brief:'You are the art director. Invent a premium Armenian product brand — name it, design the visual language, shoot 3 product images. This is a real creative brief. Treat it like a paying client gave it to you.',deliverables:['Your brand concept: product name + 1-sentence brand story','Shot 1: Hero product shot (dark luxury surface, rim lighting)','Shot 2: Lifestyle shot (product in context — someone using it, or a styled flat lay)','Shot 3: The unexpected shot — something creative, unusual, artistic that still sells the product','The negative prompts you used for each'],steps:['Invent your product: an Armenian honey brand? A pomegranate skincare line? An artisan coffee? A luxury candle?','Write your brand positioning: luxury, artisanal, modern, or traditional?','Shot 1: Formula — [product] on [premium surface] + [dynamic element] + rim lighting + quality anchors','Shot 2: Put the product in a human moment — hands, lifestyle, culture, story','Shot 3: Break the formula. Try: Monet palette + product photography. Or: surrealist floating. Or: macro extreme close-up.','Add negative prompt to all 3: "no blur, no watermark, no cluttered background, no extra hands"'],checklist:['The 3 shots feel like they belong to the same brand','Shot 1 would work as a product listing image','Shot 2 tells a story about the customer\'s life','Shot 3 is genuinely surprising — something you\'ve never seen before'],creative_challenge:'BONUS: Write the Instagram caption for Shot 2. If you can write the caption, you nailed the shot.',pro_tip:'Show these to someone outside class. If they ask "where can I buy this?" — you did it right.'}},

{n:4,titleEn:'The Expensive Look',tools:'Nano Banana Pro, Flux, Google Flow',
learn:[
{type:'visual-tip',tips:[{icon:'\u{1F3AC}',title:'The Cinematic Formula',desc:'Film grain + named color grade + anamorphic lens + director reference = production quality.'},{icon:'\u{1F3A8}',title:'Name > Describe',desc:'"Wes Anderson color palette" encodes more than 50 words of color description.'}]},
{type:'prompt-anatomy',
prompt:"Cinematic film still, Armenian mountain village in winter, elderly woman in doorway, harsh natural light, deep shadows with lifted blacks, 35mm anamorphic lens, Kodak Vision3 5219 film, Roger Deakins cinematography, lonely and beautiful",
segments:[
{text:"Cinematic film still",cat:'mood',explain:'\u{1F3AC} <strong>CINEMATIC GENRE</strong> \u2014 "Film still" = frame from a real movie. Implies: precise composition, intentional color grade, narrative context. The #1 phrase for expensive-looking AI images.'},
{text:"Armenian mountain village in winter",cat:'context',explain:'\u{1F3D4} <strong>SPECIFIC SETTING</strong> \u2014 Cultural + season + geography = unique, authentic scenes.'},
{text:"elderly woman in doorway",cat:'subject',explain:'\u{1F9D3} <strong>HUMAN SCALE</strong> \u2014 Human figure in architecture = instant narrative. "Elderly woman in doorway" implies life story, threshold moment, time.'},
{text:"deep shadows with lifted blacks",cat:'lighting',explain:'\u{1F4A1} <strong>COLOR GRADE LANGUAGE</strong> \u2014 "Lifted blacks" is pro grading \u2014 shadows don\'t go pure black but deep gray-blue. Signature of film colorists. Others: "crushed blacks", "split toning", "teal and orange".'},
{text:"35mm anamorphic lens",cat:'technical',explain:'\u{1F4FD} <strong>ANAMORPHIC</strong> \u2014 Creates oval bokeh, horizontal lens flares, wide depth of Hollywood cinema. This single spec elevates any image from "photo" to "film."'},
{text:"Kodak Vision3 5219 film",cat:'style',explain:'\u{1F39E} <strong>MOTION PICTURE FILM</strong> \u2014 Kodak Vision3 is Hollywood\'s film stock (Joker, 1917). Warm highlights, deep blue-green shadows. Naming it = major production quality.'},
{text:"Roger Deakins cinematography",cat:'style',explain:'\u{1F3AC} <strong>CINEMATOGRAPHER</strong> \u2014 Roger Deakins (Blade Runner 2049, 1917): large soft sources, deep shadows, extreme contrast, careful color separation. Names encode complete visual systems.'}
]},
{type:'key-points',points:['"Cinematic film still" \u2014 most powerful phrase for expensive images','Anamorphic lens = cinematic widescreen quality and characteristic flares','Motion picture film stocks: Kodak Vision3 5219, Fuji Eterna','Cinematographer references: Deakins, Lubezki, van Hoytema','Color grading terms: lifted blacks, teal-orange, crushed highlights']}
],
gallery:[
{prompt:'Cinematic film still, Armenian village, winter, elderly woman, Deakins lighting, anamorphic, Kodak Vision3',tool:'Nano Banana Pro',gradient:'linear-gradient(135deg,#0D1117,#161B22 40%,#1C2128)',descResult:'Extraordinarily cinematic. Deakins-style deep-shadow contrast with lifted blacks. Anamorphic bokeh visible. Feels like an Oscar-nominated frame.'},
{prompt:'Cinematic fashion, Armenian dancer mid-movement, torn red scarf, teal-orange grade, anamorphic, Ren\u00e9 Magritte meets fashion',tool:'Nano Banana Pro',gradient:'linear-gradient(135deg,#8B0000,#E05A5A 40%,#c4956a)',descResult:'Surrealist fashion with perfect teal-orange grade. "Magritte meets fashion" = dreamlike but with editorial precision.'},
{prompt:'Night Yerevan, rain-slicked streets, neon reflections, man in long coat, Blade Runner 2049 mood, anamorphic flares, Lubezki style',tool:'Flux',gradient:'linear-gradient(135deg,#020212,#0a0a2e 40%,#12c2e9)',descResult:'Neo-noir cityscape. Blade Runner reference = warm foreground, cold atmosphere, anamorphic depth. Professional production quality.'},
{prompt:'Ultra-luxury jewelry, gold necklace with pomegranate motif, midnight blue gradient, particle light, Monet color palette applied to product photography',tool:'Nano Banana Pro',gradient:'linear-gradient(135deg,#000033,#191970 50%,#c4a44a)',descResult:'Monet impressionist colors applied to luxury product = dreamy, soft transitions unlike any standard commercial photography. Cultural motif elevated it.'}
],
recipe:[
{step:1,title:'"Cinematic film still"',desc:'These 3 words are a cheat code. Signal: film-quality lighting, color grading, narrative depth. Test on any subject.',tip:'<strong>Variations:</strong> "Film still from prestige TV", "Frame from Oscar-winning film", "1970s arthouse still."'},
{step:2,title:'Add anamorphic lens',desc:'"35mm anamorphic" = oval bokeh, horizontal flares, theatrical quality of big-budget productions.',tip:'<strong>Test:</strong> Same prompt with and without "anamorphic." The production value difference is immediate.'},
{step:3,title:'Professional color grading',desc:'"Teal and orange" (Hollywood standard), "lifted blacks" (Deakins), "desaturated warm highlights" (arthouse).',tip:'<strong>Teal-orange</strong> is in 80% of blockbusters: skin (orange) pops against environment (teal).'},
{step:4,title:'Name a cinematographer',desc:'Deakins (dark, precise), Lubezki (natural, ethereal), Storaro (warm, saturated), van Hoytema (cold, sci-fi).',tip:'<strong>Study first:</strong> Google "[name] stills" to understand their visual signature.'}
],
quiz:[
{q:'What does "anamorphic lens" do in an image prompt?',opts:['Wider image','Oval bokeh, horizontal flares, theatrical depth of Hollywood','More sharpness','Vintage degraded look'],correct:1,explain:'Anamorphic = distinctive oval bokeh, horizontal streaks, and characteristic depth. Deeply associated with high-budget cinema.'},
{q:'Why is "teal and orange" so common in cinema?',opts:['A filter','Contrast between cool environments and warm skin tones \u2014 universally flattering','Old film stock look','Kodak emulation'],correct:1,explain:'Skin tones (orange/warm) vs environments (teal/cool) = natural color separation that makes subjects pop \u2014 dramatic and cinematic.'}
],
hw:{brief:'Create your personal cinematic triptych — 3 images that together tell a short visual story. Think of it as 3 frames from a film that doesn\'t exist yet. Each must use cinematic techniques, and together they must feel like they belong to the same world.',deliverables:['3 cinematic images that belong to the same visual world','A title for your imaginary film or story','The full prompt for each image','A note: which cinematographer\'s style did you choose and why?'],steps:['Decide on a mood/world: is it an Armenian noir, a surrealist fashion film, a sci-fi love story, a documentary about tradition?','Frame 1: Establishing shot — show the world. Location, atmosphere, time of day.','Frame 2: Character shot — introduce your person. Who are they in this world?','Frame 3: Tension/beauty shot — the most visually striking image of the three.','Each prompt must use: anamorphic lens + named film stock + named cinematographer','Add "cinematic film still" to every prompt'],checklist:['All 3 images feel like they come from the same film (consistent color grade)','Named cinematographer is the same or intentionally different across the 3','Film stock creates visible and consistent color signature','You can write a 2-sentence story based on the 3 images'],creative_challenge:'BONUS: Name your film. Write the opening line of the script. Who is the main character? What do they want?',pro_tip:'The best prompts feel personal. Use real places, real cultural details, real emotions you want to explore. AI makes great images. YOU make great stories.'}},

{n:5,titleEn:'Image-to-Image Mastery',tools:'Nano Banana Pro, Flux, Kling AI',
learn:[
{type:'visual-tip',tips:[
{icon:'\u{1F504}',title:'Reference → Result',desc:'Image-to-image transforms an existing image. You control how much AI follows the original (strength) vs how free it is to reinvent.'},
{icon:'\u2696\uFE0F',title:'Strength is Everything',desc:'Low strength (0.3) = major transformation. High strength (0.8) = stays close to original. Find the sweet spot for your goal.'},
{icon:'\u{1F512}',title:'What to Keep vs Change',desc:'The art is being explicit: "keep the composition and lighting, change the style to cinematic". Vague instructions produce random results.'}
]},
{type:'prompt-anatomy',
prompt:"[Reference: photo of Yerevan street corner at dusk] Transform to: cinematic film still, noir atmosphere, keep composition and architecture, change lighting to dramatic single streetlamp, add rain-wet reflections on cobblestones, teal-orange color grade, 35mm anamorphic, strength 0.65",
segments:[
{text:"[Reference: photo of Yerevan street corner at dusk]",cat:'subject',explain:'\u{1F5BC} <strong>REFERENCE IMAGE</strong> \u2014 Your starting point. Upload a photo or paste a URL. The better the reference, the better the output. High-contrast, well-lit references give AI the most to work with.'},
{text:"Transform to: cinematic film still, noir atmosphere",cat:'mood',explain:'\u{1F3AC} <strong>TRANSFORMATION DIRECTIVE</strong> \u2014 Lead with "Transform to:" — this is your style target. Be specific about the genre. "Noir" encodes: high contrast, deep shadows, mysterious atmosphere, cool desaturated tones.'},
{text:"keep composition and architecture",cat:'context',explain:'\u{1F512} <strong>WHAT TO PRESERVE</strong> \u2014 Explicitly list what must survive the transformation. "Keep composition" = same framing, same subjects, same spatial relationships. Without this, AI may redesign everything.'},
{text:"change lighting to dramatic single streetlamp",cat:'lighting',explain:'\u{1F4A1} <strong>WHAT TO CHANGE</strong> \u2014 Equally important: list what should be different. "Change lighting to…" is a direct instruction. Specific lighting directives override the reference image\'s light.'},
{text:"add rain-wet reflections on cobblestones",cat:'context',explain:'\u{1F327} <strong>ADDITIVE ELEMENTS</strong> \u2014 Things not in the original that you want added. "Rain-wet reflections" adds depth and cinematic atmosphere without changing the actual scene structure.'},
{text:"teal-orange color grade, 35mm anamorphic",cat:'style',explain:'\u{1F39E} <strong>STYLE ANCHORS</strong> \u2014 Color grading and lens choice define the final look. These override the reference image\'s color palette. Teal-orange = Hollywood standard, anamorphic = film quality.'},
{text:"strength 0.65",cat:'technical',explain:'\u2696\uFE0F <strong>INFLUENCE / STRENGTH</strong> \u2014 In Nano Banana Pro this is the Influence slider (0–100%). 30–50% = heavy transformation. 60–75% = balanced — structure stays, look transforms. 80–90% = subtle refinement. Start at 65% for most creative work.'}
]},
{type:'key-points',points:[
'Strength 0.3–0.5: dramatic reinvention (style completely overrides reference)',
'Strength 0.6–0.75: creative transformation (structure stays, mood changes)',
'Strength 0.8–0.9: subtle refinement (minor adjustments only)',
'Always state KEEP and CHANGE explicitly — never assume AI knows which to preserve',
'Best references: high contrast, clear subject, good composition',
'Nano Banana Pro: upload reference → set Influence slider (0–100%). Flux: use img2img strength slider'
]},
{type:'callout',icon:'\u{1F4CC}',label:'Nano Banana Pro — Image Influence',content:'In Nano Banana Pro: upload your reference image, then use the <em>Influence slider</em> to control how closely AI follows it. Low influence (20–40%) = bold transformation. High influence (70–90%) = structure preserved, style refined.'},
{type:'cheat-sheet',icon:'\u2696\uFE0F',title:'Strength Guide by Goal',items:[
{name:'0.25–0.40',desc:'Total reinvention — only vague structure survives'},
{name:'0.45–0.60',desc:'Style swap — subject clear, everything else transforms'},
{name:'0.65–0.75',desc:'Creative transformation — structure + composition stay'},
{name:'0.80–0.90',desc:'Refinement — minor changes, mostly original survives'},
{name:'NB 20–40% influence',desc:'Loose inspiration — AI treats image as loose reference'},
{name:'NB 70–90% influence',desc:'Strong follow — composition and features locked in'}
]},
{type:'cheat-sheet',icon:'\u{1F504}',title:'Best Image-to-Image Use Cases',items:[
{name:'Style Transfer',desc:'Photo → oil painting, cinematic, illustration, manga'},
{name:'Lighting Change',desc:'Daylight photo → golden hour, night, storm, studio lit'},
{name:'Era Shift',desc:'Modern scene → 1970s, Victorian, futuristic 2080'},
{name:'Product Mockup',desc:'Flat product → lifestyle scene, in-hand, on model'},
{name:'Mood Transformation',desc:'Happy scene → melancholic, mysterious, dramatic'},
{name:'Photo Enhancement',desc:'Amateur photo → professional, color-graded, editorial'}
]}
],
gallery:[
{prompt:'[Yerevan cafe reference photo] Transform to: cinematic noir, keep table and window composition, change to night scene, single warm lamp, rain on glass, teal shadows, Blade Runner mood, strength 0.65',tool:'Nano Banana Pro',gradient:'linear-gradient(135deg,#020212,#0a0a2e 50%,#1a4a6e)',descResult:'Original café photo transformed into neo-noir scene. Composition preserved, table framing intact. Dramatic lamp added, rain streaks on window. Feels like a movie set.'},
{prompt:'[Product flat-lay reference] Transform to: luxury lifestyle, keep product centered, change white background to dark marble, add golden rim lighting, add subtle smoke element, advertisement quality --iw 1.5',tool:'Flux',gradient:'linear-gradient(135deg,#0d0d0d,#1a1a0a 50%,#c4a44a)',descResult:'E-commerce flat lay became a luxury advertisement. Marble surface and rim lighting replaced the white background while product shape was fully preserved.'},
{prompt:'[Portrait reference of woman] Style transfer: Klimt golden art nouveau painting, keep facial features and pose, transform clothing to golden mosaic patterns, geometric decorative background, painterly texture, strength 0.55',tool:'Kling AI',gradient:'linear-gradient(135deg,#2d1b00,#8B6914 50%,#f0c040)',descResult:'Photo portrait became a Gustav Klimt-inspired painting. Face and pose preserved at 0.55 strength while everything else transformed into golden mosaic art nouveau style.'},
{prompt:'[Ordinary street photo] Transform: cinematic golden hour, keep architectural composition, change midday light to warm sunset, add lens flare, people motion blur, Terrence Malick style, strength 0.70',tool:'Nano Banana Pro',gradient:'linear-gradient(135deg,#1a0a00,#7d3010 50%,#f08030)',descResult:'Flat midday street scene transformed into cinematic golden hour. Architecture preserved, light completely changed. Motion blur added life. Terrence Malick reference delivered soft, dreamy warmth.'}
],
recipe:[
{step:1,title:'Choose your reference carefully',desc:'Upload a high-contrast, well-composed image. Your reference is the skeleton — AI builds on it. Blurry or cluttered references produce noisy outputs.',tip:'<strong>Best references:</strong> Clean backgrounds, clear subjects, interesting existing composition.'},
{step:2,title:'Set your transformation target',desc:'Write "Transform to: [style]" first. Be specific: not "make it look better" but "transform to cinematic noir, 1970s arthouse, or luxury advertisement."',tip:'<strong>Style target:</strong> Genre (noir, editorial) + mood (mysterious, warm) + reference (Blade Runner, Vogue).'},
{step:3,title:'Declare what to KEEP',desc:'"Keep: [composition/subject/architecture/face/colors]." This is your anchor. Explicit preservation instructions prevent AI from redesigning the whole image.',tip:'<strong>Keep list:</strong> composition, subject framing, architecture, facial features, brand colors.'},
{step:4,title:'Declare what to CHANGE',desc:'"Change: [lighting/background/style/era/mood]." Be specific about each element. The more precise the change instruction, the more predictable the result.',tip:'<strong>Change targets:</strong> lighting setup, background, color grade, era, atmospheric effects.'},
{step:5,title:'Set your strength',desc:'Start at 0.65 for creative work. If too close to original, lower to 0.5. If too different, raise to 0.75. Strength is the most powerful control you have.',tip:'<strong>Golden zone:</strong> 0.60–0.70 gives most creative freedom while preserving structure.'}
],
quiz:[
{q:'What does image-to-image "strength 0.35" mean?',opts:['35% quality','Very close to original, minor changes','Heavy transformation — original barely recognizable','35 generation steps'],correct:2,explain:'Low strength = AI has more freedom to deviate from the reference. 0.35 means only about 35% of the original structure survives — major style and composition changes will happen.'},
{q:'What\'s the most important instruction to add in an img2img prompt?',opts:['Quality anchors like 8K','Explicit KEEP and CHANGE lists','The tool name','Color preferences'],correct:1,explain:'Without explicit keep/change instructions, AI guesses what to preserve. "Keep composition, change lighting" is far more reliable than hoping AI figures out what you want preserved.'}
],
hw:{brief:'Take 3 of your own photos (or photos from your phone) and transform each into a completely different visual world using image-to-image. The original should be recognizable but the style completely transformed.',deliverables:['3 before/after pairs (original + transformed image)','The full prompt used for each transformation','Note: what did you keep? what changed?'],steps:['Choose 3 photos: a person, a place, a product or object','For each: write "Transform to: [target style]"','List what to KEEP (composition, subject, structure)','List what to CHANGE (lighting, style, mood, era)','Set strength 0.65 as starting point — adjust if needed','Generate and compare to original'],checklist:['Original structure/composition is still recognizable in result','Style transformation is dramatic and intentional','You used explicit KEEP and CHANGE instructions','At least one image uses a named cinematographer or publication reference'],pro_tip:'The best img2img results come from good references. Before generating, ask: is my reference photo high-contrast? Is the composition interesting? Would a photographer be proud of it?'}}

]},

{id:3,title:'AI Video Creation',titleEn:'AI Video Creation',subtitle:'Motion, camera control & storytelling',persona:'Video Makers',avatar:'\u{1F3AC}',outcomes:['Create cinematic AI videos from scratch','Master camera angles and motion control','Build lip sync and talking head content','Direct consistent multi-shot stories','Produce full 30-second video ads','Edit pro pipelines end-to-end in CapCut'],skills:['Kling AI 3.0','Runway','ElevenLabs','HeyGen','Suno','CapCut'],icon:'\u{1F3AC}',color:'#E05A5A',sessions:[
{n:1,titleEn:'First AI Video — 4 Generation Methods',tools:'Kling AI, Runway, Pika, Google Flow',
learn:[
{type:'visual-tip',tips:[
{icon:'\u{1F3AC}',title:'4 Methods, Different Control',desc:'Text-to-video, image-to-video, start+end frame, multi-shot. Each trades control for flexibility.'},
{icon:'\u{1F5BC}',title:'Image-to-Video Wins',desc:'90% of pro AI video starts as an image. Nail the frame first, then animate. Image quality = video quality.'},
{icon:'\u{1F50D}',title:'Motion is Everything',desc:'A video prompt is NOT an image prompt. You must describe MOTION: subject action, camera move, atmosphere.'}
]},
{type:'prompt-anatomy',
prompt:"[Reference: portrait of Armenian woman in soft window light] Slow cinematic push in toward subject, slight head turn to camera, hair gently moves in breeze, dust particles floating in backlight, smooth realistic motion, 5 seconds",
segments:[
{text:"[Reference: portrait of Armenian woman in soft window light]",cat:'subject',explain:'\u{1F5BC} <strong>REFERENCE IMAGE</strong> \u2014 The foundation. A high-contrast, well-lit portrait gives AI a clear subject to animate. Blurry or cluttered references produce jittery video.'},
{text:"Slow cinematic push in toward subject",cat:'technical',explain:'\u{1F3A5} <strong>CAMERA MOTION</strong> \u2014 Always describe the camera first. "Slow cinematic push in" encodes: controlled speed + emotional intent + professional execution. Never write "zoom in" — write "dolly push in."'},
{text:"slight head turn to camera",cat:'subject',explain:'\u{1F464} <strong>SUBJECT MOTION</strong> \u2014 What the subject DOES. Small movements work best: head turn, blink, smile, breath. Large movements (walking, running) often break.'},
{text:"hair gently moves in breeze",cat:'context',explain:'\u{1F343} <strong>MICRO-MOTION</strong> \u2014 Tiny environmental motion (hair, fabric, leaves) makes footage feel alive. Without it, AI video feels frozen.'},
{text:"dust particles floating in backlight",cat:'lighting',explain:'\u2728 <strong>ATMOSPHERE</strong> \u2014 Particles, light rays, mist, smoke, rain — these sell the cinematic quality more than any other single element. Add one to every shot.'},
{text:"smooth realistic motion, 5 seconds",cat:'style',explain:'\u{1F3AF} <strong>QUALITY & DURATION ANCHORS</strong> \u2014 "Smooth realistic motion" prevents jitter. Specify duration — 5s free tier, 10s paid. Don\'t skip.'}
]},
{type:'key-points',points:['Image-to-video = most control. Generate a perfect still first, then animate','Video prompts need MOTION: camera move + subject action + micro-motion + atmosphere','Start with small subject motion — head turn beats "running"','Add "smooth cinematic motion" to every prompt to prevent jitter','5 seconds standard, 10 seconds on paid tier','Kling 3.0 leads for human motion. Runway Gen-4 leads for stylized. Pika for speed.']},
{type:'cheat-sheet',icon:'\u{1F39E}',title:'4 Generation Methods',items:[
{name:'Text-to-Video',desc:'Fast concept sketches. Low visual control. Good for abstract moods.'},
{name:'Image-to-Video',desc:'The default pro workflow. Nail still, then animate. Highest visual control.'},
{name:'Start + End Frame',desc:'Define first AND last frame. AI fills the middle. Best for transitions.'},
{name:'Multi-Shot (Kling)',desc:'Generate connected shots with character persistence. Best for stories.'}
]},
{type:'cheat-sheet',icon:'\u{1F504}',title:'Tool Picker',items:[
{name:'Kling AI 3.0',desc:'Best for human motion, lip sync, realistic physics. Default pick.'},
{name:'Runway Gen-4',desc:'Best for stylized, painterly, surreal. Strong motion brush.'},
{name:'Pika Labs',desc:'Fastest generation. Good for quick iteration and social posts.'},
{name:'Google Flow',desc:'Veo 3 inside. Best audio-visual integration, native sound.'}
]}
],
gallery:[
{prompt:'[Portrait reference] Slow push in, slight head turn, hair moves in breeze, dust in backlight, cinematic smooth motion, 5s',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#1a0a1a,#4d1a2e 50%,#E05A5A)',descResult:'Portrait comes alive with micro-motion. The dust particles and gentle hair movement sell the realism instantly. Head turn timed perfectly at 3s.'},
{prompt:'[Yerevan cafe reference] Camera stays still, person takes slow sip of coffee, steam rises, soft window light flickers, 5s',tool:'Runway Gen-4',gradient:'linear-gradient(135deg,#0a0a1a,#2d1a0a 50%,#c4956a)',descResult:'Static camera + subtle subject motion = most believable AI video pattern. Rising steam is the hero detail.'},
{prompt:'Start frame: closed wooden door. End frame: door open revealing Armenian courtyard at golden hour. Cinematic reveal, smooth motion, 5s',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#1a1000,#7d4e1e 50%,#f0a338)',descResult:'Start+end frame generates the reveal perfectly. Controlled storytelling in a single clip. A commercial director\'s tool.'},
{prompt:'Text-to-video: slow dolly through misty Armenian vineyard at dawn, soft golden rays piercing fog, birds flying across frame, cinematic',tool:'Pika Labs',gradient:'linear-gradient(135deg,#1a1a0a,#3d3520 50%,#e8c878)',descResult:'Text-only works well when the scene is atmospheric rather than specific. Mist and light rays gave AI room to improvise beautifully.'}
],
recipe:[
{step:1,title:'Generate the still first',desc:'Open Google Flow or Nano Banana Pro. Create a high-contrast, well-composed still image. This becomes your anchor frame.',tip:'<strong>Best anchor frames:</strong> Clear subject, intentional composition, good lighting. Bad stills = bad videos.'},
{step:2,title:'Open Kling AI and upload',desc:'Go to klingai.com, click Image-to-Video, upload your still. Set duration to 5s on free tier.',tip:'<strong>Kling credits:</strong> Free tier gives 66 credits daily. A 5s standard video = 10 credits.'},
{step:3,title:'Write the motion prompt',desc:'Structure: camera move + subject action + micro-motion + atmosphere. Keep under 40 words. More words rarely help.',tip:'<strong>Template:</strong> "[Camera move], [subject action], [micro-motion], [atmosphere element], smooth cinematic motion."'},
{step:4,title:'Generate 4 variations',desc:'Never keep the first. Click Generate 4 times with identical prompt. Pick the best — discard the rest.',tip:'<strong>Rule:</strong> First generation is rarely the best. 4 variations = professional insurance.'},
{step:5,title:'Identify what broke',desc:'Study the failed ones. Did faces distort? Hands melt? Motion jitter? Note the failure pattern — adjust your next prompt.',tip:'<strong>Common failures:</strong> Hands, fast motion, long dialog. Avoid these in Session 1.'}
],
quiz:[
{q:'Which method gives the most visual control?',opts:['Text-to-video','Image-to-video','Start+end frame','Multi-shot'],correct:1,explain:'Image-to-video anchors the frame to a still you control completely. Your still image = your video quality ceiling.'},
{q:'What makes a video prompt different from an image prompt?',opts:['Longer words','Motion description — camera move + subject action + micro-motion','Quality anchors','Tool name'],correct:1,explain:'A video prompt without motion produces static-feeling clips. Always describe how things MOVE, not just what they look like.'}
],hw:{brief:'Create your first 3 AI videos using all 3 viable generation methods. This session is about feeling the trade-offs — not about producing a masterpiece.',deliverables:['Video 1: Text-to-video (5 seconds)','Video 2: Image-to-video (5 seconds, your generated still as reference)','Video 3: Start+end frame (5 seconds, defined opening and closing frame)','The full prompt + tool used for each','One paragraph: which method you\'ll use most, and why?'],steps:['Pick a single subject idea for all 3 — a person, place, product or mood','Video 1: Open Kling or Pika. Text-to-video. Write a 2-sentence atmospheric scene','Video 2: Generate a still in Google Flow or Nano Banana Pro first. Upload it to Kling image-to-video. Add motion prompt','Video 3: Generate two stills (beginning state, ending state). Use Kling start+end frame','Compare: which felt most controllable? Which felt most magical? Which failed?','Screenshot a key frame from each'],checklist:['All 3 methods were genuinely tried (not skipped)','Motion is described in every prompt (not just static scenes)','You can explain WHICH method is best for WHICH kind of shot','At least one video feels like a real film frame'],creative_challenge:'BONUS: Take your favorite of the 3 and make a 10-second version. Push the motion — add a camera move it didn\'t have before.',pro_tip:'If all 3 look jittery, your prompts are probably too long or too ambitious. Shorter prompts with smaller motions produce cleaner results.'}},

{n:2,titleEn:'Motion & Camera Mastery',tools:'Kling AI 3.0, Runway',
learn:[
{type:'visual-tip',tips:[
{icon:'\u{1F3A5}',title:'6-Axis Cinematography',desc:'Pan, tilt, roll, truck, pedestal, dolly. These are the tools real cinematographers have used for 100 years.'},
{icon:'\u{1F39E}',title:'Camera = Emotion',desc:'Slow push in = intimacy. Pull out = epic. Orbit = discovery. Each move carries meaning. Match the move to the story.'},
{icon:'\u26A1',title:'Speed = Energy',desc:'Slow moves feel cinematic. Fast moves feel energetic. Always specify SPEED ("slow", "smooth", "rapid").'}
]},
{type:'prompt-anatomy',
prompt:"[Armenian church still] Slow cinematic dolly push in from wide establishing to medium close up, slight tilt up to reveal dome at end, golden hour light intensifies, dust motes drift through sunbeams, smooth Roger Deakins cinematography, 10 seconds",
segments:[
{text:"Slow cinematic dolly push in",cat:'technical',explain:'\u{1F3A5} <strong>PRIMARY CAMERA MOVE</strong> \u2014 Dolly = camera on rails. "Push in" = moving toward subject. "Slow" = cinematic not frantic. This trio is the single most powerful film move.'},
{text:"from wide establishing to medium close up",cat:'technical',explain:'\u{1F4D0} <strong>FRAMING JOURNEY</strong> \u2014 Define start and end framing. This forces AI to plan the move properly. Wide → medium → close defines the emotional arc.'},
{text:"slight tilt up to reveal dome at end",cat:'technical',explain:'\u2B06\uFE0F <strong>COMPOUND MOVE</strong> \u2014 Dolly + tilt = cinematic revelation. Used by every great director to reveal scale and meaning at a key moment.'},
{text:"golden hour light intensifies",cat:'lighting',explain:'\u{1F307} <strong>LIGHTING ARC</strong> \u2014 Light that changes OVER the clip adds time dimension. "Intensifies" = becomes more dramatic as camera arrives at subject.'},
{text:"dust motes drift through sunbeams",cat:'context',explain:'\u2728 <strong>ATMOSPHERIC MICRO-MOTION</strong> \u2014 Dust, particles, mist, rain. Without these, AI video feels too clean. A single atmospheric detail 10x\'s the cinematic feel.'},
{text:"smooth Roger Deakins cinematography",cat:'style',explain:'\u{1F3AC} <strong>CINEMATOGRAPHER REFERENCE</strong> \u2014 Same as images: names encode visual systems. Deakins = deep shadows, intentional blocking, precise motion. Others: Lubezki (natural flowing), Chivo (warm), Morrison (kinetic).'}
]},
{type:'key-points',points:[
'Dolly push in = intimacy, revelation, tension',
'Pull out = epic, scale, isolation',
'Pan (horizontal rotation) = reveal sideways, follow action',
'Tilt (vertical rotation) = reveal height, hierarchy, drama',
'Orbit = 360° mystery, showcase, discovery',
'Truck = lateral slide, used in car chases and reveals',
'Compound moves (dolly + tilt) = cinema-grade direction',
'Always specify speed: "slow", "smooth", "rapid"'
]},
{type:'cheat-sheet',icon:'\u{1F3A5}',title:'Camera Move Vocabulary',items:[
{name:'Dolly push in',desc:'Intimate. Build tension. Reveal a truth.'},
{name:'Dolly pull out',desc:'Epic. Reveal scale. Isolate the subject.'},
{name:'Pan (horizontal)',desc:'Follow action. Reveal environment left-to-right.'},
{name:'Tilt up / down',desc:'Hierarchy and drama. Reveal scale vertically.'},
{name:'Orbit',desc:'Showcase product or character. 360° mystery.'},
{name:'Crane / Jib',desc:'Reveal scale. Opening shots of establishing.'},
{name:'Handheld',desc:'Urgent, documentary, raw, immediate.'},
{name:'Static locked-off',desc:'Voyeuristic, observational, patient.'}
]},
{type:'cheat-sheet',icon:'\u{1F3AD}',title:'Emotion → Camera',items:[
{name:'Intimacy',desc:'Slow dolly push in + shallow depth'},
{name:'Epic scale',desc:'Slow pull out + low angle'},
{name:'Tension',desc:'Slow push in + close framing'},
{name:'Discovery',desc:'Slow orbit + gradual reveal'},
{name:'Urgency',desc:'Handheld + rapid tracking'},
{name:'Reverence',desc:'Crane up + golden light intensification'}
]}
],
gallery:[
{prompt:'[Armenian church exterior] Slow dolly push in from wide to medium, tilt up to dome reveal, golden hour intensifies, dust in sunbeams, Deakins cinematography, 10s',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#1a0f00,#5a3515 50%,#e8a040)',descResult:'Textbook compound move. Push-in combined with tilt-up creates reverent reveal. Golden hour light arc makes time feel real.'},
{prompt:'[Dancer mid-movement] Slow orbit 180°, subject stays centered, background blurs to streaks, dramatic teal-orange grade, anamorphic cinema, 10s',tool:'Runway Gen-4',gradient:'linear-gradient(135deg,#001a33,#003366 50%,#E05A5A)',descResult:'Orbit made the static moment feel cinematic. Subject-locked rotation showcases form. Background blur suggests motion time-stop.'},
{prompt:'[Yerevan night street] Slow handheld tracking shot following figure walking away, rain-slicked cobbles reflect neon, slight camera sway, Blade Runner mood',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#020212,#0a0a2e 50%,#1a4a6e)',descResult:'Handheld + tracking = pursued-thriller energy. Neon reflections and slight sway sell the immersion.'},
{prompt:'[Ararat mountain vista] Slow crane up from foreground wildflowers revealing epic mountain, snow capped peak in morning light, Terrence Malick style, 10s',tool:'Runway Gen-4',gradient:'linear-gradient(135deg,#0a1a1a,#2d4050 50%,#c4e0f0)',descResult:'Crane up = scale reveal. Starting low with foreground detail makes the mountain feel monumental when it arrives.'}
],
recipe:[
{step:1,title:'Pick ONE camera move to master today',desc:'Don\'t try 8 moves. Pick one — dolly push in is the best first — and do 10 variations.',tip:'<strong>Mastery method:</strong> Same scene, same move, 10 variations. You learn what breaks and what works.'},
{step:2,title:'Write speed + direction + target',desc:'"Slow push in toward subject" beats "zoom in." Always: speed adjective + move verb + target noun.',tip:'<strong>Speed words:</strong> slow, smooth, gentle, rapid, aggressive, gradual, cinematic.'},
{step:3,title:'Define start and end framing',desc:'"From wide establishing to medium close up" forces AI to plan. Without it, AI guesses the arc.',tip:'<strong>Frame sizes:</strong> extreme wide → wide → medium → medium close → close → extreme close.'},
{step:4,title:'Add compound motion for impact',desc:'Single moves are fine. Compound moves (dolly + tilt) are cinematic. "Push in with slight tilt up."',tip:'<strong>Best compounds:</strong> Dolly+tilt (reverence), Orbit+tilt (revelation), Crane+push (epic).'},
{step:5,title:'Name a cinematographer',desc:'Closing anchor: "Deakins cinematography" or "Malick style" or "Lubezki natural lighting." Signals motion philosophy.',tip:'<strong>Study first:</strong> Google "[cinematographer] camera moves" to know what their signature feels like.'}
],
quiz:[
{q:'Most intimate and dramatic camera move?',opts:['Pan left','Slow dolly push in','Pull out zoom','Tilt up'],correct:1,explain:'Dolly push in shrinks the distance between viewer and subject. Used by Spielberg, Kubrick, Villeneuve for revelation and tension.'},
{q:'Why "compound moves" (dolly+tilt) feel more cinematic?',opts:['More tokens','Two axes of motion = more information per second, richer direction','Faster','Uses more credits'],correct:1,explain:'Single-axis moves feel mechanical. Compound moves feel directed. Human eyes read the combination as intentional choreography.'}
],hw:{brief:'Shoot the same scene 4 times with 4 completely different camera moves. The exercise is to feel how camera choice rewrites the meaning of identical content.',deliverables:['4 video clips (5s each) — same subject, same scene, 4 different camera moves','One-line emotional note per clip: what does this camera move make the viewer feel?','Your favorite of the 4 + explanation of why it works'],steps:['Pick ONE subject: a person, place, or product. Generate or find a strong still image','Shot 1: Slow dolly push in (intimate, revelation)','Shot 2: Slow pull out (epic, scale)','Shot 3: Slow orbit around subject (mystery, showcase)','Shot 4: Static locked-off with subject/environment motion only (observational)','After generating: watch all 4 back-to-back. Same subject — different story'],checklist:['4 genuinely different camera moves (not variations of the same)','Same subject/still used across all 4 shots','Each prompt named the move explicitly ("dolly push in", not "zoom")','Motion is smooth — not jittery, not frozen','You can name what each shot makes the viewer feel'],creative_challenge:'BONUS: Pick your favorite shot and extend to 10 seconds with a compound move. Dolly AND tilt. Push AND slight pan. See what breaks — and what becomes cinema.',pro_tip:'Slow = cinematic. Fast = energy. Handheld = urgency. Static = observation. Your camera move is a storytelling decision — not a technical one.'}},

{n:3,titleEn:'Lip Sync & Talking Heads',tools:'ElevenLabs, HeyGen, Kling AI 3.0, CapCut',
learn:[
{type:'visual-tip',tips:[
{icon:'\u{1F5E3}',title:'3-Tool Pipeline',desc:'ElevenLabs (voice) → HeyGen or Kling (lip sync) → CapCut (edit + captions). End-to-end talking head in under 1 hour.'},
{icon:'\u{1F464}',title:'Front-Facing Always',desc:'Every lip sync tool needs front-facing, neutral expression, mouth-visible. Side angles fail 90% of the time.'},
{icon:'\u2696\uFE0F',title:'Ethics Matter',desc:'Always disclose AI voice and AI avatar use. Never clone a real person\'s voice without written permission.'}
]},
{type:'prompt-anatomy',
prompt:"ElevenLabs voice: 'Rachel' preset, warm confident female, medium pace. Script: 'In 30 seconds I will show you the fastest way to launch your first AI product. No tools, no code, just one document and one hour.' Stability: 50. Clarity: 75. Export MP3.",
segments:[
{text:"ElevenLabs voice: 'Rachel' preset",cat:'subject',explain:'\u{1F5E3} <strong>VOICE SELECTION</strong> \u2014 Start with ElevenLabs presets before cloning. Rachel (warm confident female), Adam (deep male), Bella (young warm), Antoni (authoritative male). Free tier gives 10k chars/month.'},
{text:"warm confident female, medium pace",cat:'mood',explain:'\u{1F3AD} <strong>DELIVERY DIRECTION</strong> \u2014 Even with preset voices, choose pace and energy. Medium pace reads natural. Slow pace for emotional. Fast for tutorials.'},
{text:"Script: 'In 30 seconds I will show you...'",cat:'context',explain:'\u{1F4DD} <strong>SCRIPT LENGTH</strong> \u2014 130 words = 60 seconds. 65 words = 30 seconds. 30 words = 15 seconds. Write for your target duration, not inspiration.'},
{text:"Stability: 50. Clarity: 75",cat:'technical',explain:'\u{1F39B}\uFE0F <strong>VOICE SETTINGS</strong> \u2014 Stability = how consistent. High stability (80) = robotic. Low (30) = dramatic swings. 50 is the professional sweet spot. Clarity at 75 = crisp without being cold.'},
{text:"Export MP3",cat:'technical',explain:'\u{1F4BE} <strong>EXPORT FORMAT</strong> \u2014 MP3 for social/Kling/HeyGen. WAV for professional editing. Always download — never rely on cloud playback for production.'}
]},
{type:'key-points',points:[
'Voice cloning: 1 minute of clean audio = realistic custom voice',
'Lip sync needs: front-facing, mouth visible, neutral expression start',
'HeyGen = dedicated avatars + lip sync (fastest for social content)',
'Kling lip sync = use your own generated characters + voices',
'CapCut free: auto-captions, auto-subtitle translation, AI voice',
'Always disclose AI voice use — it is ethical practice AND rebuilds trust',
'Script length rule: 130 words \u2248 60 seconds at natural pace'
]},
{type:'cheat-sheet',icon:'\u{1F5E3}',title:'ElevenLabs Voice Settings',items:[
{name:'Stability 30',desc:'Dramatic, emotional, podcast-style delivery'},
{name:'Stability 50',desc:'The professional default. Natural and consistent.'},
{name:'Stability 80',desc:'Very consistent but starts to feel robotic'},
{name:'Clarity 60',desc:'Soft, conversational, intimate'},
{name:'Clarity 75',desc:'Crisp, professional, advertising-ready'},
{name:'Style exaggeration',desc:'Emotional emphasis — use carefully, can sound over-acted'}
]},
{type:'cheat-sheet',icon:'\u{1F3AD}',title:'Lip Sync Tool Picker',items:[
{name:'HeyGen',desc:'Ready-made avatars + voice. Fastest social content.'},
{name:'Kling Lip Sync',desc:'Use your own characters + Eleven voices. Most creative control.'},
{name:'D-ID',desc:'Animate static photos with speech. Great for historical figures.'},
{name:'Runway Act-One',desc:'Capture your own expressions, map onto AI character.'},
{name:'Sync.so',desc:'Post-production lip sync on existing videos. Good for dubbing.'}
]},
{type:'callout',icon:'\u26A1',label:'Script length formula',content:'<strong>130 words = 60 seconds.</strong> 65 words = 30s. 30 words = 15s. Write your script to hit your target duration — then read aloud with a timer to confirm.'}
],
gallery:[
{prompt:'ElevenLabs Rachel voice, 30s script, Armenian woman portrait, Kling lip sync, soft studio light, corporate educator delivering',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#1a1a2e,#3d3560 50%,#c4956a)',descResult:'Portrait + Eleven voice + Kling sync = credible talking head in under 30 minutes. Mouth shapes match phonemes accurately.'},
{prompt:'HeyGen avatar: professional Armenian female presenter, navy blazer, 60s scripted product demo, auto-captions on',tool:'HeyGen',gradient:'linear-gradient(135deg,#0a1a3e,#1a3060 50%,#5a80c0)',descResult:'HeyGen removes the technical friction — upload script, pick avatar, export. Ideal for high-volume social content.'},
{prompt:'[Historical Armenian figure photo] + Eleven custom clone voice speaking poem, D-ID animation, slight head nod, eye blinks',tool:'D-ID',gradient:'linear-gradient(135deg,#2d1510,#5a3520 50%,#a85a2e)',descResult:'D-ID brings static portraits to life. Ethical use: educational content, archival storytelling, heritage projects.'},
{prompt:'Runway Act-One: record own face performance, map onto stylized Armenian animated character, expressive storytelling mode',tool:'Runway Act-One',gradient:'linear-gradient(135deg,#1a0a1a,#4d2a4d 50%,#c060c0)',descResult:'Act-One lets YOU be the performer — AI character inherits your expressions. The most creative control over emotional delivery.'}
],
recipe:[
{step:1,title:'Write the script first (130 words = 60s)',desc:'Read aloud to check timing. Cut until it fits. Short beats long every time.',tip:'<strong>Structure:</strong> Hook (3s) → Promise (5s) → Content (45s) → CTA (7s).'},
{step:2,title:'Generate voice in ElevenLabs',desc:'Free tier: 10 presets. Pick Rachel, Adam, or Bella. Stability 50, Clarity 75. Export MP3.',tip:'<strong>If script is in Armenian:</strong> Use the multilingual models or try the "Armenian female" community voice.'},
{step:3,title:'Generate or pick presenter image',desc:'Front-facing, neutral expression, mouth slightly open, clear lighting. Chest-up framing.',tip:'<strong>Bad references:</strong> Profile shots, laughing mouth, heavy shadows on face. All reduce lip sync accuracy.'},
{step:4,title:'Combine in Kling or HeyGen',desc:'Kling: upload image + upload MP3 → Lip Sync. HeyGen: pick avatar → paste script → Generate.',tip:'<strong>Speed difference:</strong> HeyGen = 5 minutes. Kling = 15 minutes. Use Kling when image control matters more than speed.'},
{step:5,title:'Export + caption in CapCut',desc:'Drop into CapCut → Auto Captions → style captions. Captions lift watch time 40% on social.',tip:'<strong>Caption rule:</strong> 2-4 words per line. Large font. Bottom center. Always.'}
],
quiz:[
{q:'Best starting image for lip sync?',opts:['Any face angle','Front-facing, neutral expression, mouth visible','Profile shot with smile','Emotional open-mouth expression'],correct:1,explain:'Lip sync AI needs a neutral starting state. Front-facing exposes all facial muscles. Neutral = reset state so AI can apply motion cleanly.'},
{q:'How long is a 30-second script?',opts:['~30 words','~65 words','~130 words','~200 words'],correct:1,explain:'Natural speech averages 130 words per minute. Half a minute = 65 words. Read aloud with a timer to verify your script.'}
],hw:{brief:'Produce a complete 30-second talking-head video: script → voice → lip sync → captions → export. Treat it as your first AI-delivered social post.',deliverables:['Your 30-second script (~65 words)','ElevenLabs MP3 file','Final 30-second video with lip-synced speech','Exported with auto-captions in CapCut'],steps:['Pick your topic: a tip from your industry, a story, a product pitch, or an Armenian cultural note','Write the 65-word script. Read aloud with a timer — must hit 30 seconds','Generate voice in ElevenLabs with Rachel or Adam preset, stability 50','Generate or pick a front-facing presenter image — clear lighting, neutral expression','Upload image + MP3 to Kling Lip Sync OR use HeyGen avatar with your script','Import the output to CapCut → Auto Captions → style captions bottom center'],checklist:['Script reads naturally when spoken aloud','Voice sounds human, not robotic (stability not too high)','Lip movement syncs with word timing (no visible delay)','Source image face is front-facing and clearly lit','Auto-captions are readable — large font, high contrast','Final duration is within 28–32 seconds'],creative_challenge:'BONUS: Make 2 versions — the SAME script with 2 DIFFERENT presenter voices (one male, one female, or one warm, one authoritative). Watch both back-to-back. Which voice sells it better? Why?',pro_tip:'Captions are not optional — 85% of social video is watched muted. Auto-generate in CapCut, then manually review every word. One wrong caption kills credibility.'}},

{n:4,titleEn:'Multi-Shot Storytelling & Character Consistency',tools:'Kling AI 3.0 Multi-Shot, Runway References',
learn:[
{type:'visual-tip',tips:[
{icon:'\u{1F3AC}',title:'From Clip to Story',desc:'A single 5s clip is a moment. 5 connected clips with one character = a story. Multi-shot changes everything.'},
{icon:'\u{1F464}',title:'Character Bible + Reference Locks',desc:'Same character description + same reference image across every shot = consistency. Drift = amateur.'},
{icon:'\u{1F4CA}',title:'3-Act Structure Still Applies',desc:'Setup (shots 1-2) → tension (shots 3-4) → resolution (shot 5). Even a 30-second AI film uses classic structure.'}
]},
{type:'prompt-anatomy',
prompt:"[Character Bible: Armenian woman entrepreneur, sharp cheekbones, wavy dark hair, gold hoop earrings, cream silk blouse]. Shot 3 of 5: Character walks through Yerevan morning market, slow tracking shot beside her, dust motes in sunlight, warm natural grade, 5s. Maintain: face, hair, signature earrings. Vary: setting, light, atmosphere.",
segments:[
{text:"[Character Bible: Armenian woman entrepreneur...gold hoop earrings, cream silk blouse]",cat:'subject',explain:'\u{1F4D6} <strong>CHARACTER BIBLE</strong> \u2014 Copy-paste this EXACT string into every shot prompt. The identical wording is what locks the character. Change nothing between shots.'},
{text:"Shot 3 of 5",cat:'context',explain:'\u{1F4C7} <strong>SHOT POSITION</strong> \u2014 Declaring position in the sequence signals to AI (and to yourself) that this is part of a story. Use "Shot X of Y" religiously.'},
{text:"Character walks through Yerevan morning market",cat:'context',explain:'\u{1F306} <strong>SCENE ACTION</strong> \u2014 What the character DOES in this shot. Keep action simple — walking, pausing, gesturing. Complex actions break character consistency.'},
{text:"slow tracking shot beside her",cat:'technical',explain:'\u{1F3A5} <strong>CAMERA FOR THE SEQUENCE</strong> \u2014 Tracking shots (camera moves with subject) are your main multi-shot tool. They let the character move through space without cutting.'},
{text:"Maintain: face, hair, signature earrings",cat:'context',explain:'\u{1F512} <strong>CONSISTENCY LOCKS</strong> \u2014 Explicit "Maintain:" list tells AI what must survive. Always lock face, hair, and one signature accessory (jewelry, clothing piece, color).'},
{text:"Vary: setting, light, atmosphere",cat:'style',explain:'\u{1F504} <strong>VARIATION LICENSE</strong> \u2014 Explicit "Vary:" list tells AI where it has freedom. Without this, AI guesses and often breaks the wrong thing.'}
]},
{type:'key-points',points:[
'Character Bible = exact wording, copy-pasted into every shot',
'Always upload the same REFERENCE IMAGE across all 5 shots (Kling allows this)',
'Lock: face, hair, signature accessory. Vary: setting, light, angle, action',
'Use "Shot X of Y" in every prompt to signal sequence intent',
'Tracking shots are the default — camera moves with subject, not against',
'3-act structure works: shots 1-2 setup, 3-4 tension, 5 resolution',
'Kling 3.0 Multi-Shot mode keeps character consistency automatically — use it',
'If drift happens, regenerate with stronger lock language ("IDENTICAL face from reference")'
]},
{type:'cheat-sheet',icon:'\u{1F4D6}',title:'Character Bible Template',items:[
{name:'Demographics',desc:'"Armenian woman, late 20s, entrepreneur"'},
{name:'Face features',desc:'"Sharp cheekbones, deep brown eyes, warm skin"'},
{name:'Hair (exact)',desc:'"Shoulder-length wavy dark brown hair, side-parted"'},
{name:'Signature accessory',desc:'"Gold hoop earrings" — the anchor item'},
{name:'Signature clothing',desc:'"Cream silk blouse" — the recurring piece'},
{name:'Style descriptor',desc:'"Minimalist elegance, confident posture"'}
]},
{type:'cheat-sheet',icon:'\u{1F3AC}',title:'5-Shot Story Arc',items:[
{name:'Shot 1 — Establishing',desc:'Wide. Set the world. Character small in the frame.'},
{name:'Shot 2 — Introduction',desc:'Medium. Meet the character. Close enough to read expression.'},
{name:'Shot 3 — Rising Action',desc:'Tracking. Character does something. Movement and purpose.'},
{name:'Shot 4 — Moment',desc:'Close-up. The key detail — eyes, hands, object. Emotional beat.'},
{name:'Shot 5 — Resolution',desc:'Wide or pull-out. Character in the world. Satisfied, transformed, arrived.'}
]}
],
gallery:[
{prompt:'[Character Bible] Shot 1 of 5: Wide establishing, character stands at Yerevan balcony sunrise, slow pull back reveal, golden light, 5s',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#1a0a00,#5a3010 50%,#e8a040)',descResult:'Establishing shot. Character small, world large. Sets the scale — she lives here, this is her morning.'},
{prompt:'[Character Bible] Shot 2 of 5: Medium, character sips coffee on balcony, slight smile, steam rises, warm window light, 5s',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#2d1a0a,#7d4e1e 50%,#c4956a)',descResult:'Introduction. Same character, closer. Reading expression is possible now. Steam and slight smile = intimacy.'},
{prompt:'[Character Bible] Shot 3 of 5: Tracking beside character walking through morning market, dust in sunlight, dynamic forward motion, 5s',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#1a1500,#5a4e1a 50%,#e8c058)',descResult:'Rising action. Character moves through space. Tracking camera creates agency — she is doing, not being.'},
{prompt:'[Character Bible] Shot 4 of 5: Extreme close up on hands examining handmade silver ring at artisan stall, slow push in, 5s',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#1a1a1a,#3d3d3d 50%,#c4c4c4)',descResult:'Moment. Cutting to hands and object instead of face = emotional specificity. A purchase, a decision, a pause.'},
{prompt:'[Character Bible] Shot 5 of 5: Pull out from character smiling in Yerevan square, golden hour wide, satisfied mood, 10s',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#2a1000,#8d5020 50%,#f0b060)',descResult:'Resolution. Return to wide. Character in her world, transformed by the arc. 10 seconds for emotional landing.'}
],
recipe:[
{step:1,title:'Write your Character Bible once',desc:'3-4 sentence character description. Include face, hair (exact), signature accessory, signature clothing. Lock this language — never change it.',tip:'<strong>The anchor rule:</strong> One signature accessory (earrings, necklace, watch) carries more weight than face features.'},
{step:2,title:'Generate your reference still',desc:'Front-facing portrait, clean background, strong lighting. This is the anchor image you\'ll reference in every shot.',tip:'<strong>Save it:</strong> Download the PNG. Keep the prompt. This file is your character file across the whole course.'},
{step:3,title:'Plan 5 shots in a 3-act structure',desc:'Shots 1-2 setup the world and character. Shots 3-4 escalate with movement and detail. Shot 5 resolves.',tip:'<strong>Plan on paper first:</strong> One sentence per shot. Framing + action + purpose. Do this BEFORE generating.'},
{step:4,title:'Generate all 5 shots with identical Character Bible',desc:'Copy-paste the Character Bible verbatim into all 5 prompts. Vary only the action, framing, camera, location.',tip:'<strong>Kling 3.0 Multi-Shot mode:</strong> Use it. It auto-maintains character consistency across the 5 shots.'},
{step:5,title:'Review — what drifted?',desc:'Watch all 5 back-to-back. Does face stay? Hair? Earrings? If something drifted, identify which shot broke and regenerate with stronger lock language.',tip:'<strong>The 4-of-5 rule:</strong> If 4 of 5 shots are consistent and 1 drifts — regenerate the broken one only.'}
],
quiz:[
{q:'What anchors character consistency best across multiple shots?',opts:['Eye color description','A distinctive signature accessory (earrings, watch)','Hair color','General style'],correct:1,explain:'Specific, distinctive accessories are rendered more consistently than face features. Gold hoop earrings, a specific watch, a red scarf — these survive across shots.'},
{q:'Why use "Shot X of Y" in every prompt?',opts:['Required syntax','Signals sequence intent to AI AND to yourself — enforces story thinking','Tracks credits','Speeds generation'],correct:1,explain:'"Shot 3 of 5" makes you think about position in story. It also cues AI that this is part of a sequence, activating consistency tendencies.'}
],hw:{brief:'Direct your first 5-shot AI film. One character, one story, 5 connected shots. Think of it as a 25-second short you would submit to a festival.',deliverables:['Your Character Bible (written, saved, reusable for future sessions)','1 reference portrait still of the character','5 video clips (5s each) with identical character across all','A one-paragraph story logline: who is this character, and what happens in these 25 seconds?','Short analysis: what stayed consistent? What drifted? How would you fix the drift?'],steps:['Write your Character Bible — demographics, face, hair, signature accessory, clothing','Generate the reference portrait in Nano Banana Pro or Google Flow','Plan your 5 shots on paper: establishing → introduction → action → moment → resolution','Shot 1 (wide establishing): copy Character Bible + wide shot prompt + location','Shot 2 (medium introduction): copy Character Bible + medium framing + soft moment','Shot 3 (tracking action): copy Character Bible + tracking shot + forward motion','Shot 4 (close-up detail): copy Character Bible + close-up + hands/object/key detail','Shot 5 (resolution): copy Character Bible + wide pull-out + transformation moment','Review all 5 back-to-back. Identify any character drift.'],checklist:['Character Bible is word-for-word identical across all 5 prompts','Signature accessory is visible and consistent in at least 4 of 5 shots','Shots follow the 5-shot arc (establishing → introduction → action → moment → resolution)','Camera moves vary intentionally across the 5 shots (not all pushes, not all static)','Each shot has a clear purpose in the story','Face/hair recognizable as same character across all 5'],creative_challenge:'BONUS: Write the OPENING LINE of the film. If this was a short film on Vimeo, what sentence would appear on the title card? One line — make it carry the whole story.',pro_tip:'The Character Bible you write today becomes your signature for the rest of the course. Save it. Future sessions (ads, music videos, brand work) will use this same character. Consistency across the course = portfolio.'}},

{n:5,titleEn:'AI Video Ads — 30-Second Commercials',tools:'Kling AI 3.0, ElevenLabs, Suno, CapCut',
learn:[
{type:'visual-tip',tips:[
{icon:'\u{1F4B0}',title:'A Real Ad Costs $10k+',desc:'A production-quality 30s ad with agency, crew, location, talent: $10k–$50k. AI version: under $50 and 3 hours.'},
{icon:'\u{1F9F1}',title:'Ad Structure Never Changes',desc:'Hook (0-3s) → Problem (3-8s) → Product (8-18s) → Proof (18-25s) → CTA (25-30s). Decades of advertising science.'},
{icon:'\u{1F3AD}',title:'Emotion Sells, Not Features',desc:'Lifestyle > specs. Transformation > price. Show who they become, not what the product does.'}
]},
{type:'prompt-anatomy',
prompt:"30s ad brief. Product: Armenian artisan honey brand 'Apirakh'. Audience: Yerevan millennials who buy premium groceries. Hook (0-3s): dawn apiary, golden light, beekeeper silhouette. Problem (3-8s): generic supermarket honey on shelf, flat light, tired hands. Product (8-18s): hero shot of honey jar on dark oak, liquid drip frozen, rim lighting. Proof (18-25s): Yerevan family breakfast, honey on warm bread, laughter. CTA (25-30s): product + tagline 'Taste the real hills.' Visual style: warm cinematic, teal-orange grade, anamorphic lens. Music: acoustic folk, 95 BPM, hopeful.",
segments:[
{text:"30s ad brief. Product: Armenian artisan honey brand 'Apirakh'",cat:'context',explain:'\u{1F4DC} <strong>BRIEF FIRST</strong> \u2014 Always start with product + audience. This frames every shot decision. "Artisan" = premium language. "Apirakh" = memorable brand name.'},
{text:"Hook (0-3s): dawn apiary, golden light, beekeeper silhouette",cat:'mood',explain:'\u{1F3A3} <strong>HOOK SHOT</strong> \u2014 First 3 seconds win or lose the ad. Atmosphere + mystery + beauty. Silhouette invites curiosity — they lean in.'},
{text:"Problem (3-8s): generic supermarket honey...flat light, tired hands",cat:'context',explain:'\u2696\uFE0F <strong>PROBLEM SHOT</strong> \u2014 The mundane alternative. Cold, flat, generic. Must contrast sharply with the hero. Flat light vs golden = instant visual tension.'},
{text:"Product (8-18s): hero shot...dark oak, liquid drip frozen, rim lighting",cat:'subject',explain:'\u{1F36F} <strong>HERO SHOT</strong> \u2014 The product as star. Use your Session 3 (Image) formula: dark surface + dynamic element + rim lighting. 10 seconds is LONG — plan micro-motion (drip, rotate, reveal).'},
{text:"Proof (18-25s): Yerevan family breakfast...laughter",cat:'mood',explain:'\u{1F3E0} <strong>PROOF SHOT</strong> \u2014 Real people with real transformation. Family + bread + laughter = authenticity. This converts viewers into believers.'},
{text:"CTA (25-30s): product + tagline 'Taste the real hills.'",cat:'style',explain:'\u{1F4E2} <strong>CLOSING CTA</strong> \u2014 Product back on screen + short memorable line + brand mark. 5 seconds. Short tagline. Nothing else.'},
{text:"Music: acoustic folk, 95 BPM, hopeful",cat:'style',explain:'\u{1F3B5} <strong>SOUND DIRECTION</strong> \u2014 Brief the music like a shot. Genre + BPM + emotional direction. Use this in Suno: "acoustic folk, 95 BPM, hopeful, Armenian duduk accents, instrumental, 30 seconds."'}
]},
{type:'key-points',points:[
'The 5-beat ad: Hook (0-3) / Problem (3-8) / Product (8-18) / Proof (18-25) / CTA (25-30)',
'Hook must work with sound OFF — 85% of social watches muted',
'Problem shot must visually CONTRAST the product shot (flat vs lit, cold vs warm)',
'Product shot is where you apply all of Session 3 image craftsmanship',
'Proof shot should feature real-looking people, not idealized models',
'Music BPM is emotional pacing. 90-100 = hopeful. 120+ = energetic. 70-85 = intimate',
'Final CTA: max 5 seconds, one tagline, brand mark — nothing else'
]},
{type:'cheat-sheet',icon:'\u{1F9F1}',title:'5-Beat Ad Structure',items:[
{name:'Hook (0-3s)',desc:'Beautiful + mysterious. Makes them stop scrolling.'},
{name:'Problem (3-8s)',desc:'The mundane alternative. Flat, cold, generic.'},
{name:'Product (8-18s)',desc:'Hero shot. 10 seconds of craft. Rim lighting. Motion.'},
{name:'Proof (18-25s)',desc:'Real people, real moment. Transformation visible.'},
{name:'CTA (25-30s)',desc:'Product + tagline + brand. 5 seconds. Nothing else.'}
]},
{type:'cheat-sheet',icon:'\u{1F3B5}',title:'Suno Music Briefs',items:[
{name:'Intimate / luxury',desc:'"Ambient piano, 70 BPM, spacious, hopeful, instrumental, 30s"'},
{name:'Energetic / youth',desc:'"Indie pop, 128 BPM, punchy drums, uplifting, 30s"'},
{name:'Cinematic / epic',desc:'"Cinematic strings, 110 BPM, building crescendo, orchestral, 30s"'},
{name:'Armenian heritage',desc:'"Armenian duduk + acoustic guitar, 95 BPM, melancholy hopeful, 30s"'},
{name:'Modern premium',desc:'"Minimal electronic, 100 BPM, clean pluck synths, confident, 30s"'}
]}
],
gallery:[
{prompt:'Hook (0-3s): Apirakh dawn apiary, golden light, beekeeper silhouette, slow push in, warm cinematic, anamorphic, Armenian duduk layer',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#1a0a00,#6d3a10 50%,#f0a030)',descResult:'Opening 3 seconds set the entire tone. Silhouette against sunrise invites curiosity. Slow push in = cinematic authority.'},
{prompt:'Product hero (8-18s): Apirakh honey jar on dark oak, honey drip frozen in motion, rim lighting, dust particles, 10s',tool:'Kling AI 3.0',gradient:'linear-gradient(135deg,#0a0a00,#3d2510 50%,#c4a020)',descResult:'The 10-second hero shot. Frozen drip is the moment everything builds toward. Rim lighting separates jar from black.'},
{prompt:'Proof (18-25s): Yerevan family breakfast, hands spread honey on warm bread, laughter, morning window light, candid documentary',tool:'Runway Gen-4',gradient:'linear-gradient(135deg,#2d1a0a,#7d4e1e 50%,#e8c060)',descResult:'Proof shot converts. Real-looking family + hands + bread = authentic transformation. Window light keeps it candid, not staged.'},
{prompt:'Suno music: Armenian duduk + acoustic guitar, 95 BPM, melancholy hopeful, instrumental, builds gently to lifted chorus, 30 seconds',tool:'Suno',gradient:'linear-gradient(135deg,#1a1a2e,#3d3560 50%,#c4956a)',descResult:'Suno delivers on surgical music briefs. Duduk layer + acoustic base = cultural specificity + universal appeal. 95 BPM = hopeful tempo.'}
],
recipe:[
{step:1,title:'Write the brief on one page',desc:'Product name, audience, tone, tagline. Do this BEFORE any generation. The brief is the hardest part — and the most valuable.',tip:'<strong>Brief template:</strong> Product is [X]. For [audience]. Feels like [tone]. The one-line promise: [tagline].'},
{step:2,title:'Storyboard the 5 beats in sentences',desc:'One sentence per beat. Hook sentence. Problem sentence. Product sentence. Proof sentence. CTA sentence. 5 total.',tip:'<strong>Why sentences:</strong> If you can\'t write the beat in one sentence, the shot is muddled. Rewrite the sentence first.'},
{step:3,title:'Generate each beat as an image first',desc:'Apply Session 3 formulas to each shot. Hero shot gets full luxury formula. Proof shot gets lifestyle formula.',tip:'<strong>Image first, video second:</strong> 5 strong stills + animation = 5 strong shots. Weak stills = weak shots.'},
{step:4,title:'Brief Suno with the same ad brief',desc:'Genre + BPM + emotional arc + duration. Suno will generate 2 versions — pick the better one. 30 seconds exactly.',tip:'<strong>Suno pro tip:</strong> Specify "instrumental" explicitly, otherwise Suno adds vocals. Specify "30 seconds" exactly.'},
{step:5,title:'Assemble in CapCut with beat sync',desc:'Drag all 5 clips in order. Drag Suno track. Enable Auto Beat Sync. Add tagline text overlay on CTA beat. Export 1080p.',tip:'<strong>Beat sync rule:</strong> Cut ON the downbeat, not between. The cut and the drum hit should be the same frame.'}
],
quiz:[
{q:'First 3 seconds of an ad must work WITHOUT sound because...',opts:['Sound quality is bad','85% of social video is watched muted — visual hook alone must work','Platforms compress audio','Makes the file smaller'],correct:1,explain:'85% of social video is watched with sound off. Your hook must stop the scroll with visuals alone. Captions are secondary; visuals come first.'},
{q:'Which beat should be your strongest image craft?',opts:['Hook','Product hero shot','Proof shot','CTA'],correct:1,explain:'The 10-second product hero shot is where you apply all of Session 3\'s image craft: luxury surface, rim lighting, dynamic element, quality anchors. The ad rises or falls here.'}
],hw:{brief:'Invent an Armenian product brand and direct its full 30-second ad. You are the creative director. Brief, beats, generations, music, edit — end to end.',deliverables:['One-page brand brief: product name, audience, tone, tagline','Storyboard: 5 beats, one sentence each','5 generated video clips (one per beat)','Suno music track (30 seconds, briefed to match brand tone)','Final assembled 30-second video in CapCut with music and text overlay on CTA','A 2-paragraph creative director note: what you tried, what worked, what you\'d do differently'],steps:['Invent your brand: artisan honey? pomegranate skincare? modern Armenian coffee? luxury candles?','Write the one-page brief: product, audience, tone, tagline','Storyboard 5 beats: Hook / Problem / Product / Proof / CTA — one sentence each','Generate 5 video clips (Kling image-to-video with strong stills first)','Brief Suno: genre + BPM + emotion + 30s instrumental','Assemble in CapCut: drag clips in beat order, drag music, enable Auto Beat Sync','Add tagline text overlay on final 5 seconds','Export 1080p, 30 seconds exactly'],checklist:['Brief is written on ONE page and reads cleanly to someone outside the class','5 beats are visible and distinct — each serves its structural purpose','Product hero shot is the most polished image in the ad','Proof shot features real-looking humans, not idealized perfection','Music tempo matches emotional intent (slow = intimate, fast = energetic)','Beat sync cuts land on music downbeats','Tagline on CTA is short (max 6 words), memorable, product-specific','Final export is exactly 30 seconds'],creative_challenge:'BONUS: Upload the finished ad to your own Instagram story (private or public). The real test is whether someone scrolling would stop. Ask ONE honest friend: "Did this stop your scroll?" Note their answer.',pro_tip:'A $50k agency ad is sold on the BRIEF. Spend 2 hours on the brief. 30 minutes on each beat. The brief is the creative work. Everything after is execution.'}},

{n:6,titleEn:'Full Production Pipeline — Editing, Color, Sound, Export',tools:'CapCut, DaVinci Resolve, ElevenLabs, Suno',
learn:[
{type:'visual-tip',tips:[
{icon:'\u{1F3AC}',title:'Edit = 40% of Final Quality',desc:'Great clips + bad edit = mediocre video. Mediocre clips + great edit = surprisingly good video. The edit is where amateur becomes pro.'},
{icon:'\u{1F3A8}',title:'Color Grade Ties Everything',desc:'Apply the SAME LUT across all clips. Warm teal-orange unifies scattered AI generations into one coherent film.'},
{icon:'\u{1F50A}',title:'Sound is 50% of Video',desc:'Bad audio on good video = stop watching. Good audio on mediocre video = keep watching. Invest equal time in sound design.'}
]},
{type:'prompt-anatomy',
prompt:"CapCut project: 30s brand film. Timeline: 5 AI clips stacked. Music: Suno instrumental, 30s. Track 1: establishing (5s) → introduction (5s) → action (6s) → close-up (4s) → resolution (10s). Apply 'Cinematic Warm' LUT across all. Add ambient SFX layer. Beat sync cuts to music downbeats. Auto Captions on dialog. Export 1080p H.264, 25fps.",
segments:[
{text:"CapCut project: 30s brand film",cat:'context',explain:'\u{1F3AC} <strong>PROJECT DEFINITION</strong> \u2014 Name and purpose up front. 30-second format is the social sweet spot. Brand film = more cinematic than ad, more intentional than vlog.'},
{text:"Timeline: 5 AI clips stacked",cat:'technical',explain:'\u{1F4CA} <strong>CLIP ORGANIZATION</strong> \u2014 Always put clips on one master track in order. Adjustments (LUT, captions) go on tracks above. Music goes below. This hierarchy keeps edits clean.'},
{text:"establishing (5s) → introduction (5s) → action (6s) → close-up (4s) → resolution (10s)",cat:'context',explain:'\u23F1\uFE0F <strong>DURATION PACING</strong> \u2014 Not all beats get equal time. Resolution often deserves more breathing room. Closing on a long shot (10s) lets emotion land.'},
{text:"Apply 'Cinematic Warm' LUT across all",cat:'style',explain:'\u{1F3A8} <strong>GRADE UNIFICATION</strong> \u2014 The single most powerful edit move. One LUT across every clip = instant cohesion. Without it, AI-generated clips feel scattered.'},
{text:"Add ambient SFX layer",cat:'style',explain:'\u{1F50A} <strong>SOUND DESIGN LAYERS</strong> \u2014 Music is only half. Add: footsteps, wind, cafe chatter, ambient room tone. Free: Epidemic Sound, Freesound.org, CapCut sound library.'},
{text:"Beat sync cuts to music downbeats",cat:'technical',explain:'\u{1F941} <strong>BEAT SYNC</strong> \u2014 Cut ON the downbeat, not between. CapCut auto-detects beats. Manual tuning takes 10 minutes and separates pros from amateurs.'},
{text:"Export 1080p H.264, 25fps",cat:'technical',explain:'\u{1F4BE} <strong>EXPORT SETTINGS</strong> \u2014 1080p minimum (4K drains phones on playback). H.264 for universal compatibility. 25fps = European standard, 30fps = US social, 24fps = cinematic.'}
]},
{type:'key-points',points:[
'The edit = 40% of final quality. Invest the time',
'One LUT across all clips = instant cohesion',
'Audio is 50% of video — bad audio kills good footage',
'Beat-sync cuts to music downbeats, not between beats',
'Captions are not optional — 85% of social is watched muted',
'CapCut free tier: beat sync, auto captions, AI color, 1080p export, LUTs — enough for pro work',
'Export 1080p H.264 for social, 4K H.265 for archival, never ProRes for social',
'Always export a vertical 9:16 version for Reels/TikTok alongside horizontal 16:9'
]},
{type:'cheat-sheet',icon:'\u{1F3A8}',title:'LUT Options by Mood',items:[
{name:'Cinematic Warm',desc:'Teal shadows + warm highlights. Hollywood default.'},
{name:'Kodak Portra Film',desc:'Lifted blacks, warm skin, slight pink. Editorial.'},
{name:'Bleach Bypass',desc:'Desaturated, contrasty. Documentary, industrial.'},
{name:'Golden Hour',desc:'Warm push across everything. Nostalgic, hopeful.'},
{name:'Cool Blue Night',desc:'Cyan-blue shadows. Noir, thriller, mystery.'},
{name:'Faded Matte',desc:'Lifted blacks, desaturated. Arthouse, indie.'}
]},
{type:'cheat-sheet',icon:'\u{1F3AD}',title:'Sound Design Layers',items:[
{name:'Music',desc:'Suno-generated, briefed to match tone. Track 2.'},
{name:'Ambient / room tone',desc:'Background texture — wind, room, cafe, street. Track 3.'},
{name:'Foley',desc:'Specific sounds — footsteps, pours, cloth rustles. Track 4.'},
{name:'Voice (if present)',desc:'ElevenLabs narration or dialog. Track 1 (priority).'},
{name:'Whoosh / transitions',desc:'Between cuts for energy. Use sparingly. Track 5.'}
]},
{type:'cheat-sheet',icon:'\u{1F4BE}',title:'Export Settings by Platform',items:[
{name:'Instagram Reels',desc:'1080×1920, H.264, 30fps, max 90s'},
{name:'TikTok',desc:'1080×1920, H.264, 30fps, max 3min'},
{name:'YouTube Shorts',desc:'1080×1920, H.264, 30fps, max 60s'},
{name:'LinkedIn',desc:'1920×1080 or 1080×1080, H.264, 30fps'},
{name:'Archival master',desc:'3840×2160 (4K), H.265, 25fps'}
]}
],
gallery:[
{prompt:'CapCut timeline assembly: 5 AI clips, Suno music, Cinematic Warm LUT applied, beat-synced cuts, captions bottom center',tool:'CapCut',gradient:'linear-gradient(135deg,#1a0a0a,#4d2a2a 50%,#c45a5a)',descResult:'Full project view. Five scattered AI clips unified by one LUT. Beat-sync cuts hit downbeats. Captions lifted watch time 40%.'},
{prompt:'Before/after color grade: raw AI clip (flat, mixed temps) vs after Cinematic Warm LUT (teal shadows, warm skin, unified)',tool:'CapCut Color',gradient:'linear-gradient(135deg,#1a1a1a,#3d3020 50%,#c4956a)',descResult:'The LUT transforms 5 different AI generations into one visual language. Skin tones warm, shadows teal, cohesion immediate.'},
{prompt:'Audio stack: Suno music base + wind ambient + footstep foley + single transition whoosh between shots 2 and 3',tool:'CapCut Audio',gradient:'linear-gradient(135deg,#0a1a2e,#2a3d60 50%,#60a0c4)',descResult:'4-layer sound design. Music carries emotion. Wind grounds location. Footsteps add realism. One whoosh adds energy at the act break.'},
{prompt:'Export: vertical 9:16 for Reels AND horizontal 16:9 for LinkedIn, both 1080p H.264, captions baked in',tool:'CapCut Export',gradient:'linear-gradient(135deg,#1a1a0a,#4d4520 50%,#c4a830)',descResult:'Two exports from one project. Platform-native aspect ratios. Captions baked in (not optional track) so they always appear.'}
],
recipe:[
{step:1,title:'Build the timeline in pacing order',desc:'Drag all 5 clips in intended order. Drag Suno music underneath. Watch once end-to-end. Feel the pacing.',tip:'<strong>First pass rule:</strong> Don\'t cut yet. Just watch. Note where it drags or rushes.'},
{step:2,title:'Apply one LUT across all clips',desc:'CapCut → Filters → Cinematic. Apply same filter to every clip. Adjust intensity to 70-80% if overpowering.',tip:'<strong>The unification rule:</strong> Same LUT on every clip, even if some don\'t need it. Consistency > per-clip perfection.'},
{step:3,title:'Beat-sync the cuts',desc:'Enable Auto Beat Sync on the music track. Move cuts to land on downbeats. Tight cuts on fast music, loose cuts on slow music.',tip:'<strong>Manual tuning beats auto:</strong> Auto gets 80%. Your ear catches the other 20%. Spend 10 minutes tuning.'},
{step:4,title:'Layer ambient + foley sound',desc:'Add 1 ambient layer (wind, room tone, street). Add 1-2 specific foley sounds (footstep, pour, rustle). Mix music to -12dB, effects to -18dB.',tip:'<strong>Audio mix rule:</strong> If you can hear everything clearly, it\'s balanced. If music dominates, pull it back 3dB.'},
{step:5,title:'Export two versions',desc:'Export 1: vertical 9:16 for Reels/TikTok with captions baked in. Export 2: horizontal 16:9 for LinkedIn/YouTube. Both 1080p H.264.',tip:'<strong>Archive rule:</strong> Save your CapCut project file. Future you will want to re-export or remix. Don\'t trust the cloud.'}
],
quiz:[
{q:'The single most powerful editing move to unify AI-generated clips?',opts:['Transitions','One LUT applied across all clips','Text overlays','Fade to black'],correct:1,explain:'One LUT across every clip forces visual cohesion. Without it, 5 AI-generated clips feel like 5 unrelated generations. With it, they feel like one film.'},
{q:'Why bake captions into the export rather than using a caption track?',opts:['Smaller file','Ensures captions appear on EVERY platform even if the platform strips caption tracks','Faster export','Legal requirement'],correct:1,explain:'Caption tracks get stripped by some platforms or hidden by default. Baked-in captions are pixels — they always appear. Accessibility AND watch time both win.'}
],hw:{brief:'Take your 5-shot story from Session 4 OR your 30-second ad from Session 5. Edit it to finished-portfolio quality. Color graded, beat synced, sound designed, captioned, exported for both vertical and horizontal platforms.',deliverables:['Final video, vertical 9:16 (1080×1920), 1080p H.264, captions baked in','Final video, horizontal 16:9 (1920×1080), 1080p H.264','Your CapCut project file saved and archived','A short breakdown: which LUT, BPM, ambient layers, and why'],steps:['Pick: Session 4 5-shot story OR Session 5 30-second ad — whichever you want in your portfolio','Open CapCut. Create new project. Import all clips in order','Drag Suno music underneath. Watch once end-to-end','Apply one LUT across ALL clips (Cinematic Warm is a safe default). Adjust intensity if needed','Enable Auto Beat Sync. Manually tune cuts to land on downbeats — spend 10 minutes','Add 1 ambient layer + 1-2 foley sounds. Mix music at -12dB, effects at -18dB','Add Auto Captions. Review every word. Position bottom center, large readable font','Export 9:16 version with captions baked in — 1080×1920, H.264, 1080p','Export 16:9 version — 1920×1080, H.264, 1080p','Save and archive the CapCut project file'],checklist:['One LUT applied consistently across ALL clips (no per-clip drift)','Cuts land on music downbeats (at least 80% of cuts)','Audio has at least 3 layers (music + ambient + foley)','Captions are readable on mobile at arms length','Final vertical export is exactly 9:16 ratio','Final horizontal export is exactly 16:9 ratio','Both exports are 1080p minimum','CapCut project file saved somewhere you can find in 6 months'],creative_challenge:'BONUS: Post the vertical version to your Instagram Reels (public or close friends). Note the watch-time graph after 24 hours. Where do viewers drop? Fix those cuts in a v2.',pro_tip:'Your CapCut project file is your master. Re-export to any size, any platform, any aspect ratio. The moment you have a finished master, you can feed every channel without re-editing.'}}
]},

{id:4,title:'Brand & Visual Identity',titleEn:'Brand & Visual Identity',subtitle:'Strategy, identity systems & client-ready deliverables',persona:'Designers & Founders',avatar:'\u{1F3AF}',outcomes:['Build complete brand strategy using AI','Create logo & visual identity systems','Design client-ready brand packages','Deliver professional client work end-to-end'],skills:['Brand Strategy','Logo Design','Canva AI','Midjourney','Client Work'],icon:'\u{1F3AF}',color:'#4DB8A0',sessions:[
{n:1,titleEn:'Brand Strategy with AI',tools:'ChatGPT, Perplexity, Notion AI',
learn:[
{type:'visual-tip',tips:[{icon:'\u{1F9ED}',title:'Strategy Before Design',desc:'Brief → Research → Positioning → Visual Direction. AI compresses weeks into hours.'},{icon:'\u{1F4AA}',title:'Foundation = Better Prompts',desc:'Every prompt you write after strategy work will be dramatically stronger.'}]},
{type:'method-compare',methods:[
{icon:'\u{1F914}',name:'Traditional Agency',desc:'3\u20136 weeks, discovery workshops, presentations. Thorough but expensive.',when:'Large budgets, complex organizations'},
{icon:'\u26A1',name:'AI-Assisted Strategy',desc:'Same frameworks in hours: ChatGPT for positioning, Perplexity for competitive research.',when:'Startups, small businesses, freelancers'},
{icon:'\u{1F4A1}',name:'Hybrid Approach',desc:'AI drafts, human refines. Strategic thinking stays human; research and copy go AI.',when:'Best practice for client work'}
]},
{type:'key-points',points:['Start every brand project with a ChatGPT strategy session \u2014 before any visuals','Ask for: brand archetype, visual personality, 3 hex color directions with reasoning','Brand voice = 3 adjectives + 3 anti-adjectives (what you are NOT)','Perplexity for competitor landscape in 5 minutes','Strategy doc = foundation for every prompt you write next']}
],gallery:[
{prompt:'You are a senior brand strategist. My client: artisan coffee brand in Yerevan, targeting young professionals 25\u201335 who value quality and origin. Create complete brand strategy: archetype, visual personality (5 adjectives), anti-adjectives (3), color palette (3 hex codes + psychological reasoning), typography mood, 5 key messages.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#1a0a00,#3d2010 50%,#6b3a1f)',descResult:'Complete strategic foundation in 2 minutes. Archetype: The Creator. Colors: espresso #2C1810, warm amber #C4956A, cream #F5EFE6. Every visual decision now has strategic justification before a single pixel is designed.'},
{prompt:'Research top 5 premium coffee brands globally. Analyze: visual language, photography style, brand voice, color systems. Where is the white space for a new Armenian premium coffee brand to differentiate?',tool:'Perplexity',gradient:'linear-gradient(135deg,#0a1a14,#1a3d2e 50%,#2d6b4f)',descResult:'Gap identified: premium origin story + Armenian cultural identity is unexplored territory. Competitive map in 5 minutes. Clear differentiation direction before design begins.'}
],recipe:[
{step:1,title:'Brand brief prompt',desc:'"You are a senior brand strategist. My brand: [describe]. Audience: [describe]. Competitors: [3 names]. Create: archetype, visual personality (5 adjectives), anti-adjectives (3 \u2014 what we are NOT), color direction (3 hex + why), typography mood."',tip:'<strong>Save the output as your master Brand Strategy Doc in Notion.</strong> Every future prompt references it.'},
{step:2,title:'Competitive research',desc:'Perplexity: "Top 5 competitors for [brand type] in [market]. Analyze visual language, positioning. Where is the white space?"',tip:'<strong>Ask for gaps, not just descriptions.</strong> Differentiation is the whole point.'},
{step:3,title:'Voice & messaging',desc:'"Based on this brand strategy [paste], write: tagline, 3-word voice, 5 key messages, 30-second elevator pitch."',tip:'<strong>Test:</strong> Read it aloud. If it sounds human, it works. If it sounds like a brochure, iterate.'}
],quiz:[
{q:'What should you create before any logo or visual design?',opts:['Color palette','Brand strategy: archetype, voice, positioning','Logo sketches','Social media templates'],correct:1,explain:'Visuals express strategy \u2014 they can\'t exist meaningfully without it. Strategy is the brief that makes every visual decision defensible.'},
{q:'What are "anti-adjectives" in brand development?',opts:['Negative reviews','Competitor descriptions','What your brand is explicitly NOT \u2014 defines the boundaries of voice','Old words to retire'],correct:2,explain:'"Bold but NOT aggressive. Warm but NOT casual." Boundaries prevent drift and keep the brand consistent across all touchpoints and creators.'}
],hw:{brief:'Create a 1-page brand strategy for a real or fictional Armenian business. AI is your strategist — you make the decisions.',deliverables:['A 1-page brand strategy (audience, positioning, values, voice)','3 brand voice example sentences','A 2-3 competitor comparison'],steps:['Pick a business (yours or fictional)','Use ChatGPT: "You are a brand strategist. Help me define positioning for [business]"','Define: target audience, unique value, 3 brand values','Write 3 sentences in your brand voice on the same topic','Research 2-3 competitors and write how your brand differs'],checklist:['Target audience is specific (not "everyone")','Positioning is clear: "We are the [X] for [audience]"','Brand voice is consistent across 3 examples','Competitive analysis shows real differences'],pro_tip:'The best brand strategy fits on one page. If you can\'t explain it simply, it\'s not clear enough.'}},

{n:2,titleEn:'Logo & Visual Identity',tools:'Midjourney, Canva AI, Adobe Firefly',
learn:[
{type:'visual-tip',tips:[{icon:'\u{1F58C}',title:'100 Concepts in 1 Hour',desc:'What took design teams days. AI generates at scale — your job is to curate and refine.'},{icon:'\u{1F4AC}',title:'Speak Design Language',desc:'Not "logo" — say "minimal geometric mark", "lettermark in negative space", "icon + wordmark lockup."'}]},
{type:'prompt-anatomy',
prompt:'Minimal logo design for premium brand, geometric symbol transformed into letter A, negative space technique, flat vector style, warm amber on black, no gradients, scalable mark, professional brand identity',
segments:[
{text:'Minimal logo design',cat:'mood',explain:'\u{1F3AF} <strong>INTENT SIGNAL</strong> \u2014 "Logo design" shifts AI into identity mode. "Minimal" prevents over-decorated results that can\'t be reproduced.'},
{text:'geometric symbol transformed into letter A',cat:'subject',explain:'\u{1F4CC} <strong>CONCEPT</strong> \u2014 Describe the concept, not just the outcome. "Transformed into" signals dual-reading \u2014 the hallmark of clever logo design.'},
{text:'negative space technique',cat:'style',explain:'\u26AB <strong>TECHNIQUE FLAG</strong> \u2014 Negative space logos (FedEx arrow) signal premium design. Naming the technique guides AI toward sophisticated results.'},
{text:'flat vector style, warm amber on black',cat:'technical',explain:'\u{1F3A8} <strong>REPRODUCTION SPECS</strong> \u2014 "Flat vector" = scalable, printable. Test every logo on both dark and light backgrounds.'},
{text:'no gradients, scalable mark, professional brand identity',cat:'format',explain:'\u{1F527} <strong>CONSTRAINTS</strong> \u2014 "No gradients" prevents unprintable logos. Real applications (embroidery, stamps, engraving) require flat art.'}
]},
{type:'key-points',points:['Specify type: lettermark, wordmark, icon, combination mark','Vector terms: flat, geometric, scalable, crisp edges (never "realistic" for logos)','Test every concept: favicon size, dark bg, light bg, grayscale','Negative space and dual meaning = premium design signal','Refine Midjourney concepts in Canva for final applications']}
],gallery:[
{prompt:'Minimal logomark, pomegranate seeds arranged to form letter E, geometric, flat vector, deep burgundy on cream, scalable mark, contemporary brand identity',tool:'Midjourney',imageUrl:'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',gradient:'linear-gradient(135deg,#1a0010,#3d0025 50%,#8B1A4A)',descResult:'Cultural symbol + letter integration. Pomegranate seeds create negative-space E. Heritage meets contemporary. Scales from billboard to favicon without quality loss.'},
{prompt:'Minimal wordmark, ARARAT in modern geometric sans-serif, mountain peak integrated into first A, electric blue on white, clean, contemporary Armenian brand identity',tool:'Midjourney',gradient:'linear-gradient(135deg,#000a1a,#001a3d 50%,#0040a0)',descResult:'Mountain integrated into letterform. Cultural reference is subtle and professional \u2014 not folkloric. Modern tech-adjacent aesthetic with clear national identity.'}
],recipe:[
{step:1,title:'Concept generation',desc:'"Minimal logo for [brand], [concept description], [type: lettermark/icon/combination], flat vector, [colors], no gradients, scalable."',tip:'<strong>Generate 20+.</strong> First 5 are generic. Concepts 10-20 get interesting.'},
{step:2,title:'Refine in Canva',desc:'Upload best concept to Canva, adjust colors, test on backgrounds, clean up edges with Magic Edit.',tip:'<strong>Test matrix:</strong> Dark bg, light bg, 24px size, print-size, grayscale.'},
{step:3,title:'Build brand kit',desc:'In Canva: set primary + secondary colors, upload logo variations, set typography. All templates auto-apply.',tip:'<strong>Deliverables:</strong> Primary logo, reversed version, icon-only, horizontal lockup.'}
],quiz:[
{q:'Why should logos avoid gradients?',opts:['They look dated','Can\'t reproduce in single-color: embroidery, stamps, screen printing require flat art','AI can\'t make them well','Too expensive'],correct:1,explain:'Real-world applications require single-color reproduction: rubber stamps, embroidery, engraving, laser cutting. Gradient logos break in all of these. Flat = universally reproducible.'},
{q:'What does "negative space" mean in logo design?',opts:['Using dark backgrounds','The empty/white space is part of the design \u2014 creates a hidden image or dual meaning','Removing detail','Smaller logo'],correct:1,explain:'Negative space logos use empty areas as active design elements (FedEx arrow). Signals craft, intelligence, and sophistication. Commands premium client perception.'}
],hw:{brief:'Generate 5 logo concepts for your brand, then create 3 real-world applications (business card, social profile, signage).',deliverables:['5 different logo concepts (real variations, not copies)','Your final chosen logo','3 applications: business card, social profile, signage'],steps:['Write a logo brief using design language: "minimal geometric mark", "lettermark", etc.','Generate 5 different concepts in Midjourney or Flux','Pick the strongest direction','Generate mockups: business card, Instagram profile, storefront sign','All applications should use consistent colors'],checklist:['Logo works at small sizes (not too detailed)','5 concepts are genuinely different directions','Applications look professional and realistic','Brand colors are consistent across all mockups'],pro_tip:'Test your logo at 32x32 pixels. If it\'s unrecognizable that small, it\'s too complex.'}},

{n:3,titleEn:'Brand Visual Package',tools:'Nano Banana Pro, Flux, Google Flow',
learn:[
{type:'visual-tip',tips:[
{icon:'\u{1F4E6}',title:'The Brand Visual Package',desc:'6\u201312 images of the same character or product, across different angles, poses, lighting and scenes. This is what brands sell, agencies charge for, and clients keep forever.'},
{icon:'\u{1F504}',title:'Angle \u00d7 Pose \u00d7 Lighting \u00d7 Scene',desc:'Four independent variables. Change ONE at a time. Keep character bible locked. This is how you build an infinite content library from one prompt template.'},
{icon:'\u{1F512}',title:'Reference Image = Consistency Lock',desc:'Generate one perfect front-facing reference first. Use it as img2img base for every other shot. Consistency jumps from ~60% to 90%+.'}
]},
{type:'prompt-anatomy',
prompt:"[Character Bible: young Armenian entrepreneur, sharp cheekbones, dark almond eyes, shoulder-length wavy black hair, gold hoop earrings, strong jawline, confident expression] | Shot angle: 3/4 view, looking slightly off-camera | Pose: seated at marble desk, both hands around coffee cup, relaxed | Lighting: soft morning window light, warm golden tones, gentle shadows | Scene: minimalist open-plan office, floor-to-ceiling windows, blurred bokeh background | Style: editorial lifestyle photography, Nano Banana Pro quality | Same character as reference portrait",
segments:[
{text:"[Character Bible: young Armenian entrepreneur, sharp cheekbones, dark almond eyes, shoulder-length wavy black hair, gold hoop earrings, strong jawline, confident expression]",cat:'subject',explain:'\u{1F512} <strong>CHARACTER BIBLE \u2014 LOCKED</strong> \u2014 This entire block is copy-pasted identically into every single prompt. Never rewrite it. Even one word change can shift the face. Gold hoop earrings and sharp cheekbones are your strongest consistency anchors.'},
{text:"Shot angle: 3/4 view, looking slightly off-camera",cat:'technical',explain:'\u{1F4D0} <strong>ANGLE VARIABLE</strong> \u2014 The only angle-related instruction in the prompt. Change this to rotate through your pack: "front-facing, direct eye contact" / "side profile, facing right" / "from below, looking up" / "overhead 45\u00b0". One change = new shot.'},
{text:"Pose: seated at marble desk, both hands around coffee cup, relaxed",cat:'context',explain:'\u{1F9B4} <strong>POSE VARIABLE</strong> \u2014 Body position + specific props + energy/mood. "Seated" vs "standing" vs "mid-stride walking" completely changes the scene. Specific props (coffee cup) add authenticity and brand storytelling.'},
{text:"Lighting: soft morning window light, warm golden tones, gentle shadows",cat:'lighting',explain:'\u{1F4A1} <strong>LIGHTING VARIABLE</strong> \u2014 Independent from angle and pose. Swap this alone to completely transform the mood: "dramatic Rembrandt side lighting" / "golden hour backlight, rim glow" / "cool blue night light, street lamp" / "clean flat studio light, white backdrop".'},
{text:"Scene: minimalist open-plan office, floor-to-ceiling windows, blurred bokeh background",cat:'context',explain:'\u{1F3D7} <strong>SCENE VARIABLE</strong> \u2014 The environment. Each scene positions your character in a different story: office (professional), caf\u00e9 (creative), outdoors (lifestyle), studio (brand), street (authentic). Backgrounds always blurred so character remains hero.'},
{text:"Style: editorial lifestyle photography, Nano Banana Pro quality",cat:'style',explain:'\u{1F4F8} <strong>QUALITY + TOOL ANCHOR</strong> \u2014 "Editorial lifestyle" sets the visual language. Always close with your quality reference. This stays identical across all shots in the package \u2014 it\u2019s the visual DNA of the brand.'},
{text:"Same character as reference portrait",cat:'subject',explain:'\u{1F504} <strong>CONSISTENCY DECLARATION</strong> \u2014 Explicit instruction to AI. When uploading a reference image, this reinforces what to preserve. The more img2img tools you use, the more this phrase matters.'}
]},
{type:'key-points',points:[
'Character Bible = copy-paste block, never rewrite \u2014 one word change breaks the face',
'Change ONE variable at a time: angle OR pose OR lighting OR scene',
'Front-facing neutral studio shot first \u2014 this becomes your reference for img2img shots',
'Signature accessories (earrings, watch, glasses) are stronger anchors than face descriptions',
'Blurred background in every shot \u2014 keeps character as hero, not the scene',
'6 shots minimum for a usable brand pack; 12 shots = professional client deliverable'
]},
{type:'cheat-sheet',icon:'\u{1F4D0}',title:'6 Essential Angles for a Character Pack',items:[
{name:'Front-facing',desc:'Direct eye contact, symmetrical \u2014 reference shot, trust builder'},
{name:'3/4 view',desc:'Most flattering angle \u2014 slightly off-camera, confident'},
{name:'Side profile',desc:'Clean architectural lines \u2014 use for dramatic lighting shots'},
{name:'Over-the-shoulder',desc:'Reading, working, exploring \u2014 creates intrigue'},
{name:'Low angle (looking up)',desc:'Power, authority, heroic \u2014 speaker/leader shots'},
{name:'Candid side glance',desc:'Laughing, thinking, caught off-guard \u2014 humanizing, authentic'}
]},
{type:'cheat-sheet',icon:'\u{1F4A1}',title:'6 Lighting Setups for Brand Storytelling',items:[
{name:'Soft window morning',desc:'Warm, approachable, daily life \u2014 lifestyle and personal brand'},
{name:'Golden hour backlight',desc:'Aspirational, warm rim glow \u2014 hero shots, covers'},
{name:'Clean flat studio',desc:'Professional, e-commerce ready, neutral \u2014 product and headshots'},
{name:'Dramatic Rembrandt',desc:'Authority, depth, premium \u2014 speaker, thought leader'},
{name:'Cool blue night',desc:'Mysterious, urban, modern \u2014 nightlife, innovation, tech'},
{name:'Dappled natural',desc:'Trees, caf\u00e9 curtains, organic \u2014 creative, artist, freelancer'}
]},
{type:'callout',icon:'\u{1F3AF}',label:'Brand Visual Formula',content:'Reference shot (front, studio) \u2192 Angle variations (3) \u2192 Lighting variations (3) \u2192 Scene variations (3) \u2192 Action/lifestyle shots (3) = <strong>12-shot brand pack</strong>. This is what creative agencies deliver for \u041510,000+.'},
{type:'visual-tip',tips:[
{icon:'\u{1F4E6}',title:'Product Placement Formula',desc:'Same person + same pose, different product in hand + different environment. The most valuable commercial AI skill \u2014 swap products without a new photo shoot.'},
{icon:'\u{1F512}',title:'LOCK before you CHANGE',desc:'Write your LOCK list first. Everything that must survive goes in there. Then and only then \u2014 write what changes. This order prevents AI from guessing.'},
{icon:'\u2757',title:'DO NOT is as important as DO',desc:'Explicit prohibitions are more powerful than positive instructions. "DO NOT change hands" is clearer to AI than "keep hands same." Add a DO NOT block to every product swap prompt.'}
]},
{type:'prompt-anatomy',
prompt:"Use the provided image as a STRICT reference. Keep the SAME person and SAME pose. | LOCK: same face and identity \u2014 same body position \u2014 same arm angles \u2014 same hand and finger positions \u2014 same grip (object must fit exactly like the original) \u2014 same camera angle and framing, vertical chest-up \u2014 same proportions | DO NOT: change pose \u2014 change hands or fingers \u2014 distort body \u2014 change camera distance | CHANGE: environment \u2014 product in hand | Product rule: replace original object exactly \u2014 match hand grip perfectly \u2014 match lighting and perspective | STYLE: ultra realistic, high detail, cinematic lighting | ENVIRONMENT: luxury modern interior, warm lighting, beige and gold tones, premium aesthetic, soft background blur | PRODUCT: luxury lipstick, properly visible, minimal design, open tip visible",
segments:[
{text:"Use the provided image as a STRICT reference. Keep the SAME person and SAME pose.",cat:'mood',explain:'\u{1F6A8} <strong>REFERENCE DECLARATION</strong> \u2014 The most critical line. "STRICT reference" tells AI this is not inspiration \u2014 this is a command. "SAME person and SAME pose" sets the absolute constraint.'},
{text:"LOCK: same face and identity \u2014 same body position \u2014 same arm angles \u2014 same hand and finger positions \u2014 same grip (object must fit exactly like the original) \u2014 same camera angle and framing, vertical chest-up \u2014 same proportions",cat:'subject',explain:'\u{1F512} <strong>LOCK LIST</strong> \u2014 Everything listed here is frozen. The more specific the items, the better: "same hand and finger positions" is far more powerful than "same hands."'},
{text:"DO NOT: change pose \u2014 change hands or fingers \u2014 distort body \u2014 change camera distance",cat:'mood',explain:'\u2757 <strong>DO NOT LIST</strong> \u2014 Explicit prohibitions are the most powerful control in AI prompting. "DO NOT change hands" directly blocks the #1 problem in product swaps.'},
{text:"CHANGE: environment \u2014 product in hand",cat:'context',explain:'\u{1F504} <strong>CHANGE LIST</strong> \u2014 Short and specific. Only two things change: the scene and the object.'},
{text:"Product rule: replace original object exactly \u2014 match hand grip perfectly \u2014 match lighting and perspective",cat:'technical',explain:'\u{1F4CF} <strong>PRODUCT FIT RULE</strong> \u2014 "Match hand grip perfectly" means the product shape must conform to the existing finger positions.'},
{text:"STYLE: ultra realistic, high detail, cinematic lighting",cat:'style',explain:'\u2728 <strong>QUALITY ANCHORS</strong> \u2014 Three-word quality declaration. Always place STYLE after your constraint blocks.'},
{text:"ENVIRONMENT: luxury modern interior, warm lighting, beige and gold tones, premium aesthetic, soft background blur",cat:'lighting',explain:'\u{1F3D7} <strong>ENVIRONMENT BLOCK</strong> \u2014 Labeled as "ENVIRONMENT:" so AI treats this as the background world, not a modification to the character.'},
{text:"PRODUCT: luxury lipstick, properly visible, minimal design, open tip visible",cat:'subject',explain:'\u{1F484} <strong>PRODUCT BLOCK</strong> \u2014 "Properly visible" prevents the product being obscured by fingers or angle.'}
]},
{type:'key-points',points:[
'LOCK list + DO NOT list = same constraint stated two ways \u2014 doubles AI compliance',
'Product must conform to existing grip \u2014 not the other way around',
'"Properly visible" + "open tip visible" = explicit product visibility instructions',
'Product swap works best when original and new product have similar grip shapes (cup \u2192 bottle \u2192 can)',
'Always test: does the product look like it belongs in that exact hand, or does it look pasted?'
]},
{type:'cheat-sheet',icon:'\u{1F4E6}',title:'Product Swap Combinations That Work',items:[
{name:'Cup \u2192 Wine glass / bottle',desc:'Similar cylindrical grip \u2014 highest success rate'},
{name:'Cup \u2192 Perfume bottle',desc:'Match size and palm grip \u2014 specify "same palm grip"'},
{name:'Cup \u2192 Lipstick / cosmetic',desc:'Smaller product \u2014 add "prominent, properly visible"'},
{name:'Phone \u2192 Product / book',desc:'Flat-hold swap \u2014 specify "same flat-palm hold"'},
{name:'Nothing (open hand) \u2192 Any product',desc:'Easiest swap \u2014 open hand has no existing grip to match'},
{name:'Bag / accessory swap',desc:'Body-adjacent object \u2014 specify exact position on body'}
]},
{type:'callout',icon:'\u{1F4A1}',label:'Two-Reference Pro Technique',content:'Upload <strong>two images</strong> to Nano Banana Pro: Image 1 = face reference (who). Image 2 = pose reference (how they hold the product). Tell AI: "Use Image 1 for the person\u2019s face and identity. Use Image 2 for the pose and hand position." This is how professionals get 95%+ accuracy.'}
],
gallery:[
{prompt:'[Character Bible: Armenian entrepreneur, sharp cheekbones, dark eyes, wavy black hair, gold hoops] | Shot: front-facing, direct eye contact | Pose: standing, arms crossed, confident | Lighting: clean flat studio light, white seamless | Style: professional headshot, editorial quality',tool:'Nano Banana Pro',gradient:'linear-gradient(135deg,#1a1a2e,#16213e 50%,#0f3460)',descResult:'Reference shot \u2014 clean, professional, trust-building. Front-facing flat light with zero distraction. This is the anchor for the entire 12-shot pack.'},
{prompt:'[Same character bible] | Shot: 3/4 view, slight smirk, off-camera gaze | Pose: seated at caf\u00e9 table, espresso in hand, leaning forward | Lighting: morning window light, warm golden streak | Scene: Yerevan caf\u00e9, blurred vintage interior, bokeh',tool:'Nano Banana Pro',gradient:'linear-gradient(135deg,#2d1b00,#7d4010 50%,#e8a030)',descResult:'Same face, completely different mood. The morning light warmth + caf\u00e9 scene positions her as creative and approachable.'},
{prompt:'[Same character bible] | Shot: low angle looking up, powerful | Pose: walking toward camera, mid-stride, blazer flowing | Lighting: golden hour backlight, strong rim glow, slight lens flare | Scene: Yerevan street, blurred city',tool:'Flux',gradient:'linear-gradient(135deg,#1a0a00,#8B4510 50%,#f0a030)',descResult:'Power shot \u2014 low angle + backlight + motion = hero energy. Same character, same earrings visible, completely different visual statement.'},
{prompt:'[Same character bible] | Shot: over-the-shoulder, looking at laptop screen | Pose: working, slightly hunched, absorbed in work | Lighting: cool blue night light from screen, ambient city glow | Scene: dark home office, city lights in background window',tool:'Nano Banana Pro',gradient:'linear-gradient(135deg,#020212,#0a1030 50%,#1a2a5e)',descResult:'Night work shot \u2014 screen light creates dramatic and modern atmosphere. Same face, recognizable earring, completely different mood.'}
],
recipe:[
{step:1,title:'Write and lock your Character Bible',desc:'One paragraph: age range, ethnicity, face shape, eyes, hair (length + texture + color), distinguishing features, signature accessories, default style/clothing. This never changes.',tip:'<strong>Test it:</strong> Give your Bible to someone else. Can they describe the person exactly? If yes \u2014 it\'s specific enough.'},
{step:2,title:'Generate the reference shot',desc:'"Front-facing, direct eye contact, clean flat studio light, white background." This is Shot 1 and the most important.',tip:'<strong>Regenerate until perfect.</strong> The reference shot quality determines your entire pack.'},
{step:3,title:'Generate 3 angle variations',desc:'Keep lighting and scene identical. Change only: 3/4 view, side profile, over-the-shoulder.',tip:'<strong>One variable at a time.</strong> Only angle changes. Everything else stays identical.'},
{step:4,title:'Generate 3 lighting variations',desc:'Keep angle at 3/4. Change lighting: golden hour, dramatic Rembrandt, cool blue night.',tip:'<strong>Each lighting = different brand message:</strong> golden (aspirational), Rembrandt (premium), night (modern).'},
{step:5,title:'Generate 3 scene/lifestyle shots',desc:'Pick 3 brand scenarios: professional (office), lifestyle (caf\u00e9/city), action (working, speaking, creating). Use img2img with your reference shot.',tip:'<strong>Pro workflow:</strong> Reference shot \u2192 Nano Banana img2img \u2192 describe new scene.'},
{step:6,title:'Review and assemble the pack',desc:'Lay all images side by side. Ask: Does it look like the same person? Do the images tell a brand story together?',tip:'<strong>Client-ready check:</strong> Could someone use these for a website, social media, and presentation without needing any real photography?'}
],
quiz:[
{q:'You have a Character Bible and want to change only the lighting mood. What else should stay identical?',opts:['Nothing, rewrite the whole prompt','Character Bible + angle + pose + scene stay the same \u2014 only lighting changes','Just the character description','The scene background'],correct:1,explain:'Changing one variable at a time is the core discipline of brand visual packs. Character Bible + all other variables locked while lighting changes = controlled, predictable results.'},
{q:'Your reference shot is front-facing studio. For maximum face consistency, what\'s the best technique?',opts:['Always use text prompts only','Use the reference shot as img2img input for each new scene','Change the character bible slightly for each scene','Use a different tool for each shot'],correct:1,explain:'Using the reference shot as an img2img source in Nano Banana Pro gives ~85\u201390% face consistency vs ~60% from text alone.'},
{q:'In a product swap prompt, why do you write both a LOCK list AND a DO NOT list?',opts:['It\'s redundant \u2014 pick one','Same constraint stated two ways doubles AI compliance rate','DO NOT overrides LOCK','Only DO NOT matters'],correct:1,explain:'LOCK tells AI what to preserve. DO NOT blocks the specific failure modes. Together they close the gap from both sides.'}
],
hw:{brief:'Build your complete Brand Visual Package \u2014 8 shots total. Start with a character, build the full angle + lighting pack, then use the Product Placement Formula to put a real product in your character\'s hand across 2 different environments.',deliverables:['Written Character Bible (used in all 8 prompts)','Shot 1: Reference \u2014 front-facing, flat studio light','Shots 2\u20133: Two angle variations (3/4 view + your choice)','Shots 4\u20135: Two lighting variations (golden hour + dramatic Rembrandt)','Shot 6: Lifestyle scene \u2014 character in their world, telling a story','Shot 7: Product placement \u2014 character holding a product, luxury environment','Shot 8: Same product placement, completely different environment'],steps:['Write your Character Bible \u2014 specific enough to describe to a stranger','Generate reference shot (Shot 1) \u2014 perfect face, flat studio, white bg','Copy-paste Bible \u2192 change angle to 3/4 for Shot 2','Copy-paste Bible \u2192 side profile, dramatic Rembrandt lighting for Shot 3','Copy-paste Bible \u2192 3/4 view, golden hour backlight, outdoor for Shot 4','Copy-paste Bible \u2192 front-facing, cool blue night light for Shot 5','Use Shot 1 as img2img \u2192 describe a real brand lifestyle scene for Shot 6','Shot 7: Product Placement \u2014 write full LOCK / DO NOT / CHANGE / ENVIRONMENT / PRODUCT prompt','Shot 8: Same product, same LOCK and DO NOT, different ENVIRONMENT only'],checklist:['Character Bible text is identical in all 8 prompts (copy-paste, never rewrite)','Shots 2\u20135 each change ONLY ONE variable','Shot 6 tells a clear brand story','Shot 7 product looks like it belongs in the hand','Shot 7 and Shot 8 use the same LOCK and DO NOT blocks, only ENVIRONMENT changes'],pro_tip:'Save your Character Bible + reference shot + product placement prompt. These are the exact inputs you need to animate this character in Kling AI.'}},

{n:4,titleEn:'Brand & Design Systems',tools:'Midjourney, Canva AI, ChatGPT',
learn:[
{type:'callout',icon:'\u{1F3A8}',label:'AI Brand System',content:'Strategy (ChatGPT) \u2192 Logo concepts (Midjourney) \u2192 Applications (Canva). <strong>Consistency beats creativity.</strong>'},
{type:'key-points',points:['ChatGPT first: brand values, visual personality, color direction','Midjourney for logo concepts: "minimal logo, [name], vector, clean"','Canva AI for templates: social media, presentations, cards','Consistency > creativity: simple consistent system wins','Deliver as Brand Kit: colors, fonts, 5 image examples, logo']}
],gallery:[],recipe:[
{step:1,title:'Brand brief with ChatGPT',desc:'"You are a brand strategist. My brand: [description]. Audience: [describe]. Create brand personality + visual direction: 3 colors (hex), typography mood, style keywords."',tip:'Ask for hex codes and psychological justification for each color.'},
{step:2,title:'Logo in Midjourney',desc:'"Minimal logo for [brand], [style from brief], vector, clean background, multiple variations."',tip:'Add "lettermark" or "wordmark" or "icon + text" to specify type.'}
],quiz:[
{q:'What before generating any brand visuals?',opts:['Generate logos','Choose favorite colors','Define strategy with ChatGPT: values, audience, personality','Start with templates'],correct:2,explain:'Visual design expresses strategy \u2014 not the starting point. Without strategy, visual choices are arbitrary.'}
],hw:{brief:'Create a mini brand identity: logo concept + color palette + 3 branded social media posts that look like they belong together.',deliverables:['1 logo concept (AI-generated)','Color palette (3-5 colors with hex codes)','3 branded social posts that look like one brand'],steps:['Define the brand: name, archetype, personality, target audience','Generate 3 logo concepts in Midjourney \u2014 pick the best','Extract 2 brand colors + 1 accent color','Create 3 Instagram posts using consistent brand style','All 3 posts should look like they\'re from the same brand'],checklist:['Logo is simple enough to work at small sizes','Color palette has contrast (not all similar tones)','All 3 posts share the same visual language','A stranger could tell these are from one brand'],pro_tip:'Consistency > creativity. A mediocre style used consistently looks more professional than brilliant one-offs.'}},

{n:5,titleEn:'Client Deliverable Package',tools:'ChatGPT, Gamma, Canva AI',
learn:[
{type:'callout',icon:'\u{1F48E}',label:'Deliverable = Your Product',content:'Agency-level brand guides, proposals, presentations \u2014 in hours. <strong>Deliverable quality sets perceived value.</strong>'},
{type:'key-points',points:['Brand guide minimum: logo usage, colors (hex/RGB/CMYK), typography, dos/don\'ts, usage examples','Proposal structure: problem, approach, deliverables, timeline, investment, about','Gamma creates professional presentations from text in 2 minutes','3-tier pricing always outperforms single price: middle tier becomes default','Cover page sets price expectation before a single page is read']}
],gallery:[
{prompt:'Create professional brand guide for artisan coffee brand. Include: brand story, logo specs, color palette (hex codes), typography hierarchy, photography style, tone of voice, dos and don\'ts. Professional minimal design.',tool:'Gamma',gradient:'linear-gradient(135deg,#1a0a00,#3d2010 50%,#8B4513)',descResult:'14-slide brand guide. Logo specs, color swatches with codes, typography specimens, photography reference, dos/don\'ts. Looks like agency work. Built in 8 minutes. Sent to client with professional PDF export.'},
{prompt:'Write project proposal for social media brand identity package. Services: strategy, logo, 30-day calendar, 3 templates. Include: scope, deliverables, process, timeline, and 3-tier pricing (Basic/Standard/Premium).',tool:'ChatGPT',imageUrl:'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',gradient:'linear-gradient(135deg,#0a1a0a,#1a3d1a 50%,#4DB8A0)',descResult:'Complete proposal. Scope defined clearly. Process builds confidence. Premium tier at 3\u00d7 basic, justified by deliverables. Professional tone throughout. Ready to send.'}
],recipe:[
{step:1,title:'Brand guide in Gamma',desc:'"Create brand guide for [name]. Sections: brand overview, logo specs, color palette (hex: [list]), typography, photography style, tone of voice, dos and don\'ts."',tip:'<strong>Gamma tip:</strong> Switch to "Professional" or "Minimal" theme for client-ready design.'},
{step:2,title:'Proposal with 3 tiers',desc:'"Write project proposal for [service] for [client type]. Include: executive summary, problem, approach, deliverables, timeline, 3-tier investment (basic/standard/premium)."',tip:'<strong>3-tier pricing:</strong> Middle option anchors both extremes. 60-70% of clients choose it.'},
{step:3,title:'Polish in Canva',desc:'Export Gamma slides, import to Canva, apply brand colors, add logo. Professional cover + consistent design throughout.',tip:'<strong>Cover page first.</strong> It sets price expectation before content is read.'}
],quiz:[
{q:'Why offer 3 pricing tiers instead of one price?',opts:['More options always better','Middle option anchors both extremes \u2014 60-70% choose it, raising average sale','Required for proposals','Shows flexibility'],correct:1,explain:'Single option = take it or leave it. Three tiers = comparison within your offering. Middle tier is designed to be chosen: it makes expensive seem too much and cheap seem incomplete.'},
{q:'Minimum components of a professional brand guide?',opts:['Just logo files','Logo usage, colors (hex), typography, dos/don\'ts, usage examples','Color palette only','Mission statement'],correct:1,explain:'A brand guide is a usage manual. Logo without usage rules = inconsistent application. Colors without hex codes = drift. The guide protects the brand and justifies premium pricing.'}
],hw:{brief:'Create a professional brand guide (3-5 pages) that you could present to a real client. Include strategy, visuals, and content samples.',deliverables:['A 3-5 page brand guide document','Includes: strategy, logo, colors, content examples','Professional formatting \u2014 client-ready quality'],steps:['Compile: brand strategy (S1), logo (S2), content (S3)','Add: color palette with hex codes, font recommendations','Include 3-5 example social media posts','Format in Canva, Google Slides, or a document','Add a cover page with your name and brand name'],checklist:['Document looks professional (not a rough draft)','All sections are consistent with each other','Someone who didn\'t attend class could understand the brand','You\'d feel confident showing this to a real client'],pro_tip:'Export as PDF. If it looks good printed, it\'s ready.'}}
]},

{id:5,title:'Content & Production',titleEn:'Content & Production',subtitle:'Full AI content pipeline from ads to portfolio',persona:'Content Producers',avatar:'\u26A1',outcomes:['Produce professional AI video ads','Create complete music videos','Build a systematic content calendar','Launch your AI production portfolio'],skills:['AI Ads','Suno','Music Video','Content Systems','Portfolio'],icon:'\u26A1',color:'#5AAD6A',sessions:[
{n:1,titleEn:'AI Ads & Product Videos',tools:'Kling, Google Flow, CapCut, Suno',
learn:[
{type:'visual-tip',tips:[{icon:'\u{1F4DD}',title:'Script \u2192 Storyboard \u2192 Visuals \u2192 Edit',desc:'ChatGPT writes, you storyboard, AI generates, CapCut assembles. Full commercial pipeline.'},{icon:'\u{1F4B0}',title:'Fraction of the Cost',desc:'What costs agencies $5-20K, you produce for tool subscriptions. Same quality, different economics.'}]},
{type:'key-points',points:['Every ad: hook (0-3s), problem/solution, hero shot, CTA','ChatGPT for script FIRST \u2014 then generate visuals from it','Storyboard as text before generating anything','Music (Suno) should match brand energy','Workflow: ChatGPT script \u2192 Images \u2192 Kling animation \u2192 CapCut assembly']}
],gallery:[],recipe:[
{step:1,title:'Script with ChatGPT',desc:'"You are an ad copywriter. 30-second script for [brand] targeting [audience]. Format: [0-3s hook], [3-15s demo], [15-25s lifestyle], [25-30s CTA]."',tip:'130 words \u2248 30 seconds at normal pace.'},
{step:2,title:'Storyboard each shot',desc:'For each script section, write one image prompt. 4-8 prompts = visual storyboard.',tip:'Number shots. Keep same visual language across all.'}
],quiz:[
{q:'Correct production order for AI commercial?',opts:['Images \u2192 Script \u2192 Music','Script \u2192 Storyboard \u2192 Images \u2192 Video \u2192 Edit','Everything simultaneously','Music \u2192 Images \u2192 Script'],correct:1,explain:'Script first = professional workflow. Every visual decision should serve the narrative.'}
],hw:{brief:'Produce a 30-second commercial for a real or fictional Armenian brand. Full pipeline: script \u2192 visuals \u2192 edit.',deliverables:['A written ad script (hook \u2192 problem \u2192 solution \u2192 CTA)','The final edited video (30 seconds)','Music and text overlay included'],steps:['Pick a real product (your own, a local brand, or invent one)','Write the script: Hook (0-3s) \u2192 Problem (3-7s) \u2192 Solution (7-15s) \u2192 CTA (15-20s)','Generate product images in Google Flow','Create video clips from images using Kling AI','Edit in CapCut: add music, captions, transitions'],checklist:['Script has a hook in the first 3 seconds','Each shot serves a purpose','Music matches the brand mood','Brand name appears at least once','Video tells a story: problem \u2192 solution \u2192 CTA'],pro_tip:'Watch 3 real commercials before you start. They ALL follow: problem \u2192 solution \u2192 emotion \u2192 brand.'}},
{n:2,titleEn:'Music & Audio Production',tools:'Suno, ElevenLabs, Kling AI, CapCut',
learn:[
{type:'callout',icon:'\u{1F3B6}',label:'Music Video Pipeline',content:'Suno (music) \u2192 Kling (visuals) \u2192 CapCut (assembly). <strong>Music-first workflow is essential.</strong>'},
{type:'key-points',points:['Suno: describe genre + mood + instrumentation + BPM + "instrumental"','Match visual aesthetic to music genre','Storyboard TO the music \u2014 plan shots for key moments','Color grade AFTER assembly','Armenian folk + AI cinematics = unique global content position']}
],gallery:[],recipe:[
{step:1,title:'Music first (Suno)',desc:'Describe: "[genre], [mood], [instruments], [BPM], instrumental, no vocals, [duration]s." Generate 3-4, choose best.',tip:'Free tier: 10 generations/day.'},
{step:2,title:'Storyboard to music',desc:'Listen, write timestamps: "0-5s: establishing, 5-10s: close up, chorus at 15s: wide reveal."',tip:'Chorus = most energy = most impactful visual.'}
],quiz:[
{q:'AI music video creation order?',opts:['Visuals first','Both simultaneously','Music \u2192 Listen \u2192 Storyboard \u2192 Generate visuals \u2192 Edit','Edit first'],correct:2,explain:'Music is structural backbone. Without knowing rhythm and energy, visuals won\'t match. Music-first = cohesion.'}
],hw:{brief:'Create a 60-second music video: pick music first (Suno AI), then generate 4-6 visuals that match the mood, and edit into a synced sequence.',deliverables:['A music track (from Suno AI or royalty-free)','4-6 AI-generated visuals matching the music mood','A 60-second edited video synced to the music'],steps:['Generate or pick a music track \u2014 mood first, visuals second','Listen and identify 4-6 mood moments in the track','Generate images/videos for each moment','Edit in CapCut \u2014 sync transitions to beat drops','Add minimal text or effects'],checklist:['Visuals match the music mood','Cuts happen on beats, not randomly','Color palette is consistent throughout','Video feels cohesive, not like a random slideshow'],pro_tip:'Music videos are music-FIRST. Choose the track, then create visuals that serve the music.'}},
{n:3,titleEn:'Content Calendar System',tools:'ChatGPT, Canva AI, Google Flow',
learn:[
{type:'callout',icon:'\u{1F4C5}',label:'System > Random',content:'3 content pillars + weekly template + 1 AI batch session per week = <strong>consistent voice, zero creative blocks</strong>.'},
{type:'method-compare',methods:[
{icon:'\u{1F937}',name:'Random Posting',desc:'Post when inspired. Inconsistent quality, irregular frequency. Growth stalls.',when:'Never \u2014 even small creators need a system'},
{icon:'\u{1F4C5}',name:'Calendar System',desc:'3 pillars, weekly template, batched creation. Consistent growth.',when:'Anyone building audience or client presence'},
{icon:'\u{1F916}',name:'AI Batch Creation',desc:'Weekly 2-hour session: ChatGPT for 7 captions, Google Flow for images, schedule in advance.',when:'Serious creators and business accounts'}
]},
{type:'key-points',points:['3 pillars: Education (40%), Behind-Scenes (30%), Proof/Results (30%)','Weekly template: Mon edu, Wed BTS, Fri transformation','Batch create 7 posts in one 2-hour weekly session','ChatGPT caption formula: Hook + Value + CTA','Every post: visual + caption + hashtags + CTA \u2014 all AI-generated']}
],gallery:[
{prompt:'Create 30-day content calendar for AI education brand targeting Armenian professionals. 3 pillars: education, behind-scenes, transformation. For each post: hook line, 3-sentence caption, 5 hashtags, visual description for image generation.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#0a1a0a,#1a3d1a 50%,#2d6b2d)',descResult:'30-post calendar with full specs. Pillar distribution maintained. Every caption structured with hook. Image prompts ready for Google Flow. From blank to full month in 15 minutes.'},
{prompt:'Educational Instagram carousel: "5 AI Tools Every Business Owner Needs." Slide 1: bold title. Slides 2\u20136: each tool + one-line benefit. Slide 7: CTA. Minimal dark design, gold accents, consistent system.',tool:'Canva AI',gradient:'linear-gradient(135deg,#0a0a1a,#1a1a3d 50%,#2d2d6b)',descResult:'7-slide carousel ready to post. Clean hierarchy, consistent design, mobile-optimized. Builds authority and saves hours of manual design.'}
],recipe:[
{step:1,title:'Define 3 content pillars',desc:'"For [brand/creator type], define 3 content pillars with ratios. For each: topic range, post types, audience value, posting frequency."',tip:'<strong>Classic ratios:</strong> Education 40%, Behind-Scenes 30%, Proof 30%.'},
{step:2,title:'Generate monthly calendar',desc:'"30-day content calendar for [brand]. Each post: pillar, hook line, caption, 5 hashtags, visual description. Format as table."',tip:'<strong>Import to Notion</strong> as a table. Add columns: created, designed, scheduled, published.'},
{step:3,title:'Weekly batch session',desc:'Take 7 calendar entries. Generate all captions in one ChatGPT session. Create all images in Google Flow. Assemble in Canva. Schedule in Buffer.',tip:'<strong>2 hours weekly</strong> replaces daily scrambling. Consistency is the output.'}
],quiz:[
{q:'Recommended content pillar ratio for educational brands?',opts:['50/25/25','100% education','Education 40%, Behind-Scenes 30%, Proof 30%','Equal thirds'],correct:2,explain:'Education builds reach and trust. Behind-scenes builds loyalty. Proof drives conversion. The 40/30/30 ratio balances all three growth drivers sustainably.'},
{q:'Why batch create content weekly instead of daily?',opts:['Algorithm preference','Saves time via focus, eliminates daily decision fatigue, maintains consistent quality','Required by scheduling tools','Better engagement'],correct:1,explain:'Context-switching is the enemy of creativity. Batching builds momentum and voice consistency. Daily scrambling creates irregular quality. One focused session beats seven anxious ones.'}
],hw:{brief:'Create a 1-week content calendar with 7 posts: each with an AI-generated image and caption. All must feel like one brand.',deliverables:['A 7-day content calendar (which post on which day)','7 images with consistent brand style','7 captions with consistent brand voice'],steps:['Define 3 content pillars (Education, Behind-Scenes, Results)','Assign each day a pillar','Use ChatGPT to write captions in your brand voice','Generate matching images with consistent visual style','Review: do all 7 posts look like one brand?'],checklist:['3 content pillars are clearly defined','Posts rotate between pillars','Visual style is consistent (same tones, similar composition)','Captions sound like the same person wrote them','Each post has a clear purpose'],pro_tip:'Batch create: write all 7 captions in one session, generate all 7 images in one style session. Consistency comes from batching.'}},
{n:4,titleEn:'Final Project \u2014 Portfolio',tools:'Full AI Stack',
learn:[
{type:'callout',icon:'\u{1F4BC}',label:'Your Portfolio',content:'<strong>5 best pieces + process documentation.</strong> Show HOW you work, not just what you made. Opens doors CVs can\'t.'},
{type:'key-points',points:['Portfolio = 5 best pieces with process notes','Include: 1 portrait, 1 product, 1 video, 1 brand, 1 creative','Process note: tools, key prompts, what worked, what you\'d change','Host on Notion, Behance, or Google Drive','Your portfolio is proof \u2014 it opens doors']}
],gallery:[],recipe:[
{step:1,title:'Curate 5 best pieces',desc:'Quality over quantity. Include variety: image, video, product, portrait, creative.',tip:'Selection: Does it surprise? Show a skill? Tell a story?'},
{step:2,title:'Write process notes',desc:'For each: brief, tools, key prompt, learnings. This transforms images into evidence of professional thinking.',tip:'Process notes separate a portfolio from a photo gallery.'},
{step:3,title:'Publish and share',desc:'Notion page or Behance. Share with 5 people. Ask for feedback. Iterate.',tip:'Best portfolio: one you\'re slightly embarrassed to share \u2014 that means it\'s real.'}
],quiz:[
{q:'What makes a portfolio piece stronger than a good image?',opts:['Higher resolution','More effects','Process documentation: brief, tools, prompt, learning','More pieces'],correct:2,explain:'Portfolio = evidence of thinking, not just taste. Process documentation transforms images into proof of professional capability.'}
],hw:{brief:'Build your AI portfolio: curate your 5 best projects, write descriptions, and present them as a professional showcase.',deliverables:['5 best works from the course','A description for each: what it is + techniques used','A portfolio layout (Google Doc, Notion, or simple website)'],steps:['Review ALL your work from past sessions','Pick your 5 strongest pieces','For each: write what it is, tools used, techniques applied','Arrange in a clean layout','Add your name and contact info'],checklist:['5 pieces, not more (curation is a skill)','Descriptions mention specific techniques','Work is diverse (not 5 of the same thing)','Someone outside class would understand what you do'],pro_tip:'Arrange from simplest to most complex \u2014 show your growth journey.'}}
]},

{id:6,title:'AI Business',titleEn:'AI Business & Monetization',subtitle:'Turn AI skills into income streams',persona:'Entrepreneurs',avatar:'\u{1F4BC}',outcomes:['Package & price your AI services','Get your first paying clients','Build systems that scale without you'],skills:['Service Design','Pricing','Client Acquisition','SOPs'],icon:'\u{1F4B0}',color:'#D4A017',sessions:[
{n:1,titleEn:'Your AI Services Menu',tools:'ChatGPT, Notion AI',
learn:[
{type:'visual-tip',tips:[{icon:'\u{1F4B5}',title:'Your Skills = Immediate Value',desc:'Businesses will pay for AI skills they don\'t have. You have what they need.'},{icon:'\u{1F3AF}',title:'Pick One Service',desc:'Define it precisely, price it clearly, find your first client. Niche beats generalist.'}]},
{type:'method-compare',methods:[
{icon:'\u{1F4F8}',name:'Content Creation',desc:'Social media packages: 12\u201330 posts/month with images and captions.',when:'Easiest entry \u2014 every business needs content'},
{icon:'\u{1F3A8}',name:'Brand Design',desc:'Logo, brand guide, social templates. One-time project with clear deliverable.',when:'Higher value, repeatable process'},
{icon:'\u{1F3A5}',name:'Video Production',desc:'Short-form video ads, social reels, product demos.',when:'Premium pricing, rapidly growing demand'},
{icon:'\u{1F916}',name:'AI Consulting',desc:'Teach businesses to use AI: workshops, audits, implementation.',when:'High trust required, scales well'}
]},
{type:'key-points',points:['Pick ONE service first \u2014 depth beats breadth for first clients','Package deliverables clearly: ambiguity kills deals','Social proof from 1 real client beats 100 portfolio samples','Value pricing: charge % of value you deliver, not hours worked','Fastest first client: warm network, offer 1 discounted project']}
],gallery:[
{prompt:'I offer AI-powered social media content creation for local businesses. Write a clear service menu: service name, 1-line description, deliverables list, turnaround time, and 3-tier pricing (Starter/Growth/Scale). Be specific and professional.',tool:'ChatGPT',imageUrl:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',gradient:'linear-gradient(135deg,#1a1000,#3d2c00 50%,#7a5500)',descResult:'Professional service menu. Starter: 12 posts/month. Growth: 20 posts + 4 videos + strategy call (MOST POPULAR). Scale: 30 posts + 8 videos + ad copy + priority. Clear deliverables, 5-day turnaround. Ready for Notion.'},
{prompt:'What are the 5 most in-demand AI services for small businesses? For each: what they need, required skill, market rate range, and how to deliver efficiently with AI tools.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#0a1a0a,#1a3d1a 50%,#D4A017)',descResult:'Market map: Social media ($300-800/mo), brand packages ($500-1500), video ads ($400-1200), AI workshops ($200-500/day), automation setup ($800-2000 one-time). Opportunity map with local market context.'}
],recipe:[
{step:1,title:'Choose your first service',desc:'What can you do well? What do local businesses visibly lack? Match these and start there.',tip:'<strong>Best entry service:</strong> Social media content. Every business needs it, most don\'t do it well.'},
{step:2,title:'Define deliverables exactly',desc:'"12 posts (image + caption + hashtags), 1 strategy doc, 1 monthly call." Vague = no sale.',tip:'<strong>Rule:</strong> If you can\'t list deliverables in bullet points, it\'s not ready to sell.'},
{step:3,title:'Build your offer page',desc:'Notion page: service name, who it\'s for, what\'s included, cost, how to start. Share as "What I Do" link.',tip:'<strong>No website needed.</strong> A professional Notion page takes 20 minutes.'}
],quiz:[
{q:'Best strategy for getting your first AI services client?',opts:['Run paid ads','Cold email 1000 businesses','Warm network \u2014 offer one project to someone who already trusts you','Build a website first'],correct:2,explain:'Trust is the main barrier for new service providers. Your network already trusts you. One real project creates social proof that sells to everyone else. Warm network first, always.'},
{q:'How should you price AI services?',opts:['Hourly at minimum wage','As cheap as possible to win','Value-based: charge % of the value you deliver to the client','Copy a competitor exactly'],correct:2,explain:'AI lets you deliver high value fast. Hour-based pricing penalizes your efficiency. Value pricing: "This package drives X result worth $Y \u2014 our fee is 10-20% of that value."'}
],hw:{brief:'Define your AI freelance service: what you offer, who you serve, at what price. Create a 1-page service description.',deliverables:['A 1-page service description','3 portfolio pieces proving you can deliver','A list of 5 real potential clients'],steps:['Choose ONE service: AI images, brand kits, social media, video','Define your ideal client (industry, size, budget)','Write a clear description: what they get, how long, what price','Pick 3 portfolio pieces that demonstrate this service','List 5 real businesses who might need this'],checklist:['Service is specific (not "I do everything")','Price is based on client value, not hours','Portfolio pieces match the service you sell','Target clients are real businesses you could contact'],pro_tip:'Start narrow: "AI product photos for Yerevan restaurants" beats "AI services for everyone."'}},

{n:2,titleEn:'Pricing & Packaging',tools:'ChatGPT',
learn:[
{type:'callout',icon:'\u{1F4B0}',label:'Stop Underpricing',content:'Most creatives underprice by <strong>50-70%</strong>. AI delivers more value per project. Charge what your work is worth.'},
{type:'key-points',points:['Anchor pricing: show expensive option first, middle becomes "reasonable"','Package pricing beats hourly: predictable for client, scalable for you','Scope creep response: "That\'s not included \u2014 I can add it for [price]"','Annual contract: offer 15-20% discount for commitment','Raise prices when 80%+ booked: demand exceeds supply \u2014 basic economics']}
],gallery:[
{prompt:'Build a professional 3-tier pricing structure for AI social media services. For each tier: attractive name, exact deliverables, price, psychological positioning. Make the middle tier the most attractive choice.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#1a1000,#3d2c00 50%,#a07800)',descResult:'Three tiers: Starter ($299/mo, 12 posts), Growth ($549/mo, 20 posts + 4 videos + call, MOST POPULAR), Scale ($899/mo, everything + priority). Middle tier anchored with "Most Popular." Psychological justification included.'},
{prompt:'Write a professional price increase email to existing clients. 30-day notice. Frame it as result of increased demand and upgraded service scope. Tone: appreciative, confident, creates urgency to renew at current rate.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#0a0a1a,#1a1a3d 50%,#D4A017)',descResult:'Professional email. Thanks client, explains scope upgrade, gives 30-day notice, offers to lock current rate for 6 months if they renew now. Relationship-preserving and confident.'}
],recipe:[
{step:1,title:'Calculate your floor price',desc:'What does your work save client in time? What does it generate in revenue? Price = 10-20% of client value.',tip:'<strong>Example:</strong> Social content saves 15 hrs/month \u00d7 $30/hr value = $450 floor. Charge $299-449/month.'},
{step:2,title:'3-tier structure',desc:'Starter: entry-level, accessible. Growth (MAIN): complete solution, 60% should choose. Scale: all-in, 2-3\u00d7 growth price.',tip:'<strong>Label middle tier "Most Popular."</strong> It becomes a self-fulfilling prophecy.'},
{step:3,title:'Write scope agreement',desc:'"1-page scope agreement for [service]. Deliverables, timeline, revisions policy (2 rounds), what\'s NOT included, payment terms."',tip:'<strong>Scope document protects both sides</strong> and signals professionalism before work starts.'}
],quiz:[
{q:'What makes the middle pricing tier the most chosen?',opts:['It is cheapest','Anchoring: high price makes middle reasonable; low makes middle complete','It has most features','Random'],correct:1,explain:'Anchoring: Scale tier makes Growth seem reasonable. Starter makes Growth seem complete. It\'s not manipulation \u2014 it helps clients make confident decisions.'},
{q:'When should you raise your prices?',opts:['Never','When you feel ready','When 80%+ booked or turning away work','Every year automatically'],correct:2,explain:'When demand exceeds capacity, price should rise. Being fully booked while undercharging = maximum hours for below-market income. Raise price, serve fewer clients better.'}
],hw:{brief:'Create a 3-tier pricing sheet (Basic/Standard/Premium) and a 1-page scope agreement that protects you.',deliverables:['A pricing sheet with 3 tiers','For each: what\'s included, price, delivery time','A 1-page scope agreement'],steps:['Research competitor pricing','Define 3 tiers with clear differences','Write what\'s included and NOT included in each','Create a 1-page scope agreement: deliverables, timeline, revisions','Share pricing with 1 real person — get honest feedback'],checklist:['3 tiers have clear differences','Prices are based on client value','Each tier names exactly what client gets','A potential client could choose without calling you'],pro_tip:'Make your middle tier the obvious best choice. Basic too limited, Premium aspirational — most pick Standard.'}},

{n:3,titleEn:'Client Acquisition',tools:'ChatGPT, Canva AI',
learn:[
{type:'callout',icon:'\u{1F4E7}',label:'Clients = System, Not Luck',content:'Identify targets → personalized outreach → systematic follow-up → convert to contracts. <strong>AI automates each step.</strong>'},
{type:'key-points',points:['Warm intro beats cold email by 5\u00d7 in conversion','LinkedIn formula: observe, comment, connect, message (4 steps before any pitch)','Personalized outreach: AI makes personalization scalable','One real case study beats 10 portfolio samples','Ask every client for a referral at project end \u2014 most forget to ask']}
],gallery:[
{prompt:'Write a LinkedIn connection request for a local restaurant owner. I am an AI content creator. Reference: I noticed their Instagram hasn\'t been updated in 2 months. Under 300 characters. Warm, specific, NO pitch.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#000a1a,#001a3d 50%,#0040a0)',descResult:'"[Name], your food photos are stunning \u2014 your last lavash post had incredible engagement. I work with Yerevan restaurants on AI-powered content and would love to connect." Message, not pitch. 60% acceptance rate.'},
{prompt:'I just completed a social media project for a bakery. Write a wrap-up email: summarize results, thank the client, ask for testimonial (include form link), ask for 1 referral. Professional, warm, under 200 words.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#0a1a0a,#1a3d1a 50%,#4DB8A0)',descResult:'Wrap-up email with results summary, gratitude, testimonial ask with form link, referral ask framed naturally. Clients love the structured close. 40% testimonial response rate.'}
],recipe:[
{step:1,title:'Build target list',desc:'Identify 20 local businesses with weak social media: irregular posting, low engagement, outdated design. Instagram + Google Maps = 30-minute research.',tip:'<strong>Best targets:</strong> Restaurants, salons, boutiques, fitness studios. Visual businesses with obvious content gaps.'},
{step:2,title:'Personalized outreach sequence',desc:'"Write 3-step outreach for [business type]: connection request (150 chars), first message (value, no pitch), follow-up after 5 days."',tip:'<strong>Formula:</strong> Specific observation + relevant insight + soft ask to connect. Never pitch in first message.'},
{step:3,title:'Discovery call framework',desc:'"Create discovery call questions for AI content services: business goals, current struggles, budget signals, decision process, timeline. How to present solution and close."',tip:'<strong>Best close:</strong> "Based on what you shared, I have an idea \u2014 can I send a brief proposal by Friday?"'}
],quiz:[
{q:'What converts best for initial client acquisition?',opts:['Cold email to 1000 businesses','Paid social ads','Personalized outreach to warm network and specific targets','Posting portfolio publicly'],correct:2,explain:'Trust and specificity drive conversion. Generic cold outreach gets <2% response. Targeted warm outreach gets 20-40%. One real connection beats 1000 mass emails every time.'},
{q:'When should you ask for a referral?',opts:['Before starting','During a difficult moment','At project end, when client is happiest','Never \u2014 feels awkward'],correct:2,explain:'Best time: peak of satisfaction. When client just praised results, they\'re happy to connect you with someone similar. "Do you know one other business that could use this?" is the simplest ask.'}
],hw:{brief:'Write 3 personalized outreach messages to real businesses. Research them first, then craft messages they\'d actually respond to.',deliverables:['3 personalized outreach messages','Research notes for each business','At least 1 message actually sent this week'],steps:['Pick 3 real businesses from your target list','Research each: website, Instagram, gaps in their content','Draft personalized outreach referencing something specific about THEIR business','Use ChatGPT to refine (helpful tone, not salesy)','Actually send at least 1 message this week'],checklist:['Each message mentions something specific about their business','You offer value first, not just "hire me"','Messages are 3-5 sentences max','At least 1 message was actually sent'],pro_tip:'Lead with a specific observation: "I noticed your Instagram photos don\'t match your brand quality. I can fix that in 2 days."'}},

{n:4,titleEn:'Scale & Systems',tools:'ChatGPT, Notion AI',
learn:[
{type:'callout',icon:'\u{1F680}',label:'Scale Beyond Yourself',content:'Productized services + onboarding workflows + SOPs = <strong>more clients without proportionally more hours</strong>.'},
{type:'key-points',points:['Productized service: same scope, same process, same price \u2014 scales without custom proposals','Client onboarding: welcome email, project questionnaire, timeline, access checklist','SOP for every repeated task: if you do it twice, document it; third time someone else can','Automate: invoices (Wave/Stripe), scheduling (Calendly), follow-up sequences','Goal: 80% of work executable by a future team member following your SOP']}
],gallery:[
{prompt:'Create complete client onboarding packet for AI social media service. Include: welcome email (warm, sets expectations), project questionnaire (10 questions), project timeline template, access checklist from client.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#1a1000,#3d2c00 50%,#D4A017)',descResult:'Complete onboarding system. Welcome email with clear next steps. 10-question brief covering brand voice, audience, goals, approval process. Timeline template. Professional system that impresses on day 1.'},
{prompt:'Write Standard Operating Procedure for creating a social media post with AI tools. For a future team member. Include: tools, step-by-step process (brief to scheduled post), quality checklist, common mistakes to avoid.',tool:'ChatGPT',gradient:'linear-gradient(135deg,#0a1a0a,#1a3d1a 50%,#a0d4a0)',descResult:'SOP: read brief (5min), ChatGPT caption (10min), Google Flow image (15min), Canva design (10min), quality check, schedule. Any team member can execute. Brief to published: 45 minutes.'}
],recipe:[
{step:1,title:'Document your process',desc:'"Write complete SOP for [service] \u2014 step by step from brief to delivery. Format for a team member doing this for the first time."',tip:'<strong>SOP rule:</strong> If you do something twice, document it. Third time, someone else should be able to do it.'},
{step:2,title:'Client onboarding system',desc:'Notion template: new client checklist, project questionnaire, timeline, access needs, communication expectations.',tip:'<strong>First impression:</strong> Professional onboarding increases perceived value before a single deliverable.'},
{step:3,title:'90-day business plan',desc:'"Create 90-day plan for AI services. Starting: [your state]. Goals: [targets]. Monthly milestones, weekly key actions, metrics to track."',tip:'<strong>Track:</strong> Active clients, monthly revenue, average project value, referrals generated.'}
],quiz:[
{q:'What is a "productized service"?',opts:['Software product','Physical product photography','Standardized service: same scope, process, price \u2014 delivered without custom proposals each time','Automated AI product'],correct:2,explain:'Productized service removes proposal friction. Same package, same price, same delivery process. Scales without proportional time increase. Example: "Social Media Package \u2014 $499/month, 20 posts."'},
{q:'When should you create a Standard Operating Procedure?',opts:['Only for complex tasks','When you hire employees','When you do something twice \u2014 by the third time it should be documented','After building a full team'],correct:2,explain:'SOPs capture knowledge while it\'s fresh. Every repeated process documented = every hour saved multiplied across every future iteration. Start documenting early.'}
],hw:{brief:'Create your complete freelance launch package: portfolio, pricing, outreach template, and 30-day action plan to get your first client.',deliverables:['A polished portfolio (5 best works)','Your pricing sheet (3 tiers)','An outreach template you can customize','A 30-day plan with weekly actions'],steps:['Compile portfolio from all courses (best 5 pieces)','Finalize pricing sheet from Session 2','Create a reusable outreach template from Session 3','Write a 30-day plan: Week 1 (setup), Week 2 (outreach), Week 3 (follow-up), Week 4 (close)','Review: would YOU hire this person?'],checklist:['Portfolio shows range AND quality','Pricing is clear and professional','Outreach template is easy to personalize','30-day plan has specific actions per week','The package makes you look professional, not a student'],pro_tip:'This homework IS your real freelance launch. Don\'t treat it as an exercise — it\'s the start of your business.'}}
]}
];


/* Track decorator — back-fills track metadata on any course that
   doesn't declare it, so the existing 6 courses keep working without
   editing their object bodies. New courses should set track + trackLabel
   + published explicitly. */
(function(){
  if(!Array.isArray(window.PORTAL_CONTENT))return;
  var DEFAULTS={
    1:{track:'core',trackLabel:'CORE'},
    2:{track:'core',trackLabel:'CORE'},
    3:{track:'core',trackLabel:'TRACK'},
    4:{track:'core',trackLabel:'TRACK'},
    5:{track:'core',trackLabel:'TRACK'},
    6:{track:'core',trackLabel:'BUSINESS'}
  };
  window.PORTAL_CONTENT.forEach(function(c){
    var d=DEFAULTS[c.id]||{track:'core',trackLabel:'CORE'};
    if(c.track===undefined)c.track=d.track;
    if(c.trackLabel===undefined)c.trackLabel=d.trackLabel;
    if(c.published===undefined)c.published=true;
  });
})();

/* Tracks registry — for future Learn tab track filter. */
window.PORTAL_TRACKS = [
  {id:'core',      label:'Core',      color:'#e07a3a', description:'The six core AI courses.'},
  {id:'educators', label:'Educators', color:'#c49a6e', description:'AI for teaching, curriculum, and classroom workflows.'},
  {id:'research',  label:'Research',  color:'#7a8f6e', description:'AI for literature review, analysis, and academic writing.'}
];
