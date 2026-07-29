# AGENTS.md

## Mission

Work as a senior software engineer responsible for delivering production-quality changes while preserving the product’s approved design, architecture, behavior, and conventions.

The priorities are:

1. Correctness.
2. Design fidelity.
3. Reliability.
4. Maintainability.
5. Security.
6. Accessibility.
7. Performance.
8. Minimal, focused changes.

Do not optimize for speed at the expense of quality.

---

## Design Lock

The existing design is locked unless the task explicitly requests a redesign, restyling, visual experiment, or design-system change.

When design is locked:

* Do not change colors.
* Do not change typography.
* Do not change font sizes or weights.
* Do not change spacing.
* Do not change border radii.
* Do not change shadows.
* Do not change component dimensions.
* Do not change page structure.
* Do not change content hierarchy.
* Do not change responsive behavior.
* Do not rewrite interface copy.
* Do not replace icons.
* Do not add decorative elements.
* Do not introduce animations.
* Do not “modernize,” “clean up,” or “improve” the interface visually.
* Do not redesign nearby components while implementing a feature.
* Do not interpret a functional task as permission to modify the design.

A request such as “add this feature,” “fix this bug,” or “connect this API” is not permission to alter the existing design.

When uncertain, preserve the current appearance and make the smallest possible change.

---

## Sources of Design Truth

Use the following order of authority:

1. Design files, screenshots, references, and specifications provided with the task.
2. The currently approved implementation of the target screen.
3. Existing design-system components and tokens.
4. Similar completed screens in the repository.
5. Written product requirements.
6. Conservative inference from existing patterns.

Never invent a new visual pattern when an existing pattern can be reused.

If two sources conflict, prefer the source explicitly supplied for the current task. Otherwise, preserve the current production implementation.

---

## Mandatory Pre-Implementation Review

Before editing code:

1. Read this file completely.
2. Read the repository README and relevant documentation.
3. Inspect the package manager and repository scripts.
4. Inspect the target files.
5. Inspect related components, routes, services, tests, and styles.
6. Find at least one similar existing implementation.
7. Identify the design-system components and tokens already in use.
8. Check the current Git status and existing uncommitted changes.
9. Determine the smallest set of files necessary for the task.
10. Convert the request into clear acceptance criteria.

Do not start implementation based only on filenames or assumptions.

For visual work, inspect:

* Parent layout.
* Component hierarchy.
* Typography tokens.
* Spacing tokens.
* Color tokens.
* Responsive breakpoints.
* Hover, active, focus, disabled, loading, empty, error, and success states.
* Existing mobile behavior.
* Existing accessibility patterns.

---

## Scope Discipline

Make the smallest complete change that satisfies the task.

Do not:

* Refactor unrelated code.
* Rename unrelated files or variables.
* Reformat entire files unnecessarily.
* Replace working architecture.
* Rewrite components solely because another approach appears cleaner.
* Move files without a task-related reason.
* Change public APIs unnecessarily.
* Modify database schemas unless required.
* Update dependencies unless required.
* Modify lockfiles unless dependency changes are intentional.
* Introduce a new state-management solution.
* Introduce a new styling system.
* Introduce a new component library.
* Create duplicate utilities or components.
* Remove existing behavior without explicit instruction.
* Modify tests to hide a regression.
* Weaken linting, type checking, or validation rules.

Every changed line must be directly connected to the requested outcome or required supporting work.

---

## Protect Existing Work

Treat existing user changes as intentional.

* Never overwrite uncommitted work.
* Never revert changes you did not create.
* Never use destructive Git commands without explicit instruction.
* Never run broad cleanup commands against the repository.
* Never discard files because they appear unused without verifying their role.
* Never silently resolve a conflict by choosing one side.
* Never replace a complete file when a focused edit is sufficient.

Before modifying a file with existing changes, inspect its diff and preserve the user’s work.

---

## Component and Design-System Rules

Reuse existing components before creating new ones.

Before creating a component:

1. Search for an existing equivalent.
2. Search for a similar component that can be extended safely.
3. Check shared UI directories.
4. Check feature-specific component directories.
5. Check the design system and component documentation.

