Cutting room
Digital Twins
There are three stages of the IoT/AI life cycle; duty cycle, statistical inference, and machine learning.  Digital twins are a set of data about the device such as curtain while it's running or predefined configurations that can be queried, set by the cloud, and set by the device itself.  There are 2 different types of digital twins you can use when setting up an IoT hub. The first is Device Twin. Device  Twins are something that comes with IoT Hub by default. It exists weather you use it or not and it is used to send configuration information from the cloud to device and back again. The Digital Twin Service is employed through an edge container in IoT Hub and send telemetry for the current state of the device. The Digital Twin Service receives telemetry from the device.  It has the ability to make queries based off of hierarchy and geolocation. This gives the data scientist the ability to look at connected features between devices based off location and relationship to other devices. Knowing relationships can be advantageous when feature engineering or using graph frames to understand centrality or influence. In the next few sections we'll talk about both Device Twins and Digital Twins and when you would use them in your AI life cycle.

When you need to look at devices along a geographic rout such as smart cities use digital twins.  When you need to pass along a device specific configuration use device twins.
Device Twin 
A Device twin is a JSON object that has three components.  The first is tags tags are a set of properties about the device such as its location or it's purpose.  The next two components are a set of properties. The first is that is desired property. This property set by the cloud. The device cannot set the device property it can only be set by the cloud. The next property is the reported property this property can only be set by the device. The separation of concerns of desired versus reported allows a round-robin effect of the cloud telling device to perform an action perhaps a system update or a change of machine learning model and getting the results when a device tries to perform that action.  In a typical IoT scenario a update model digital twin message maybe set on the desired property to 10,000 devices. Some devices may not have ability to run the new model some devices may be offline and cannot update the model. The digital twin can then be queried and the Digital Twin API and look at the reported state of the devices. 

Digital Twin
The Azure Digital Twin Service allows IoT devices the ability to send current state telemetry to the service.   The service is both location and hierarchy aware.  A location where device can be queried to show other devices that are in a similar location this can be devices in the same room, or the same campus, or the same general geographic region.  Hierarchy data can help with devices that are interdependent. An example of this would be a smart city. In a smart city, an intersection might have a camera, lidar, and various other sensors to determine issues such as traffic flow and accidents. Data from these devices needs to be grouped together as if they were information from one device. In addition, data from one intersection might affect data from other intersections so there could be a both a hierarchy device and a location awareness of devices in the data. From a AI perspective, this allows the researcher to combine various data sources into one coherent set of information enriching the researcher the ability to add features to the dataset.

Getting Ready

Setting up a Device Twin and IoT hub
Every IoT Hub device has a device twin.  There is a cloud SDK that handles tags and desired properties and a device SDK that writes to reported properties.   To set up a device twin on an IoT Device that is already set to send messages to IoT hub you will need to  make a call back handler and implement the call back

After you initialize your IoT hub you will need to set the call back.

client.set_device_twin_callback( device_twin_callback, TWIN_CONTEXT)

Then you will need to implement the set_device_twin_callback method

def device_twin_callback(update_state, payload, user_context):
   print ( "update status: %s" % update_state )     
   print ( "payload: %s" % payload ) 

To send the reported state to IoT Hub, you will need to use the send_reported_state method.

client.send_reported_state(reported_state_json, len(reported_state_json), send_device_twin_callback, SEND_REPORTED_STATE_CONTEXT)
Then you will need to implement a send_device_twin_callback callback.

def send_device_twin_callback(status_code, user_context): 
    print ( "send_device_twin_callback: %d" % status_code ) 

