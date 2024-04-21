export const getStopsCountText = (stops: number) => {
  if (stops === 0) return 'без пересадок';
  if (stops === 1) return `${stops} пересадка`;
  if (stops >= 2 && stops <= 4) return `${stops} пересадки`;
  return `${stops} пересадок`;
};
