#!/bin/bash

benchmarks_dir="tmp_benchmark_results"

mkdir -p "$benchmarks_dir"

bench_script=$1
if [ "$bench_script" == "" ]; then
  echo "please specify benchmark to be ran"
fi

cd "$benchmarks_dir"

node \
--prof \
"../$bench_script"

log_file=$(find ./ -regex ".*\.log$")

cd ..

benchmark_results=$(node --prof-process "$benchmarks_dir/$log_file")
filtered_results=$(echo "$benchmark_results" | awk "/JavaScript/" RS= )
echo "$filtered_results"

rm "$benchmarks_dir/$log_file"
rmdir "$benchmarks_dir"
