---
title: 图片文件或者图片链接转换成base64
date: 2020-11-26 17:00:00
isShowComments: false
categories: 
  - 前端
tags: 
  - 文件处理
---

::: slot first
## 图片文件转换成base64
:::

::: slot two
## 图片链接转换成base64
:::

::: slot three
``` js
	let fileList = file.file;
	let reader = new FileReader(); //html5读文件
	reader.readAsDataURL(fileList);
	reader.onload = (e) => {
		this.imageUrl = e.target.result	//该结果即为这张图片的base64
	}
```
:::

::: slot four
``` js
	let that = this;
	window.URL = window.URL || window.webkitURL;
	var xhr = new XMLHttpRequest();
	xhr.open("get", item, true);
	// 至关重要
	xhr.responseType = "blob";
	xhr.send();
	xhr.onload = function() {
		if (this.status == 200) {
			//得到一个blob对象
			var blob = this.response;
			// 至关重要
			//	进行文件格式和大小验证
			let reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = (e) => {
				that.base64 = e.target.result
				console.log(this.base64)
			};
		}
	}
```

:::

::: slot five
::: tip 说明
如下关键代码即为必要逻辑代码，部分条件判断代码并未添加
:::

<Blobbase64></Blobbase64>
