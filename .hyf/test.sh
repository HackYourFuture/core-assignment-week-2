#!/usr/bin/env bash
set -euo pipefail

# Run your test scripts here.
# Auto grade tool will execute this file within the .hyf working directory.
cat << EOF > score.json
{
  "score": 0,
  "pass": true,
  "passingScore": 0
}
EOF
