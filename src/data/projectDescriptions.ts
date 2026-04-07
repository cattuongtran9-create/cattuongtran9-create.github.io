export interface ProjectDescription {
  summary: string;
  role: string;
  results: string;
}

export const projectDescriptions: Record<string, ProjectDescription> = {
  "Digital Marketing": {
    summary:
      "SHIRTALK was a digital marketing and e-commerce project for a T-shirt brand inspired by Vietnamese pop culture and self-expression. The project involved developing the brand concept, designing the website and mobile app wireframe, launching social media campaigns across Facebook, Instagram, TikTok, Threads, and email, and continuously optimizing products and communication activities based on customer feedback and performance data.",
    role:
      "Led monthly and weekly content planning for SHIRTALK's TikTok and Instagram; researched customer insights to build content pillars for social channels; and contributed to website development and customer journey improvement.",
    results:
      "The project generated 35 orders, sold 40 items, and achieved over 6,000,000 VND in revenue within one month. It also reached 79,000+ views, 1,800+ interactions, 307 followers across platforms, and attracted 628 website visitors.",
  },
  "Social Media Analytics project": {
    summary:
      "This project analyzed audience sentiment toward Running Man Vietnam Season 3 – Episode 5, with a focus on identifying why discussions declined after the episode aired. The team examined comment sentiment, topic distribution, and audience reactions to uncover the main source of negativity, then proposed strategic recommendations to improve brand integration in entertainment content.",
    role:
      "Analyzed positive audience sentiment to identify key engagement drivers and pain points, then used those insights to propose solutions that could help TPBank transform disruptive advertising into more natural, context-based brand integration.",
    results:
      "The project found that 70% of negative comments were related to Advertising & Branding, which also had the lowest average sentiment score (-0.92). Overall audience sentiment was slightly negative, with a net sentiment score of -3.83% and an average sentiment score of -0.07. Based on these findings, the team proposed three creative integration directions: The Context Blender, Be the Game Not the Game Breaker, and Branded Skit.",
  },
  "Social Media Viral project": {
    summary:
      "This project explored how different content strategies perform on Threads through three experimental accounts with distinct content directions: educational facts, relatable opinions, and music/show commentary. The team developed content blueprints, tested posting frequency and engagement tactics, analyzed performance across accounts, and drew practical lessons on what drives reach, interaction, and follower growth on the platform.",
    role:
      "Contributed to content experimentation, performance analysis, and insight development for the Threads accounts (@thatthachatfact, @imaginaryfish09 and @maybatlungtung analysis). Analyzed which content formats, tones, and engagement triggers worked best, and translated those findings into practical recommendations on content consistency, emotional resonance, audience interaction, and brand-safe community building.",
    results:
      "The project found clear differences in performance across the three accounts. @maybaylungtung._ achieved 332,100 reach, 14,100 likes, 924 comments, and 1,190 shares, with several viral posts and an engagement rate of 8–12%. Meanwhile, @thatthachatfact underperformed with only 1,977 total views and an engagement rate of around 2–3%, showing that informative content alone was not enough without emotional or conversational triggers.",
  },
  "Branding Management project": {
    summary:
      "This project was a branding and integrated marketing communications proposal for Heineken 0.0 in Vietnam. The team analyzed market trends, consumer behavior, competitors, customer misconceptions, and consumption barriers, then developed a strategic campaign to educate target consumers about non-alcoholic beer and expand drinking occasions for the brand. The final proposal included audience segmentation, brand positioning, campaign concept, IMC plan, timeline, budget, and KPI forecasts.",
    role:
      "Contributed to competitors and company research, insight analysis, and strategic planning (strategic approach, creative idea, and execution plan for phase 1-2). Translated research findings into target audience understanding, communication ideas, and campaign recommendations, and supported the development of the IMC plan and brand activation direction.",
    results:
      "This was a strategic academic project, so the results were presented as forecasted outcomes rather than live campaign performance. The proposed plan targeted 11,000,000 cans/bottles sold, 219,998,000,000 VND in forecast revenue, and 20,000,000 target customers reached. The plan also set KPIs including 5,000,000 reach for social media ads and 2,200,000 product sales from promotion activities.",
  },
  "Business Analytics project": {
    summary:
      "This project analyzed sales, product, and customer performance for the TADAA! e-commerce (imaginary platform) platform through a business dashboard and strategic recommendations. The team examined GMV, profit, cost, category performance, customer segmentation, ROI, and payment behavior to identify the most scalable product categories and the most valuable customer segments, then proposed growth strategies for the next quarter.",
    role:
      "Focused on analyzing the \"Rookies\" customer segment by examining their spending behavior, category preferences, payment habits, and growth barriers. Based on these insights, helped identify suitable product categories and contributed to the development of the Pay Later strategy as a growth solution to increase AOV and category GMV among this segment.",
    results:
      "From January to March 2025, the platform recorded 660.19K GMV, 20.99K total profit, 3% profit margin, and 23.84K total cost. Based on the analysis, the team identified Fashion and Health & Beauty as more sustainable categories than Electronics, and proposed growth targets such as ≥15% AOV increase, ≥20% GMV growth through Pay Later, and ≥65% conversion of the Supernova segment into premium subscribers by Month 6.",
  },
  "Marketing Business (client: LG AI)": {
    summary:
      "This project developed a marketing communication proposal for LG AI, positioning it not just as a smart home technology tool but as an emotionally intelligent companion that helps Vietnamese parents express their quiet, unspoken love. The team analyzed the smart appliance market, consumer behavior, family dynamics, and brand positioning, then built a long-term communication platform, \"Unspoken Love,\" along with a creative renovation idea inside the LG ThinQ app.",
    role:
      "Contributed to consumer insight development, target audience analysis, and creative ideas. Translated research on Vietnamese family behaviors and emotional barriers into the campaign platform, key message, and the \"Your Own Caring Companion\" app-based creative direction.",
    results:
      "This was a strategic campaign proposal, so the deck focused on intended outcomes rather than live campaign performance. The proposal aimed to raise awareness of LG AI as a thoughtful emotional bridge between parents and children, strengthen LG's warm and empathetic brand positioning, and drive 50% of current users to try creating their own AI companion avatar in the LG ThinQ app.",
  },
  "Service Marketing project": {
    summary:
      "This project proposed a service marketing model for Sofia Nail Salon, designed to redefine the nail salon experience in Vietnam through transparency, digital convenience, and personalized care. The team conducted industry and customer analysis, identified unmet needs around pricing clarity, booking convenience, and after-service support, then built a complete service concept including app features, customer journey, service blueprint, complaint recovery, CRM program, and KPIs.",
    role:
      "Conducted customer interviews and explored the customer journey to understand key needs, pain points, and expectations throughout the nail salon experience. Based on these insights, contributed to building the service blueprint for the salon and provided customer-based input for the prototype and UX/UI development.",
    results:
      "This was a service proposal project, so the results were expressed as proposed service standards and KPI targets rather than real operating outcomes. The plan set goals such as ≥98% booking success rate, ≤2% nail defect rate after 7 days, ≤5 minutes waiting time, ≥20% app-to-booking conversion rate, ≥75% post-service follow-up completion, and ≥5,000 monthly app downloads.",
  },
  "Project Management project": {
    summary:
      "This project created a 5-minute educational video analyzing the case study \"A Day in the Life – 2019\" through the lens of modern project management. The team applied project management theories and tools such as project charter, WBS, Gantt chart, AON network diagram, resource allocation, and risk management to produce a case-based learning video, final report, and presentation.",
    role:
      "Served as the Editor, responsible for editing and assembling footage, adding visual effects and subtitles, and reviewing and refining the final cut. Also assigned responsibility for several technical risk responses related to equipment failure, data loss, software issues, and file format incompatibility during the editing process.",
    results:
      "The project produced a full HD 5-minute video with English subtitles, accompanied by a report and presentation. By 28/03/2025, the project had reached 84% completion, with the interim phase completed at 100% and the final phase at 65% at the time of reporting. The team also established a complete project management system including WBS, Gantt chart, resource usage tracking, and risk response plans.",
  },
  "Creative Proposal (client: Grab)": {
    summary:
      "This project developed a viral clip for Grab Student titled \"Grab Sinh Viên – Sống 'LUN' động\", telling the story of a freshman adjusting to life in Saigon with Grab as a trusted companion. The clip highlighted how GrabBike, GrabFood, and GrabExpress support students through daily moments of independence, convenience, and emotional connection. The team handled concept development, script breakdown, production planning, shooting, editing, and post-production for distribution on TikTok, Facebook, and YouTube.",
    role:
      "Worked as Camera Operator and Editor, participating in the filming process plan and handling the online editing rounds of the final video. Supported visual execution plan on set and contributed to shaping the final clip through post-production editing.",
    results:
      "The project delivered a 30–45 second viral clip targeted at students aged 18–24, especially freshmen in major cities. The final output was designed for distribution across TikTok, Facebook, and YouTube, with a clear emotional storyline and a full production package including script, storyboard, wardrobe planning, budget breakdown, and risk preparation.",
  },
  "Introduction": {
    summary: "Craft a detailed video brief, structure the script and flow, film and edit with CapCut, and elevate the visuals with Kinetic Typography.",
    role: "Handled the full production process from video brief and scripting to filming, editing with CapCut, and applying Kinetic Typography for visual impact.",
    results: "Produced a polished introduction video demonstrating creative storytelling and technical production capabilities.",
  },
  "Video 1": {
    summary: "Participated in scripting and storyboarding for a video production project in the 2024 CMO competition, themed \"Love Yourself.\" The story follows Mai on her journey of self-love, accompanied by The Body Shop's Ginger Shampoo.",
    role: "Contributed to scripting and storyboarding, helping shape the narrative arc and visual direction for the social video.",
    results: "Delivered a social video for the 2024 CMO competition with a clear emotional storyline centered on self-love and brand integration.",
  },
  "Video 2": {
    summary: "A Consumer Behaviour class project, edited using Adobe Premiere Pro, incorporating video effects, sound editing, and color grading for a polished final product.",
    role: "Edited the promotional video using Adobe Premiere Pro, handling video effects, sound editing, and color grading.",
    results: "Produced a polished promotional video demonstrating proficiency in Adobe Premiere Pro and professional post-production techniques.",
  },
  "Video 3": {
    summary: "Executed the whole process of film-making: develop a video brief, script, flow, film, and edit by Adobe Premiere Pro the video about \"Key roles of Project manager\".",
    role: "Led the entire film-making process from video brief and script development to filming and editing with Adobe Premiere Pro.",
    results: "Delivered a complete video about the key roles of a Project Manager, showcasing end-to-end production capabilities.",
  },
  "Video 4": {
    summary: "A viral clip for Grab Student titled \"Grab Sinh Viên – Sống 'LUN' động\", telling the story of a freshman adjusting to life in Saigon with Grab as a trusted companion.",
    role: "Worked as Camera Operator and Editor, participating in the filming process plan and handling the online editing rounds of the final video. Supported the visual execution plan on set and contributed to shaping the final clip through post-production editing.",
    results: "Delivered a viral clip targeted at students aged 18–24 for distribution across TikTok, Facebook, and YouTube, with a clear emotional storyline and full production package.",
  },
};
