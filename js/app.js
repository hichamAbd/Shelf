import { apps } from "./apps.js";

const list = document.getElementById("apps");

for (const app of apps) {
  const item = document.createElement("li");

  const link = document.createElement("a");
  link.className = "app";
  link.href = app.url;
  link.rel = "noopener";

  const icon = document.createElement("img");
  icon.className = "app-icon";
  icon.src = `icons/apps/${app.icon}`;
  icon.alt = "";
  icon.width = 52;
  icon.height = 52;
  icon.decoding = "async";

  const text = document.createElement("span");
  text.className = "app-text";

  const name = document.createElement("span");
  name.className = "app-name";
  name.textContent = app.name;

  const what = document.createElement("span");
  what.className = "app-what";
  what.textContent = app.what;

  const kind = document.createElement("span");
  kind.className = "app-kind";
  kind.textContent = app.kind;

  const head = document.createElement("span");
  head.className = "app-head";
  head.append(name, kind);

  text.append(head, what);
  link.append(icon, text);
  item.append(link);
  list.append(item);
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
