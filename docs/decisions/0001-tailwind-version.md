# ADR 0001: Use Tailwind CSS v3 for now

## Status
Accepted — 2026-02-12

## Context
Tailwind CSS v4 introduces significant breaking changes and setup requirements compared to v3. In my current Vite + React + TypeScript environment, I found that v4 required too many manual adjustments to function reliably at this stage.

## Decision
I will use Tailwind CSS v3.x for the initial Episteme web scaffold. This ensures I have a stable environment and a predictable configuration while I build out the core features.

## Consequences
- Stability: I'll experience faster onboarding and fewer build/config headaches during early development.
- Future Proofing: I will evaluate upgrading to v4 once the base UI and tooling are stable and the v4 ecosystem has matured.
