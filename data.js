
function getData() {
  const dataArray = [
    {
      img: 'R1',
      header: 'Студия №44',
      style: 'без отделки',
      square: 28,
      floorNumber: '12/14',
      price: '1 900 000',
      type: 1
    },
    {
      img: 'R2',
      header: 'Однокомнатная №666',
      style: 'базовая отделка',
      square: 66,
      floorNumber: '6/6',
      price: '1 666 666',
      type: 0
    },
    {
      img: 'R3',
      header: 'Двухкомнатная №567',
      style: 'черновая отделка',
      square: 65.6,
      floorNumber: '7/14',
      price: '5 900 000',
      type: 2
    },
    {
      img: 'R4',
      header: 'Трехкомнатная №45',
      style: 'без отделки',
      square: 56,
      floorNumber: '1/14',
      price: '12 900 000',
      type: 1
    },
    {
      img: 'R5',
      header: 'Студия №25',
      style: 'черновая отделка',
      square: 18,
      floorNumber: '12/14',
      price: '1 900 000',
      type: 1,
      discount: 17,
      shock: true
    },
    {
      img: 'R6',
      header: 'Четырехкомнатная №259',
      style: 'черновая отделка',
      square: 98,
      floorNumber: '14/14',
      price: '23 900 000',
      type: 1,
      discount: 6
    },
    {
      img: 'R7',
      header: 'Однокомнатная №56',
      style: 'без отделки',
      square: 36,
      floorNumber: '3/6',
      price: '5 666 666',
      type: 0
    },
    {
      img: 'R8',
      header: 'Трехкомнатная №46',
      style: 'черновая отделка',
      square: 86,
      floorNumber: '1/6',
      price: '5 696 664',
      type: 0
    },
    {
      img: 'R9',
      header: 'Однокомнатная №2',
      style: 'черновая отделка',
      square: 18,
      floorNumber: '3/14',
      price: '1 200 000',
      type: 1,
      discount: 9,
      shock: true
    },
    {
      img: 'R10',
      header: 'Студия №12',
      style: 'черновая отделка',
      square: 38,
      floorNumber: '6/14',
      price: '1 500 500',
      type: 1,
      discount: 6
    },
    {
      img: 'R11',
      header: 'Однокомнатная №8',
      style: 'черновая отделка',
      square: 48,
      floorNumber: '3/14',
      price: '6 200 000',
      type: 1
    },
    {
      img: 'R12',
      header: 'Двухкомнатная №23',
      style: 'базовая отделка',
      square: 48,
      floorNumber: '3/14',
      price: '5 255 006',
      type: 1,
      discount: 6
    }
  ];
  const arrayLen = dataArray.length;
  let count = 0;

  return function () {
    let oldCount = count;
    count += 6;
    return { data: dataArray.slice(oldCount, count), isEmpty: count >= arrayLen };
  }
}

module.exports = { getData };