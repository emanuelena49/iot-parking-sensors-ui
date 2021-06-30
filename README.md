## mosquitto.conf

Use this configuration for your mosquitto:
<pre>
listener 1883
protocol mqtt

listener 8883
protocol websockets
allow_anonymous true
</pre>

And run it in this way with docker:
<pre>
docker run -it --rm -p 1883:1883 -p 8883:8883 -v $(pwd)/YOUR_FOLDER_WHICH_CONTAINS_MOSQUTITTO_CONF:mosquitto/config eclipse-mosquitto
</pre>