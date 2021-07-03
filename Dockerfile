FROM arm32v7/node:16-alpine3.11

WORKDIR /iot-parking-sensors-ui

ENV PATH /node_modules/.bin:$PATH

COPY . .

RUN npm install --verbose

CMD ["npm", "start"]