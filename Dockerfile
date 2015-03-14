FROM dockerfile/nodejs

MAINTAINER Houssem BELHADJ AHMED <houssem@belhadjahmed.com>

COPY . /usr/src/
WORKDIR /usr/src
RUN npm install
EXPOSE 9090

CMD ["node", "/usr/src/index.js"]
