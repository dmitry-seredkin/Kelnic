
import addStar from '../star/star';

const typesArray = [
  {
    status: 'Свободно',
    cardClass: 'card',
    statusClass: 'card__status',
  },
  {
    status: 'Забронированно',
    cardClass: 'card card_border-color_yellow',
    statusClass: 'card__status card__status_bg-color_yellow',
  },
  {
    status: 'Продано',
    cardClass: 'card card_border-color_grey',
    statusClass: 'card__status card__status_bg-color_grey',
  },
];

function chooseStyle(type) {
  const index = type || 0;
  return typesArray[index % 3];
}

function addDiscount(discount) {
  return (discount ? `
    <div class="card__discount-block">
        <p class="card__discount">-${discount}%</p>
    </div>` : '');
}

export default function makeNewCard(data) {
  const styleObj = chooseStyle(data.type);
  return (`
    <div class="${styleObj.cardClass}">
        <div class="card__wrap">
            <img src="images/${data.img}.png" alt="План квартиры" />
        </div>
        <div class="card__body">
            <h3 class="card__header">${data.header}</h3>
            <div class="card__info">
                <p class="card__rectangle"></p>
                <p class="card__style">${data.style}</p>
                <p class="card__square">${data.square}м<sup class="small">2</sup>
                    <span class="card__text_font-size_13"> площадь</span>
                </p>
                <p class="card__floor">${data.floorNumber}
                    <span class="card__text_font-size_13"> этаж</span>
                </p>
            </div>
            <p class="card__price">${data.price} руб.</p>     
        </div>
        <p class="${styleObj.statusClass}">${styleObj.status}</p>
        ${addDiscount(data.discount)}
        <div class="card__star">
            ${addStar()}
        </div>     
    </div>
  `);
}
