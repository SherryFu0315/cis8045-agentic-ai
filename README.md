# CIS 8045 · Agentic AI, Georgia State University (Spring 2027)

**Course site:** https://xinyufu.org/cis8045-agentic-ai/

This is the graduate course on agentic AI in the Master of Science in Information Systems at Georgia State University's J. Mack Robinson College of Business, taught by **Dr. Xinyu Fu** ([faculty profile](https://robinson.gsu.edu/profile/xinyu-fu/) · [personal site](https://xinyufu.org)). It runs for eight weeks in Spring 2027, Mini-Mester 1.

The undergraduate course, [CIS 4394](https://xinyufu.org/cis4394-agentic-ai/), asks whether you can build an agent. This course asks whether you can turn an agent into a service that someone will sign off on. Four questions run through every week: what tools may the loop call, what is it allowed to touch, how do we know it did the right thing reliably, and what does it cost to find out.

## What is in this repository

The course site, as static HTML.

- `index.html`: the seven weekly themes, what each week covers, and how a class session runs.
- `project.html`: the team project. Each team turns an agent into a served endpoint with a golden set of at least twenty cases, pass^k results, an error analysis, a guardrail and governance memo, a cost per successful task, and a decision memo that a manager could sign.
- `logistics.html`: grading, the two lab tracks (Python, or LangSmith's no-code builder Fleet), and course policies.
- `videos.html` and `videos/`: twenty-one short pre-class videos, three per week, two and a half to four and a half minutes each, with captions and the full script under each one. The slides are HTML rendered to video and the narration is a synthetic voice.

## The seven themes

1. The loop is the product
2. Capability is designed, not prompted
3. Context is the interface
4. If you can't measure it, you haven't built it
5. Autonomy is a permission, not a feature
6. A service has an owner, a cost per task and an SLA
7. More agents, more autonomy, more ways to fail

Week 8 is the final presentations: would you sign off on this?

## Tech

Dependency-free HTML and CSS, no build step. The video pipeline (slide specs, rendering, narration, captions) is kept outside this repository.

## License and reuse

© 2026 Xinyu Fu. Shared for educational use; contact the instructor for reuse or adaptation. The videos quote headlines and screenshots from news sites, company engineering blogs and papers for identification and commentary, with the publisher and date shown on the slide. Statistics are cited with their source and date; verify against the primary source before quoting.
