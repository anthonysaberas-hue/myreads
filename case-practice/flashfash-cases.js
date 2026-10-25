/* FlashFash: one M&A case, in the same data model as cases.js.
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

window.CASE_SOURCE = "the original FlashFash case";
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
