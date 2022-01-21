import heart from 'statics/img/heart.png';
import spade from 'statics/img/spade.png';
import aceOfSpades from 'statics/img/ace-of-spades.png';
import redDiamond from 'statics/img/red-diamond.png';

const CARD_LIST = [
  { value: 'A', color: '#000000', icon: aceOfSpades },
  { value: 'A', color: '#000000', icon: spade },
  { value: 'A', color: '#E44200', icon: heart },
  { value: 'A', color: '#E44200', icon: redDiamond },
];

for (let i = 2; i <= 10; i++) {
  CARD_LIST.push(
    { value: i.toString(), color: '#000000', icon: aceOfSpades },
    { value: i.toString(), color: '#000000', icon: spade },
    { value: i.toString(), color: '#E44200', icon: heart },
    { value: i.toString(), color: '#E44200', icon: redDiamond }
  );
}

CARD_LIST.push(
  { value: 'J', color: '#000000', icon: aceOfSpades },
  { value: 'J', color: '#000000', icon: spade },
  { value: 'J', color: '#E44200', icon: heart },
  { value: 'J', color: '#E44200', icon: redDiamond }
);

CARD_LIST.push(
  { value: 'Q', color: '#000000', icon: aceOfSpades },
  { value: 'Q', color: '#000000', icon: spade },
  { value: 'Q', color: '#E44200', icon: heart },
  { value: 'Q', color: '#E44200', icon: redDiamond }
);

CARD_LIST.push(
  { value: 'K', color: '#000000', icon: aceOfSpades },
  { value: 'K', color: '#000000', icon: spade },
  { value: 'K', color: '#E44200', icon: heart },
  { value: 'K', color: '#E44200', icon: redDiamond }
);

export default CARD_LIST;
