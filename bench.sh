#!/bin/bash

hyperfine --warmup 3 'bash script.sh' 'node launch.mjs'
