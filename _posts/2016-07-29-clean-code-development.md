---
id: 8500
title: 'Clean Code Development'
date: '2016-07-29T13:19:52+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=8500'
permalink: /development/clean-code-development/
image: /wp-content/uploads/2015/01/devlopment.jpg
tags:
    - code
    - developer
    - development
    - java
    - Techniques
---

[![CCD-Poster-A2](http://www.waltercedric.com/images/ccd-poster-a2_thumb.png "CCD-Poster-A2")](/assets/images/2016/07/ccd-poster-a2_2.png)

The **Clean Code Developer Initiative** was initiated by [Stefan Lieser](http://lieser-online.de/) and [Ralph Westphal](http://www.ralfw.de/) early in 2009. Largely inspired by the Book [Clean Code](http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/) — a Handbook of Agile Software Craftsmanship by **Robert C. Martin**, the Initiative aims at growing an attitude of professionalism amongst software developers. It is rooted in the Software Craftsmanship and Agile Movement. As a help for understanding and practicing, the Clean Code Developer Initiative grouped these into five levels or degrees (in allusion to martial arts training).

# The Path to Clean Code

- Build for Change
- Care for Correctness
- Work efficiently
- Rethink your actions

# Red Path — understanding

## Principles

### [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) — Don’t Repeat Yourself

Don’t bore your readers by stating the same again and again — build viable abstractions instead. Avoid duplicated functionality, remove unnecessary data redundancy, automate repetitive tasks. [Sonar source](http://www.sonarqube.org/manage-duplicated-code-with-sonar/) has an interesting duplicate code detector build in.

### [KISS](https://en.wikipedia.org/wiki/KISS_principle) — Keep it simple, stupid

“Everything should be made as simple as possible, but not simpler” (Einstein). Write code foremost to be understandable. Resist using an interesting solution, when there also is a straight forward (albeit boring) standard solution.

### Avoid Preliminary Optimization

Distrust your own cleverness. “More computing sins are committed in the name of efficiency than for any other single reason – including blind stupidity” (W.A.Wulf). Defer improvements “for later”. Require an objective proof for performance problems, based on real-world data. **It is always easier** and better to profile later your code on a proven architecture and readable code than the other way around! Moreover locally premature optimization lead most of the time to difficult to read and duplicated code: e.g. writing N cache instead of seeing later in profiler that you may need one at many place in your architecture for a lot of different abstractions.

### [FCoI —Favor Composition over Inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)

Build up functionality from self-contained abstractions, instead of cleverly extending, bending or specializing. Avoid proliferation of special cases. Inheritance make sometimes code more fragile, and in presence of bad API force you to write code you don’t need to override behaviors.

## Practices

### [Boy Scout Rule](http://martinfowler.com/bliki/OpportunisticRefactoring.html)

Whenever you enter some area, leave it in somewhat better shape than you found it. If everyone on the team is doing this, they make small regular contributions to code base health every day.

### [Root Cause Analysis](https://en.wikipedia.org/wiki/Root_cause_analysis)

Never do “programming by coincidence”. Try to understand why something works or breaks. Never act based on assumptions. Don’t treat symptoms. **Better don’t act unless you understand**.

### Use Version Management

Use a revision control system. Create thematically consistent change sets, write small and clear commit messages, learn to handle branching and merging. Do yourself a favor and use nothing else than GIT for now: its speed, branching make it a joy to use compare to any other revision system.

### Simple Refactoring

Controllable process improving your code without writing new functionality. see [https://refactoring.guru/catalog](https://refactoring.guru/catalog "https://refactoring.guru/catalog")

### Reflection

Review your own achievements based on the principles (especially but not limited to those you’re focusing on currently). Partition your work into tasks which can be finished on one day. Take the time to reflect.

# Orange Path — sharpening

## Principles

### SLA — Single Level of Abstraction

Each piece of code should talk on a distinctive level of granularity. Don’t mix implementation details with invocation of high-level abstractions. Refactor code to balance the level of abstraction. All statements of a method should belong to the same level of abstraction. If there is a statement which belongs to a lower level of abstraction, it should go to a private method which comprises statements on this level. Stated in Clean Code (page 36)

### SRP — Single Responsibility Principle

Every class or entity should deal with one topic solely, and do that well. What needs to be said for a given concern, should be found at a single location.

### SoC — Separation of Concerns

Decompose functionality into orthogonal concerns. Increase focusing and cohesion within a single concern, and decrease coupling amongst separate concerns.

### Source Code Conventions

Establish writing conventions based on readability. Code is more often read than written. Reason about the purpose of conventions, then stick to them. Especially focus on naming conventions and correct source code comments. Comments should not detail what you do, but the purpose why you do it.

## Practices

### Issue Tracking

Capture problems and work items as well delineated issues. Track them in a structured way, establish ubiquitous procedures for assigning and resolving issues.

### Automate Tests

Verify correct integration of the parts by running tests automatically. Build a safety net allowing to perform refactoring while retaining correct operation. There is a lot of frameworks in JAVA: [TestNG](http://testng.org/), [Junit](http://junit.org/), [JBehave](http://jbehave.org/), [Mockito](http://mockito.org/) and [HamCrest](http://hamcrest.org/) are all worth using!

### Eager Reading

Acquire an attitude of concern for the ongoing evolution of the coding craft. Read books, journals and blogs ([Java DZone](https://dzone.com/)). Learn a new programming language every year.

### Code Reviews

Four eyes are better then two. Present and explain your code to other programmers. Establish practices like code reviews and pair programming.

# Yellow Path — segregating

## Principles

### ISP — Interface Segregation Principle

Keep interfaces focused and confined to a set of operations likely to be used in conjunction. Avoid to tie clients to the details of a service implementation. Keep interface also small to not force people to implement too much methods.

### Dependency Inversion

revert dependencies with respect to the naïve logical meaning. Instead of implementing high-level functions through low-level functions, turn the latter into services and thus make both depend on interfaces.

### Liskov Substitution Principle

The **Liskov Substitution Principle** (LSP, lsp) is a concept in Object Oriented Programming that states: Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.

### Rule of Least Surprise

every piece of code should behave exactly in the way obvious from the names, the concepts and the general context. The reader should be able to get the essence of what’s going on already from the first coarse-grained view.

### Information Hiding

every part — be it function, object, interface or subsystem — should expose only the bare minimum required to use it effectively.

## Practices

### Automated Unit Tests

Cover individual components with tests in isolation. Break the reasoning in terms of contracts down to the implementation level

### Mockups

Build mock-ups, dummies, stubs and fakes to create a controlled environment for reasoning and test. [Balsamiq](https://balsamiq.com/products/mockups/) is great and not expensive.

### Code Coverage

Base your reasoning and testing on coverage analysis (instructions, branches, decisions).

### Advanced Refactoring

Apply the more advanced types of refactoring techniques to rearrange and restructure code fluently. Ensure correctness through your stock of unit tests.

### Community Participation

Participate actively, beyond the local team. Report bugs, provide test cases, work with library developers, visit local user groups, participate in conferences.

# Green Path — decoupling

## Principles

### OCP — Open Closed Principle

any class or functional unit should be open towards extensions, but closed against modifications. Extending it should not require changing the internals, nor tie the extension to these internals. Increase cohesion, decrease coupling.

### [Tell, don’t ask](http://martinfowler.com/bliki/TellDontAsk.html)

invoke services instead of doing things yourselves. Don’t inspect state and operate from the outside. You should instead tell an object what to do.

### Law of Demeter

don’t write “train wreck code”. Talk to direct collaborators only. Within each scope, confine yourself to using the parameters, local methods, locally created objects, associated partners and global services.

The **Law of Demeter** (**LoD**) or **principle of least knowledge** is a design guideline for developing software, particularly object-oriented programs. In its general form, the LoD is a specific case of loose coupling. The guideline was proposed at Northeastern University^towards the end of 1987, and can be succinctly summarized in each of the following ways:

- Each unit should have only limited knowledge about other units: only units “closely” related to the current unit.
- Each unit should only talk to its friends; don’t talk to strangers.
- Only talk to your immediate friends.

## Practices

### Continuous Integration

Integrate changes timely and frequently. Perform this integration process automatically, in a controlled and reproducible environment, perform the unit and integration test suites as part of this process. Recommended software are [Atlassian Bamboo](https://www.atlassian.com/software/bamboo), [JetBrains Teamcity](https://www.jetbrains.com/teamcity/), Apache Hudson.

### Inversion of Control Container

Use Dependency Injection to implement IoC (e.g. Spring MVC). Use service locators, employ the DI patterns or use an existing DI container implementation or framework.

### Code Metrics

Use static analysis and similar quantitative measurements to monitor various aspects of a source base. I use [PMD source code analyzer](https://pmd.github.io/) and [FindBugs](http://findbugs.sourceforge.net/) in Sonar Source or as plugin Eclipse and IntelliJ

### Quality Measurements

Observe instead of assuming. Monitor the code quality, measure performance, observe defect rates. Estimate efforts and verify your guesses after the fact. Identify impediments.

### Learn by Teaching

Share your experience and knowledge. Explaining something is the best way to understand it yourself.

# Blue Path — balancing

## Principles

### Segregate Design and Implementation

Clearly delineate planning and doing. Design must not duplicate implementation work, and implementation concerns must not interfere with architectural considerations. Otherwise implementation will supersede the design and the real system will end in chaos.

### Implementation reflects Design

Code in accordance with design. Traces of architecture should be visible down into individual implementation structures, names, organization of the code base and the runtime structure. Never play tricks to undermine and thwart the design and create a second reality.

### [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) — You Ain’t Gonna Need It

Decide later and don’t do it, if in doubt. Question your own brilliant ideas — write them down, but defer implementation for later, because, well, you ain’t gonna need that crap. Don’t say “I can do that on a single afternoon” — be prudent: doing it seriously will be a major undertaking. Refrain from spending effort without a reason.

## Practices

### Continuous Delivery

Extend the automated continuous integration into deployment and setup. Plan and test the steps towards an release, and finally automate them. Create a platform to roll out development snapshots, integration builds, release candidates and service updates.

### Iterative Development

Development is a learning process. Instead of achieving perfection through a single big bang, proceed in incremental steps and include feedback from the user or customer. Use each iteration for a retrospective and adjust your procedures.

### Components and Contracts

Employ the thinking in terms of components and contracts from the largest to the smallest. Each component establishes some kind of isolation, which helps to cut down complexity.

### Test first

Also known as **[Test-driven development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development)** is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. Practice and improve your skills by doing some TDD [Kata 1](http://osherove.com/tdd-kata-1/) – [Kata 2](http://osherove.com/tdd-kata-2) – [Kata 3](http://osherove.com/tdd-kata-3/)

Start from the usage situation. Each unit, class, component or subsystem has clients. Instead of detached planning, or worse, guessing what might be cool, work out the requirements and contract from an exemplary use in code. Transform this into a test before you even think about how to make it work.