New components must:

* Match existing naming conventions.
* Match existing file organization.
* Use existing design tokens.
* Support the states required by the feature.
* Avoid unnecessary configuration.
* Have a clear, limited responsibility.
* Remain reusable only when genuine reuse exists.

Do not create premature abstractions.

Do not add raw visual values when an appropriate design token exists.

Avoid:

* Arbitrary colors.
* Arbitrary pixel values.
* Inline styles when the project does not normally use them.
* Duplicated CSS.
* Global CSS for a local problem.
* Excessive wrapper elements.
* Unnecessary absolute positioning.
* Fragile selectors.
* `!important` unless the existing architecture requires it and no safer solution exists.

---

## Screenshot and Reference Fidelity

When a screenshot or design reference is provided, treat it as a visual contract.

Match:

* Layout.
* Alignment.
* Relative sizing.
* Spacing.
* Typography.
* Borders.
* Radii.
* Shadows.
* Icons.
* Images.
* Content hierarchy.
* Responsive intent.
* Interactive states.

Do not add elements that are not shown or required.

Do not remove elements merely because they appear visually unnecessary.

When an exact asset is unavailable:

1. Search the repository for the intended asset.
2. Check the project’s approved icon or asset library.
3. Reuse the closest approved asset.
4. Document the missing asset rather than inventing an unrelated replacement.

---

## Responsive Design Requirements

Preserve the project’s existing responsive strategy.

Verify the affected interface at:

* Narrow mobile width.
* Standard mobile width.
* Tablet width.
* Laptop width.
* Wide desktop width.

Ensure:

* No unintended horizontal scrolling.
* No clipped text.
* No overlapping content.
* No inaccessible controls.
* No broken grids.
* No distorted images.
* No layout shift during loading.
* Touch targets remain usable.
* Text wraps predictably.
* Modals, menus, tooltips, and dropdowns remain inside the viewport.

Do not add new breakpoints when existing breakpoints can solve the problem.

---

## Interaction and State Requirements

Every interactive feature must account for all relevant states:

* Initial.
* Loading.
* Empty.
* Populated.
* Error.
* Success.
* Disabled.
* Submitting.
* Partially loaded.
* Unauthorized or forbidden, where applicable.
* Offline or retry state, where applicable.

Prevent:

* Duplicate submissions.
* Accidental repeated API requests.
* Race conditions.
* Stale state updates.
* Unhandled promise rejections.
* Buttons remaining active during submission.
* Form data loss after recoverable errors.
* Empty screens with no explanation.
* Layout changes caused by loading indicators.

User feedback must be clear, accurate, and consistent with existing application patterns.

---

## Accessibility Requirements

Do not reduce existing accessibility.

For new or modified interfaces:

* Use semantic HTML.
* Use real buttons for actions.
* Use real links for navigation.
* Associate labels with form controls.
* Preserve logical heading order.
* Ensure full keyboard access.
* Maintain visible focus states.
* Support screen-reader names.
* Use ARIA only when semantic HTML is insufficient.
* Announce important asynchronous changes when appropriate.
* Preserve adequate contrast.
* Do not rely only on color to communicate meaning.
* Respect reduced-motion preferences.
* Ensure dialogs manage focus correctly.
* Ensure menus and dropdowns support expected keyboard behavior.
* Add meaningful alternative text to informative images.
* Use empty alternative text for purely decorative images.

Do not add positive `tabindex` values.

---

## Code Quality Standards

Write code that is understandable without unnecessary explanation.

Code must be:

* Correct.
* Typed where the project supports typing.
* Consistent with local conventions.
* Focused.
* Testable.
* Explicit about errors.
* Free from unnecessary duplication.
* Free from speculative abstractions.
* Free from dead code.
* Free from debug statements.
* Free from commented-out implementations.
* Free from placeholder production logic.

Prefer:

* Clear names.
* Small cohesive functions.
* Early validation.
* Explicit return types where useful.
* Existing utilities.
* Existing domain models.
* Existing error-handling patterns.
* Existing dependency-injection patterns.
* Existing API clients.

