#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "Formatting markdown/docs with Prettier..."
npx --yes prettier@3 --write .
echo "Done."
