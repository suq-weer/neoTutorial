---
title: 初识 Neoforge
---

# 初识 Neoforge

## Neoforge 的由来

***Neoforge*** 是2023年7月从经典 *Forge* 项目分裂出来的新一代 *Minecraft* 模组加载器。

### 背景

由于[原 *Forge* 项目核心团队成员之间的严重分歧](https://neoforged.net/news/theproject/#what-has-happened-here)，大部分开发者决定另起炉灶，创建了 *NeoForged* 团队。这次分裂主要是因为对项目发展方向和管理方式存在根本性分歧。

简单来说，Neoforge就是一群经验丰富的Forge开发者因为理念不合而创建的新项目，旨在解决原项目存在的各种问题。

## Neoforge 的特点

### 兼容性

*Neoforge* 在设计上保持了与原 *Forge* 的良好兼容性。对于 *Minecraft* 1.20.1 及更早版本，*NeoForge* 基本可以无缝运行原有的 *Forge* 模组，这为玩家提供了平滑的过渡体验。虽然 *NeoForge* 模组不能直接在原 *Forge* 上运行，但这种单向兼容性大大降低了玩家迁移的成本。特别是在 1.20.2 版本之后，尽管两者逐渐走向独立发展，但大部分主流模组都已经或正在向 *NeoForge* 迁移，确保了生态系统的延续性。

### 功能强大

*NeoForge* 完美继承了 *Forge* 加载器的核心优势，同时在现代化改进方面表现卓越。它延续了 *Forge* 对大型、复杂模组的强大支持能力，**特别适合深度模改、科技类模组及整合包开发**。在继承 *Forge* 成熟稳定的 API 体系基础上，*NeoForge* 进一步优化了底层架构，通过系统性重构减少了过时代码依赖，显著提升了加载效率与运行稳定性。

相比 *Fabric*、*Quilt* 等新兴加载器，***NeoForge* 的独特优势体现在**：

- **拥有较为完善的调试工具链**，提供了更加直观的游戏内错误诊断界面，当出现模组冲突时能给出清晰的定位信息
- 得益于 *Forge* 生态多年积累，***NeoForge* 能够更好地处理复杂的模组间依赖关系**，降低兼容性问题
- **拥有更多的内置 API**，制作复杂模组不需要添加大量依赖库来满足需求

### 社区活跃

*NeoForge* 拥有极其活跃的开发生态。由于继承了原 *Forge* 团队的核心开发者，项目在技术实力上得到了充分保障。社区采用更加开放的开发模式，对用户反馈响应迅速，问题修复周期明显缩短。从发展趋势来看，越来越多的知名模组如[机械动力 (*Create*)](https://modrinth.com/mod/create)、[应用能源 2 (*Applied Energistics 2*)](https://modrinth.com/mod/ae2)、[沉浸工程 (*Immersive Engineering*)](https://modrinth.com/mod/immersiveengineering) 等都在积极适配 *NeoForge* 平台。同时，社区还涌现出大量专门为 *NeoForge* 优化的性能模组，形成了日趋完善的生态系统。

> [!tip] 开始之前
> 本文档仅适用于 ***Minecraft* 1.21.1 版本的 *Neoforge***，这也是截至到文档项目创建时间最流行的 *Minecraft* 版本，**由于 *Mojang* 在 1.21.x 版本进行大量优化修改与 *Neoforge* 相对应的兼容适配**，本文档不保证某些内容在非 1.21.1 版本下的准确性。

## 准备工作

*Neoforge* 模组基于 *Java* 语言开发，采用 *Gradle* 作为构建工具。在正式开始开发之前，我们需要准备相应的开发环境：**包括安装必要的开发工具、通过官方模板创建初始项目，以及完成完整的环境配置。**接下来将详细指导读者如何使用 *Intellij IDEA* 来创建 *Neoforge* 模组项目，并进行系统的开发环境配置。

#### 安装 JDK

*Java* 开发工具包（JDK，*Java Developer's Kit*）是 *Neoforge* 模组的基础，因此首先需要安装 JDK。

*Neoforge* 官方建议使用微软的 OpenJDK 21 作为项目的 JDK，以下以安装微软 JDK 21 为例进行介绍：

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
>*Neoforge* 模组开发过程中，**请勿使用 *JDK 18* 或更低的 *JDK* 版本**，因为 *Neoforge* 仅支持 *JDK 21+* 版本。

#### 安装 ***Intellij IDEA***

***IntelliJ IDEA*** 是由 *JetBrains* 开发的顶级 *Java* 集成开发环境，被业界公认为最好的 *Java* 开发工具。它提供智能代码补全、强大的重构功能、*Git* 版本控制集成、*JUnit* 测试支持等核心功能，能够显著提升开发效率，是 *Java* 开发者不可或缺的专业工具。

可以访问 [*Jetbrains Intellij IDEA* 官网下载页](https://www.jetbrains.com/idea/download/)下载 *Intellij IDEA*：

![Windows 版 IDEA 下载](/pic/idea_windows_download.png)

Linux 版本建议使用 `yay` 等包管理器先安装 `JetBrains Toolbox`，然后通过 `JetBrains Toolbox` 进行安装：

- *AUR*: [jetbrains-toolbox](https://aur.archlinux.org/packages/jetbrains-toolbox)

### 创建项目

#### 从官方模板生成器中创建项目

#### 通过 *Minecraft Devlopment* 插件创建项目

### 配置项目

#### 配置网络环境

##### 方法一：替换 *Gradle* 仓库镜像源

##### 方法二：修改 *IDEA* 代理配置

#### 修改模组元数据

### 运行项目实例

## 本文档的格式约定