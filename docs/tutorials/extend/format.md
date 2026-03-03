---
title: 文档约定
---

# 文档约定

## 内容排版

本文档基本上使用 *Markdown* 语法编写并按照标准进行排版，以下是 *VitePress* 与本文档所安装插件的特色内容：

### 代码

本文档会将代码放置在 *VitePress* 代码框中，展示的代码根据用途分为以下几种：

#### 1. 代码段

如果代码**只需要一个或多个方法即可讲解完毕**，一般会直接给出对应片段：

```java
@SubscribeEvent
public static void onLivingJump(LivingJumpEvent event) {
  Entity entity = event.getEntity();
  if (!entity.level().isClientSide()) {
    entity.heal(1);
  }
}
```

#### 2. 聚焦代码段

**如果展示的代码与上一个代码有连贯性**（比如一步步自定义方块之类的教程），**通常会给出完整代码以便读者比较教程与实际代码**，**但非重要片段会模糊处理**，点击或鼠标移动到代码框即可暂时消去模糊：

```java
@Mod("yourmodid")
public class YourMod {
    public YourMod(IEventBus modBus) {
        NeoForge.EVENT_BUS.addListener(YourMod::onLivingJump);
    }

    // [!code focus:8]
    // 每次玩家跳跃都会回复 1 点（0.5 颗心）血量
    private static void onLivingJump(LivingJumpEvent event) {
        Entity entity = event.getEntity();
        // 回复操作只能在服务端上执行
        if (!entity.level().isClientSide()) {
            entity.heal(1);
        }
    }
}
```

#### 3. 差异代码段

如果**展示的代码是之前代码的修改**，代码框会显示对应的差异：

```java
// [!code --]
// 每次玩家跳跃都会回复 1 点（0.5 颗心）血量
// [!code ++]
// 每次玩家跳跃都会回复 2 点（1.0 颗心）血量
private static void onLivingJump(LivingJumpEvent event) {
  Entity entity = event.getEntity();
  // 回复操作只能在服务端上执行
  if (!entity.level().isClientSide()) {
    entity.heal(1); // [!code --]
    entity.heal(2); // [!code ++]
  }
}
```

#### 4. 强调代码段

当代码段中**有部分代码需要重点注意或易错写法**时，会用红背景色与黄背景色进行强调：

```java
// 每次玩家跳跃都会回复 1 点（0.5 颗心）血量
private static void onLivingJump(LivingJumpEvent event) {
  Entity entity = event.getEntity();
  // [!code warning]
  // 回复操作只能在服务端上执行
  if (!entity.level().isClientSide()) {
    // [!code error]
    entity.heal(1) // 漏了个分号！
  }
}
```

#### 5. 代码组

当需要**给出一个或多个文件的全部代码**时，通常会使用代码组：

:::code-group
```java [ModBlockAndItemColor.java]
package top.xiaosuoaa.scienceandmagic.client;

import net.minecraft.client.color.block.BlockColor;
import net.neoforged.neoforge.client.event.RegisterColorHandlersEvent;
import top.xiaosuoaa.scienceandmagic.NeoModRegister;

public class ModBlockAndItemColor {
  public static final BlockColor SEQUOIA_LEAVES_COLOR = (state, reader, pos, tintIndex) -> 0xffb95a;

  public static void registerBlockColor(RegisterColorHandlersEvent.Block event) {
    event.register(SEQUOIA_LEAVES_COLOR, NeoModRegister.SEQUOIA_LEAVES.get());
  }
}
```
```java [KeyBinding.java]
package top.xiaosuoaa.scienceandmagic.basic.keybinding;

import com.mojang.blaze3d.platform.InputConstants;
import net.minecraft.client.KeyMapping;
import net.minecraft.network.chat.Component;
import net.neoforged.neoforge.client.settings.KeyConflictContext;
import org.lwjgl.glfw.GLFW;

public class KeyBinding {
  public static final String KEY_CATEGORY_SCIENCE_AND_MAGIC = Component.translatable("key.category.science_and_magic").getString();
  public static final String KEY_OPEN_PLAYER_CAPABILITY = Component.translatable("key.science_and_magic.open_player_capability").getString();
  public static final KeyMapping PLAYER_CAPABILITY_KEY = new KeyMapping(KEY_OPEN_PLAYER_CAPABILITY, KeyConflictContext.IN_GAME,
      InputConstants.Type.KEYSYM, GLFW.GLFW_KEY_O, KEY_CATEGORY_SCIENCE_AND_MAGIC);
}
```
:::

### 引用

**引用表示给读者的附加内容**，引用类似于 *Obsidian* 的语法，可以折叠代表给读者的选读文段。

以下是部分样式：

> [!quote]- 普通折叠样式
> 这是普通折叠样式，用于文献片段的引用，因为显示问题，注意不要将折叠引用样式的标题文本长度超出 15 字。

> [!quote]+ 普通折叠样式（默认展开）
> 这是普通折叠样式，用于文献片段的引用，因为显示问题，注意不要将折叠引用样式的标题文本长度超出 15 字。

> **简洁样式**<br />
> 这是简洁样式。

> [!tip] 提示样式
> 这是提示样式。

> [!notice] 注意样式
> 这是注意样式。

> [!warning] 警告样式
> 这是警告样式。

> [!error] 错误样式
> 这是错误样式。
