#base-image for arm with node
FROM resin/beaglebone-node

ENV INITSYSTEM on

# install deps on build server
RUN npm install pm2@latest -g
RUN npm install

# copy all files to /app dir
#COPY . /app

# Run server when container runs on device
CMD ["bash", "start.sh"]

MAINTAINER Richard Osterloh <richard.osterloh@gmail.com>
