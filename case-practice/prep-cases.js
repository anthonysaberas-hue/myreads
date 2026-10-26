/* Interview prep cases (FlashFash and others), in the same data model as cases.js.
   Every fact, exhibit, question and possible answer from the original case is kept, in its
   order and with its information-release rules. Guided sub-steps, interviewer guidance and
   example answers were added; CASE_ADDITIONS marks anything beyond the original. */
window.CASES = [
{
  id:"flashfash", title:"FlashFash", type:"Mergers & acquisitions", diff:"Medium", mins:30,
  plain:"A big US clothing company (FlashFash, $25B revenue, mid-market brands, very fast production) is thinking about buying LaMode, a fast-growing online seller of luxury fashion. The candidate structures the decision, tests whether LaMode's Asia growth plan is realistic, judges the synergies from a data exhibit, brainstorms growth ideas, and makes a recommendation.",
  bottom:"<b>Don't acquire LaMode.</b> Its Asia plan needs <b>~4.2%</b> of the Asia online apparel market (above its 3% at home); synergies are <b>weak</b>: LaMode's customers are far more premium ($413 vs. $78 per purchase), FlashFash already sells more online ($5B+ vs. $2B), and LaMode's $48 transaction cost exceeds FlashFash's $42 margin per purchase. Only real synergy: helping LaMode expand internationally. Next: scan for other targets with a strong presence in Asia.",
  prompt:[
    "Our client is FlashFash, a US multinational apparel company with $25 billion of revenue. The company owns some of the best-known mid-market brands. It sells 70% of its products through its own stores, and 30% through multi-brand retail chains.",
    "FlashFash has a unique business model: instead of committing a large share of production for the next fashion season, it commits a small amount, and uses customer feedback and an efficient production network to replenish stores with new products weekly. New styles take as little as 15 days to go from design to production.",
    "As part of its growth strategy, FlashFash is considering acquiring LaMode, the leading independent online retailer of luxury brands, with 3% of all online apparel sales in North America. LaMode curates products from the best brands into a unique collection of over 30,000 items. It recently launched its own fashion brand, which already accounts for 5% of its revenue.",
    "The CEO of FlashFash has asked us: should they acquire LaMode?"
  ],
  clarify:[
    ["What's the client's objective?","To accelerate the growth of FlashFash, in a way that creates value for its shareholders."],
    ["Is there a price for LaMode?","Not yet. First we need to decide whether it's worth pursuing."],
    ["What does mid-market mean here?","Affordable everyday fashion, between discount and premium."],
    ["How fast does the CEO need an answer?","A first view within a few weeks."],
    ["Is LaMode profitable?","We'll look at its economics shortly."]
  ],
  openListen:["Plays back: $25B mid-market apparel company, fast model, considering an online luxury retailer","Asks for the objective (growth that creates shareholder value)","Notes the contrast: mid-market vs. luxury, stores vs. online"],
  steps:[
    {name:"Framework", time:"3 min",
     say:["How would you structure your approach to the problem?"],
     steer:["Original case: if asked, or if the candidate goes off-track, share that the client's goal is to accelerate the growth of FlashFash in a way that creates value for its shareholders.","This is an interviewer-led case: after the framework, you lead to each question in order."],
     listen:["Value and growth potential of LaMode on its own","Whether FlashFash can use LaMode to boost sales and cut costs (synergies)","Whether FlashFash can execute the deal and integration"],
     check:["Value & growth: growth of the online apparel market","Value & growth: LaMode's market share","Value & growth: LaMode's costs","Revenue synergies","Cost synergies","FlashFash's capability to execute"],
     probe:["\"How would you know if LaMode is worth buying on its own?\"","\"What could FlashFash bring to LaMode, and LaMode to FlashFash?\"","\"Even if it's a good deal, could FlashFash pull it off?\""],
     ifwrong:[["Only talks about LaMode's market","\"What about how the two companies would work together?\""]],
     key:"<p><b>1. Value and growth potential of LaMode</b>: growth of online apparel, LaMode's market share, costs. <b>2. Can FlashFash use LaMode to boost sales and reduce costs?</b> Revenue synergies, cost synergies. <b>3. Does FlashFash have the capability to execute?</b></p>",
     stuck:["\"What would make LaMode a good acquisition?\"","\"Think about LaMode alone, then the two together.\""]},
    {name:"Asia market share", time:"4–5 min",
     say:["The client believes LaMode could make a third of its global sales in Asia within five years, as the apparel market in Asia is expected to double and the share of purchases made online to triple over this period.","What share of the Asia online apparel market would LaMode need to reach to capture this opportunity?"],
     steer:["Original case: let the candidate ask for the data below, but share it even if they don't ask."],
     give:{when:"When they ask, or after they lay out their approach.",
       html:"<ul><li>LaMode's global sales are <b>$2B</b>, and are expected to <b>triple</b> over the next 5 years</li><li>The online apparel market in Asia today is <b>$8B</b></li></ul>"},
     num:{min:4.0, max:4.3, unit:"% of the Asia online apparel market in 5 years"},
     listen:["Sets up the formula first: LaMode Asia sales in 5 years ÷ Asia online market in 5 years","LaMode Asia sales = (3 × $2B) ÷ 3 = $2B","Asia online market = $8B × 2 × 3 = $48B","Share = $2B ÷ $48B ≈ 4.2%"],
     ifwrong:[["Uses today's $8B market","\"What happens to the Asia online market over the five years?\""],["Grows the market ×2 or ×3, not both","\"Both the total market and the online share are changing.\""],["Uses $6B for Asia sales","\"Is that LaMode's global sales, or its Asia sales?\""]],
     key:"<p class=\"calc\">Share in 5 yrs = LaMode Asia sales ÷ Asia online market\nLaMode Asia sales = (3 × $2B) ÷ 3 = $2B\nAsia online market = $8B × 2 × 3 = $48B\nShare = $2B ÷ $48B ≈ 4.2%</p>",
     stuck:["\"What two numbers do you need to divide?\"","\"What will LaMode's global sales be in five years, and what's a third of that?\""]},
    {name:"Sanity check", time:"2 min",
     say:["What do you make of that number?"],
     listen:["Compares with LaMode's 3% share in North America, its core market where it's well established","Calls the 4.2% target extremely ambitious","Draws the implication: the Asia plan doesn't justify the acquisition"],
     key:"<p>The client's expectations imply LaMode would capture 4.2% of the Asia online apparel market in 5 years. That's extremely ambitious, given its share of its core market, where it is well established, is just 3%. At this stage it doesn't look like FlashFash should acquire LaMode on the basis of its Asia growth plans.</p>",
     stuck:["\"How does 4.2% compare with LaMode's share at home?\""]},
    {name:"Synergies", time:"5–6 min",
     say:["The client would like you to look at synergies. We've compiled this exhibit with information about both our client and the target.","Let me know your thoughts on whether there are potential synergies that seem appealing, based on this information."],
     steer:["If asked, share that transaction costs include the cost of order fulfillment, customer service, payment processing and returns.","Give them a minute to read the exhibit in silence before they talk."],
     give:{when:"Right away (Exhibit 1).",
       html:`<p><b>Exhibit 1.</b></p><div class="tw"><table class="data"><tr><th>Global sales, $M</th><th>FlashFash</th><th>LaMode</th></tr><tr><td>Total</td><td>25,400</td><td>2,014</td></tr><tr><td>North America</td><td>9,500</td><td>1,802</td></tr><tr><td>Europe</td><td>8,600</td><td>212</td></tr><tr><td>Asia</td><td>5,000</td><td>0</td></tr><tr><td>Rest of world</td><td>2,300</td><td>0</td></tr><tr><td>Annual growth</td><td>4.2%</td><td>31.3%</td></tr></table></div><div class="tw"><table class="data"><tr><th>Online presence</th><th>FlashFash</th><th>LaMode</th></tr><tr><td>% sales online</td><td>22%</td><td>100%</td></tr></table></div><div class="tw"><table class="data"><tr><th>Transactions</th><th>FlashFash</th><th>LaMode</th></tr><tr><td>Average purchase</td><td>$78</td><td>$413</td></tr><tr><td>Cost of goods sold</td><td>46%</td><td>72%</td></tr><tr><td>Transaction cost</td><td>$6</td><td>$48</td></tr></table></div><div class="tw"><table class="data"><tr><th>Own brand, $M</th><th>FlashFash</th><th>LaMode</th></tr><tr><td>Total sales</td><td>25,400</td><td>104</td></tr><tr><td>Cost of goods sold</td><td>11,684</td><td>63</td></tr><tr><td>Annual growth</td><td>4.2%</td><td>123.4%</td></tr></table></div>`},
     listen:["Walks the exhibit table by table, not at random","International: FlashFash's experience outside North America could accelerate LaMode abroad","Online: FlashFash already sells more online in dollars than LaMode","Customers: LaMode is far more premium (5× average purchase), so little cross-selling","Distribution: LaMode's transaction cost is above FlashFash's margin per purchase","Own brand: FlashFash could help LaMode's COGS, but it's a small cost"],
     check:["Use FlashFash's international experience to accelerate LaMode abroad","FlashFash sells more online than LaMode in absolute terms (22% × $25B ≈ $5B > $2B): no online expertise to gain","LaMode is much more premium (average purchase ~5× higher): limited cross-selling","LaMode can't distribute FlashFash profitably: $48 transaction cost > $42 margin","FlashFash might cut LaMode's own-brand COGS, but it's a small category"],
     probe:["\"Which company sells more online, in dollars?\"","\"How different are their customers?\"","\"Could LaMode sell FlashFash's products profitably?\"","\"Where is LaMode present, and where is FlashFash?\""],
     ifwrong:[["\"LaMode brings online expertise\"","\"Compare their online sales in dollars, not percentages.\""],["\"They can cross-sell to each other's customers\"","\"Look at the average purchase. Are these the same shoppers?\""]],
     key:"<ul><li>International: FlashFash's experience outside North America could accelerate LaMode's international growth.</li><li>Online: FlashFash already sells more online than LaMode (22% × $25B ≈ $5B > $2B), so it gains no online expertise.</li><li>Customers: LaMode is clearly more premium (average purchase 5× higher), so cross-selling is limited.</li><li>Distribution: LaMode can't distribute FlashFash profitably: its $48 transaction cost is above the $42 margin on a FlashFash purchase.</li><li>Own brand: FlashFash might lower LaMode's own-brand COGS, but it's a small cost category.</li></ul>",
     stuck:["\"Take the exhibit one table at a time.\"","\"Start with where each company sells.\""]},
    {name:"Online expertise", time:"2 min",
     say:["Let's test one claim. Some argue FlashFash would gain online expertise from LaMode. How much does each company sell online today?"],
     num:{min:5e9, max:5.7e9, unit:"$ FlashFash online sales"},
     listen:["FlashFash: 22% × $25.4B ≈ $5.6B (the case rounds to $5B)","LaMode: 100% × ~$2B = $2B","FlashFash already sells 2.5–3× more online: no expertise to gain"],
     key:"<p class=\"calc\">FlashFash: 22% × $25.4B ≈ $5.6B online\nLaMode: 100% × $2.0B = $2.0B online</p><p>FlashFash already has the bigger online business, so online know-how isn't a reason to buy.</p>",
     stuck:["\"What percent of FlashFash's sales are online?\""]},
    {name:"Distribution economics", time:"2–3 min",
     say:["Could LaMode sell FlashFash products profitably on its site? What margin does FlashFash make on an average purchase?"],
     num:{value:42, tol:.03, unit:"$ margin per average FlashFash purchase"},
     listen:["Margin = (100% − 46%) × $78 ≈ $42","LaMode's transaction cost is $48 per order","$48 > $42: LaMode would lose ~$6 on every FlashFash order","Explains what transaction costs include if they asked"],
     ifwrong:[["Uses FlashFash's $6 transaction cost","\"Whose platform would the sale happen on?\""]],
     key:"<p class=\"calc\">FlashFash margin = (100% − 46%) × $78 ≈ $42\nLaMode transaction cost = $48 → loss of ~$6 per order</p>",
     stuck:["\"What's left of $78 after 46% cost of goods?\"","\"What does it cost LaMode to process one order?\""]},
    {name:"Synergy verdict", time:"1–2 min",
     say:["So overall, how strong is the case for synergies?"],
     listen:["Weak overall","Little cross-selling: very different customers","No online expertise to gain","The only meaningful synergy: LaMode's international expansion","Concludes LaMode isn't a good target"],
     key:"<p>Overall this is a weak case for synergies. There's little opportunity to cross-sell given the different customers, and FlashFash has no online expertise to gain. The only meaningful synergy is LaMode's international expansion. This confirms LaMode isn't a good acquisition target for us.</p>"},
    {name:"Organic growth", time:"4 min",
     say:["Beyond potential synergies with FlashFash, what ideas do you have to accelerate the organic growth of LaMode?"],
     listen:["Structured, e.g. products / channels / customers / geographies","Several ideas in each group","Uses what we know: own brand growing 123%, no presence in Asia"],
     check:["New product types: jewelry","New product types: cosmetics","New product types: sports gear","New product types: furniture","New product types: data","Sell offline: own stores","Sell offline: independent stores","Sell indirectly: to other brands","Sell indirectly: to third-party distributors","Other segments: mid-market","Geographies: Asia-Pacific","Geographies: Europe","Geographies: Latin America","Geographies: Middle East and Africa"],
     probe:["\"What else could LaMode sell besides clothes?\"","\"Does LaMode have to stay online only?\"","\"Which regions is LaMode missing?\""],
     key:"<p><b>1. Other product types</b>: jewelry, cosmetics, sports gear, furniture, data. <b>2. Selling offline</b>: own stores, independent stores. <b>3. Selling indirectly</b>: to other brands, to third-party distributors. <b>4. Other segments</b>: mid-market. <b>5. Other geographies</b>: Asia-Pacific, Europe, Latin America, Middle East and Africa. Overall, many opportunities to grow LaMode beyond its current scope.</p>",
     stuck:["\"Think about what LaMode sells, how, to whom, and where.\""]},
    {name:"Recommendation", time:"1–2 min",
     say:["Overall, what would you recommend to the client?"],
     listen:["Answer first: LaMode isn't the best acquisition target","Brands don't fit LaMode's (luxury) positioning","LaMode can't sell FlashFash products profitably","The Asia target implies ~4% of the market, above its 3% at home","Next step: scan the market for alternative targets, ideally strong in Asia"],
     key:"<p>\"You asked us whether FlashFash should acquire LaMode. In our view, it isn't the best acquisition target: your brands aren't a good fit with LaMode's positioning; LaMode's economics mean it couldn't sell FlashFash's products profitably; and its five-year target implies capturing 4% of the Asia online apparel market, above its share of its core US market. Over the next two weeks, we'd like to scan the market for alternative targets, ideally with a strong presence in Asia.\"</p>"}
  ]
}
];

