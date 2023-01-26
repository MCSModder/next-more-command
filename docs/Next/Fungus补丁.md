# Fungus 补丁

## 游戏内 Fungus 数据

### 导出

如果已经导出 Base 数据的话，可以忽略导出步骤

点击 Next 面板上的【导出 Base】按钮，即可导出 Fungus 数据。

导出的游戏数据位于 `..\OutPut\Funugs` 根据 Next 的安装位置，有所不同

### 查看数据

导出的数据格式通常如下：

```json
{
  "Name": "NPCJiaoHuTalk",
  "Blocks": [
    {
      "ItemID": 344,
      "Name": "聊天按钮被点击起始点",
      "Description": "聊天按钮被点击起始点",
      "Position": "(-3033.412,-1448.144)",
      "Commands": [
        {
          "ItemID": 371,
          "CmdType": "Fungus.TryinitFungaus"
        },
        {
          "ItemID": 346,
          "CmdType": "CmdInitNPC"
        },
        {
          "ItemID": 352,
          "CmdType": "Fungus.Call",
          "targetFlowchartName": null,
          "targetBlockID": "351(首次交谈判断)",
          "startLabel": "",
          "startIndex": 0,
          "callMode": 0
        }
      ]
    },
......
```

Flowchart 指每一个导出的文件

Block 指一个个对话节点

Command 指具体运行的剧情指令

## 创建 Fungus 补丁

在 Mod 文件夹里新建 `NData/FungusPatch` 文件夹，随后在该文件夹里新建任意名称的 json 文件，文件结构如下：

`example.json`

```json
[
  {
    "TargetFlowchart": "NPCJiaoHuTalk",
    "TargetBlock": 362,
    "TargetCommand": 1147,
    "Priority": 0,
    "Type": "Insert",
    "Command": {
      "CmdType": "NextMenu",
      "CmdParams": "啊哈哈哈鸡汤来咯！#鸡汤来咯"
    }
  },
  {
    "TargetFlowchart": "NPCJiaoHuTalk",
    "TargetBlock": 362,
    "TargetCommand": 397,
    "Priority": 0,
    "Type": "Delete"
  }
]
```

对象解释：
|字段|类型|说明|
|-|-|-|
|TargetFlowchart|字符串|目标 Flowchart 的名称|
|TargetBlock|整数|目标 Block 的 ItemID|
|TargetCommand|整数|要插入的 Command 的 ItemID，若为-1，即为插入到所有 Command 的最后|
|Priority|整数|优先级，优先级越高的 Patch，在插入时 index 越大|
|Type|PatchType|Patch 类型，目前有 Insert 与 Delete 两种。<br />Insert 类型会插入到目标命令的前面。<br />Delete 类型会删除目标命令|
|Command|FPatchCommand|插入的指令数据，仅在 Insert 模式下生效|

Command 对象解释：
|字段|类型|说明|
|-|-|-|
|CmdType|字符串|Patch 的指令类型|
|CmdParams|字符串|Patch 的指令参数|

通过在导出的 Fungus 里找到需要修补的剧情，然后将对应的 ID 填入补丁对象内，即可在游戏运行中对其进行修补。

### 可插入的 Command 类型

目前可以插入的 Command 如下：
|CmdType 类型|说明|CmdParams 参数|
|-|-|-|
|NextEvent|跳转到 Next 事件，会中断当前 Fungus，可使用 RunFungusBlock 重新跳回|目标事件#跳转条件<br />只有满足条件时才跳转，可不填写，默认为 True
|NextInnerEvent|执行内插 Next 事件，在执行完后会自动跳转回当前位置|目标事件#跳转条件<br />只有满足条件时才跳转，可不填写，默认为 True
|NextMenu|弹出选项框，选择后跳转到 Next 事件，会中断当前 Fungus，可使用 RunFungusBlock 重新跳回|选项名称#目标事件#显示条件<br />只有满足条件时才显示选项，可不填写，默认为 True
