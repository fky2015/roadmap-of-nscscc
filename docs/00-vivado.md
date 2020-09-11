---
id: install-vivado
title: Vivado 安装
---
> Vivado 设计套件，是 FPGA 厂商赛灵思公司 2012 年发布的集成设计环境。包括高度集成的设计环境和新一代从系统到 IC 级的工具。这也是一个基 于AMBA AXI4 互联规范、IP-XACT IP 封装元数据、工具命令语言（TCL）、Synopsys 系统约束（SDC）以及其它有助于根据客户需求量身定制设计流程并符合业界标准的开放式环境。

## Vivado的安装

Vivado Design Suit 是 Xilinx 公司为硬件分析与设计而专门开发的一款软件套件，具有丰富的功能和良好的生态系统。本文档中，我们以 Vivado 2019.2 的安装为例简要说明 Vivado 的安装流程。

Vivado 的安装并不复杂。首先，我们需要获取 Vivado 2019.2 的安装包。具体来说，登录 Xilinx中国 的官方网站，依次选择产品-硬件开发-Vivado Design Suite即可进入官方下载界面。点击下方的 Vivado Design Suite HLx 版本 “立即下载”按钮，即可进入版本选择界面。选择 2019.2 版本后，即可获得对应的[下载链接](https://china.xilinx.com/support/download/index.html/content/xilinx/zh/downloadNav/vivado-design-tools/2019-2.html)（注意区分更新包与本体的区别）,如下图。

![](https://pic.downk.cc/item/5f58706f160a154a67e09ca3.png)

官方提供的下载方式为下载器模式，下载 `.exe` 格式的下载器（Xilinx Unified Installer 2019.2: Windows Self Extracting Web Installer）并执行后，会自动完成一系列的下载、安装流程。

在安装过程中，我们需要依次进行：
- 登录 Xilinx 账户
- 同意全部协议
- 选择安装的 Vivado 版本
- 勾选安装选项

总的来说，安装过程中的各类设置可以保持默认，但有一点需要格外注意，**安装路径、项目路径中一定不要出现中文（包括中文符号等）**，Vivado 对中文支持较差，一旦出现中文，可能出现各种莫名其妙的错误，切记切记。

整个安装流程在网速稳定的情况下大致需要一到两小时左右，安装完毕后即可开始使用Vivado进行开发和设计。

### 其他下载地址

由于Vivado本体安装包较大（约30GB），官网下载可能较慢，因此附上如下两种其他的下载方式：
- 百度网盘：https://pan.baidu.com/s/1OsccE8Vv5kdBpaipLVDzzA 提取码：2333
- 蒲公英PT站（推荐）：请自行在站内搜索

