interface WebordPlugin {
  pluginName: string;
  Author: string;
  version: string;
  pluginDescription: string;
  homepage: string;
  execute: () => any;
}

interface WebordPluginList {
  [key: string]: WebordPlugin;
}
