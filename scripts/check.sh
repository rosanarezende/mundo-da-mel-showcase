#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "Running Prettier check..."
npx --yes prettier@3 --check .

echo "Running content guardrails..."
node scripts/check-content-guardrails.mjs

echo "All checks passed."
