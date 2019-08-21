
module.exports = function chooseData() {
  const apartments = require('./json/apartments');
  const arrayLen = apartments.length;

  const moreShowCount = 2;
  let shownRooms = 6;
  let isEmpty = false;

  return function (type, desc) {
    if (type === 'show') {
      shownRooms += moreShowCount;
      if (shownRooms > arrayLen) {
        shownRooms = arrayLen;
        isEmpty = true;
      }
      return { data: apartments.slice(0, shownRooms), isEmpty }
    } else {
      let roomsArray = apartments.slice(0, shownRooms);
      if (type === 'price') {
        roomsArray.sort((a, b) => a.price - b.price);
      } else if (type === 'rooms') {
        roomsArray.sort((a, b) => a.rooms - b.rooms);
      }

      if (desc) {
        return { data: roomsArray.reverse(), isEmpty };
      }
      return { data: roomsArray, isEmpty };
    }
  }
}