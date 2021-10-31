#!/usr/bin/env bash

set -e

docker build . -t avi-theme-builder

docker run -v ${PWD}/app/assets:/assets -it avi-theme-builder lessc less/style.less stylesheets/style.css
