/*
 * Use for add days to current date time
 *
 * Usage: var dat = new Date();
 *              console.log(dat.toJSON())
 *
 */

Date.prototype.addDays = function(days)
{
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}
