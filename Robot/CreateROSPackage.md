Folder Structure should look like this
```bash
Catkin_make/        -- WORKSPACE
  src/                   -- SOURCE SPACE
    CMakeLists.txt       -- 'Toplevel' CMake file, provided by catkin
    package_1/
      CMakeLists.txt     -- CMakeLists.txt file for package_1
      package.xml        -- Package manifest for package_1
    ...
    package_n/
      CMakeLists.txt     -- CMakeLists.txt file for package_n
      package.xml        -- Package manifest for package_n
 ```
 
 To create a package
 
 ```bash
# You should have created this in the Creating a Workspace Tutorial
$ cd ~/catkin_ws/src
```




 ```bash
catkin_create_pkg package_1 std_msgs rospy roscpp
```

Building

 ```bash
cd ~/catkin_ws
catkin_make
```

Add workspace to ROS Environment
 ```bash
. ~/catkin_ws/devel/setup.bash
```


 ```bash

```
