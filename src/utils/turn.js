export const randomTurnSelection = () => {
  let option = [1,-1];
  return option[Math.floor(Math.random() * 2)];
}