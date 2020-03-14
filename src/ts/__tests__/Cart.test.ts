import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
    const cart = new Cart();
  
    expect(cart.items.length).toBe(0);
});

test('Test for add and delete', () => {
const movie1 = new Movie(
    1,
    'Мстители 2',
    'The Avengers',
    true,
    2014,
    'США',
    'Avengers Assemble',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    '02.17',
    2200
  );
  
  const movie2 = new Movie(
    2,
    'Мстители',
    'The Avengers',
    false,
    2012,
    'США',
    'Avengers Assemble',
    ['фантастика', 'фэнтези', 'приключения'],
    137,
    '02.17',
    2000
  );
  
  const movie3 = new Movie(
    3,
    'Мстители 3',
    'The Avengers',
    false,
    2015,
    'США',
    'Avengers Assemble',
    ['фантастика', 'фэнтези', 'приключения'],
    137,
    '02.17',
    2100
  );
  
  const cart = new Cart();
  
  cart.add(movie1);
  cart.add(movie2);
  cart.add(movie3);
  cart.deleteItem(2);
  cart.totalPrice();
  cart.totalPriceWithDiscount(50);

  const expected = {
        _items:[ {
                id: 1,
                name: 'Мстители 2',
                nameEng: 'The Avengers',
                imax: true,
                year: 2014,
                contry: 'США',
                slogan: 'Avengers Assemble',
                genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
                timeMinutes: 137,
                timeHour: '02.17',
                price: 2200 },
                {
                id: 3,
                name: 'Мстители 3',
                nameEng: 'The Avengers',
                imax: false,
                year: 2015,
                contry: 'США',
                slogan: 'Avengers Assemble',
                genre: ['фантастика', 'фэнтези', 'приключения'],
                timeMinutes: 137,
                timeHour: '02.17',
                price: 2100 } ],
        conterCount: 2,
        _totalPrice: 4300,
        _totalPriceWithDiscount: 2150
    }

  expect(cart).toEqual(expected);


});

