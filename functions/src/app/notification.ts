import * as admin from "firebase-admin";

export async function onNotificationDevices(data: any, context: any) {
  const doc: any = data;
  const { name, fileUrl, key } = doc;

  const message = {
    topic: `everydaynews`,
    data: {
      title: "everydaynews",
      body: name,
      key: key
    },
    notification: {
      title: "everydaynews",
      body: name,
      imageUrl: fileUrl
    },
    apns: {
      payload: {
        aps: {
          "mutable-content": 1,
          sound: "default"
        },
       
      },
      fcm_options: {
        image: fileUrl
      }
    },
    android: {
      notification: {
        title: "everydaynews",
        body: name,
        image: fileUrl,
        sound: "default"
      }
    }
  };

  await admin
    .messaging()
    .send(message)
    .then(response => {})
    .catch(error => {});
  // await admin.messaging().sendToDevice(pushToken, payload, options)
  // return admin.messaging().sendToTopic("TDNews", payload, options).then(response => {
  // }).catch(error => {
  // });
}
