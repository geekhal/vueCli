# vueCli
vue脚手架工程

# 特性
极简，版本号维护，webpack编译打包

# todo
- ```npm install```
- ```npm install webpack -g```
- ```webpack --progress --colors```

# 开发环境
- 执行```build.bat```

# 生产环境
- 执行```release.bat```

# 说明
- 无论执行何种命令，都会生成一个app.bundle.js，只不过build命令下的文件路径是build/[hash]/app.bundle.js，release命令下的文件路径是release/[hash]/app.bundle.js，[hash]为文件内容hash值。
- 根目录下会生成一个ver.js，里面包含了我们所要求的对应版本的js文件路径。