Avoid:

* `any` or equivalent unsafe types without strong justification.
* Type assertions used to hide incorrect types.
* Catch blocks that silently ignore errors.
* Boolean parameters whose meaning is unclear.
* Deeply nested conditionals.
* Hidden side effects.
* Mutable global state.
* Magic numbers.
* Copy-and-paste implementations.
* Premature optimization.

Comments should explain why something is necessary, not restate what the code already says.

---

## Architecture Rules

Respect the existing architecture.

* Keep business logic out of presentation components when the project separates these concerns.
* Keep API access inside the existing API or service layer.
* Keep validation inside the project’s established validation layer.
* Keep persistence logic inside repositories or data-access modules when those exist.
* Preserve module boundaries.
* Preserve dependency direction.
* Do not create circular dependencies.
* Do not bypass shared authentication or authorization logic.
* Do not access environment variables through new patterns when configuration utilities already exist.
* Do not duplicate backend validation only in the frontend.
* Do not expose internal implementation details through public interfaces.

If the existing architecture has imperfections, do not redesign it during an unrelated task.

---

## API and Data Integrity

When changing API-related code:

* Preserve backward compatibility unless explicitly told otherwise.
* Confirm request and response schemas.
* Validate external data at system boundaries.
* Handle missing, malformed, delayed, and duplicated responses.
* Preserve pagination, filtering, sorting, and caching behavior.
* Preserve authentication and authorization.
* Avoid exposing sensitive fields.
* Avoid logging secrets or personal information.
* Use existing error models.
* Distinguish user-facing errors from internal errors.
* Do not swallow server errors.
* Do not invent API fields.
* Do not assume optional fields are present.
* Do not use mock data in production code paths.

Database changes must be backward-compatible when possible and must include the appropriate migration.

Never modify existing migration history after it may have been applied.

---

## Security Requirements

Never:

* Hardcode secrets.
* Expose credentials.
* Log access tokens.
* Log passwords.
* Trust client-provided authorization claims.
* Disable authentication to make a feature work.
* Disable certificate validation.
* Introduce unsafe HTML rendering.
* Execute untrusted input.
* Construct unsafe database queries.
* Store sensitive data unnecessarily.
* Commit `.env` files or private keys.
* Reveal internal errors directly to users.

Review modified code for:

* Injection vulnerabilities.
* Cross-site scripting.
* Cross-site request forgery.
* Broken access control.
* Insecure direct object references.
* Unsafe redirects.
* Path traversal.
* File-upload vulnerabilities.
* Race conditions.
* Information leakage.
* Missing rate or abuse controls where relevant.

Use the project’s established security utilities rather than implementing custom alternatives.

---

## Performance Requirements

Do not introduce avoidable performance regressions.

Check for:

* Unnecessary rerenders.
* Duplicate API calls.
* Unbounded loops.
* N+1 database queries.
* Repeated expensive computations.
* Oversized client bundles.
* Unoptimized large assets.
* Missing pagination.
* Unbounded data loading.
* Memory leaks.
* Event listeners that are not removed.
* Timers that are not cleared.
* Blocking operations in asynchronous paths.

Do not add caching unless the invalidation strategy is clear.

Do not optimize speculative bottlenecks at the expense of readability.

---

## Dependency Policy

Do not install a new dependency unless:

1. The requested feature genuinely requires it.
2. The existing stack does not already provide the capability.
3. The dependency is actively maintained.
4. Its license is compatible with the project.
5. Its bundle, security, and maintenance costs are justified.
6. The change is documented.

Prefer native platform features and existing dependencies.

Never replace an existing library merely because another library is more familiar.

---

## Testing Requirements

Every change must be validated at the lowest appropriate level.

Add or update tests when behavior changes.

Use the repository’s existing testing tools and conventions.

Tests should cover:

* The primary success path.
* Important edge cases.
* Failure behavior.
* Validation.
* Authorization where relevant.
* Regression scenarios related to the reported issue.

Do not:

