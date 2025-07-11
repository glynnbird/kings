const reference = [
  {
    name: 'William I',
    img: '/img/1.JPG',
    from: 1066,
    to: 1087
  },
  {
    name: 'William II',
    img: '/img/2.JPG',
    from: 1087,
    to: 1100
  },
  {
    name: 'Henry I',
    img: '/img/3.JPG',
    from: 1100,
    to: 1135
  },
  {
    name: 'Stephen',
    img: '/img/4.JPG',
    from: 1135,
    to: 1154
  },
  {
    name: 'Henry II',
    img: '/img/5.JPG',
    from: 1154,
    to: 1189
  },
  {
    name: 'Richard I',
    img: '/img/6.JPG',
    from: 1189,
    to: 1199
  },
  {
    name: 'John',
    img: '/img/7.JPG',
    from: 1199,
    to: 1216
  },
  {
    name: 'Henry III',
    img: '/img/8.JPG',
    from: 1216,
    to: 1272
  },
  {
    name: 'Edward I',
    img: '/img/9.JPG',
    from: 1272,
    to: 1307
  },
  {
    name: 'Edward II',
    img: '/img/10.JPG',
    from: 1307,
    to: 1327
  },
  {
    name: 'Edward III',
    img: '/img/11.JPG',
    from: 1327,
    to: 1377
  },
  {
    name: 'Richard II',
    img: '/img/12.JPG',
    from: 1377,
    to: 1399,
  },
  {
    name: 'Henry IV',
    img: '/img/13.JPG',
    from: 1399,
    to: 1413,
  },
  {
    name: 'Henry V',
    img: '/img/14.JPG',
    from: 1413,
    to: 1422,
  },
  {
    name: 'Henry VI',
    img: '/img/15.JPG',
    from: 1422,
    to: 1461,
  },
  {
    name: 'Edward IV',
    img: '/img/16.JPG',
    from: 1461,
    to: 1483,
  },
  {
    name: 'Edward V',
    img: '/img/17.JPG',
    from: 1483,
    to: 1483,
  },
  {
    name: 'Richard III',
    img: '/img/18.JPG',
    from: 1483,
    to: 1485,
  },
  {
    name: 'Henry VII',
    img: '/img/19.JPG',
    from: 1485,
    to: 1509,
  },
  {
    name: 'Henry VIII',
    img: '/img/20.JPG',
    from: 1509,
    to: 1547,
  },
  {
    name: 'Edward VI',
    img: '/img/21.JPG',
    from: 1547,
    to: 1553,
  },
  {
    name: 'Jane',
    img: '/img/22.JPG',
    from: 1553,
    to: 1553,
  },
  {
    name: 'Mary I',
    img: '/img/23.JPG',
    from: 1553,
    to: 1558,
  },
  {
    name: 'Elizabeth I',
    img: '/img/24.JPG',
    from: 1558,
    to: 1603,
  },
  {
    name: 'James I',
    img: '/img/25.JPG',
    from: 1603,
    to: 1625,
  },
  {
    name: 'Charles I',
    img: '/img/26.JPG',
    from: 1625,
    to: 1649
  },
  {
    name: 'Charles II',
    img: '/img/27.JPG',
    from: 1660,
    to: 1685
  },
  {
    name: 'James II',
    img: '/img/28.JPG',
    from: 1665,
    to: 1688
  },
  {
    name: 'William III & Mary II',
    img: '/img/29.JPG',
    from: 1689,
    to: 1702
  },
  {
    name: 'Anne',
    img: '/img/30.JPG',
    from: 1702,
    to: 1714
  },
  {
    name: 'George I',
    img: '/img/31.JPG',
    from: 1714,
    to: 1727
  },
  {
    name: 'George II',
    img: '/img/32.JPG',
    from: 1727,
    to: 1760
  },
  {
    name: 'George III',
    img: '/img/33.JPG',
    from: 1760,
    to: 1820
  },
  {
    name: 'George IV',
    img: '/img/34.JPG',
    from: 1820,
    to: 1830
  },
  {
    name: 'William IV',
    img: '/img/35.JPG',
    from: 1830,
    to: 1837
  },
  {
    name: 'Victoria',
    img: '/img/36.JPG',
    from: 1837,
    to: 1901
  },
  {
    name: 'Edward VII',
    img: '/img/37.JPG',
    from: 1901,
    to: 1910
  },
  {
    name: 'George V',
    img: '/img/38.JPG',
    from: 1910,
    to: 1936
  },
  {
    name: 'Edward VIII',
    img: '/img/39.JPG',
    from: 1936,
    to: 1936
  },
  {
    name: 'George VI',
    img: '/img/40.JPG',
    from: 1936,
    to: 1952
  },
  {
    name: 'Elizabeth II',
    img: '/img/41.JPG',
    from: 1952,
    to: 2022
  },
  {
    name: 'Charles III',
    img: '/img/42.JPG',
    from: 2022,
    to: null
  }

]

export default function () {

  const kings = useState('kings', () => { return reference })
  const firstTime = useState('firstTime', () => { return true })

  // add before and after to kings list
  if (firstTime.value) {
    for(let i = 0; i < kings.value.length; i++) {
      kings.value[i].before = i > 0 ? kings.value[i - 1].name : null
      kings.value[i].after = i < kings.value.length - 1 ?  kings.value[i + 1].name : null
    }
    firstTime.value = false
  }

  return { kings }
}
