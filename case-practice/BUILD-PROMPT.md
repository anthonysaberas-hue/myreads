# Case practice build kit: how the cases are made

This kit turns casebook examples into two practice pages:

- **Case Room** (for the candidate): the case runs one interviewer question at a time. Data, hints and model answers stay hidden until asked for.
- **Interviewer's Binder** (for a non-expert partner, HTML + PDF): word-for-word script, when to hand over each exhibit, what to listen for, answer keys, hints and a scoring rubric.

Both pages read the same case file, `cases.js`. **To make a new set, you only write a new `cases.js`.** The page templates in this folder stay the same.

---

## Part 1. The prompt to send to Claude

Copy everything in the box below into Claude. Attach the casebook PDF (or paste the cases), plus `cases.js` from this kit as a format example.

```text
I'm practicing for consulting case interviews. Attached is a casebook and an example
file (cases.js) showing the exact data format I need.

Turn every case in the casebook into an entry in a new cases.js, in exactly the
same format as the example. Then follow these rules.

A. Follow the source closely
- Keep every number, exhibit and question from the casebook. Never change a source figure.
- Use every "Additional Information" item, as a clarifying answer or an exhibit. Nothing is dropped.
- Where the casebook gives a sample framework, use its buckets and bullets as the model answer.
- Turn every casebook question into its own step, in the casebook's order, and keep its
  interviewer notes ("guide the candidate to...", "tell them the problem is only internal").
- Break the framework down the way a real interviewer would, with short steps such as
  "What revenue streams could X have?", "What costs?", "Which are fixed vs. variable?",
  before any math. Use the casebook's own lists as the answers.
- Fix only obvious typos in the source (e.g. "$60M" where the math says $60B), and tell me which.

B. Make it run like a real interview
For each case, add only what a real interviewer would have:
1. A client story with ONE clear objective that the final recommendation must answer
   (e.g. "pay back within 5 years", "at least $10k profit"). Use the source's numbers;
   only add an objective if the source has none.
2. Clarifying questions (4-5) with short interviewer answers, the way an interviewer
   would really reply.
3. A framework step: "How would you structure this?"
4. Exhibits as numbered tables ("Exhibit 1", "Exhibit 2"...). Hand data over only
   when the candidate asks. For candidate-led estimates, say when to give the real
   number (e.g. "only if their population is below 25M or above 45M").
5. One mid-case twist that makes the first answer incomplete (e.g. not every ad slot
   sells; real ticket sales are below a full house; defaults rise in a downturn; a
   competitor's new offer). It must be consistent with the source numbers.
6. At least one "so what" or sanity-check moment ("Does that number make sense?").
7. A final step: a 1-minute recommendation to the CEO (answer first, 2-3 reasons,
   risks, next steps).
8. 6-9 steps per case, 20-25 minutes in total.

C. Every step contains (interviewer-only fields marked *)
- steer*: the casebook's guidance on where to lead the candidate at this point
- probe*: 1-3 follow-up questions to ask when the answer is thin
- check*: the complete casebook list to tick against (all revenue streams, costs, barriers...)
- ifwrong*: common wrong answers and exactly what to reply, as [they say, you say] pairs
- say: the interviewer's exact words
- give: an exhibit plus WHEN to hand it over (optional)
- num: the correct number with a tolerance, or a min-max range (only for numeric answers)
- listen: 3-6 things a strong answer contains, in plain English
- key: the model answer with the full working shown
- stuck: 1-3 hints, gentlest first

D. Math must be right
- Recompute every number yourself before writing it, and show the working in "key".
- New numbers you invent must be realistic and consistent with the source
  (e.g. if the source says 15 meals/day now, a "last year" column can say 20).

E. Write for a non-expert interviewer
- "plain": 2 sentences explaining the case to someone who knows nothing about consulting.
- "bottom": the answer in one line.
- Plain words; no jargon in what the interviewer reads aloud.

F. Mark everything you add
After the CASES array, add window.CASE_SOURCE and window.CASE_ADDITIONS in the same
format as the example:
- prompt: one sentence on any background you added to the opening
- clarify: the index numbers of clarifying answers you made up
- steps: for each step you changed, use the step's exact name:
  - "added" = the whole step is new
  - "partly" = a source step with new data or follow-ups, plus a note saying exactly
    what is new
Steps that only use source material get no entry.

G. Write sample answers
Add window.CASE_SCRIPTS in the same format as the example. For each case:
- open: what a strong candidate says first (a short playback plus 3-4 clarifying questions)
- steps: for every step, keyed by its exact name, a polished spoken answer of 60-150 words
- Answer first, use signposting ("I'd look at three areas", "So what:"), say the math
  out loud, and wrap phrases worth memorizing in <b></b>.

Output the complete cases.js file.
```