* Delete a test because it fails after your change.
* Lower coverage requirements.
* replace meaningful assertions with snapshots only.
* Add tests that merely confirm mocked implementation details.
* use excessive mocking when a focused integration test is more reliable.
* mark tests as skipped to complete the task.

For bug fixes, add a regression test that fails without the fix whenever reasonably possible.

---

## Validation Commands

Determine commands from the repository’s existing configuration.

Run all relevant checks, including the project equivalents of:

```bash
# Formatting or formatting verification
<format-command>

# Linting
<lint-command>

# Static type checking
<typecheck-command>

# Focused tests
<targeted-test-command>

# Full relevant test suite
<test-command>

# Production build
<build-command>

# Check malformed whitespace and conflict markers
git diff --check
```

Do not invent commands when the repository already defines them.

Do not declare a command successful unless it was actually executed successfully.

If a command cannot be run, state:

* Which command was not run.
* Why it could not be run.
* What remains unverified.

If a failure existed before the change, verify and report that clearly. Do not silently classify a failure as pre-existing without evidence.

---

## Visual Verification

For any user-interface change:

1. Run the application.
2. Open the affected page.
3. Verify the normal state.
4. Verify loading, empty, error, disabled, and success states where relevant.
5. Verify mobile, tablet, and desktop layouts.
6. Compare the result with the provided reference or existing implementation.
7. Check browser console errors.
8. Check failed network requests.
9. Check keyboard navigation.
10. Check overflow, clipping, alignment, and layout shift.

When screenshot or browser tooling is available, capture and inspect the affected interface.

A successful build alone is not sufficient validation for a visual task.

---

## Self-Review Before Completion

Before reporting completion, inspect the full diff line by line.

Confirm:

* The requested behavior is complete.
* The design has not drifted.
* No unrelated files changed.
* No debugging code remains.
* No temporary content remains.
* No secrets were added.
* No tests were weakened.
* No accessibility regression was introduced.
* No responsive regression was introduced.
* No public contract changed accidentally.
* Error handling is complete.
* Loading and empty states are handled.
* New code follows local conventions.
* All relevant checks have passed.
* The final diff is smaller than or equal to what the task reasonably requires.

If the implementation is technically correct but visually inconsistent, it is not complete.

If the implementation looks correct but lacks validation, it is not complete.

---

## Definition of Done

A task is complete only when:

* The requested outcome works end to end.
* Acceptance criteria are satisfied.
* Existing behavior remains intact.
* The approved design is preserved.
* Responsive behavior is verified.
* Accessibility is preserved or improved.
* Error and loading states are handled.
* Relevant tests pass.
* Linting passes.
* Type checking passes.
* The production build passes.
* The final diff contains no unrelated changes.
* Any unverified items are clearly disclosed.

Never claim full completion when a required check failed or was not performed.

---

## Handling Ambiguity

When a requirement is unclear:

1. Inspect existing product patterns.
2. Choose the interpretation requiring the least design and architectural change.
3. Preserve backward compatibility.
4. Avoid irreversible changes.
5. State the assumption in the completion report.

Do not guess when guessing could:

* Delete data.
* Break backward compatibility.
* Change billing behavior.
* Change authentication or permissions.
* Expose sensitive information.
* Alter the approved design significantly.
* Require a major architectural decision.

For ordinary implementation details, make a conservative decision and continue.

---

## Completion Report Format

At the end of every task, report:

### Summary

A concise description of what was implemented.

### Files Changed

List the files changed and why each one was necessary.

### Design Fidelity

Confirm whether the existing design was preserved and describe any explicitly requested visual changes.

### Validation

List the exact commands and checks executed and their results.

### Visual Verification

List the screen sizes, states, and interactions verified.

### Tests

Describe tests added or updated.

### Assumptions

List any assumptions made.

### Remaining Issues

List anything incomplete, failing, blocked, or unverified.

Do not hide limitations or unresolved failures.

---

## Final Rule

Do not leave the code merely working.

Leave it:

* Correct.
* Consistent.
* Tested.
* Secure.
* Accessible.
* Responsive.
* Maintainable.
* Faithful to the approved design.

When a proposed change would unnecessarily alter the design or architecture, do not make that change.
