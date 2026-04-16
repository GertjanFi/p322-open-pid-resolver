---
pid: p322:blog:06EQCZ1EW909V6BKMFE5S9GBT
title: "Technical Debt is Dead (Part 1: The Metaphor is Broken)"
date: "2026-04-14T00:00:00+00:00"
excerpt: "Technical debt sounds like a precise concept. It isn’t.</br></br>What started as a way to describe the gap between code and understanding has drifted into a catch-all excuse for decisions we regret. Worse, the metaphor tricks you into thinking you can manage it like real debt. You cannot. There is no clear principal, no predictable interest, no way to know the cost when you take it on.</br></br>And that matters, because teams use this idea to justify choices every day.</br></br>If the concept you rely on to make trade-offs is fundamentally flawed, what are you actually optimizing for? This piece breaks down why “technical debt” no longer helps you decide anything and what that means the next time you have to choose."
teaser: "Technical debt feels precise, but it quietly distorts every decision you make, and once you see why, you will not trust the concept again."
isAutoTranslated: false
---

Imagine you're writing a service that needs to wait for a mount point to be available. You don't know that much about how Linux works, but you identify two approaches:

**Option A:** A bash loop that checks if the path exists every 2 seconds. You can write this in a minute.

```p322:codeblock
lang: bash
value: |
  while [ ! -d /mnt/data ]; do
    sleep 2
  done
```

**Option B:** A systemd mount unit dependency. You've never written one. The documentation will take at least 30 minutes to read. Then probably also just a few minutes to implement.

Now your gut is doing that thing where it has two opinions at once. One part says the bash loop is ignoring edge cases you're not aware of, because you haven't done that much ops work and there are probably twelve ways a mount can fail that you've never heard of. The other part says that dragging in a complex subsystem you don't understand, to solve a problem you can express in four lines of shell, is exactly the kind of thing that causes 3am pages six months from now.

You have the luxury of time to be diligent. You want to touch this once and be done with it. What should you pick?

Well, you do what any responsible engineer does. You ask yourself: which option creates less technical debt?

And now you're stuck, because that question is unanswerable. It's the wrong question using the wrong metaphor.

Let me explain.

## Reason A: The metaphor had a very narrow meaning

