export const createCharacter = (name, health, actions = []) => ({
  // creates a character which has no actions by default
  name: name,
  health: health,
  actions: actions
});