window.CASE_SOURCE = "the original case";
window.CASE_ADDITIONS = {
  flashfash:{clarify:[1,2,3,4],
    steps:{"Sanity check":["partly","The comparison with LaMode's 3% is in the case's answer; asking it as its own question is added."],"Online expertise":["partly","The 22% × $25B math is in the case's answer; asking it as its own question is added."],"Distribution economics":["partly","The $48 vs. $42 math is in the case's answer; asking it as its own question is added."]}}
};

window.CASE_SCRIPTS = {
flashfash:{
 open:"<p><b>Let me make sure I understand.</b> FlashFash is a $25 billion mid-market apparel company, mostly selling through its own stores, with a very fast, demand-driven production model. It's considering buying LaMode, the leading independent online luxury retailer, with 3% of North American online apparel sales and a young own brand. <b>The question is whether to acquire it.</b> Could I ask: <b>what's the client's objective</b> with this deal? And is there a price yet? <b>Could I take a minute to structure my thoughts?</b></p>",
 steps:{
  "Framework":"<p><b>To decide whether to acquire LaMode, I'd look at three areas.</b> <b>First, LaMode's value and growth potential on its own</b>: how fast online apparel is growing, LaMode's market share, and its cost structure. <b>Second, whether FlashFash can use LaMode to boost sales and reduce costs</b>: revenue synergies, like cross-selling or international expansion, and cost synergies, like sourcing and fulfillment. <b>Third, whether FlashFash can execute</b>: integrating an online luxury business is very different from running mid-market stores. <b>Does that sound good?</b></p>",
  "Asia market share":"<p><b>Let me set up the formula first.</b> LaMode's share in five years equals its Asia sales in five years, divided by the Asia online apparel market in five years. LaMode's global sales triple from $2 billion to $6 billion, and a third of that is Asia, so <b>$2 billion</b>. The Asia online market is $8 billion today; the total market doubles and the online share triples, so it grows six times, to <b>$48 billion</b>. <b>$2 billion divided by $48 billion is about 4.2%.</b></p>",
  "Sanity check":"<p><b>It looks extremely ambitious.</b> LaMode holds 3% of online apparel in North America, its core market, where it's well established. <b>The plan asks it to reach a higher share, 4.2%, in a market where it has zero sales today.</b> <b>So what:</b> the Asia growth plan on its own doesn't justify the acquisition.</p>",
  "Synergies":"<p><b>Let me go through the exhibit table by table.</b> <b>Geography</b>: FlashFash sells $16 billion outside North America while LaMode sells almost nothing there, so <b>FlashFash could accelerate LaMode's international growth</b>. That's the one real synergy. <b>Online</b>: 22% of $25 billion is about $5 billion, more than LaMode's $2 billion, so <b>FlashFash has no online expertise to gain</b>. <b>Customers</b>: LaMode's average purchase is $413 versus $78, <b>about five times higher</b>, so these are different shoppers and cross-selling is limited. <b>Distribution</b>: LaMode's transaction cost is $48, more than FlashFash's roughly $42 margin per purchase, so <b>LaMode can't sell FlashFash products profitably</b>. <b>Own brand</b>: FlashFash could lower LaMode's own-brand costs, but that's only about $100 million of sales.</p>",
  "Online expertise":"<p>FlashFash sells 22% of $25.4 billion online, <b>about $5.6 billion</b>. LaMode is 100% online, <b>about $2 billion</b>. <b>So FlashFash already has the bigger online business</b>, almost three times LaMode's, and online know-how isn't a reason to buy.</p>",
  "Distribution economics":"<p>A FlashFash purchase averages $78, with 46% cost of goods, so the <b>margin is about $42</b>. LaMode spends <b>$48 to process an order</b>: fulfillment, service, payment and returns. <b>So LaMode would lose about $6 on every FlashFash order</b>; it can't distribute FlashFash profitably.</p>",
  "Synergy verdict":"<p><b>Overall, the case for synergies is weak.</b> The customers are too different to cross-sell, FlashFash has no online expertise to gain, and LaMode can't distribute FlashFash's products profitably. <b>The only meaningful synergy is helping LaMode expand internationally.</b> <b>That confirms LaMode isn't a good target for us.</b></p>",
  "Organic growth":"<p><b>I'd think about growth along four dimensions: what LaMode sells, how, to whom, and where.</b> <b>What</b>: new categories such as jewelry, cosmetics, sports gear and furniture, and even monetizing its customer data, and keep pushing the own brand, which is growing over 100% a year. <b>How</b>: offline, through its own stores or independent stores, and indirectly, selling to other brands or third-party distributors. <b>To whom</b>: a mid-market line. <b>Where</b>: Asia-Pacific, Europe, Latin America, and the Middle East and Africa. <b>Overall, there's a lot of room to grow LaMode beyond its current scope.</b></p>",
  "Recommendation":"<p><b>You asked whether FlashFash should acquire LaMode. In our view, it isn't the best acquisition target, for three reasons.</b> One, <b>your brands don't fit LaMode's luxury positioning</b>, so there's little to cross-sell. Two, <b>LaMode's economics mean it couldn't sell your products profitably</b>: its $48 cost per order is above your $42 margin. Three, <b>its five-year plan implies capturing over 4% of the Asia online apparel market</b>, more than its 3% share at home. <b>Over the next two weeks</b>, we'd like to scan the market for alternative targets, ideally with a strong presence in Asia.</p>"
 }}
};

window.CASE_GUIDE = {
flashfash:{
 book8:{buckets:[["Market attractiveness",["Online apparel growth (global, Asia)","Luxury vs. mid-market trends"]],["Financial considerations",["LaMode's growth (31%) and cost structure","Is the Asia plan realistic?","Price vs. value created"]],["Synergies",["Revenue: international expansion, cross-selling","Cost: fulfillment, sourcing, own-brand COGS"]],["Company capabilities",["Can FlashFash run online luxury?","Integration risk"]]],
  note:"Very close to the case's 3 buckets: the book's Synergies bucket is the case's middle bucket. Add 'customers: luxury vs. mid-market' as a sub-bullet, because that's what kills cross-selling."},
 steps:{
  "Framework":{shape:["Restate the decision","Bucket 1: LaMode's value and growth alone","Bucket 2: synergies, revenue and cost","Bucket 3: ability to execute","Check in"],phrases:["\"To decide whether to acquire LaMode, I'd look at three areas.\"","\"Does that sound good?\""]},
  "Asia market share":{shape:["Write the formula in words first","Numerator: LaMode's Asia sales in 5 years","Denominator: Asia online market in 5 years (×2 × ×3)","Divide and state the share"],phrases:["\"Let me set up the formula first.\"","\"The market grows six times: it doubles, and the online share triples.\""]},
  "Sanity check":{shape:["Verdict first","Benchmark: 3% at home","So what for the deal"],phrases:["\"It looks extremely ambitious.\"","\"So what: the Asia plan on its own doesn't justify the acquisition.\""]},
  "Synergies":{shape:["Say you'll go table by table","For each table: the fact, then what it means","Name the one real synergy","Overall verdict"],phrases:["\"Let me go through the exhibit table by table.\"","\"That's the one real synergy.\""]},
  "Online expertise":{shape:["FlashFash online $ = share × total","LaMode online $","Compare and conclude"],phrases:["\"So FlashFash already has the bigger online business.\""]},
  "Distribution economics":{shape:["FlashFash margin per purchase","LaMode cost per order","Compare: profit or loss per order","Conclude"],phrases:["\"LaMode would lose about $6 on every FlashFash order.\""]},
  "Synergy verdict":{shape:["Verdict first: weak","Three reasons","The one exception","Link back to the decision"],phrases:["\"Overall, the case for synergies is weak.\"","\"That confirms LaMode isn't a good target for us.\""]},
  "Organic growth":{shape:["Announce the structure: what, how, to whom, where","2–4 ideas per branch","Use facts from the exhibit (own brand growth, no Asia)","Wrap up"],phrases:["\"I'd think about growth along four dimensions: what, how, to whom, and where.\""]},
  "Recommendation":{shape:["Restate the question and answer it first","Three reasons with numbers","Next steps"],phrases:["\"You asked whether FlashFash should acquire LaMode. In our view…\"","\"Over the next two weeks, we'd like to…\""]}
 }}
};

