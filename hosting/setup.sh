#!/usr/bin/env bash

ln -sf /var/www/jfscraig.me/hosting/nginx.conf /etc/nginx/sites-enabled/jfscraig.me
pm2 reload /var/www/jfscraig.me/hosting/ecosystem.config
service nginx reload
