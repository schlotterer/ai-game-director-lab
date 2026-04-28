# AI Game Director Lab

AI Game Director Lab is a reusable starter repo for families who want to make small playable games with Codex.

The child is the Creative Director. The adult is the Producer. Codex is both the Creative Coach and the Builder.

This is not a coding-language curriculum first. It teaches a child to imagine, describe, choose, test, revise, and ship small creative ideas with AI.

The starter game is intentionally plain. It has movement, one item to collect, scoring, and a win state, but it does not decide the title, story, character, world, or item identity. Those should come from the child during the first session.

This workflow is designed to be ADHD/autistic-friendly: predictable, low-pressure, choice-based, sensory-aware, and built around short visible progress.

## First-Run Path

1. Open `game/index.html` and play the starter game once.
2. Read this README through `How a Codex-Led Session Works`.
3. Paste `prompts/codex-kid-session-start.md` into Codex.
4. Let Codex ask the child one question.
5. Approve one small feature ticket before Codex edits files.
6. Test the change together.

## Core Philosophy

- Creativity over passive play.
- Direction over syntax.
- Small playable wins over giant unfinished plans.
- Predictable steps over open-ended pressure.
- Regulation and comfort over finishing one more feature.
- Every session should end with something playable, visible, or decided.

## Roles

- Child: Creative Director. Invents ideas, chooses directions, reacts to the game, and decides what feels fun.
- Adult: Producer / guide / safety rail. Keeps sessions short, approves build tickets, and helps manage scope.
- Codex: Creative Coach + Builder. Helps shape ideas, then makes small approved changes.

## Why Web-First

This starter uses HTML, CSS, and vanilla JavaScript. It avoids Unity, Godot, React, TypeScript, package managers, build tools, and external dependencies.

That keeps the game inspectable. A parent and child can open the files and see how the pieces fit together.

## Why PWA-Ready

The game includes a simple `manifest.json` and `service-worker.js` so it can later become an installable web app. Icons can be added later in `game/assets/icons/`.

The game still works normally by opening `game/index.html`.

## Why Unity Is Not Here

Unity may be a future next-level repo. This first repo is about learning the AI Director loop with fast, visible changes:

1. Imagine.
2. Choose one tiny version.
3. Build.
4. Playtest.
5. Revise.

## Run the Starter Game

Open:

```txt
game/index.html
```

Use the arrow keys to move. Collect 5 items to win. Press Restart to play again.

## How a Codex-Led Session Works

1. Start in Creative Coach Mode.
2. Codex gives a short agenda: First recap, then one choice, then one tiny ticket.
3. Codex reads the project docs.
4. Codex recaps the current game in a few sentences.
5. Codex asks the child one simple question with choices.
6. Codex turns the answer into one small feature ticket.
7. The adult approves, adjusts, pauses, or stops.
8. Codex enters Builder Mode and implements only that feature.
9. Codex updates docs and explains how to test.

The default workflow happens inside Codex. A separate ChatGPT conversation is optional, not required.

## ADHD/Autistic-Friendly Defaults

- Use one question at a time.
- Offer 2-4 concrete choices instead of open-ended brainstorming.
- Say what happens next before switching activities.
- Keep sessions short, usually 15-30 minutes.
- Make stopping a normal success state.
- Avoid timers unless the child likes them.
- Avoid surprise changes, loud effects, flashing, or forced competition.
- Treat intense interests as useful creative material.
- Let the child answer by pointing, choosing a letter, speaking, typing, or asking the adult to translate.
- Keep a visible parking lot so ideas are saved, not lost.

## Adult Safety Rails

- Keep the session short.
- Ask for one tiny playable change.
- Use the parking lot for big ideas.
- Make Codex show the feature ticket before coding.
- Approve, adjust, or stop before Builder Mode begins.
- Offer a break before frustration becomes the main event.
- Do not force eye contact, fast answers, or verbal explanations.
- End with a playtest or a clear next decision.

## Docs

- `docs/game-bible.md`: current game facts and creative direction.
- `docs/session-log.md`: notes from each session.
- `docs/idea-parking-lot.md`: big ideas saved for later.
- `docs/prompt-history.md`: prompts, tickets, and outcomes.
- `docs/playtest-notes.md`: what felt fun, confusing, easy, or hard.
- `docs/child-profile-template.md`: optional reusable child profile.
- `docs/neurodivergent-session-guide.md`: ADHD/autistic-friendly session supports.
- `docs/future-unity-path.md`: when a later Unity repo may make sense.

## Prompts

The most important prompt is:

```txt
prompts/codex-kid-session-start.md
```

Use it to begin a kid-led session inside Codex.

Other prompt templates help with feature requests, bug reports, playtests, release notes, and optional brainstorming.

## Codex Skills

The repo includes local skills in `.codex/skills/`:

- `creative-coach-session`: start or guide a kid-led session before coding.
- `neurodivergent-friendly-session`: keep sessions predictable, sensory-aware, and choice-based.
- `feature-ticket`: turn an idea into one tiny buildable feature.
- `playtest-review`: review a playtest and find the next change.
- `docs-update`: update the project docs after meaningful changes.
- `kid-safe-scope-control`: shrink big ideas without rejecting them.
- `family-release`: prepare kid/family-friendly release notes.

## Suggested First 5 Sessions

1. Play the blank starter and ask what the player should be.
2. Decide what the item is and change how it looks.
3. Pick a title and world for the game.
4. Add one simple obstacle or rule.
5. Make a family release with a version name and notes.

## Session Length

Start with 15 to 30 minutes. Stop while the child still has energy. Write down extra ideas in the parking lot.

For some kids, 5 to 10 minutes is a complete successful session. A session can end after one good choice, one playtest, or one saved idea.

## Avoid Scope Creep

When an idea gets too large, keep it. Do not discard it. Add it to `docs/idea-parking-lot.md`, then build the smallest playable first version.

Example: “Make a huge world” can become “Add one new place name.”
