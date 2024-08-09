#!/bin/bash
path="tests/testSpecs"
declare -a arrTestSpecs=("${path}"/*)

for ((i = 0; i < ${#arrTestSpecs[@]}; i++)); do
    trace_changes=$(git diff --name-only --diff-filter=ADMR @~..@ | grep -c "${arrTestSpecs[$i]}")
    if [[ "$((trace_changes))" -gt 0 ]]; then
        test_spec_file_name=$(echo "${arrTestSpecs[$i]}" | awk -F'/' '{print $3}')
        echo "$test_spec_file_name"
        is_test_spec_dir_updated="1"
    fi
done

if [[ "$is_test_spec_dir_updated" != "1" ]]; then
    echo "*.spec.js"
fi