/* ===== Roko Hotel · Fruit Nation · Singapore Taxis ===== */
window.CASES.push(
{
  id:"roko", title:"Roko Hotel", type:"Profitability", diff:"Easy", mins:25,
  plain:"A small family-owned hotel near Paris is less profitable than last year. The candidate builds a revenue/cost structure, calculates this year's and last year's room revenue from two exhibits, finds that weekend bookings collapsed, explains why, and suggests fixes and new revenue streams.",
  bottom:"Room revenue fell from <b>~$850k to $728k</b> (−$120k) because <b>weekend occupancy roughly halved</b> (standard 100% → 60%, premium 80% → 40%); weekdays are unchanged and premium rooms are full on weekdays. Fix: raise premium weekday prices, win back weekends (packages, weddings), add new revenue streams, then check costs.",
  prompt:["Your client is Roko Hotel, a family-owned, independent hotel in suburban Paris. Until last year, the hotel maintained strong profitability, but it's now facing declining profitability and the owners don't understand why.","The hotel is in the suburbs, a 20-minute tram ride from the city center, and isn't part of a chain.","The owners have asked you to help identify the reasons for the decline and recommend how to turn the situation around."],
  clarify:[
    ["How big is the hotel?","The hotel has 30 rooms."],
    ["How big is the decline?","We don't have the exact figure yet; that's part of what we need to find."],
    ["What's the owners' goal?","Get back to last year's profitability."],
    ["Who stays at the hotel?","A mix of guests; we'll look at the data shortly."]
  ],
  openListen:["Plays back: independent suburban Paris hotel, profitability fell this year","Asks how many rooms (30)","Asks for the goal"],
  steps:[
    {name:"Framework", time:"2–3 min",
     say:["How would you structure your approach to the question?"],
     steer:["Original case: a good structure uses a revenue/cost framework tailored to the situation. It's unnecessary to include a driver for solutions; they'll come naturally from the root causes."],
     listen:["Revenue: rooms × utilization × price × operating days","Other revenue: food and beverages, additional services","Fixed costs: salaries, building maintenance, insurance and taxes","Variable costs: utilities, food and beverages, booking fees"],
     check:["Revenue: number of rooms","Revenue: average utilization (%)","Revenue: price per room","Revenue: operating days","Other revenue: food & beverages","Other revenue: additional services","Fixed: salaries","Fixed: building maintenance","Fixed: insurance & taxes","Variable: utility costs","Variable: food & beverages","Variable: booking fees"],
     probe:["\"How exactly would you calculate room revenue?\"","\"Which costs change with the number of guests?\""],
     ifwrong:[["Lists generic buckets (customers, competitors…)","\"How would you tailor that to a 30-room hotel's profit?\""]],
     key:"<p><b>1. Revenue factors</b>: [rooms] × [average utilization] × [price per room] × [operating days]; other revenue: F&B, additional services. <b>2. Cost factors</b>: fixed (salaries, building maintenance, insurance & taxes) and variable (utilities, F&B, booking fees).</p>",
     stuck:["\"What drives a hotel's room revenue?\"","\"Split costs into fixed and variable.\""]},
    {name:"This year's revenue", time:"5 min",
     say:["Here's this year's data. Based on this exhibit, what's the annual revenue for this hotel?"],
     give:{when:"Right away (Exhibit 1).",
       html:`<p><b>Exhibit 1.</b> Prices and utilization this year</p><div class="tw"><table class="data"><tr><th>Room type</th><th># rooms</th><th>Price</th></tr><tr><td>Standard</td><td>25</td><td>$100</td></tr><tr><td>Premium</td><td>5</td><td>$140</td></tr></table></div><div class="tw"><table class="data"><tr><th>Average utilization</th><th>Weekdays</th><th>Weekends</th></tr><tr><td>Standard</td><td>60%</td><td>60%</td></tr><tr><td>Premium</td><td>100%</td><td>40%</td></tr></table></div>`},
     num:{value:728000, tol:.02, unit:"$ annual room revenue"},
     listen:["Standard rooms per week: 25 × 60% × 5 + 25 × 60% × 2 = 75 + 30 = 105","Premium rooms per week: 5 × 100% × 5 + 5 × 40% × 2 = 25 + 4 = 29","Weekly revenue: 105 × $100 + 29 × $140 = $14,560","Annual: × 50 weeks ≈ $728,000","Insight: premium rooms are full on weekdays (room to raise prices); weak demand for standard rooms and premium weekends","Next step: compare with last year"],
     ifwrong:[["Uses 7 nights at one rate","\"Is utilization the same every night of the week?\""],["Uses 52 weeks","\"Fine. The case uses 50 weeks; either is OK if you say why.\""]],
     key:"<p class=\"calc\">Standard: 25×60%×5 + 25×60%×2 = 75 + 30 = 105 rooms/week\nPremium: 5×100%×5 + 5×40%×2 = 25 + 4 = 29 rooms/week\nWeekly: 105×$100 + 29×$140 = $10,500 + $4,060 = $14,560\nAnnual: $14,560 × 50 weeks = $728,000</p><p>Premium rooms are at capacity during the week: an opportunity to raise their price or add more. Standard rooms, and premium on weekends, lack demand.</p>",
     stuck:["\"Work out rooms filled per week, weekdays and weekends separately.\"","\"Then multiply by the price of each room type.\""]},
    {name:"Last year's revenue", time:"4 min",
     say:["Based on the additional data in Exhibit 2 on last year's performance, what insights can you draw about recent changes in annual revenue?"],
     steer:["Original case: strong candidates identify shortcuts for the calculation, and adjust their previous calculation for the weekend utilization only."],
     give:{when:"Right away (Exhibit 2). If asked: prices have not changed year to year.",
       html:`<p><b>Exhibit 2.</b> Utilization last year</p><div class="tw"><table class="data"><tr><th>Average utilization</th><th>Weekdays</th><th>Weekends</th></tr><tr><td>Standard</td><td>60%</td><td>100%</td></tr><tr><td>Premium</td><td>100%</td><td>80%</td></tr></table></div>`},
     num:{min:840000, max:860000, unit:"$ annual room revenue LAST year"},
     listen:["Weekday occupancy unchanged; weekend occupancy dropped sharply","Standard: 125 rooms a week → $10,500 × 125/105 ≈ $12,500","Premium: 33 rooms a week → $4,060 × 33/29 ≈ $4,600","Annual ≈ $17,100 × 50 ≈ $850,000: about $120,000 more than this year","Driver: weekend utilization nearly halved"],
     ifwrong:[["Recomputes everything from scratch","\"Fine, but what changed vs. this year? Could you just adjust that part?\""]],
     key:"<p class=\"calc\">Standard last year: 25×60%×5 + 25×100%×2 = 125 rooms → $12,500/week\nPremium last year: 5×100%×5 + 5×80%×2 = 33 rooms → ~$4,600/week\nAnnual ≈ $17,100 × 50 ≈ $850,000 vs. $728,000 → ~$120,000 less this year</p><p>Weekday occupancy is constant; weekend utilization fell by nearly half.</p>",
     stuck:["\"Which numbers in Exhibit 2 differ from Exhibit 1?\""]},
    {name:"Why weekends dropped", time:"3 min",
     say:["Why do you think weekend utilization fell so much?"],
     steer:["Original case: push candidates to suggest reasons for the change in utilization."],
     listen:["Structures reasons: competition/supply, customer demand, our own marketing","Several concrete reasons in each","Links weekdays (business travelers, stable) vs. weekends (tourists, falling)"],
     check:["Competition: new hotels opening nearby","Competition: more alternatives such as Airbnb","Competition: other hotels cutting prices","Demand: fewer weekend tourists in Paris (other destinations, attractions closing)","Demand: fewer weekend breaks in France, longer long-haul holidays","Demand: price-sensitive weekend tourists more loyal to hotel chains","Our side: changes in our marketing and distribution to tourists"],
     probe:["\"Who stays on weekends versus weekdays?\"","\"Could something have changed on our side?\""],
     key:"<p><b>More competition/supply</b>: new hotels nearby, Airbnb, rivals cutting prices. <b>Lower customer demand</b>: fewer weekend tourists in Paris, fewer weekend breaks, price-sensitive tourists loyal to chains. <b>Our own marketing and distribution</b> to tourists may have changed.</p>"},
    {name:"New revenue streams", time:"3 min",
     say:["Besides rooms, food and drinks, what revenue streams could the hotel introduce or grow?"],
     listen:["Splits guests vs. non-guests","Several ideas in each"],
     check:["Guests: airport pick-up","Guests: commission on entertainment sales (city tours, shows)","Guests: dry cleaning","Guests: premium internet access","Guests: spa treatments","Non-guests: meeting rooms","Non-guests: events (weddings, conferences)","Non-guests: restaurant","Non-guests: gym (paid for non-guests)","Non-guests: business working space (by day or week)"],
     probe:["\"What could people who don't stay at the hotel pay for?\""],
     key:"<p><b>For guests</b>: airport pick-up, commission on tours and shows, dry cleaning, premium internet, spa. <b>For non-guests</b>: meeting rooms, events such as weddings and conferences, restaurant, paid gym, business working space.</p>"},
    {name:"Recommendation", time:"1–2 min",
     say:["What recommendation would you put forward to Roko Hotel to increase profitability?"],
     listen:["Restates the question","Diagnosis: weekend utilization fell; revenue ~$730k vs. ~$850k","Possible causes: competition, demand, our marketing","Short and long-term actions: raise premium weekday prices; win back weekends (packages, weddings); new revenue streams","Next step: analyze costs too"],
     key:"<p>\"We were asked to diagnose Roko Hotel's profit challenge and suggest how to turn it around. A drop in weekend utilization of both premium and standard rooms drove the decline: revenue is ~$730,000 this year vs. ~$850,000 last year, possibly due to more competition, lower demand, or changes in our marketing. I propose: maximize revenue from weekday business travelers by raising the premium room price; get weekends back on track with weekend packages or events like weddings; and explore other revenue streams for guests and non-guests. As next steps, we should analyze costs to see if they've also contributed.\"</p>"}
  ]
},
{
  id:"fruitnation", title:"Fruit Nation", type:"Market entry", diff:"Medium", mins:30,
  plain:"A small UK chemicals company has a fertilizer that lets goji berry farmers harvest earlier and sell for 12% more. The candidate structures the launch decision, calculates the fertilizer's value to a farmer, discusses the challenges and risks of selling in China, and finds the market is too small.",
  bottom:"Value to a farmer ≈ <b>£30 per acre per harvest</b> (a third harvest + 12% price premium), so price around <b>£15</b>. With a £9 production cost, margin is only <b>£6/acre</b>; China has just 200 farmers (24,000 acres), so revenue ≈ <b>£1M a year</b>. Plus over-supply and China challenges: <b>don't commercialize</b>; consider licensing or other fruits.",
  prompt:["Fruit Nation is a small, pioneering chemicals company based in Cambridge, UK, with annual revenue of £5M. It has recently developed a new fertilizer that affects the growth and ripening of fresh fruit.","It works especially well with goji berries and has two major benefits: farmers can harvest an impressive two months earlier, and it improves the nutritional value of the harvest by increasing the vitamin C in the fruit, so a farmer can sell the produce for a 12% higher price than the current market rate.","Goji berries can be harvested all year round, and farmers typically do two harvests a year, since goji berries take six months to grow. The fruit is mostly grown in China, which is where Fruit Nation plans to sell the product if it launches.","Fruit Nation would like to know whether it should commercialize this fertilizer."],
  clarify:[
    ["What's Fruit Nation's goal?","To make a profit with this product."],
    ["Are there competing products?","No competing products. Goji berry farmers don't currently use fertilizer."],
    ["Is demand for goji berries growing?","Yes, at a steady rate in line with GDP."],
    ["Is the product protected?","Fruit Nation has filed a patent for the chemical; it's currently pending."]
  ],
  openListen:["Plays back the two benefits (earlier harvest, 12% price premium)","Asks the goal (profit)","Asks about competitors and patents"],
  steps:[
    {name:"Framework", time:"3 min",
     say:["How would you structure your approach to the question?"],
     steer:["Original case: if asked, share the clarifying facts above (goal is profit; no competitors; demand growing with GDP; patent pending)."],
     listen:["Potential size of the market","Ability to sell profitably: revenues (share, willingness to pay) and costs (variable and fixed)","Capabilities: scale, supply chain, local knowledge","Risks: being copied, import rules, bad press"],
     check:["Market: size of goji berry farming in China","Market: share of farmers open to chemical fertilizer","Market: would it attract more farmers into goji berries?","Revenue: share of the addressable market we could capture","Revenue: farmers' willingness to pay","Variable costs: production, shipping to China, distribution in China","Fixed costs: salaries, manufacturing equipment","Capabilities: produce at scale","Capabilities: supply chain to reach farmers","Capabilities: local market knowledge and language","Risk: being copied; patent protection","Risk: import restrictions now and later","Risk: bad press hurting demand"],
     probe:["\"How would you know if this could be profitable?\"","\"What could go wrong selling in China?\""],
     key:"<p><b>1. Potential market size</b> (China goji farming, share open to fertilizer, new entrants). <b>2. Ability to sell profitably</b> (revenue: share, willingness to pay; costs: production, shipping, distribution, fixed). <b>3. Capabilities</b> (scale, supply chain, local knowledge, language). <b>4. Risks</b> (copying and patents, import restrictions, bad press).</p>"},
    {name:"Value to a farmer", time:"5–6 min",
     say:["You decide to calculate the value of the chemical to a typical farmer, to understand what price they may be willing to pay. Using the information in Exhibit 1, estimate the value of the product for a farmer, per acre of land, per harvest."],
     give:{when:"Right away (Exhibit 1). Share the two extra facts only if required.",
       html:`<p><b>Exhibit 1.</b> Information for an average goji berry farm</p><div class="tw"><table class="data"><tr><td>Acres</td><td>120</td></tr><tr><td>Revenue per harvest</td><td>£8,000</td></tr><tr><td>Labor cost per 30 days</td><td>£1.70 / acre</td></tr><tr><td>Number of workers</td><td>8</td></tr></table></div><p class="muted">If required: with the fertilizer, farmers can harvest 3 times a year (2 × 6-month seasons become 3 × 4-month seasons). No extra labor is needed for the third harvest; time spent weeding or tending can be used for harvesting.</p>`},
     num:{value:30.22, tol:.04, unit:"£ per acre per harvest"},
     listen:["Price benefit: £8,000 × 12% = £960 per harvest × 2 = £1,920 a year","Third harvest at the higher price: £8,000 × 1.12 = £8,960","Total extra: £10,880 a year ÷ 120 acres ≈ £90.67 per acre","÷ 3 harvests ≈ £30 per acre per harvest","Realizes labor cost doesn't change"],
     ifwrong:[["Forgets the third harvest","\"Harvesting two months earlier: how many harvests a year does that allow?\""],["Adds labor costs","\"Does the farmer need extra workers for the third harvest?\""]],
     key:"<p class=\"calc\">Price premium: £8,000 × 0.12 = £960 per harvest × 2 = £1,920/year\nThird harvest: £8,000 × 1.12 = £8,960\nPer acre: (£1,920 + £8,960) ÷ 120 = £90.67/year\nPer harvest: £90.67 ÷ 3 ≈ £30.22 per acre</p>",
     stuck:["\"What two benefits does the farmer get?\"","\"How many harvests a year with the fertilizer?\""]},
    {name:"Setting the price", time:"2 min",
     say:["So what price would you charge farmers?"],
     num:{min:10, max:25, unit:"£ per acre per harvest"},
     listen:["£30 is the theoretical maximum, but at that price farmers gain nothing","Price well below, e.g. about half: £15","Shows the farmer still gains: ~£10,880 − £5,400 ≈ £5,500 a year on top of ~£16,000","Next: need the number of farmers and the production cost"],
     key:"<p>Maximum is £30/acre/harvest, but then farmers have no reason to switch. Around half, <b>£15</b> (or another reasonable amount), leaves farmers ~£5,400 a year better off vs. their current ~£16,000. Next we'd need the number of farmers in China and the production cost.</p>"},
    {name:"Challenges in China", time:"3 min",
     say:["Fruit Nation has never sold a product in China before and wants to understand the potential challenges. What do you think the main challenges of selling the product in China are?"],
     listen:["Structures: legal vs. capability challenges","2–4 concrete points in each"],
     check:["Legal: may need a local partner to operate","Legal: high import taxes","Legal: approval from food or agricultural authorities","Legal: IP infringement by local competitors","Capability: inadequate storage (e.g. temperature control)","Capability: reliable, fast, trackable transport","Capability: cultural and time differences in manufacturing","Capability: communicating with the local supply chain without language skills"],
     probe:["\"What permissions might a foreign chemicals company need?\"","\"How would the product physically get to farmers?\""],
     key:"<p><b>Legal</b>: local partner requirement, import taxes, regulatory approval, IP infringement. <b>Capability</b>: storage conditions, reliable transport and tracking, cultural and time differences, language barriers with the supply chain.</p>"},
    {name:"Launch risks", time:"3 min",
     say:["In addition to those challenges, what do you think the main risks are in launching this product?"],
     listen:["Structures: customer risks vs. market risks","Spots the over-supply effect: 3 harvests = +50% supply, pushing goji prices down"],
     check:["Customer: farmers skeptical of a new product, low adoption","Customer: health concerns about a new chemical on food","Market: new entrants competing","Market: the 12% premium disappears if all farmers adopt","Market: 3 harvests = +50% supply, likely above demand → lower goji prices → lower value of the fertilizer"],
     probe:["\"What happens to goji berry prices if every farmer harvests three times a year?\""],
     key:"<p><b>Customer risks</b>: skeptical farmers, health concerns. <b>Market risks</b>: new entrants; the 12% premium erodes if everyone adopts; a 50% jump in supply would push prices, and so the fertilizer's value, down.</p>"},
    {name:"Production cost", time:"3–4 min",
     say:["Fruit Nation estimates the variable production cost of the chemical at £9 per acre. How does this impact your conclusion?"],
     give:{when:"If required.", html:"<p>There are <b>200</b> goji berry farmers in China, so <b>24,000 acres</b> of farmland (average farm of 120 acres, from Exhibit 1).</p>"},
     num:{min:1.0e6, max:1.1e6, unit:"£ potential revenue per year (at £15)"},
     listen:["Margin: £15 − £9 = £6 per acre, before distribution and fixed costs","Market: 24,000 acres × £15 = £360k per harvest × 3 ≈ £1.08M a year","Profit under £400k","~20% of current revenue, but little growth potential","Suggests alternatives: licensing, other fruits"],
     key:"<p class=\"calc\">Margin: £15 − £9 = £6/acre (before distribution and fixed costs)\nRevenue: 24,000 × £15 = £360k/harvest × 3 ≈ £1.08M/year; profit < £400k</p><p>About 20% of Fruit Nation's current revenue, but a small market with little growth. Too small on its own: look at licensing or other fruits.</p>",
     stuck:["\"How much is left per acre after the £9 cost?\"","\"How big is the whole market in a year?\""]},
    {name:"Recommendation", time:"1–2 min",
     say:["Based on the information you have, would you recommend Fruit Nation commercializes the product?"],
     listen:["Answer first: no","Profit opportunity too small: £6/acre before other costs; ~£1M revenue a year","Over-supply would erode goji prices and the fertilizer's value","Many China challenges outside their control","Next steps: licensing to a local manufacturer, other fruits"],
     key:"<p>\"We were asked if Fruit Nation should commercialize the fertilizer. I don't recommend it. First, the profit opportunity is too small: at £15/acre, variable profit is £6/acre before distribution and fixed costs, and revenue would be just over £1M a year. Second, the fertilizer could cause over-supply, pushing down goji prices and the value of the product. Third, there are many challenges in selling into China, some outside Fruit Nation's control. With more time, I'd look at licensing to a local manufacturer with existing infrastructure, or using it on other fruits.\"</p>"}
  ]
},
{
  id:"sgtaxis", title:"Singapore Taxis", type:"Market sizing", diff:"Hard", mins:25,
  plain:"Estimate how many taxis there are in Singapore. The candidate splits the problem into demand (rides by residents and by visitors) and supply (rides one taxi can handle in a year), estimates each, divides, then explains why the real fleet is shrinking.",
  bottom:"Demand: residents ~5.5M × ~50 rides × 50% taxi share ≈ <b>140M rides</b>; visitors ~10M × ~8 rides × 50% ≈ <b>40M</b>. Supply: ~3,000 busy hours ÷ 0.5 h per ride ≈ <b>6,000 rides per taxi</b>. Fleet ≈ 180M ÷ 6,000 ≈ <b>30,000 taxis</b> (the real fleet was ~23k in 2017, down from ~29k in 2014).",
  prompt:["The taxi industry has been disrupted by e-hailing startups such as Uber. In Singapore, taxis still command 50% of total ride services volume.","Please estimate the size of the taxi fleet in Singapore."],
  clarify:[
    ["What exactly are we counting?","The number of vehicles used as taxis in Singapore, excluding decommissioned taxis."],
    ["Do we include e-hailing cars?","No, taxis only. Taxis are 50% of ride volume."],
    ["Is there a time frame?","Today's fleet."]
  ],
  openListen:["Confirms the definition (vehicles in use, not decommissioned)","Notes the 50% taxi share"],
  steps:[
    {name:"Framework", time:"3 min",
     say:["How would you approach this estimate?"],
     steer:["Original case: a strong candidate notes that the fleet size is driven by the demand for taxi rides and the number of rides each taxi can fulfil. Demand comes from both the domestic population and foreign visitors (tourists, business travelers)."],
     listen:["Fleet = total taxi rides ÷ rides one taxi can handle","Demand from residents: population × rides per person × taxi share","Demand from visitors: visitors × rides per visitor × taxi share","Supply per taxi: operating hours ÷ average ride duration"],
     check:["Taxi rides from residents: population size","Residents: rides per person","Residents: % share by taxis","Taxi rides from visitors: number of foreign visitors","Visitors: rides per visitor","Visitors: % share by taxis","Rides per taxi: operating hours","Rides per taxi: average ride duration"],
     probe:["\"What determines how many taxis a city needs?\"","\"Who takes taxis in Singapore besides residents?\""],
     ifwrong:[["Tries a top-down shortcut like 'X taxis per 1,000 people'","\"How would you justify that ratio? Can you build it from demand and supply?\""]],
     key:`<p><b>Size of taxi fleet</b> = number of taxi rides ÷ rides handled by each taxi</p><ul><li><b>Taxi rides from residents</b> = population × rides per person × % share by taxis</li><li><b>Taxi rides from foreign visitors</b> = visitors × rides per visitor × % share by taxis</li><li><b>Rides per taxi</b> = operating hours of a taxi ÷ average duration of a ride</li></ul>`,
     stuck:["\"Think demand and supply.\"","\"How many rides can one taxi do in a year?\""]},
    {name:"Rides by residents", time:"4–5 min",
     say:["Let's start with residents. How many taxi rides do they take a year?"],
     steer:["Candidate-led estimate. If they don't know Singapore, share the facts in the exhibit.","Look for segmentation of riders, e.g. daily, frequent, average, occasional and non-users."],
     give:{when:"If the candidate isn't familiar with Singapore.",
       html:"<ul><li>Population: ~<b>5.5M</b></li><li>Car ownership is low because cars are expensive (~<b>10%</b> of households)</li><li>Most people commute by bus and subway</li></ul>"},
     num:{min:90e6, max:200e6, unit:"taxi rides a year by residents"},
     listen:["Segments riders by frequency","Weighted average ≈ 50 rides a person a year","Applies the 50% taxi share","5.5M × 50 × 50% ≈ 140M rides"],
     key:`<div class="tw"><table><tr><th>Rider type</th><th>Frequency</th><th>% pop.</th><th>Rides/yr</th></tr><tr><td>Daily</td><td>12/week</td><td>5%</td><td>~31</td></tr><tr><td>Frequent</td><td>2/week</td><td>10%</td><td>~10</td></tr><tr><td>Average</td><td>2/month</td><td>20%</td><td>~5</td></tr><tr><td>Occasional</td><td>2/year</td><td>50%</td><td>1</td></tr><tr><td>Non-users</td><td>0</td><td>15%</td><td>0</td></tr></table></div><p class="calc">≈ 47 → ~50 rides per person per year\n5.5M × 50 × 50% ≈ 140M rides/year</p>`,
     stuck:["\"Do all residents take taxis equally often?\"","\"Try a few user types with different frequencies.\""]},
    {name:"Rides by visitors", time:"4 min",
     say:["Now foreign visitors. How many taxi rides do they take a year?"],
     listen:["Estimates visitors, e.g. from airport arrivals","Removes transit passengers","Segments visitors (business, tourists, backpackers)","10M visitors × ~8 rides × 50% ≈ 40M rides"],
     num:{min:20e6, max:60e6, unit:"taxi rides a year by visitors"},
     key:`<p class="calc">Arrivals: 20 planes/hr × 14 hrs × 365 × 200 people ≈ 20M
50% are transit → ~10M visitors a year (3-day stays)</p><div class="tw"><table><tr><th>Visitor</th><th>Rides/trip</th><th>% visitors</th><th>Weighted</th></tr><tr><td>Business</td><td>4/day × 3 = 12</td><td>50%</td><td>6</td></tr><tr><td>Tourist</td><td>2/day × 3 = 6</td><td>30%</td><td>~2</td></tr><tr><td>Backpacker</td><td>2</td><td>20%</td><td>~0.5</td></tr></table></div><p class="calc">≈ 8 rides per visitor\n10M × 8 × 50% ≈ 40M rides/year</p>`,
     stuck:["\"How could you estimate visitor numbers from the airport?\""]},
    {name:"Rides per taxi", time:"3 min",
     say:["How many rides can one taxi handle in a year?"],
     num:{min:4000, max:9000, unit:"rides per taxi per year"},
     listen:["Operating hours a day and days a year","Utilization: not every hour has a passenger","Average ride length (small country: ~30 min)","12 h × 70% × 350 days ≈ 3,000 h ÷ 0.5 h ≈ 6,000 rides"],
     key:"<p class=\"calc\">12 h/day × 70% utilized × 350 days ≈ 2,940 → ~3,000 hours\n3,000 ÷ 0.5 h per ride = 6,000 rides per taxi per year</p>",
     stuck:["\"Is a taxi carrying passengers every hour it's on the road?\""]},
    {name:"Fleet size", time:"2 min",
     say:["So how many taxis are there?"],
     num:{min:15000, max:45000, unit:"taxis"},
     listen:["(140M + 40M) ÷ 6,000 ≈ 30,000 taxis","States the answer clearly with the main assumptions"],
     key:"<p class=\"calc\">(140M + 40M) ÷ 6,000 ≈ 30,000 taxis</p>"},
    {name:"Interpretation", time:"3 min",
     say:["According to the Land Transport Authority, the taxi fleet in Singapore was about 23,000 at the end of 2017, down from a peak of about 29,000 in 2014. What factors might have led to this decline?"],
     listen:["Structures: lower taxi share / smaller relevant population / higher utilization","Several reasons in each"],
     check:["Taxi share: e-hailing (Uber) reduced demand","Taxi share: better public transport","Taxi share: higher taxi fares","Taxi share: poor reputation of drivers","Population: fewer foreign visitors","Population: aging, fewer commuters","Utilization: technology matching riders and taxis, less downtime","Utilization: shorter rides (less congestion, GPS apps)"],
     probe:["\"Could the same demand be served by fewer taxis?\""],
     key:"<p><b>Lower taxi share</b>: e-hailing, better public transport, higher fares, poor driver reputation. <b>Smaller relevant population</b>: fewer visitors, aging population with fewer commutes. <b>Higher utilization</b>: technology cuts downtime; shorter rides thanks to less congestion and GPS apps.</p>"},
    {name:"Wrap-up", time:"1 min",
     say:["Give me your answer in 30 seconds."],
     listen:["Answer first: about 30,000 taxis","How it was built: demand ÷ capacity per taxi","Biggest assumption and how to refine it"],
     key:"<p>\"About 30,000 taxis: roughly 180 million taxi rides a year, 140 million from residents and 40 million from visitors, divided by about 6,000 rides a taxi can handle. The most sensitive assumption is rides per resident; I'd refine it with ride-volume data. The real fleet, about 23,000, is lower, likely because e-hailing took share and taxis are used more efficiently.\"</p>"}
  ]
}
);
Object.assign(window.CASE_ADDITIONS,{
  roko:{clarify:[1,2,3], steps:{"Why weekends dropped":["partly","The reasons are the case's own; asking them as a separate question is added."]}},
  fruitnation:{steps:{"Setting the price":["partly","The £15 suggestion is in the case's answer; asking it as its own question is added."]}},
  sgtaxis:{clarify:[1,2], steps:{"Rides by residents":["partly","The case answers this in one calculation; splitting it into steps is added."],"Rides by visitors":["partly","The case answers this in one calculation; splitting it into steps is added."],"Rides per taxi":["partly","The case answers this in one calculation; splitting it into steps is added."],"Fleet size":["partly","The case answers this in one calculation; splitting it into steps is added."],"Wrap-up":["added","The original has no synthesis question."]}}
});
Object.assign(window.CASE_SCRIPTS,{
roko:{
 open:"<p><b>Let me make sure I understand.</b> Roko is an independent, family-owned hotel in suburban Paris, 20 minutes from the center by tram. It was strongly profitable until last year, profitability has dropped, and <b>the owners want to know why and how to fix it</b>. Could I ask how many rooms it has, and whether we know how big the drop is? <b>Could I take a moment to structure my thoughts?</b></p>",
 steps:{
  "Framework":"<p><b>Since this is a profitability decline, I'd look at revenue and costs.</b> <b>On revenue</b>: room revenue is the number of rooms, times average utilization, times price per room, times operating days; then other revenue like food and beverages and additional services. <b>On costs</b>: fixed costs such as salaries, building maintenance, insurance and taxes; and variable costs such as utilities, food and beverages, and booking fees. <b>I'd start with room revenue</b>, since it's likely the biggest driver. <b>Does that sound good?</b></p>",
  "This year's revenue":"<p><b>Let me work out rooms filled per week, weekdays and weekends separately.</b> Standard: 25 rooms at 60%, so 15 a night; 75 on weekdays and 30 on weekends, <b>105 a week</b>. Premium: 5 rooms, full on 5 weekdays, so 25, plus 40% on 2 weekend nights, 4: <b>29 a week</b>. Weekly revenue is 105 times $100 plus 29 times $140, <b>$14,560</b>, and over 50 weeks, <b>about $728,000 a year</b>. <b>One insight already</b>: premium rooms are full on weekdays, so there may be room to raise their price. <b>Next, I'd compare with last year.</b></p>",
  "Last year's revenue":"<p><b>Weekdays haven't changed; only weekends have, so I'll just adjust those.</b> Standard weekends were 100% instead of 60%, so 125 rooms a week instead of 105: about <b>$12,500</b> a week. Premium weekends were 80% instead of 40%, so 33 instead of 29: about <b>$4,600</b>. That's about $17,100 a week, <b>roughly $850,000 a year, about $120,000 more than this year</b>. <b>So the decline is driven by weekend utilization, which nearly halved.</b></p>",
  "Why weekends dropped":"<p><b>I'd group possible reasons into three areas.</b> <b>More competition</b>: new hotels nearby, Airbnb, or rivals cutting prices. <b>Lower demand</b>: fewer weekend tourists coming to Paris, people taking fewer weekend breaks, or price-sensitive tourists choosing hotel chains. <b>Our own side</b>: changes in how we market and distribute to tourists. <b>The weekday business is stable, so this looks like a tourist problem.</b></p>",
  "New revenue streams":"<p><b>I'd split ideas by who pays.</b> <b>Guests</b>: airport pick-up, commission on city tours and shows, dry cleaning, premium internet, spa treatments. <b>Non-guests</b>: meeting rooms, events like weddings and conferences, the restaurant, a paid gym, and business working space by the day or week.</p>",
  "Recommendation":"<p><b>We were asked why Roko's profitability fell and how to turn it around.</b> The main driver is weekend occupancy, which nearly halved for both room types: revenue is about $730,000 this year against $850,000 last year, likely due to more competition, lower tourist demand, or our marketing. <b>I recommend three actions</b>: raise premium prices on weekdays, when those rooms are full; win back weekends with packages and events like weddings; and add new revenue streams for guests and non-guests. <b>As a next step</b>, we should analyze costs to see if they've also contributed.</p>"
 }},
fruitnation:{
 open:"<p><b>Let me play it back.</b> Fruit Nation is a £5M UK chemicals company with a new fertilizer for goji berries: two months' earlier harvest, and 12% higher prices thanks to more vitamin C. It would sell in China, where most goji berries are grown. <b>The question is whether to commercialize it.</b> Could I ask: is the goal profit? Are there competing products? And is the product protected by a patent?</p>",
 steps:{
  "Framework":"<p><b>I'd look at four areas.</b> <b>One, the market</b>: how big goji farming in China is, how many farmers would use fertilizer, and whether it would draw new farmers in. <b>Two, profitability</b>: what share we could win and what farmers would pay, against production, shipping, distribution and fixed costs. <b>Three, capabilities</b>: producing at scale, a supply chain to reach farmers, and local knowledge. <b>Four, risks</b>: being copied, import rules, and bad press. <b>Does that sound good?</b></p>",
  "Value to a farmer":"<p><b>The fertilizer creates value in two ways.</b> <b>Higher prices</b>: 12% of £8,000 is £960 per harvest, or £1,920 a year on the current two harvests. <b>A third harvest</b>: two months earlier means three 4-month seasons instead of two 6-month ones, worth £8,000 times 1.12, £8,960, with no extra labor. <b>Together, about £10,880 a year</b>, divided by 120 acres is about £91 per acre a year, and <b>divided by three harvests, about £30 per acre per harvest</b>.</p>",
  "Setting the price":"<p><b>£30 is the most a farmer could pay, but at that price they'd gain nothing.</b> I'd price at around half, <b>£15 per acre per harvest</b>. That costs a farmer about £5,400 a year and still leaves them about £5,500 better off, on top of roughly £16,000 today. <b>To judge the opportunity, I'd next need the number of farmers and our production cost.</b></p>",
  "Challenges in China":"<p><b>I'd split the challenges into legal and capability.</b> <b>Legal</b>: we may need a local partner, import taxes could be high, we'd need approval from food or agricultural authorities, and our IP could be infringed. <b>Capability</b>: storage may need specific temperatures, transport must be fast and trackable, manufacturing across cultures and time zones is hard, and we lack the language skills to work with the local supply chain.</p>",
  "Launch risks":"<p><b>I'd split risks into customers and market.</b> <b>Customers</b>: farmers may be skeptical of a new product, and there may be health concerns about a new chemical on food. <b>Market</b>: new entrants may copy us, and <b>if every farmer adopts it, the 12% premium disappears</b>. Worse, three harvests means <b>50% more supply</b>, which would push goji prices down, and with them the value of our fertilizer.</p>",
  "Production cost":"<p>At £15 and a £9 cost, <b>we make only £6 per acre</b>, before distribution and fixed costs. With 200 farmers on 24,000 acres, the market is £360,000 per harvest, <b>about £1.1 million a year</b>, with profit under £400,000. <b>So what</b>: that's 20% of today's revenue, but a small market with little room to grow. <b>On its own, it looks too small</b>; I'd look at licensing or other fruits.</p>",
  "Recommendation":"<p><b>We were asked whether Fruit Nation should commercialize its fertilizer. I recommend it doesn't, for three reasons.</b> One, <b>the profit opportunity is too small</b>: £6 per acre before distribution and fixed costs, and about £1 million of revenue a year. Two, <b>over-supply</b> could push goji prices down and erode the fertilizer's value. Three, <b>selling into China brings many challenges</b>, some outside our control. <b>With more time</b>, I'd explore licensing the technology to a local manufacturer, or applying it to other fruits.</p>"
 }},
sgtaxis:{
 open:"<p><b>Just to confirm</b>: we want the number of vehicles currently used as taxis in Singapore, excluding decommissioned ones, and taxis have 50% of ride volume, with e-hailing the rest. <b>Could I take a minute to structure my approach?</b></p>",
 steps:{
  "Framework":"<p><b>The fleet size depends on demand for taxi rides and how many rides each taxi can handle</b>, so fleet equals total rides divided by rides per taxi. <b>Demand comes from two groups</b>: residents, as population times rides per person times the taxi share; and foreign visitors, as visitors times rides per visitor times the taxi share. <b>Supply per taxi</b> is its operating hours divided by the average ride time. <b>Does that sound good?</b></p>",
  "Rides by residents":"<p><b>I'll segment residents by how often they ride.</b> Daily users, 5%, take about 12 rides a week, roughly 31 a year on a weighted basis. Frequent users, 10%, about 10. Average users, 20%, about 5. Occasional users, half the population, 1. And 15% never ride. <b>That's about 50 rides per person a year.</b> With 5.5 million people and taxis taking 50%, <b>that's about 140 million taxi rides</b>.</p>",
  "Rides by visitors":"<p><b>I'll estimate visitors from the airport.</b> About 20 planes an hour, 14 hours a day, with 200 passengers each, is about 20 million arrivals; half are transiting, so <b>10 million visitors</b>, staying about 3 days. Business travelers, half, take about 12 rides; tourists, 30%, about 6; backpackers, 20%, just 2. <b>That's about 8 rides per visitor</b>, so 10 million times 8 times 50% is <b>about 40 million rides</b>.</p>",
  "Rides per taxi":"<p>A taxi runs about 12 hours a day, 350 days a year, but only carries passengers about 70% of the time: <b>roughly 3,000 busy hours</b>. Singapore is small, so a ride takes about half an hour. <b>That's about 6,000 rides per taxi a year.</b></p>",
  "Fleet size":"<p>140 million plus 40 million is 180 million rides, divided by 6,000 per taxi: <b>about 30,000 taxis</b>.</p>",
  "Interpretation":"<p><b>I'd group the reasons into three.</b> <b>Taxis' share fell</b>: e-hailing took riders, public transport improved, fares rose, or drivers' reputation suffered. <b>The relevant population shrank</b>: fewer visitors, or an aging population commuting less. <b>Each taxi became more productive</b>: apps match riders faster, and GPS and less congestion make rides shorter.</p>",
  "Wrap-up":"<p><b>Singapore has about 30,000 taxis</b>: roughly 180 million taxi rides a year, 140 million from residents and 40 million from visitors, divided by about 6,000 rides per taxi. <b>The most sensitive assumption is rides per resident</b>, which I'd refine with real ride data. The actual fleet, about 23,000, is lower, likely because e-hailing took share and taxis are used more efficiently.</p>"
 }}
});
Object.assign(window.CASE_GUIDE,{
roko:{
 book8:{buckets:[["Financial considerations (revenue)",["Rooms × utilization × price × days","Weekday vs. weekend, standard vs. premium","F&B and other services"]],["Financial considerations (costs)",["Fixed: salaries, maintenance, insurance","Variable: utilities, F&B, booking fees"]],["Customer segmentation & needs",["Business travelers (weekdays) vs. tourists (weekends)"]],["Competitive landscape",["New hotels, Airbnb, chains' prices"]]],
  note:"The case wants a tailored revenue/cost tree. The book's Customer and Competition buckets help later, to explain why weekends collapsed."},
 steps:{
  "Framework":{shape:["Name the case type: profitability","Revenue formula, then other revenue","Costs: fixed vs. variable","Say where you'd start, then check in"],phrases:["\"Room revenue is rooms × utilization × price × days.\"","\"I'd start with room revenue.\""]},
  "This year's revenue":{shape:["Rooms filled per week, by type, weekdays and weekends","× price = weekly revenue","× 50 weeks","One insight from the data","Next step"],phrases:["\"Let me work out rooms filled per week, weekdays and weekends separately.\"","\"One insight already:…\""]},
  "Last year's revenue":{shape:["Spot what changed (weekends only)","Adjust just that part: the shortcut","Annual figure and the gap","Name the driver"],phrases:["\"Weekdays haven't changed; only weekends have, so I'll just adjust those.\"","\"So the decline is driven by weekend utilization.\""]},
  "Why weekends dropped":{shape:["Three groups: competition, demand, our own actions","2–3 reasons each","Link to the weekday/weekend split"],phrases:["\"I'd group possible reasons into three areas.\"","\"This looks like a tourist problem.\""]},
  "New revenue streams":{shape:["Split by who pays: guests / non-guests","4–5 ideas each"],phrases:["\"I'd split ideas by who pays.\""]},
  "Recommendation":{shape:["Restate the question","Diagnosis with numbers","Three actions","Next step: costs"],phrases:["\"We were asked why… and how to turn it around.\"","\"As a next step, we should analyze costs.\""]}
 }},
fruitnation:{
 book8:{buckets:[["Market attractiveness",["Goji farming in China: size, growth","Share of farmers open to fertilizer"]],["Financial considerations",["Willingness to pay (value to farmer)","Production, shipping, distribution, fixed costs"]],["Company capabilities",["Scale, supply chain, local knowledge"]],["Risks & mitigations",["Copying, patents, import rules, bad press, over-supply"]]],
  note:"Almost identical to the case's own 4 buckets: market, profitability, capabilities, risks."},
 steps:{
  "Framework":{shape:["Four buckets: market, profitability, capabilities, risks","2–3 sub-questions each","Check in"],phrases:["\"I'd look at four areas.\""]},
  "Value to a farmer":{shape:["Name the two sources of value","Price premium per year","Value of the third harvest","Total per acre per year, then per harvest"],phrases:["\"The fertilizer creates value in two ways.\"","\"Divided by three harvests, about £30 per acre per harvest.\""]},
  "Setting the price":{shape:["Maximum = value to the farmer","Why price below it","Pick a price and show the farmer still gains","What you need next"],phrases:["\"£30 is the most a farmer could pay, but at that price they'd gain nothing.\""]},
  "Challenges in China":{shape:["Two groups: legal / capability","3–4 points each"],phrases:["\"I'd split the challenges into legal and capability.\""]},
  "Launch risks":{shape:["Two groups: customers / market","Highlight the over-supply effect"],phrases:["\"Three harvests means 50% more supply.\""]},
  "Production cost":{shape:["Margin per acre","Market size per harvest and per year","Compare with current revenue","So what, and alternatives"],phrases:["\"We make only £6 per acre.\"","\"On its own, it looks too small.\""]},
  "Recommendation":{shape:["Restate and answer: no","Three reasons","Alternatives as next steps"],phrases:["\"I recommend it doesn't, for three reasons.\""]}
 }},
sgtaxis:{
 book8:{buckets:[["Demand (a formula)",["Residents × rides × taxi share","Visitors × rides × taxi share"]],["Supply per taxi (a formula)",["Hours × utilization ÷ ride length"]],["Customer segmentation",["Daily / frequent / occasional users","Business / tourist / backpacker"]]],
  note:"A pure estimation: the book says to use a formula, not buckets. Segmenting customers is where the 8-bucket thinking helps."},
 steps:{
  "Framework":{shape:["Fleet = rides ÷ rides per taxi","Demand: residents + visitors","Supply: hours ÷ ride length","Check in"],phrases:["\"The fleet size depends on demand for rides and how many rides each taxi can handle.\""]},
  "Rides by residents":{shape:["Segment by frequency","Weighted rides per person","× population × taxi share"],phrases:["\"I'll segment residents by how often they ride.\""]},
  "Rides by visitors":{shape:["Estimate visitors (airport)","Remove transit","Segment visitors","× rides × taxi share"],phrases:["\"I'll estimate visitors from the airport.\""]},
  "Rides per taxi":{shape:["Hours a day × days","× utilization","÷ ride length"],phrases:["\"Roughly 3,000 busy hours a year.\""]},
  "Fleet size":{shape:["Add demand","Divide by supply per taxi","State the answer"],phrases:["\"About 30,000 taxis.\""]},
  "Interpretation":{shape:["Three groups: share, population, utilization","2–3 reasons each"],phrases:["\"I'd group the reasons into three.\""]},
  "Wrap-up":{shape:["Answer first","How it was built","Most sensitive assumption","Compare with reality"],phrases:["\"The most sensitive assumption is…\""]}
 }}
});

