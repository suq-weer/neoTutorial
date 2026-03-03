---
title: 架设 NeoForge 开发环境并构建自己的第一个模组
---

# 架设 NeoForge 开发环境并构建自己的第一个模组

> [!tip] 开始之前
> 本文档仅适用于 ***Minecraft* 1.21.1 版本的 *NeoForge***，这也是截至到文档项目创建时间最流行的 *Minecraft* 版本，**由于 *Mojang* 在 1.21.x 版本进行大量优化修改与 *NeoForge* 相对应的兼容适配**，本文档不保证某些内容在非 1.21.1 版本下的准确性。

## 准备工作

*NeoForge* 模组基于 *Java* 语言开发，采用 *Gradle* 作为构建工具。在正式开始开发之前，我们需要准备相应的开发环境：**包括安装必要的开发工具、通过官方模板创建初始项目，以及完成完整的环境配置。**接下来将详细指导读者如何使用 *Intellij IDEA* 来创建 *NeoForge* 模组项目，并进行系统的开发环境配置。

#### 安装 JDK

*Java* 开发工具包（JDK，*Java Developer's Kit*）是 *NeoForge* 模组的基础，因此首先需要安装 JDK。

*NeoForge* 官方建议使用微软的 OpenJDK 21 作为项目的 JDK，以下以安装微软 JDK 21 为例进行介绍：

##### Windows 平台

1. 访问微软官网下载 [OpenJDK 21](https://learn.microsoft.com/zh-cn/java/openjdk/download)

2. 找到 *OpenJDK 21* 栏目：

![微软 OpenJDK 21 官网截图](/pic/microsoft_learn_openjdk21.png)

3. 点击 `microsoft-jdk-21.0.10-windows-x64.msi` 或 `microsoft-jdk-21.0.10-windows-x64.exe` 前往下载：

![微软 OpenJDK 21 下载页面 Windows 引导截图](/pic/microsoft_learn_openjdk21_windows_x64.png)

##### Linux 平台

**最好使用包管理器进行安装，如 `apt`、`yay` 等。**

- *AUR*: [microsoft-openjdk-21-bin](https://aur.archlinux.org/packages/microsoft-openjdk-21-bin)
- *Ubuntu* 等流行发行版：[微软官方的安装教程](https://learn.microsoft.com/zh-cn/java/openjdk/install?tabs=exe%2Chomebrew%2Cubuntu#install-on-linux)

>[!note] 提示
>如果系统没有包管理器，或是某些包管理器无法安装 *OpenJDK*，**可以自行解压 *OpenJDK* 包**，**并手动解压到指定目录**：
>![微软 OpenJDK 21 下载页面 Linux 引导截图](/pic/microsoft_learn_openjdk21_linux_x64.png)

##### MacOS 平台

[微软官方的安装教程](https://learn.microsoft.com/zh-cn/java/openjdk/install?tabs=exe%2Chomebrew%2Cubuntu#install-on-macos)

>[!error] 注意 
>*NeoForge* 模组开发过程中，**请勿使用 *JDK 18* 或更低的 *JDK* 版本**，因为 *NeoForge* 仅支持 *JDK 21+* 版本。

#### 安装 ***Intellij IDEA***

***IntelliJ IDEA*** 是由 *JetBrains* 开发的顶级 *Java* 集成开发环境，被业界公认为最好的 *Java* 开发工具。它提供智能代码补全、强大的重构功能、*Git* 版本控制集成、*JUnit* 测试支持等核心功能，能够显著提升开发效率，是 *Java* 开发者不可或缺的专业工具。

可以访问 [*Jetbrains Intellij IDEA* 官网下载页](https://www.jetbrains.com/idea/download/)下载 *Intellij IDEA*：

![Windows 版 IDEA 下载](/pic/idea_windows_download.png)

Linux 版本建议使用 `yay` 等包管理器先安装 `JetBrains Toolbox`，然后通过 `JetBrains Toolbox` 进行安装：

- *AUR*: [jetbrains-toolbox](https://aur.archlinux.org/packages/jetbrains-toolbox)

### 创建项目

这里我们只创建 *NeoForge* 1.21.1 模组项目：

#### 从官方模板生成器中创建项目

#### 通过 *Minecraft Devlopment* 插件创建项目

### 配置项目

#### 配置网络环境

##### 方法一：替换 *Gradle* 仓库镜像源

##### 方法二：修改 *IDEA* 代理配置

#### 修改模组元数据

### 运行项目实例
