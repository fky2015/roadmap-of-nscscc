---
id: vscode
title: 配置 VSCode 作为代码编辑器
key: 1a7f352f-0b28-48be-8453-7367bd609cc3
article_header:
  type: cover
  image:
    src: /assets/img/posts/2020-09-07-vscode.png
sharing: true
---


## TL;DR

Vivado 默认的代码编辑器对 Verilog 有着很好的代码提示能力，然而在编辑体验上还不尽如人意。

因此我们可以采用 VS Code 作为代码编辑器，来更快的进行代码编写和初步的语法检查，并利用其更强大的版本控制、共享协作等功能来加速 Verilog 代码开发。

![](../assets/img/posts/2020-09-07-vscode.png)
*使用 VS Code 编写 Verilog 项目*

<!--more-->

## 配置 VS Code 的 HDL 开发环境

### 安装 HDL 语言支持插件

首先我们安装 [Verilog-HDL/SystemVerilog/Bluespec SystemVerilog](https://marketplace.visualstudio.com/items?itemName=mshr-h.VerilogHDL)。

![](../assets/img/posts/2020-09-07-verilog-HDL-support.png)
*Verilog-HDL/SystemVerilog/Bluespec SystemVerilog HDL 语言支持插件*

它能够为包括 Verilog 在内的多种 HDL 提供语法高亮、常用代码片段、符号补全以及代码分析的功能。

然而不要着急，该插件并未实现后两种功能，而是从其他更专业的程序中获得帮助。因此我们还需要进行相应配置。

### 使用 xvlog / Verilator 作为代码分析工具

[Verilog-HDL/SystemVerilog/Bluespec SystemVerilog](https://marketplace.visualstudio.com/items?itemName=mshr-h.VerilogHDL) 在[官方文档](https://marketplace.visualstudio.com/items?itemName=mshr-h.VerilogHDL#Compatability)中给出了多个兼容的代码分析工具的比较。以下选用 `xvlog` / `Verilator` 作为对比，进行相应配置。

**这两个程序你只需选用其中一个，我更推荐 Verilator。**

- `xvlog`
  - Vivado 自带代码分析工具
  - **不需要额外安装依赖**
  - 但是功能稍弱。
- `Verilator`
  - 基于 C/C++ 开发的 HDL 编译、检查工具
  - **提供强大很多的代码检查功能**
  - 但 Windows 平台下需要手动编译。

#### xvlog 配置

`xvlog` 不需要额外安装依赖，我们只需要将 `xvlog` 所在路径添加到环境变量中即可（一般路径为`<你的安装目录>\Xilinx\Vivado\2019.2\bin`）。

然后确保在控制台/命令行中能够运行 `xvlog`:

```bash
❯ xvlog --version
Vivado Simulator 2019.2
```

最后，在 VS Code 的用户设置中 `Verilog > Linting: Linter` 一项选择 `xvlog`:

![](../assets/img/posts/2020-09-07-xvlog.png)
*配置 xvlog 为 linter*

#### Verilator 安装与配置

在 Linux 平台下，你可以直接通过包管理器进行安装。

```bash
# Debian 系
❯ apt-get install verilator

# Arch Linux
❯ pacman -S verilator
```

在 Windows 平台下，`Verilator` 需要使用 WSL 安装（推荐）或者手工编译（不建议）。

##### 基于 WSL 安装

Windows Subsystem for Linux（简称 WSL ）是一个在Windows 10上能够运行原生Linux二进制可执行文件（ELF格式）的兼容层。

因此在 WSL 中，安装 `Verilator` 就像在 Linux 中安装一样轻松。

![](../assets/img/posts/2020-09-07-wsl.png)
*以 Arch Linux 子系统为例*

最后在 VSCode 中，除了配置 `Verilog > Linting: Linter` 为 `verilator` 之外；还需要开启 `Verilog > Linting > Verilator: Use WSL`：

![](../assets/img/posts/2020-09-07-verilator-in-wsl.png)
*配置 Verilator 为 linter*

##### 基于 Cygwin 编译 Verilator（已废弃）

:::warning
注意，此方法极其容易产生安装问题。极其不建议使用。
:::

首先，在 [Verilator 的 Github 仓库](https://github.com/verilator/verilator/releases) 点击最新的版本，下载源代码并解压。

然后需要保证系统中有 binutils, gcc, perl, flex, bison 等编译工具链。此步骤目前最好的方式是使用 [Cygwin](https://www.cygwin.com/)（一个可原生运行于 Windows 系统上的 POSXI 兼容环境）来安装以上工具，并编译 `Verilator`。

首先下载 Cygwin 安装包。点击安装，选择 `Install from Internet`，在 `User URL` 处输入以下地址：

```
https://mirrors.tuna.tsinghua.edu.cn/cygwin/
```

点击 `Add` 按钮, 然后选中 `https://mirrors.tuna.tsinghua.edu.cn`, 点击 `下一步` 进行安装。

:::caution
注意，该列表为可多选列表，注意把上面不需要的镜像点掉。
:::

然后在选择依赖的页面中，将 `Devel` 一项设置为 `Install`：

然后进入解压后的文件夹:

```bash
# 生成 configure 文件
❯ autoconf
# 在这期间可能会提示你缺少某些程序，需要一一安装
❯ ./configure
❯ make

# make 完成以后，`verilator` 已经在 ./bin 文件夹下，你可以直接挪动到目标文件夹或者运行 make install
❯ make install
```

最后同理，确认 Windows 的控制台中可以使用 `verilator`:


```bash
❯ verilator --version
Verilator 4.036 2020-06-06 rev v4.034-208-g04c0fc8aa
```

然后在 VS Code 中配置为 linter：

![](../assets/img/posts/2020-09-07-verilator-as-linter.png)
*配置 Verilator 为 linter*


### 使用 ctags 作为符号补全工具

`ctags` 是老牌的符号补全工具，至今你还可以在 `Vim` 中见到它的身影。

在 Linux 中可以直接通过包管理安装。

在 Windows 中则需要安装 `universal-ctags`。

:::tip
如果你已经预期只会使用 `ctags` 一段时间。那么你可以跳过（繁琐的）包管理器配置流程，直接从 [release 页面](https://github.com/universal-ctags/ctags-win32/releases)下载已经构建好的可执行文件。
:::

如果你使用 [scoop](https://scoop.sh/) 进行 windows 的包管理的话，可以使用：

```bash
❯ scoop install universal-ctags
```

即可安装。


:::caution
如果提示 `Couldn't find manifest for 'universal-ctags'`，则需要先通过 `scoop bucket add extras` 添加额外的软件仓库列表。
:::


最后确保能在命令行中运行 `ctags`。

:::note
无需对 VS Code 进行额外设置，因为默认选项已经启用了 `ctags`。
:::


### 安装并配置代码格式化插件

接下来我们需要安装 [verilog-formatter](https://marketplace.visualstudio.com/items?itemName=IsaacT.verilog-formatter) 来进行格式化。

![](../assets/img/posts/2020-09-07-verilog-formatter.png)
*verilog-formatter 代码格式化插件*

除此之外，我们需要下载 [编译后的 iStyle](https://github.com/0qinghao/istyle-verilog-formatter/releases) 或者 [iStyle 源代码](https://github.com/thomasrussellmurphy/istyle-verilog-formatter/releases)并手动编译。

最后在 VS Code 中配置 `Verilog-formatter > Istyle` 到你的可执行文件。

另外在下方的 `Verilog-formatter > Istyle: Style` 一项，你可以选择多种格式化方式，在这里我推荐 `GNU`:

![](../assets/img/posts/2020-09-07-istyle-gnu.png)
*GNU 代码格式化风格*

之后在 VS Code 中，每当调用 `Format Document` 命令，当前文件就会进行格式化（我配置了快捷键 `Ctrl + Shift + I`）。

## 如果 VS Code 没有提示你的语法错误

:::warning
这段文字写下的时间是 2020 年 9 月 12 日，截至今天为止，Verilator 在 VSCode 上已经似乎有相当长的一段时间无法工作了。
当然，这主要是[插件的锅](https://github.com/mshr-h/vscode-verilog-hdl-support/issues)。
:::

因此此时我们不得不使用命令行手动检查语法:

```bash
# 切换到你的 verilog 代码所在路径

❯ verilator --lint-only -Wall <你的顶层文件>.v
```

![](../assets/img/posts/2020-09-12-verilator-in-cli.png)


## 为什么不推荐使用 VS Code 替带 Vivado 的默认编辑器

如果你细心搜索，你会发现不少教程（比如[这篇](https://blog.csdn.net/qq_39498701/article/details/84668833)）推荐你使用 VS Code 替换 Vivado 的默认编辑器。

但是我在使用一段时间后，强烈反对这种做法，原因如下：

1. **在代码设计、编写阶段，我们并不需要使用 Vivado**，因此更不需要使用 Vivado 进行代码编辑。
2. 很多时候只是希望在 Vivado 中快速浏览文件代码，如果替换了默认编辑器，每一次浏览文件都将切换到 VS Code 中，**影响体验**。
3. 在仿真阶段，Vivado 的默认编辑器能够提供最好的单步调试体验。而在 VS Code 中，你**无法给 Vivado 调试器打断点**。
4. Vivado 实现阶段的报错会指向具体文件，使用默认编辑器不会遇到“无法找到相应行号”的问题。

:::tip
因此，强烈建议保留 Vivado 的默认编辑器。
:::

## 将文件代码与 Vivado 项目分离

通常来说，新手在创建一个 Vivado 项目之后，常常会在 Vivado 中新建 Verilog 文件，然后直接编辑。

这样的结果就是，**Verilog 代码会埋在 Vivado 项目很深的路径之中**：

```
└── vivado # 你的 Vivado 项目
    └── vivado.srcs
        └── sources_1
            └── new
                └── your-verilog-file.v # 你的 Verilog 文件
```

但是这样既不方便你通过 VS Code 打开代码，也不方便使用 Git 进行版本控制。

因此正确的方式应该是在**独立的文件夹**中手动创建 `.v` 文件：

```
├── vivado # 你的 Vivado 项目
└── src
    └── your-verilog-file.v # 你的 Verilog 文件
```

然后在 Vivado 中通过 `Add Directory` 将整个 `src` 目录添加到 Vivado 开发环境中，Vivado 将自动寻找可能的顶层文件，并自动梳理文件间依赖关系。

![](../assets/img/posts/2020-09-07-vivado-add-directory.png)
*添加整个 `src` 文件夹中的代码*

注意 Vivado 对文件更新的监听规则为：自动监听已经加入的文件，不监听新创建的文件。也就是说：**如果你新建了一个 Verilog 文件，则需要再次添加入 Vivado 项目中**。


## 用 Git 进行版本控制

通过上一小结的介绍，我们已经将 Vivado 项目和我们的代码分离。

通常情况下，你可以使用 Git 直接管理 `src` 中内容，或者 ignore 掉 vivado 项目。

但有时候，Vivado 项目中有一些文本文件的配置也需要我们来版本控制，比如仿真波形配置文件 `.wcfg`。那么此时我们要注意排除其他的缓存文件。

通过 [gitignore.io](https://www.toptal.com/developers/gitignore)，你可以快速生成一份可用的 [`.gitignore` 文件](https://www.toptal.com/developers/gitignore/api/vivado,visualstudiocode)，或者基于此进行改进。

![](../assets/img/posts/2020-09-07-gitignore.png)
*gitignore.io （现已更名）*

## 如果你是 Vim 用户（与主题无关）


可以考虑在配置好 [coc.nvim](https://github.com/neoclide/coc.nvim) 的基础上，使用 [ svls ](https://github.com/dalance/svls) 作为 Language Server。


## 鸣谢

- 顾骁：提供了 Cygwin 环境下编译 Verilator 的内容。
- [另一位不愿意透露姓名的朋友](http://emptystack.top/)：提供了 WSL 安装 Verilator 的内容。
- 一些小伙伴们：指出了 `universal-ctags` 在 `extras` 的仓库中，需要额外运行命令。

