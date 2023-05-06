export let Actions = {
  // Custom Actions

  action: <any>{},

  registerAction(action: { name: string; exec: (...args: any[]) => any }) {
    if (!action.name) {
      throw new Error('Action name is required');
    }
    if (!action.exec) {
      throw new Error('Action exec is required');
    }

    if (this.action[action.name]) {
      throw new Error('Action name already exists');
    }

    this.action[action.name] = action.exec;
  },

  useAction(actionName: string, ...args: any[]) {
    if (!this.action[actionName]) {
      throw new Error('Action not found');
    }

    return this.action[actionName](...args);
  },
};
