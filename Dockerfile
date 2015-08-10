FROM resin/beaglebone-node:onbuild
# Enable systemd
ENV INITSYSTEM on

# install deps on build server
RUN npm install pm2@latest -g
RUN npm install

# copy all files to /app dir
#COPY . /app

# Run server when container runs on device
CMD ["bash", "start.sh"]

# replace this with your application's default port
EXPOSE 8000 80 43554

MAINTAINER Richard Osterloh <richard.osterloh@gmail.com>