/* ===== Canadian Wildlife Federation · Clean-All · A-EYE ===== */
window.CASES.push(
{
  id:"cwf", title:"Canadian Wildlife Federation", type:"Non-profit strategy", diff:"Medium", mins:30,
  plain:"A wildlife non-profit wants to know why the swift fox population is collapsing and how to stop it. The candidate structures the problem as births, deaths and migration, reads two exhibits (highways splitting the population; gender and disease by group), calculates next year's population change, and gives a 30-second public statement.",
  bottom:"Structure: <b>fewer births / more deaths / net migration</b>. Highways split the foxes into 4 groups with <b>gender imbalance</b> (fewer pairs) and high <b>disease</b>. Next year: ~525 births − ~810 disease deaths − ~420 natural deaths ≈ <b>−705, about −14%</b>; without the disease the population would be roughly stable. Priorities: tackle the disease, then fix the gender imbalance.",
  prompt:["Your client is the Canadian Wildlife Federation (CWF), a government-affiliated non-profit that aims to educate Canadians about wildlife and promote responsible human actions and conservation.","One endangered species, the swift fox, has been declining dramatically.","CWF has asked your firm to help figure out what's causing this decline, and what they can do to stop it declining any further."],
  clarify:[
    ["Has the population always been falling?","Swift fox populations were historically stable until this past year."],
    ["Is there a recovery target?","No specific targets for the population recovery."],
    ["What do swift foxes eat?","The swift fox is an omnivore."],
    ["Has the environment changed?","Environmental factors have remained relatively unchanged over time."],
    ["Is CWF worried about anything specific?","Yes: a new outbreak of a deadly gastrointestinal disease has affected several Canadian forests, including the swift fox's habitat."],
    ["Are they hunted?","There are no hunting licenses for swift foxes."]
  ],
  openListen:["Plays back: endangered fox, sudden decline this past year, find causes and solutions","Asks what changed recently (finds the disease outbreak)","Asks about hunting and environment"],
  steps:[
    {name:"Framework", time:"3 min",
     say:["What factors would you consider to answer the client's questions?"],
     steer:["Original case: this is an unusual question to structure. Look for a population equation: change = births − deaths ± migration.","Share the clarifying facts above if asked."],
     listen:["Fewer births: health, gender imbalance","More deaths: hunting, shortage of food/water/shelter, disease","More net migration (departures − arrivals): habitat destruction or change, human interference"],
     check:["Fewer births: deterioration in health","Fewer births: gender imbalance","More deaths: hunting","More deaths: shortage of food, water or shelter","More deaths: more disease","Net migration: destruction or change of habitat","Net migration: more human interference"],
     probe:["\"What makes any population go up or down?\"","\"Could foxes simply be leaving?\""],
     ifwrong:[["Uses a business framework (market, competitors…)","\"Think of it like a population: what adds foxes and what removes them?\""]],
     key:"<p><b>1. Fewer births</b>: deteriorating health, gender imbalance. <b>2. More deaths</b>: hunting, shortage of food/water/shelter, disease. <b>3. Higher net migration</b> (departures − arrivals): habitat destruction or change, human interference.</p>",
     stuck:["\"How does a population change from one year to the next?\""]},
    {name:"Reading the exhibits", time:"4–5 min",
     say:["The swift fox population was split into four groups by new interprovincial highways built five years ago. We've gathered this data on each group's habitat and demographics. What can you conclude from these exhibits?"],
     give:{when:"Right away (Exhibits 1 and 2).",
       html:`<p><b>Exhibit 1.</b> Current swift fox habitat</p><div class="tw"><svg viewBox="0 0 420 260" width="100%" style="max-width:420px;min-width:300px" role="img" aria-label="Map: highways split the habitat into four groups A to D"><path d="M20 40 Q60 10 160 18 Q260 6 360 30 Q410 50 405 140 Q412 220 360 250 Q250 262 150 248 Q60 250 30 200 Q8 120 20 40 Z" style="fill:var(--line);opacity:.55"/><g style="stroke:var(--ink)" stroke-width="12" stroke-linecap="round" fill="none"><path d="M205 120 L200 12"/><path d="M205 120 L18 112"/><path d="M205 120 L410 72"/><path d="M205 120 L392 250"/></g><g stroke="#f2c230" stroke-width="2" stroke-dasharray="8 6" fill="none"><path d="M205 120 L200 12"/><path d="M205 120 L18 112"/><path d="M205 120 L410 72"/><path d="M205 120 L392 250"/></g><g style="fill:var(--accent)"><ellipse cx="105" cy="58" rx="48" ry="22"/><ellipse cx="290" cy="45" rx="48" ry="22"/><ellipse cx="115" cy="180" rx="52" ry="24"/><ellipse cx="345" cy="160" rx="42" ry="22"/></g><g text-anchor="middle" style="fill:var(--paper);font-size:13px;font-weight:600"><text x="105" y="63">Group A</text><text x="290" y="50">Group C</text><text x="115" y="185">Group B</text><text x="345" y="165">Group D</text></g></svg></div><p><b>Exhibit 2.</b> Swift fox demographics by group</p><div class="tw"><table class="data"><tr><th>Group</th><th>Fraction of population</th><th>% male</th><th>% female</th><th>% affected by disease</th></tr><tr><td>A</td><td>1/4</td><td>10%</td><td>90%</td><td>25%</td></tr><tr><td>B</td><td>1/8</td><td>30%</td><td>70%</td><td>40%</td></tr><tr><td>C</td><td>3/8</td><td>50%</td><td>50%</td><td>10%</td></tr><tr><td>D</td><td>1/4</td><td>40%</td><td>60%</td><td>5%</td></tr></table></div>`},
     listen:["Gender imbalance: only Group C is 50-50; A, B and D have more females","The highways split the population unevenly, which may drive the imbalance and lower births","Disease rates are inconsistent and high in three of four groups; maybe linked to each side of the highway","No link between disease and group size or gender balance","Unclear why: maybe males roam further and die crossing highways","Conclusion: decline driven by disease and gender imbalance"],
     check:["Gender distribution unbalanced (A, B, D more females)","Highways split the population disproportionately → imbalance → fewer births","Disease inconsistent and high in three groups, maybe tied to environment on each side","No correlation between disease and size or gender balance","Possible cause: males travel further and are killed on highways","Next: study the disease, ways to reduce it, and rebalancing the genders"],
     probe:["\"What does a 10% male group mean for births?\"","\"Is disease related to group size?\""],
     key:"<p>The population decline seems driven by <b>disease</b> and <b>gender imbalance</b> within groups. Only Group C is balanced; three groups have high and uneven disease rates; the highways split the population and may cause the imbalance (e.g. males roaming further and dying on the roads). Next: investigate the disease, ways to reduce it, and how to rebalance the gender mix.</p>",
     stuck:["\"Go column by column in Exhibit 2.\""]},
    {name:"Births next year", time:"4–5 min",
     say:["The client is curious how much the disease and the gender disparity matter for the overall population. Let's build it up. How many foxes will be born next year?"],
     steer:["Original case: share the facts below if asked."],
     give:{when:"When asked.",
       html:"<ul><li>There are <b>5,000</b> swift foxes</li><li>Swift foxes choose only one mate for life</li><li>Mating season is once a year (1 litter), but pairs mate once every <b>five</b> years</li><li>Diseased foxes can give birth</li><li>The average litter yields <b>1.5</b> foxes</li><li>All deaths not caused by disease are natural</li><li>Life expectancy is <b>10 years</b>, but foxes with the disease live only <b>one</b> year</li><li>Net migration is zero</li></ul>"},
     num:{value:525, tol:.04, unit:"foxes born next year"},
     listen:["Pairs are limited by the scarcer sex in each group","A: 1,250 × 10% = 125; B: 625 × 30% ≈ 190; C: 1,875 × 50% ≈ 940; D: 1,250 × 40% = 500 → ~1,750 pairs","Births per pair per year = 1.5 × 2 litters per life ÷ 10 years = 0.3","1,750 × 0.3 = 525"],
     ifwrong:[["Counts all foxes ÷ 2 as pairs","\"If a group has 10 males and 90 females, how many pairs can form?\""],["Uses 1.5 births per pair per year","\"How often does a pair actually mate?\""]],
     key:"<p class=\"calc\">Births per pair per year = 1.5 × (10 ÷ 5) litters ÷ 10 years = 0.3\nPairs: A 125 + B ~190 + C ~940 + D 500 ≈ 1,750\nBirths ≈ 1,750 × 0.3 = 525</p>",
     stuck:["\"How many pairs can form in a group with 10% males?\"","\"How many litters does a pair have in a lifetime?\""]},
    {name:"Deaths next year", time:"4 min",
     say:["And how many will die next year?"],
     num:{value:1230, tol:.04, unit:"fox deaths next year"},
     listen:["Disease deaths: all diseased foxes die within a year: A ~310, B 250, C ~190, D ~60 → ~810","Natural deaths = healthy population ÷ 10","Healthy: 940 + 375 + 1,685 + 1,190 ≈ 4,190 → ~420","Total ≈ 1,230"],
     key:"<p class=\"calc\">Disease: A 1,250×25% ≈ 310, B 625×40% = 250, C 1,875×10% ≈ 190, D 1,250×5% ≈ 60 → ~810\nHealthy: 940 + 375 + 1,685 + 1,190 ≈ 4,190 → natural deaths ≈ 4,190 ÷ 10 ≈ 420\nTotal ≈ 1,230</p><p class=\"muted\">The original prints 1,865 for Group C's healthy foxes; the correct figure is 1,685 (the total, ~4,190, is right).</p>",
     stuck:["\"Which foxes die from disease, and which die naturally?\""]},
    {name:"Population change", time:"2–3 min",
     say:["So by how much would you expect the population to decline next year, and what does that tell you?"],
     num:{min:-15, max:-13, unit:"% change in population"},
     listen:["Δ = 525 − 810 − 420 ≈ −705 ≈ −14%","A 14% yearly decline is highly concerning","Without the disease: 525 births vs. 500 natural deaths ≈ +0.5%: roughly stable","Actions: cure the disease, separate diseased foxes, find and remove its source; fix the gender imbalance to restore males in A, B, D"],
     key:"<p class=\"calc\">Δ = 525 − 810 − 420 ≈ −705 ≈ −14% of 5,000</p><p>Without the disease the population would be about stable (525 − 500 = +25, +0.5%). So: reduce disease deaths (cures, isolating diseased foxes, removing the source) and increase births (restore males in groups A, B and D).</p>"},
    {name:"Public statement", time:"1 min",
     say:["The chairman of CWF has an upcoming public statement and would like a 30-second synopsis of key findings to share with the local community. What would you tell her?"],
     listen:["Restates the question","Finding: ~14% decline a year, mostly from the disease (life expectancy 10 → 1 year) and gender imbalance","Next steps: a cure-and-eradicate plan (capital and time), and a root-cause analysis of the gender imbalance","Short and suitable for the public"],
     key:"<p>\"You asked us what's causing the dramatic decline in the swift fox population, and how to stop it. We found the population is declining about 14% a year, mostly because of a gastrointestinal disease that cuts life expectancy from 10 years to 1, and a gender imbalance between groups. Over the next couple of weeks we'll build a plan to cure and eradicate the disease, with the capital and time required, and analyze the root cause of the gender imbalance to design a rebalancing strategy.\"</p>"}
  ]
},
{
  id:"cleanall", title:"Clean-All", type:"Growth strategy", diff:"Easy", mins:30,
  plain:"A Nigerian laundry chain has stopped growing as start-ups take share. The candidate structures growth options, prioritizes value-added services from an exhibit, evaluates free pick-up and drop-off, compares delivery costs (in-house vs. two agencies), and recommends.",
  bottom:"Only <b>free pick-up & drop-off</b> meets the <b>10% a year</b> growth goal (and it's the cheapest to launch), though it has a −2% margin. Delivery cost per trip: own <b>$15</b>, Agency A <b>$11.67</b>, Agency B <b>$11.08</b> → outsource to <b>Agency B</b> (check service quality). Recommend launching it, perhaps limited to larger orders to protect margins.",
  prompt:["Clean-All, a fast-growing private company in Nigeria, runs laundry outlets in 5 regions. It does machine washing, hand washing of delicate clothes, and ironing.","The company started ten years ago and grew very quickly almost every year, but for the last 2 years growth has plateaued. Five years ago there were only 5 players; recently many new laundry start-ups entered and took market share from traditional players like Clean-All.","Clean-All's leadership has asked you to advise on possible revenue growth strategies. What factors would you consider?"],
  clarify:[
    ["What's the growth goal?","The owners want tactical growth initiatives that increase the top line by at least 10% year-on-year for 3 to 5 years."],
    ["What are the start-ups doing differently?","We'll look at that shortly."],
    ["Can Clean-All invest?","Yes, they have funds to invest."]
  ],
  openListen:["Plays back: laundry chain, growth plateaued, start-ups taking share","Asks for the goal (≥10% a year for 3–5 years)"],
  steps:[
    {name:"Framework", time:"2–3 min",
     say:["How would you structure your approach to the question?"],
     listen:["Grow the core: more stores, more customers per store, more spend per customer","Grow in new areas: new services under the brand, a new operating model like the start-ups'"],
     check:["Core: open more stores (new cities)","Core: more customers per store (marketing, deals)","Core: more spend per customer (price, bundles, up-selling, loyalty)","New: new product or service line (repairs, dry-cleaning)","New: new operating model vs. start-ups (pick-up and drop-off)"],
     probe:["\"How could existing stores make more?\"","\"What are the start-ups offering that we don't?\""],
     key:"<p><b>1. Grow the core</b>: more stores (new cities), more customers per store (marketing, deals), more spend per customer (price, bundles, up-selling, loyalty). <b>2. Grow in new areas</b>: new service lines (clothing repairs, dry-cleaning), a new operating model to compete with start-ups (pick-up and drop-off).</p>"},
    {name:"Prioritizing services", time:"4 min",
     say:["Your team's research shows the industry is changing fast: new start-ups offer value-added services that lure customers in. This exhibit shows those services, and the cost and profit potential if Clean-All offered the same. Which should Clean-All consider the highest priority?"],
     steer:["Original case: the revenue impact is the impact on Clean-All. There's no single right answer.","If the candidate hasn't asked for the growth goal (10% a year), share it now as they consider their answer."],
     give:{when:"Right away (Exhibit 1).",
       html:`<p><b>Exhibit 1.</b> Impact of offering additional services</p><div class="tw"><table class="data"><tr><th>Value-added service</th><th>Capex ($)</th><th>Revenue impact (% a year)</th><th>Profit margin (%)</th></tr><tr><td>Tech assets (app, website…)</td><td>200,000</td><td>3</td><td>0</td></tr><tr><td>Free pick-up & drop-off*</td><td>100,000</td><td>10</td><td>−2</td></tr><tr><td>Clothing sanitization</td><td>300,000</td><td>3</td><td>2</td></tr><tr><td>Shoe shine</td><td>500,000</td><td>4</td><td>3</td></tr></table></div><p class="muted">* A paid version is currently offered by Clean-All.</p>`},
     listen:["Compares on growth, profit and investment","Shoe shine: best margin, but not enough growth and highest capex","Sanitization: cheaper, decent, but below 10%","Only free pick-up & drop-off meets the 10% goal, with the lowest capex, but a negative margin","Picks pick-up & drop-off and says the margin must be fixed"],
     key:"<p>Shoe shine looks best on profit, but its growth isn't enough and capex is high. Sanitization is cheaper with decent growth and profit but misses 10%. <b>Only free pick-up and drop-off meets the 10% growth goal</b>, with low investment, but it's margin-negative, so we'd explore ways to improve that.</p>",
     stuck:["\"Which of these meets the owners' growth goal?\""]},
    {name:"Evaluating pick-up", time:"3 min",
     say:["Clean-All is most interested in free pick-up and drop-off because of its revenue impact. How could you evaluate whether launching it would be a good idea?"],
     steer:["Original case: financial attractiveness was covered in the previous question, and assume Clean-All can invest. Once they answer, direct them to operational capability."],
     listen:["Financial attractiveness: revenue and profit impact","Feasibility: ability to invest and absorb lower profit","Operational capability, and whether current operations can handle more demand","Notes they already run a paid version"],
     key:"<p><b>Financial attractiveness</b>: revenue impact (meets 10%), profit impact (negative, so improve it). <b>Feasibility</b>: ability to invest and absorb the margin hit; operational capability. They already offer a paid version, so capability is likely there, but can operations cope with more demand?</p>"},
    {name:"Delivery cost", time:"5 min",
     say:["To make pick-up and drop-off free, Clean-All must cut its operating cost drastically. Today one delivery (either a pick-up or a drop-off) costs $15. Clean-All got quotes from specialist agencies. Should it keep running deliveries itself or outsource to one of these agencies?"],
     give:{when:"Right away (Exhibit 2). When asked: each courier does 8 trips a weekday, and double (16) on weekend days.",
       html:`<p><b>Exhibit 2.</b> Agency quotes</p><div class="tw"><table class="data"><tr><th rowspan="2">Trips per courier per day</th><th colspan="2">Agency A</th><th colspan="2">Agency B</th></tr><tr><th>Fixed daily fee</th><th>Per trip</th><th>Fixed daily fee</th><th>Per trip</th></tr><tr><td>&lt;5</td><td>$100</td><td>$5</td><td>$80</td><td>$6</td></tr><tr><td>5–10</td><td>$90</td><td>$4</td><td>$70</td><td>$5</td></tr><tr><td>11–15</td><td>$80</td><td>$3</td><td>$60</td><td>$4</td></tr><tr><td>15+</td><td>$75</td><td>$2.50</td><td>$60</td><td>$4</td></tr></table></div>`},
     num:{value:11.08, tol:.02, unit:"$ per delivery with the cheapest option"},
     listen:["Asks how many trips per courier per day","Agency A: weekdays 5 × (90 + 4×8) = $610; weekends 2 × (75 + 2.5×16) = $230 → $840 ÷ 72 trips ≈ $11.67","Agency B: weekdays 5 × (70 + 5×8) = $550; weekends 2 × (60 + 4×16) = $248 → $798 ÷ 72 ≈ $11.08","Both beat $15; Agency B is cheapest","Caveats: check service quality; A is cheaper on busy weekends"],
     ifwrong:[["Uses one rate for all days","\"Is the number of trips the same every day?\""],["Forgets the fixed daily fee","\"What does each agency charge per day regardless of trips?\""]],
     key:"<p class=\"calc\">Agency A: 5×(90+4×8) + 2×(75+2.5×16) = 610 + 230 = $840 / 72 trips ≈ $11.67\nAgency B: 5×(70+5×8) + 2×(60+4×16) = 550 + 248 = $798 / 72 trips ≈ $11.08\nOwn network: $15</p><p>Agency B is cheapest, but service quality must be checked. Agency A is cheaper on weekends; if weekday volume grows, switching may make sense.</p>",
     stuck:["\"How many trips a week, weekdays and weekends?\"","\"Which price bracket applies to 8 trips? To 16?\""]},
    {name:"Making it succeed", time:"3 min",
     say:["What else should Clean-All consider to make the pick-up and drop-off service a success?"],
     listen:["Structures: customer satisfaction vs. operational success","Several concrete ideas in each"],
     check:["Customer: app or website to track orders and deliveries","Customer: 5-star service, e.g. 24/7 phone line","Customer: elite branding customers are proud of","Operations: capability for good delivery times","Operations: flexible capacity (partners, back-up agency for spikes)","Operations: extra cash (delivering paid advertising flyers)","Operations: branded courier outfits and packaging"],
     probe:["\"What would make customers love this service?\"","\"What happens on a very busy day?\""],
     key:"<p><b>Customer satisfaction</b>: tracking app or website, great customer service (24/7 line), elite branding. <b>Operational success</b>: delivery-time capability, flexible capacity with partners or a back-up agency, extra revenue (paid flyers in deliveries), branded outfits and packaging.</p>"},
    {name:"Recommendation", time:"1–2 min",
     say:["What action do you recommend Clean-All takes to grow the business?"],
     listen:["Answer first: launch free pick-up and drop-off","Reasons: meets 10% growth; competitors offer it; cheapest to implement","Caveat: it hurts profit; limit to larger orders","Next steps: due diligence on Agency B; analyze the other services further"],
     key:"<p>\"Clean-All asked us for growth strategies delivering 10% a year. We recommend a free pick-up and drop-off service, for three reasons: it's expected to grow revenue 10% a year; competitors offer it, so it keeps Clean-All relevant; and it's the cheapest option to implement. As structured, it will eat into profit, so Clean-All might limit it to larger orders. With more time, I'd do due diligence on Agency B's ability to deliver laundry, and analyze the other value-added services further.\"</p>"}
  ]
},
{
  id:"aeye", title:"A-EYE", type:"Pricing", diff:"Medium", mins:30,
  plain:"An AI company has a camera system that spots manufacturing defects, and must price it for a wind-turbine blade maker. The candidate structures pricing (willingness to pay, costs, competition), calculates the customer's current rework cost, sets a subscription price that still saves the customer 25%, then protects market share and finds new applications.",
  bottom:"Breeze's rework costs <b>$5.4M a year</b> (20 late defects × 3 layers × $90k). With AI, late defects halve → <b>$2.7M</b>; no QA crew; $1M install amortized at $100k/yr. To deliver 25% savings on $5.7M (→ $4.275M), A-EYE can charge up to <b>$1,475,000 a year</b>. Protect share with contracts, switching costs and better product rather than price cuts; expand to solar, batteries, other manufacturing and inspection uses.",
  prompt:["Your client, A-EYE, has developed an extremely efficient AI visual anomaly detection (VAD) system that can detect manufacturing defects. A wind turbine manufacturer, Breeze, is interested.","The system can detect defects such as nicks and scratches on a wind turbine during manufacturing and automatically flag them. A-EYE specifically wants to use it to minimize defects while carbon fiber is layered onto Breeze's turbine blades.","This is A-EYE's first wind turbine blade client, and they need your help pricing the solution."],
  clarify:[
    ["How are the blades made?","Breeze's turbines have 3 blades, each 52 meters (170 ft) long, made of 30 layers of carbon fiber composite over a steel scaffolding."],
    ["How does the system work?","A camera on a fixed rail inspects the entire length of the blade; the images feed an AI model, which notifies workers of any defect."],
    ["What's A-EYE's goal?","To become the largest player in the industry, with the largest market share, and a long-term partner to top players like Breeze in sustainability and renewables."],
    ["Where are the companies?","Breeze is in Oslo, Norway; A-EYE is in Montreal, Canada."],
    ["How big is A-EYE?","A small-to-medium AI company with about 100 employees."]
  ],
  openListen:["Plays back: price an AI defect-detection system for its first wind-blade client","Asks A-EYE's goal (market share, long-term partner)","Asks how blades are made and how the system works"],
  steps:[
    {name:"Framework", time:"3 min",
     say:["What are the key considerations when pricing this solution?"],
     steer:["Original case: candidates may default to the 3 generic pricing methods (willingness to pay, cost, competition). Push them to specify how they'd assess each, tailored to this product and client."],
     listen:["Breeze's willingness to pay: current costs vs. net benefit (less inspection labor, less rework, fewer returns; happier customers, more capacity)","Payment model Breeze could accept: subscription vs. one-off purchase","A-EYE's costs and profit ambition: installation, running costs, fixed central costs, margin","Competition: similar products and their pricing, upcoming launches, moats"],
     check:["WTP: Breeze's current cost and benefit (status quo)","WTP: net benefit, lower costs (inspection labor, rework, returns)","WTP: net benefit, higher revenue (satisfaction, freed-up capacity)","Payment model: subscription","Payment model: one-off equipment + license","Costs: installation","Costs: recurring cost of running the model","Costs: fixed central (admin, R&D, sales & marketing)","Costs: profit margin ambition","Competition: similar products, pricing, effectiveness","Competition: products in development","Competition: moats and barriers to entry"],
     probe:["\"How exactly would you measure Breeze's willingness to pay?\"","\"What would Breeze save by using the system?\""],
     ifwrong:[["Lists 'value, cost, competition' only","\"How would you assess each of those for Breeze specifically?\""]],
     key:"<p><b>1. Breeze's willingness to pay</b>: current cost of the status quo vs. net benefit (lower inspection labor, rework, returns; higher satisfaction and capacity), and the payment model they'd accept (subscription vs. one-off). <b>2. A-EYE's costs and profit ambition</b>: installation, running costs, fixed central costs, target margin. <b>3. Competitive pressure</b>: similar products and pricing, upcoming launches, moats.</p>"},
    {name:"Rework cost today", time:"5–6 min",
     say:["Each blade has 30 layers of carbon fiber over a steel scaffolding. Breeze's team inspects each layer during manufacturing. If a defect is caught early, before the fiber hardens, it's fixed at no extra cost. If it's caught late, after hardening, the last 3 layers must be reapplied, which costs money.","How much does Breeze's blade rework cost today, per year?"],
     steer:["Original case: give Exhibits 1 and 2. A great question to see the candidate's quantitative thinking; push on any assumptions."],
     give:{when:"Exhibits right away; the bullet facts if requested.",
       html:`<p><b>Exhibit 1.</b> Carbon fiber defects per 100 blades</p><div class="tw"><svg viewBox="0 0 360 220" width="100%" style="max-width:360px;min-width:280px" role="img" aria-label="Stacked bars: manual 35 early and 10 late; with AI 40 early and 5 late"><line x1="40" y1="180" x2="340" y2="180" style="stroke:var(--muted)"/><g style="fill:var(--accent)"><path d="M90 180 V75 H160 V180 Z"/><path d="M220 180 V60 H290 V180 Z"/></g><g style="fill:var(--muted)"><path d="M90 73 V47 Q90 45 92 45 H158 Q160 45 160 47 V73 Z"/><path d="M220 58 V47 Q220 45 222 45 H288 Q290 45 290 47 V58 Z"/></g><g text-anchor="middle" style="font-size:12px;font-weight:600;fill:var(--paper)"><text x="125" y="132">35 early</text><text x="255" y="124">40 early</text><text x="125" y="64">10 late</text></g><g text-anchor="middle" style="font-size:12px;fill:var(--ink)"><text x="255" y="40">5 late</text><text x="125" y="198">Manual</text><text x="255" y="198">With AI</text></g></svg></div><p class="muted">Early = caught before hardening (no extra cost). Late = caught after the fiber has set: 3 layers must be reworked.</p><p><b>Exhibit 2.</b> Manufacturing costs</p><div class="tw"><table class="data"><tr><td>Total manufacturing cost per blade</td><td>$3,500,000</td></tr><tr><td>Cost of blade scaffolding</td><td>$800,000</td></tr><tr><td>Layers of carbon fiber</td><td>30</td></tr><tr><td>Layers refinished per rework</td><td>3</td></tr></table></div><p class="muted">If requested: Breeze makes <b>200</b> blades a year; a blade's cost is only scaffolding + carbon fiber; reworking one layer costs the blade's total carbon fiber cost ÷ number of layers.</p>`},
     num:{value:5.4e6, tol:.03, unit:"$ rework cost per year"},
     listen:["Annual rework cost = cost per rework × reworks a year","Cost per layer = ($3.5M − $0.8M) ÷ 30 = $90,000","Cost per rework = 3 × $90k = $270,000","Only late defects cost money: 10 per 100 blades → 0.1 × 200 = 20 reworks","20 × $270k = $5.4M"],
     ifwrong:[["Counts early defects too","\"Do early defects cost anything?\""],["Divides the full $3.5M by 30","\"Is the scaffolding part of the carbon fiber cost?\""]],
     key:"<p class=\"calc\">Cost per layer = ($3,500,000 − $800,000) ÷ 30 = $90,000\nCost per rework = 3 × $90,000 = $270,000\nReworks/year = 10/100 × 200 blades = 20\nAnnual rework cost = 20 × $270,000 = $5,400,000</p>",
     stuck:["\"What's the formula for the annual rework cost?\"","\"What does one layer of carbon fiber cost?\""]},
    {name:"Subscription price", time:"5 min",
     say:["What price should A-EYE charge for an annual subscription, if their aim is to deliver Breeze total savings of 25% versus current costs?"],
     steer:["Original case: the candidate should ask for the facts below while laying out their approach. If they don't, prompt them to think about other costs.","A very similar calculation to the last one: the key change is the detection efficiency. Guide them to price on Breeze's maximum willingness to pay, while respecting the 25% savings goal."],
     give:{when:"As they lay out their approach (or prompt them).",
       html:"<ul><li>Breeze pays <b>$300K</b> a year for a 4-person QA crew doing manual inspection</li><li>The AI model costs <b>$0</b> to maintain</li><li>Installation and model training cost <b>$1M</b> one-off, paid by Breeze, amortized over <b>10 years</b> (ignore cost of capital)</li><li>Breeze's volume and costs stay constant</li></ul>"},
     num:{value:1.475e6, tol:.02, unit:"$ maximum annual subscription"},
     listen:["Current total cost: $5.4M rework + $0.3M labor = $5.7M","Target: 75% × $5.7M = $4.275M","New rework: late defects halve (5 per 100) → 0.05 × 200 × $270k = $2.7M","Amortization: $1M ÷ 10 = $100k","Price = $4.275M − $2.7M − $0.1M = $1.475M","Mentions extra benefits: fewer delivery delays, happier customers"],
     ifwrong:[["Forgets the QA crew","\"What other costs does Breeze have today?\""],["Forgets the installation cost","\"Who pays for installation, and how would you spread it?\""]],
     key:"<p class=\"calc\">Current: $5.4M + $0.3M = $5.7M → target 75% = $4.275M\nNew rework: 0.05 × 200 × $270k = $2.7M\nAmortization: $1M ÷ 10 = $0.1M\nMax price = 4.275 − 2.7 − 0.1 = $1.475M per year</p><p>Extra benefits (fewer delivery delays, higher customer satisfaction) could justify more; check competitor pricing next.</p>",
     stuck:["\"What will Breeze's total cost be after a 25% saving?\"","\"Which costs remain once the AI is installed?\""]},
    {name:"Protecting market share", time:"3–4 min",
     say:["A competitor is expected to enter with a similarly priced solution. What are some ways A-EYE can protect its market share?"],
     steer:["Original case: test for comprehensiveness. Lowering the price is possible but not ideal: service costs are near zero for both, so it could start a price war."],
     listen:["Retain clients: long-term contracts, switching costs, compete on value","Increase sales and marketing","Join forces with the competitor","Diversify","Says why a price cut is risky"],
     check:["Lock in clients with long-term contracts","Switching costs: integrate with other manufacturing software","Switching costs: model improves with historical data","Switching costs: limit data export","Compete: better performance","Compete: outstanding customer service","Compete: new features","Compete: solutions for other process steps (e.g. scaffolding)","Lower prices (risk of price war)","Increase sales & marketing","Partner with, acquire or merge with the competitor","Diversify into new applications"],
     probe:["\"How could A-EYE make it hard for Breeze to switch?\"","\"Why might cutting the price be dangerous here?\""],
     key:"<p><b>1. Retain clients</b>: long-term contracts; make switching hard (software integration, a model that improves with history, limited data export); compete on performance, service, features and adjacent processes; lower prices only as a last resort. <b>2. More sales & marketing.</b> <b>3. Join forces</b> with the competitor. <b>4. Diversify</b> into new applications.</p>"},
    {name:"Other applications", time:"3 min",
     say:["What are some other areas where A-EYE could apply and market its AI technology?"],
     steer:["Original case: share that the model learns the 'good' state from images and flags any difference. This question tests creativity and communication."],
     listen:["Structures: manufacturing defects vs. object identification","Many concrete examples"],
     check:["Defects, sustainability: solar panels, batteries","Defects, other manufacturing: defence and space","Defects: electronics","Defects: automotive","Defects: energy, consumer, other advanced industries","Identification, process industries: waste management","Identification: agriculture","Identification: food production","Identification: medical scans (X-ray)","Identification: emissions control","Applications: self-driving cars","Applications: augmented reality","Applications: smart cities"],
     probe:["\"Where else do people inspect things visually today?\""],
     key:"<p><b>1. Manufacturing defects</b>: sustainability (solar panels, batteries); other manufacturing (defence and space, electronics, automotive, energy, consumer). <b>2. Object identification</b>: process industries (waste, agriculture, food, medical scans, emissions control) and applications (self-driving cars, AR, smart cities).</p>"},
    {name:"Recommendation", time:"1–2 min",
     say:["What is your overall recommendation at this stage?"],
     listen:["Answer first: price at ~$1.475M a year","Based on Breeze's savings and the 25% goal","Extra benefits could support a higher price","Protect share: contracts, switching costs, better product","Expand into other manufacturing and inspection uses"],
     key:"<p>\"We were asked to help A-EYE price its anomaly-detection solution for Breeze. Based on the savings it generates, Breeze's willingness to pay and A-EYE's goal of saving Breeze 25%, we recommend an annual subscription of about $1.475M. That ignores extra benefits like fewer delivery delays and happier customers, which could support a higher price. To protect against the new competitor, A-EYE should lock in long-term contracts, make switching harder and keep improving the product, using price cuts only as a last resort. It should also expand into other manufacturing processes, inside and outside sustainability, and into process industries and new applications.\"</p>"}
  ]
}
);
Object.assign(window.CASE_ADDITIONS,{
  cwf:{steps:{"Births next year":["partly","The math is the case's; splitting the question into births, deaths and change is added."],"Deaths next year":["partly","The math is the case's; splitting the question into births, deaths and change is added."]}},
  cleanall:{clarify:[1,2]},
  aeye:{}
});
Object.assign(window.CASE_SCRIPTS,{
cwf:{
 open:"<p><b>Let me make sure I understand.</b> CWF is a government-affiliated conservation non-profit. The endangered swift fox population has been falling dramatically, and <b>CWF wants to know why, and how to stop it</b>. Could I ask: has it always been falling? Has anything changed recently in their habitat, such as disease or hunting? And is there a recovery target?</p>",
 steps:{
  "Framework":"<p><b>A population changes through births, deaths and migration, so I'd use those three buckets.</b> <b>Fewer births</b>: worse health, or a gender imbalance that limits pairs. <b>More deaths</b>: hunting, shortages of food, water or shelter, or disease. <b>Higher net migration</b>: foxes leaving because their habitat was destroyed or changed, or because of human interference. <b>Given the new disease outbreak, I'd start with deaths.</b> <b>Does that sound good?</b></p>",
  "Reading the exhibits":"<p><b>Two things stand out.</b> <b>First, gender imbalance</b>: only Group C is 50-50; Groups A, B and D have far more females, Group A only 10% male. That limits pairs and births, and the highways may be the cause, perhaps because males roam further and die crossing them. <b>Second, disease</b>: rates are high and uneven, 40% in B and 25% in A, with no link to group size or gender, perhaps tied to the environment on each side of the highway. <b>So the decline seems driven by disease and gender imbalance.</b></p>",
  "Births next year":"<p><b>Births are limited by the number of possible pairs</b>, which depends on the scarcer sex in each group. Group A: 1,250 foxes, 10% male, so 125 pairs; B about 190; C about 940; D 500: <b>about 1,750 pairs</b>. A pair mates every 5 years over a 10-year life, so 2 litters of 1.5, which is <b>0.3 births per pair per year</b>. <b>About 525 births.</b></p>",
  "Deaths next year":"<p><b>Two kinds of deaths.</b> <b>Disease</b>: diseased foxes live only a year, so all of them die: about 310 in A, 250 in B, 190 in C and 60 in D, <b>about 810</b>. <b>Natural deaths</b>: the healthy population, about 4,190, divided by a 10-year life expectancy, <b>about 420</b>. <b>So about 1,230 deaths.</b></p>",
  "Population change":"<p>525 births minus 1,230 deaths is <b>about minus 705, a 14% decline in one year</b>. <b>That's alarming.</b> <b>So what</b>: without the disease, births of 525 would roughly match 500 natural deaths, so the population would be stable. <b>The priority is the disease</b>: find cures, separate diseased foxes, and remove its source; <b>then restore males</b> in groups A, B and D to increase births.</p>",
  "Public statement":"<p><b>You asked us what's causing the swift fox decline and how to stop it.</b> The population is falling about 14% a year, mainly because of a gastrointestinal disease that cuts a fox's life from ten years to one, and because the highways have left some groups with too few males. <b>Over the next two weeks</b>, we'll build a plan to cure and eradicate the disease, with the time and funding it needs, and identify why the genders are imbalanced so we can rebalance them.</p>"
 }},
cleanall:{
 open:"<p><b>To recap</b>: Clean-All is a Nigerian laundry chain in 5 regions, offering machine washing, hand washing and ironing. It grew fast for years but has plateaued for two, as start-ups took share. <b>They want revenue growth strategies.</b> Could I ask: is there a specific growth target and timeframe?</p>",
 steps:{
  "Framework":"<p><b>I'd look at two ways to grow.</b> <b>First, grow the core</b>: open more stores in new cities, bring more customers into each store through marketing and deals, and raise spend per customer through pricing, bundles, up-selling and loyalty. <b>Second, grow in new areas</b>: new services under our brand, like repairs or dry-cleaning, or a new operating model, like the start-ups' pick-up and drop-off. <b>Does that sound good?</b></p>",
  "Prioritizing services":"<p><b>I'd compare them on growth, profit and investment, against the 10% goal.</b> Shoe shine has the best margin, but only 4% growth and the highest cost. Sanitization is cheaper with a positive margin, but 3% growth. <b>Only free pick-up and drop-off reaches 10% growth</b>, and it's the cheapest to launch. <b>The catch is its −2% margin</b>, so I'd prioritize it while finding ways to make it profitable.</p>",
  "Evaluating pick-up":"<p><b>I'd evaluate it on two dimensions.</b> <b>Financial attractiveness</b>: it meets the growth goal, but profit is negative, so we need ways to improve the economics. <b>Feasibility</b>: can Clean-All invest and absorb the margin hit, and does it have the operational capability? <b>Since it already runs a paid version, capability is likely there</b>; the question is whether operations can handle much more demand.</p>",
  "Delivery cost":"<p><b>I'll compare cost per delivery for each option.</b> Each courier does 8 trips a weekday and 16 on weekend days, so 72 trips a week. <b>Agency A</b>: weekdays 5 times $90 plus $32, $610; weekends 2 times $75 plus $40, $230; $840 for 72 trips, <b>about $11.67</b>. <b>Agency B</b>: $550 on weekdays plus $248 on weekends, $798, <b>about $11.08</b>. Both beat our $15, <b>so I'd outsource to Agency B</b>, after checking its service quality. Agency A is cheaper on busy weekends, which matters if volume grows.</p>",
  "Making it succeed":"<p><b>I'd focus on two things.</b> <b>Customer satisfaction</b>: an app to track orders, excellent service like a 24/7 line, and a premium brand people are proud of. <b>Operational success</b>: reliable delivery times, back-up capacity from a second agency for peaks, extra income such as paid flyers in deliveries, and branded courier uniforms and packaging.</p>",
  "Recommendation":"<p><b>Clean-All asked for ways to grow revenue 10% a year. We recommend launching free pick-up and drop-off, for three reasons.</b> It's expected to grow revenue 10% a year; competitors offer it, so it keeps Clean-All relevant; and it's the cheapest option to implement. <b>It will reduce profit as structured</b>, so Clean-All could limit it to larger orders and outsource delivery to Agency B. <b>Next steps</b>: due diligence on Agency B, and a closer look at the other services.</p>"
 }},
aeye:{
 open:"<p><b>Let me make sure I understand.</b> A-EYE has an AI system that spots manufacturing defects, and needs to price it for its first wind-turbine client, Breeze, to catch defects as carbon fiber is layered onto blades. <b>The question is what price to charge.</b> Could I ask: what's A-EYE's goal with this client? How are the blades made? And how does the system work in practice?</p>",
 steps:{
  "Framework":"<p><b>I'd look at the price from three angles, tailored to Breeze.</b> <b>First, Breeze's willingness to pay</b>: what defects cost them today in inspection labor, rework and returns, how much our system saves, and whether they'd prefer a subscription or a one-off purchase. <b>Second, A-EYE's costs and profit ambition</b>: installation, running costs, central costs and target margin. <b>Third, competition</b>: similar products, upcoming launches, and our moats. <b>Does that sound good?</b></p>",
  "Rework cost today":"<p><b>Annual rework cost is cost per rework times reworks a year.</b> The carbon fiber in a blade costs $3.5 million minus $0.8 million of scaffolding, $2.7 million, so <b>$90,000 per layer</b>, and a rework redoes 3 layers: <b>$270,000</b>. Only late defects cost money: 10 per 100 blades, so 20 a year on 200 blades. <b>20 times $270,000 is $5.4 million a year.</b></p>",
  "Subscription price":"<p><b>I'll work back from Breeze's target cost.</b> Today Breeze spends $5.4 million on rework plus $300,000 on inspectors, <b>$5.7 million</b>. A 25% saving means <b>$4.275 million</b>. With AI, late defects halve, so rework falls to <b>$2.7 million</b>, the inspectors aren't needed, and installation adds <b>$100,000 a year</b>. <b>So A-EYE can charge up to about $1.475 million a year.</b> And fewer delivery delays and happier customers could justify more.</p>",
  "Protecting market share":"<p><b>I'd avoid leading with a price cut</b>: both companies' costs are near zero, so it could start a price war. Instead: <b>retain clients</b> with long-term contracts and higher switching costs, by integrating with their software, improving the model on their data, and limiting data export; <b>compete on value</b> with better performance, service and features; <b>step up sales and marketing</b>; consider <b>partnering with or acquiring</b> the competitor; and <b>diversify</b> into new applications.</p>",
  "Other applications":"<p><b>Because the model learns what 'good' looks like and flags differences, it can go almost anywhere.</b> <b>Manufacturing defects</b>: solar panels and batteries, then electronics, automotive, aerospace and defence, energy and consumer goods. <b>Object identification</b>: waste sorting, agriculture, food production, medical scans and emissions monitoring, and further out, self-driving cars, augmented reality and smart cities.</p>",
  "Recommendation":"<p><b>We recommend pricing the solution at about $1.475 million a year.</b> That still saves Breeze 25% on its defect-related costs, and it doesn't yet count benefits like fewer delivery delays, which could support more. <b>To defend against the new competitor</b>, A-EYE should lock in long-term contracts, raise switching costs and keep improving the product, rather than cutting price. <b>To grow</b>, it should take the technology to other manufacturing and inspection markets, starting with solar panels and batteries.</p>"
 }}
});
Object.assign(window.CASE_GUIDE,{
cwf:{
 book8:{buckets:[["Births (create your own)",["Health","Gender balance → number of pairs"]],["Deaths (create your own)",["Disease","Food, water, shelter","Hunting"]],["Migration / habitat (create your own)",["Highways splitting habitat","Human interference"]],["Risks & mitigations",["Disease spread between groups","Isolation of groups"]]],
  note:"A non-business case: the book's 'create your own bucket' is the way in. Births / deaths / migration is the natural structure."},
 steps:{
  "Framework":{shape:["Population equation: births − deaths ± migration","2 drivers under each","Say where you'd start, and why"],phrases:["\"A population changes through births, deaths and migration.\""]},
  "Reading the exhibits":{shape:["Say what each exhibit shows","Insight 1: gender imbalance → fewer pairs","Insight 2: disease, high and uneven","What you can't conclude","So what"],phrases:["\"Two things stand out.\"","\"So the decline seems driven by disease and gender imbalance.\""]},
  "Births next year":{shape:["Pairs limited by the scarcer sex","Pairs per group, total","Births per pair per year","Multiply"],phrases:["\"Births are limited by the number of possible pairs.\""]},
  "Deaths next year":{shape:["Disease deaths by group","Healthy population ÷ life expectancy","Total"],phrases:["\"Two kinds of deaths.\""]},
  "Population change":{shape:["Births − deaths = change, as a %","Verdict","Counterfactual without the disease","Actions"],phrases:["\"So what: without the disease, the population would be stable.\""]},
  "Public statement":{shape:["Restate the question","Key finding in plain words","What happens next"],phrases:["\"Over the next two weeks, we'll…\""]}
 }},
cleanall:{
 book8:{buckets:[["Customer segmentation & needs",["What start-ups' customers value (convenience)","Spend and frequency per customer"]],["Competitive landscape",["New start-ups and their services","Share lost"]],["Financial considerations",["Growth vs. 10% goal","Margin and capex of each option"]],["Company capabilities",["Store network","Existing paid delivery service"]]],
  note:"The case's 'grow the core / grow in new areas' is a growth tree. The book's Competitive bucket points you to copying the start-ups' services early."},
 steps:{
  "Framework":{shape:["Two branches: grow the core / grow in new areas","Core: stores, customers per store, spend per customer","New: services, operating model","Check in"],phrases:["\"I'd look at two ways to grow.\""]},
  "Prioritizing services":{shape:["Criteria: growth, profit, investment","Run each option through them","Which meets the 10% goal","The catch, and what to do about it"],phrases:["\"Only free pick-up and drop-off reaches 10% growth.\""]},
  "Evaluating pick-up":{shape:["Financial attractiveness","Feasibility: money and operations","What we already know (paid version)"],phrases:["\"I'd evaluate it on two dimensions.\""]},
  "Delivery cost":{shape:["Trips per week (weekdays, weekends)","Cost of each agency: fixed + per trip","Cost per delivery for each","Compare with $15, pick one, add caveats"],phrases:["\"I'll compare cost per delivery for each option.\"","\"So I'd outsource to Agency B, after checking its service quality.\""]},
  "Making it succeed":{shape:["Two groups: customers / operations","3–4 ideas each"],phrases:["\"I'd focus on two things.\""]},
  "Recommendation":{shape:["Restate and answer","Three reasons","The caveat (margin)","Next steps"],phrases:["\"We recommend…, for three reasons.\""]}
 }},
aeye:{
 book8:{buckets:[["Customer segmentation & needs",["Breeze's willingness to pay: savings vs. status quo","Preferred payment model"]],["Financial considerations",["A-EYE's install, running and central costs","Margin ambition"]],["Competitive landscape",["Similar products, launches, moats"]],["Risks & mitigations",["Price war","First client in a new industry"]]],
  note:"Pricing cases map to the book's three methods (customer value, cost, competition), but the case pushes you to tailor each to Breeze."},
 steps:{
  "Framework":{shape:["Three angles, tailored: Breeze's WTP, A-EYE's costs, competition","Make each specific (rework, labor, returns…)","Check in"],phrases:["\"I'd look at the price from three angles, tailored to Breeze.\""]},
  "Rework cost today":{shape:["Formula first","Cost per layer → cost per rework","Reworks a year (late defects only)","Multiply"],phrases:["\"Annual rework cost is cost per rework times reworks a year.\"","\"Only late defects cost money.\""]},
  "Subscription price":{shape:["Today's total cost","Target cost after 25% saving","Costs that remain with AI","Price = target − remaining costs","Mention extra benefits"],phrases:["\"I'll work back from Breeze's target cost.\""]},
  "Protecting market share":{shape:["Why not price first","Retain clients: contracts, switching costs, value","Sales & marketing; join forces; diversify"],phrases:["\"I'd avoid leading with a price cut.\""]},
  "Other applications":{shape:["Explain why it transfers","Group 1: manufacturing defects","Group 2: object identification","Examples in each"],phrases:["\"Because the model learns what 'good' looks like, it can go almost anywhere.\""]},
  "Recommendation":{shape:["Answer first: the price","Why it works for both sides","Defend: contracts, switching, product","Grow: new markets"],phrases:["\"We recommend pricing the solution at about…\""]}
 }}
});
