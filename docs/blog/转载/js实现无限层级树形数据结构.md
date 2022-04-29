---
title: js实现无限层级树形数据结构
date: 2020-10-29 17:35:21
isShowComments: false
categories: 
  - 前端
  - js
tags: 
  - 转载
---
### 封装成函数
```js
	export default {
		methods: {
			getTree(data, id, parentId, children) {
				//	data   处理的数据
				//  id 数据id
				// parentId 父节点的字段名
				// children	生成的子节点的名称
				let cloneData = JSON.parse(JSON.stringify(data))
				return cloneData.filter(father=>{
				    let branchArr = cloneData.filter(child => father[id] == child[parentId]);
				    branchArr.length>0 ? father[children] = branchArr : ''
				})
			}
		}
	}
```