npm run build && python manage.py collectstatic && sudo systemctl daemon-reload && sudo systemctl restart gunicorn && sudo nginx -t && sudo systemctl restart nginx

````
sudo journalctl -f -e -u gunicorn


sudo tail -F /var/log/nginx/error.log
```

If you update your Django application, you can restart the Gunicorn process to pick up the changes by typing:
```
sudo systemctl restart gunicorn
```
If you change gunicorn systemd service file, reload the daemon and restart the process by typing:
```
sudo systemctl daemon-reload
sudo systemctl restart gunicorn
```
If you change the Nginx server block configuration, test the configuration and then Nginx by typing:
```
sudo nginx -t && sudo systemctl restart nginx
```
These commands are helpful for picking up changes as you adjust your configuration.