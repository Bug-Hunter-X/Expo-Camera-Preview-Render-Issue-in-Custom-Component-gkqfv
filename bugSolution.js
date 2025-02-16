```javascript
import React, { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraReady = async () => {
    // Camera is ready, you can now access cameraRef.current.takePictureAsync()
    console.log('Camera is ready!');
  };

  if (hasPermission === null) {
    return <View />; // Show loading screen
  } else if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef} onCameraReady={handleCameraReady}>
          {/* Your camera controls and views here */}
      </Camera>
    );
  }
};

export default CameraComponent;
```