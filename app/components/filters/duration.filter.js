/**
 * @ngdoc filter
 * @name cdpFilters.duration
 *
 * @description Performs convert to a duration string format ( 1 Hours 30 minutes)
 */
export default  () => minutes => {
  if (!minutes) {
    return '';
  }
  const hours = Math.floor(minutes / 60);

  return hours ?
    `${ hours } hours ${ minutes - hours * 60 } minutes` : `${ minutes } minutes`;
};