In 1992, Ward Cunningham wrote [an experience report](https://c2.com/doc/oopsla92.html) about a financial software product called WyCash. He was neck deep in financial jargon, talking to people who thought like CFOs. And he reached for a word they'd understand: _debt_. Corporate debt. The precision tool. The kind where you borrow money to build a factory that makes more money than the interest payments.

His point was this: you ship something that reflects your partial understanding of the problem. By shipping it you learn more. But now the code no longer matches what you know. _That distance_ is the debt. The "repayment" is evolving the code to match your evolved understanding.

I want to stress this because it's easy to miss. Cunningham did not mean "code that is bad." He meant: code that is based on yesterday's understanding of the problem, in a world where your understanding has since improved.

That's a very specific thing.

He wrote about this in 1992, well before the word Agile existed. (In fact Cunningham is [one of the people](https://agilemanifesto.org/authors.html) who later coined it at [Snowbird in 2001](https://agilemanifesto.org/history.html).) The idea that you'd write code _before_ claiming a full understanding of the problem was fairly novel. And while the insight that you'd never gain enough understanding _without_ writing the code wasn't entirely new (see Naur's [Programming as Theory Building](https://pages.cs.wisc.edu/~remzi/Naur.pdf)) it most certainly wasn't the truism it has become since. So the metaphor was useful at the time. It gave a finance guy a way to understand why the engineering team wanted to rewrite something that already worked. And that engineering team a way to understand that they were allowed to write code before the specs were finished.

Good metaphor. Useful conversation. Everyone goes home happy.

Then the rest of the industry got hold of it.

## Reason B: That meaning is probably different from what it currently means to you

Think about the last time you said "we're taking on technical debt here" in a standup. What did you actually mean?

Be honest. It was probably one of these:

- "We're writing code we know is bad because we're in a hurry"
- "We're not going to refactor this even though we should"
- "This code is messy and will slow us down later"
- "Someone before me made poor choices and now I'm stuck with them"

None of these are what Cunningham meant. Not even close. But all of them have become "technical debt" through years of semantic drift, and the metaphor now covers everything developers feel guilty about. Which makes it about as useful for actual decision-making as the word "interesting" is for restaurant reviews.

This is kind of inevitable if you think about what "debt" means outside a corporate finance department. For most people, debt is shameful. You're supposed to pay it off as quickly as possible. It's a sign of living beyond your means. Nobody at the dinner table says "I'm strategically leveraged." (If they do, you should probably check your silverware after they leave.)

So when developers hear "tech debt" they hear: someone screwed up and now we're paying for it. And on top of the shame, the word has drifted in what it _measures_. It no longer refers to the distance between the code and the current understanding of the problem. It refers to time. The time we'll have to invest to fix it. The slowdown we incur while it isn't fixed. You "borrow" time now, you "pay it back" later, with "interest."

And here's something that should bother you: we apply it in hindsight. Even in personal finance, you never look at your bank account and suddenly discover that your last purchase came with interest attached. You knew the terms before you signed. But tech debt is almost always a label applied after the fact, by someone who wasn't there when the decision was made. Which means for every decision you make, you risk being retroactively labeled a debt accruer by some future developer who has the enormous advantage of knowing how things turned out. It doesn't help that the [subsequent c2 wiki discussions](https://wiki.c2.com/?TechnicalDebt) and [Fowler's synthesis](https://martinfowler.com/bliki/TechnicalDebt.html) pair tech debt against Quality (with a capital Q), as if every engineering choice is a moral judgment: sloppy vs. careful, stupid vs. smart.

So that's where we are. A metaphor coined to explain iterative learning to a CFO in 1992 has become a vague synonym for "code I don't like" with a side of moral judgment.

But OK. Maybe the metaphor got corrupted by the masses. Maybe if we go back to what Cunningham _actually meant_, the thing still holds up. Right?

## Reason C: It doesn't hold up

Corporate debt is a precision instrument. Known principal, known interest rate, known repayment schedule. That's what makes it strategic: you can model whether the returns will exceed the cost before you sign anything. A CFO can look at a loan proposal and say "this is a good deal" or "this is a bad deal" based on actual numbers.

Cunningham's "debt" works differently. You take it on at the moment you write the code, when you have at best a hazy sense of how far off your understanding is. You can't model the cost, because it depends on future learning that hasn't happened yet. Maybe you're 90% right about the problem and the debt is trivial. Maybe you're 20% right and you'll be rewriting the whole thing in six months. You don't know. You _can't_ know. That's the whole point. If you already understood the problem fully, you wouldn't need to ship early to learn.

What looks like a 2% interest loan might turn out to be loan-shark territory. Or it might turn out you were spot-on and there was never a loan at all.

If a CFO walked into a board meeting and said "I'd like to borrow an unknown amount, at an unknown interest rate, on an unknown repayment schedule, from a lender who will only tell us the terms after we've already spent the money," they would be escorted from the building. And yet that is exactly what Cunningham's metaphor asks us to pretend is a normal financial transaction.

Now, Cunningham probably knew this. He wasn't writing a PhD thesis on software economics. He was writing a one-paragraph analogy in a conference report, aimed at one specific audience, to explain one specific idea. And it worked for that. The problem is that the rest of us picked it up and tried to build frameworks on it: debt backlogs, interest calculations, repayment sprints. We treated the metaphor's precision as if it were real. As if you could actually maintain a balance sheet of understanding-gaps and schedule their repayment in Q3.

You can't. The metaphor was never built to support that weight.

So the metaphor is broken. What we call "tech debt" in standups has nothing to do with what Cunningham meant. And what Cunningham actually meant doesn't work as a financial metaphor either, because it implies a knowability that the underlying phenomenon simply doesn't have.

And yet! While the language nerds argue about definitions (hi! I'm Jauco and I just spent 1500 words doing exactly this! Chorus: "Hi Jauco"), you're still sitting there, unsure whether to write the bash loop or the systemd unit. At least you now know this has nothing to do with debt. That doesn't make the decision any easier though. What would actually help you reason about it is the subject of my next post.
