---
id: vscode
title: 配置 VSCode 作为代码编辑器
---

:::note

### 阅读本章后你将会收获


- 如何在 VSCode 中对 HDL 进行
  - 代码高亮
  - 代码补全
  - 语法检查
  - 代码格式化
- 为什么**不推荐**使用 VSCode 替代 Vivado 的**默认编辑器**

:::

## 如何配置 VS Code 的 Verilog 编写环境

VS Code 本身具有丰富的拓展插件，通过合理的组合，我们可以在 VS Code 中实现：
- Verilog 语言支持（包括代码高亮等）
- 语法检查
- 代码格式化

### Verilog语言支持插件

首先，我们需要安装插件 [Verilog HDL/SystemVerilog](https://marketplace.visualstudio.com/items?itemName=mshr-h.VerilogHDL)，该插件的功能是令 VS Code的代码编辑器能够支持基本的 Verilog 语法，包括自动的高亮等。

![图片1](https://pic.downk.cc/item/5f599f79160a154a67919212.png)

之后，为了加入 Vivado 的实时代码检查功能，我们需要配置 `xvlog` 的环境变量。我们找到 Vivado 的安装路径，将 `bin` 文件夹的路径（一般是 `C:\Xilinx\Vivado\2017.2\bin`）加入环境变量

![图片2](https://pic.downk.cc/item/5f59a657160a154a6794a6b4.png)

检查一下。我们打开 PowerShell，输入 `xvlog -version`，如果出现了 Vivado Simulator 的版本信息，表明我们的环境变量配置成功。

![图片3](https://pic.downk.cc/item/5f59a757160a154a679511e3.png)

之后，我们在 VS Code 的配置项目中找到 `Verilog > Linting: Linter` 的配置项，将其修改为 `xvlog` 即可：

![图片4](https://pic.downk.cc/item/5f59a657160a154a6794a6a9.png)

为了能够配置 Verilog 的自动补全等功能，我们需要安装 `universal-ctags`。使用 scoop 包管理，我们在 Windows 上面直接输入：

```powershell
scoop install universal-ctags
```

即可安装 `universal-ctags`.

### Verilog 代码自动格式化插件

![](https://pic.downk.cc/item/5f59a657160a154a6794a6ac.png)
为了让 VS Code 能够自动格式化 Verilog 代码，我们需要安装：[verilog-formatter](https://marketplace.visualstudio.com/items?itemName=IsaacT.verilog-formatter) 这一插件。

同时，我们需要在 [HayasiKei/istyle-verilog-formatter](https://github.com/HayasiKei/istyle-verilog-formatter/releases/) 处下载最新编译的 iStyle Verilog Formatter 的 Windows 版本。解压得到 `iStyle.exe` 之后，我们选择一个妥当的位置放置可执行文件，并复制文件路径。

之后，我们在 VS Code 中找到 `Verilog-formatter > Istyle: Path`，并将刚刚的 `iStyle.exe` 的文件路径填入即可。之后，我们在 `Verilog-formatter > Istyle: Style` 配置项处选择一个格式化的风格（比如 `K&R`），就可以通过快捷键 `Ctrl + Shift + P` 并输入 Format Document 来格式化 Verilog 代码。

![](https://pic.downk.cc/item/5f59a657160a154a6794a6b0.png)

## 将 VS Code 作为 Vivado 的默认代码编辑器

这部分内容可以参考往届学长所编写的内容，请[点击此处](https://zanpu.spencerwoo.com/1_preparations/1-3_editor.html)。

但在我们的实际使用过程中，使用 VS Code 作为 Vivado 的默认代码编辑器实际上存在着诸多的问题，包括：
- 问题。。。
- 问题。。
- 问题。。

因此，我们**不推荐**使用 VSCode 替代 Vivado 的**默认编辑器**
