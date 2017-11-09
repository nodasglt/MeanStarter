FROM kong:latest

ADD cnginx.template /cnginx.template

ADD mime.types /mime.types

ADD www /var/www

CMD ["kong", "start", "--nginx-conf",  "/cnginx.template"]

EXPOSE 8000 8443 8001 7946