Repeat this for each new casebook. Then follow Part 2.

---

## Part 2. Building the pages (no coding needed)

The `Build-Kit` folder contains:

| File | What it is |
|---|---|
| `Case-Room.html` | Candidate practice page. Reads `cases.js` from the same folder. |
| `Interviewer-Binder.html` | Interviewer page. Reads `cases.js` from the same folder. |
| `cases.js` | Example data (the AUBCC cases). Replace it with the file Claude writes. |
| `BUILD-PROMPT.md` | This guide. |

1. Copy the `Build-Kit` folder and rename the copy, e.g. `McKinsey-Casebook`.
2. Replace `cases.js` in it with the new one from Claude. Keep the name `cases.js`.
3. Double-click `Case-Room.html` and `Interviewer-Binder.html`. They open in any browser, offline.
4. **Make the PDF:** open `Interviewer-Binder.html`, press Ctrl+P (Cmd+P on Mac), choose **Save as PDF**, paper size **A4**, and turn on **Background graphics**. The page lays out every section and case in order, with page breaks.
5. **If a page is blank:** `cases.js` has a typo. Paste the file back to Claude: "This cases.js doesn't load. Find and fix the syntax error."

Progress is saved in the browser that opens the page. Answers and hints hide again on every refresh. Typed answers, issue trees and scores stay.

---

## Part 3. How the "story" is completed (the method)

This is what was done to each casebook case, in order:

1. **Extract** the case: prompt, the data it gives, its questions and model answers.
2. **Find the decision.** Ask "What is the client actually deciding?" and give the case one objective with a number on it. A market sizing becomes "size it, then decide whether to build the factory."
3. **Order the steps the way a real interviewer would:** prompt → clarify → framework → first analysis → exhibit → math → twist → brainstorm → recommendation.
4. **Turn bullet data into exhibits.** Real interviews hand over tables and charts, sometimes with columns that don't matter.
5. **Add one twist from the case's own numbers:**
   - The theoretical maximum vs. what actually happens (ad slots, ticket sales).
   - A cost or delay the first calculation forgot (licensing time, aging wine).
   - A risk scenario (a higher default rate).
   - A comparison that changes the answer (the old shoe price earned more than the new deal).
6. **Check the logic and math.** Every number is recomputed. The new numbers must make the source numbers still true.
7. **Write the interviewer's side.** What to say, when to give data, what good sounds like, hints in order.
8. **Tag every addition** so the original casebook stays the reference.

---

## Part 4. One step in the format (for reference)

```js
{name:"Reality check", time:"3–4 min",
 say:["Does that seem right to you?"],
 give:{when:"Once they question whether every slot sells.",
   html:"<p><b>Exhibit 2.</b> Actual ad revenue last year: <b>$8M</b>.</p>"},
 num:{value:7.5, tol:.04, unit:"years, the real payback"},
 listen:["Realizes $9M is a ceiling","Recalculates: 8 − 6 = $2M → 7.5 years"],
 key:"<p class=\"calc\">15 ÷ 2 = 7.5 years</p>",
 stuck:["\"Is every ad minute always sold?\""]}
```

For a range instead of one number, use `num:{min:7500, max:10000, unit:"$ per pill"}`.
