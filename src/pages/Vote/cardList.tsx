import {
  CardSpadeIcon,
  CardDiamondIcon,
  CardHeartIcon,
  CardClubIcon,
  CardAIcon,
  CardJIcon,
  CardQIcon,
  Card10Icon,
  Card2Icon,
  Card3Icon,
  Card4Icon,
  Card5Icon,
  Card6Icon,
  Card7Icon,
  Card8Icon,
  Card9Icon,
  CardKIcon,
} from 'components/Icons';

const CARD_LIST = [
  {
    value: (
      <CardAIcon
        defaultColor="#fff"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#fff',
    icon: <CardClubIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardAIcon
        defaultColor="#fff"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#fff',
    icon: <CardSpadeIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardAIcon
        defaultColor="#d40000"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#d40000',
    icon: <CardHeartIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardAIcon
        defaultColor="#d40000"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#d40000',
    icon: <CardDiamondIcon style={{ width: '100%', height: '100%' }} />,
  },
];

const getIcon = (index: number, color: string) => {
  const icons = [
    <Card2Icon
      defaultColor={color}
      style={{ width: '100%', height: '100%' }}
    />,
    <Card3Icon
      defaultColor={color}
      style={{ width: '100%', height: '100%' }}
    />,
    <Card4Icon
      defaultColor={color}
      style={{ width: '100%', height: '100%' }}
    />,
    <Card5Icon
      defaultColor={color}
      style={{ width: '100%', height: '100%' }}
    />,
    <Card6Icon
      defaultColor={color}
      style={{ width: '100%', height: '100%' }}
    />,
    <Card7Icon
      defaultColor={color}
      style={{ width: '100%', height: '100%' }}
    />,
    <Card8Icon
      defaultColor={color}
      style={{ width: '100%', height: '100%' }}
    />,
    <Card9Icon
      defaultColor={color}
      style={{ width: '100%', height: '100%' }}
    />,
    <Card10Icon
      defaultColor={color}
      style={{ width: '100%', height: '100%' }}
    />,
  ];

  return icons[index];
};

for (let i = 0; i <= 8; i++) {
  CARD_LIST.push(
    {
      value: getIcon(i, '#fff'),
      color: '#fff',
      icon: <CardClubIcon style={{ width: '100%', height: '100%' }} />,
    },
    {
      value: getIcon(i, '#fff'),
      color: '#fff',
      icon: <CardSpadeIcon style={{ width: '100%', height: '100%' }} />,
    },
    {
      value: getIcon(i, '#d40000'),
      color: '#d40000',
      icon: <CardHeartIcon style={{ width: '100%', height: '100%' }} />,
    },
    {
      value: getIcon(i, '#d40000'),
      color: '#d40000',
      icon: <CardDiamondIcon style={{ width: '100%', height: '100%' }} />,
    }
  );
}

CARD_LIST.push(
  {
    value: (
      <CardJIcon
        defaultColor="#FFF"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#fff',
    icon: <CardClubIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardJIcon
        defaultColor="#FFF"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#fff',
    icon: <CardSpadeIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardJIcon
        defaultColor="#d40000"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#d40000',
    icon: <CardHeartIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardJIcon
        defaultColor="#d40000"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#d40000',
    icon: <CardDiamondIcon style={{ width: '100%', height: '100%' }} />,
  }
);

CARD_LIST.push(
  {
    value: (
      <CardQIcon
        defaultColor="#FFF"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#000000',
    icon: <CardClubIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardQIcon
        defaultColor="#FFF"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#000000',
    icon: <CardSpadeIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardQIcon
        defaultColor="#d40000"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#d40000',
    icon: <CardHeartIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardQIcon
        defaultColor="#d40000"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#d40000',
    icon: <CardDiamondIcon style={{ width: '100%', height: '100%' }} />,
  }
);

CARD_LIST.push(
  {
    value: (
      <CardKIcon
        defaultColor="#FFF"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#000000',
    icon: <CardClubIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardKIcon
        defaultColor="#FFF"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#000000',
    icon: <CardSpadeIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardKIcon
        defaultColor="#d40000"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#d40000',
    icon: <CardHeartIcon style={{ width: '100%', height: '100%' }} />,
  },
  {
    value: (
      <CardKIcon
        defaultColor="#d40000"
        style={{ width: '100%', height: '100%' }}
      />
    ),
    color: '#d40000',
    icon: <CardDiamondIcon style={{ width: '100%', height: '100%' }} />,
  }
);

export default CARD_LIST;
