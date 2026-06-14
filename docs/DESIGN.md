---
version: kit-theme
---

## Selected themes

| Theme       | Canvas | Accent  | Slug        |
| ----------- | ------ | ------- | ----------- |
| Binance     | dark   | #fcd535 | binance     |
| Ferrari     | dark   | #da291c | ferrari     |
| Shopify     | dark   | #c1fbd4 | shopify     |
| Spotify     | dark   | #1ed760 | spotify     |
| PlayStation | dark   | #0070d1 | playstation |
| Airbnb      | light  | #ff385c | airbnb      |
| Nike        | light  | #111111 | nike        |
| Slack       | light  | #4a154b | slack       |
| NVIDIA      | light  | #76b900 | nvidia      |
| Uber        | light  | #000000 | uber        |

Full CSS variable definitions live in `DASHBOARD.html` under `body[data-theme="<slug>"]`
blocks (or `:root` for Framer). Copy those blocks into your app's stylesheet when
implementing the theme picker.

## Theme picker mandate

All frontend UI **must** include a theme picker that lets users switch between the themes
listed above at runtime. Apply a theme by setting `data-theme="<slug>"` on the root element
(`<html>` or `<body>`). The default theme on first load should be **Binance**.
