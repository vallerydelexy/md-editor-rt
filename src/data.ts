export const mdText =
  '## 😲 md-editor-rt\n\nMarkdown 编辑器，基于 react，使用 jsx 和 typescript 语法开发，支持切换主题、prettier 美化文本等。\n\n### 🤖 基本演示\n\n**加粗**，<u>下划线</u>，_斜体_，~删除线~，上标<sup>26</sup>，下标<sub>[1]</sub>，`inline code`，[超链接](https://imbf.cc)\n\n> 引用：世界上没有绝对，只有相对\n\n## 🤗 代码演示\n\n```js\nimport { defineComponent, ref } from "vue";\nimport MdEditor from "md-editor-rt";\nimport "md-editor-rt/lib/style.css";\n\n\nexport default defineComponent({\n  name: "MdEditor",\n  setup() {\n    const text = ref("");\n    return () => (\n      <MdEditor modelValue={text.value} onChange={(v: string) => (text.value = v)} />\n    );\n  }\n});\n```\n\n\n## 🖨 文本演示\n\n\n依照普朗克长度这项单位，目前可观测的宇宙的直径估计值（直径约 930 亿光年，即 8.8 × 10<sup>26</sup> 米）即为 5.4 × 10<sup>61</sup>倍普朗克长度。而可观测宇宙体积则为 8.4 × 10<sup>184</sup>立方普朗克长度（普朗克体积）。\n\n\n## 📈 表格演示\n\n\n| 昵称 | 猿龄（年） | 来自      |\n| ---- | ---------- | --------- |\n| 之间 | 3          | 中国-重庆 |\n\n\n## ☘️ 占个坑@！\n';

export const mdEnText =
  '## 😲 md-editor-rt\n\nMarkdown Editor for Vue3, developed by jsx and typescript, support different themes、beautify content by prettier.\n\n### 🤖 Base\n\n**bold**, <u>underline</u>, _italic_, ~line-through~, superscript<sup>26</sup>，subscript<sub>[1]</sub>，`inline code`，[link](https://imbf.cc)\n\n> quote：hahaha\n\n## 🤗 Demo\n\n```js\nimport { defineComponent, ref } from "vue";\nimport MdEditor from "md-editor-rt";\nimport "md-editor-rt/lib/style.css";\n\n\nexport default defineComponent({\n  name: "MdEditor",\n  setup() {\n    const text = ref("");\n    return () => (\n      <MdEditor modelValue={text.value} onChange={(v: string) => (text.value = v)} />\n    );\n  }\n});\n```\n\n\n## 🖨 Text\n\n\nThe Old Man and the Sea served to reinvigorate Hemingway\'s literary reputation and prompted a reexamination of his entire body of work.\n\n\n## 📈 Table\n\n\n| nickname | age | from      |\n| ---- | ---------- | --------- |\n| zhijian | 3          | China ChongQing |\n\n\n## ☘️ em... \n';
