const myfunc = require('./custom-lodash');
describe ('chunk', () => {
it('should create an array of elements', () => {
    expect(myfunc.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);  
    expect(myfunc.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);  
    expect(myfunc.chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
})
});

describe ('compact', () => {
    it('should create an array with all falsey values removed', () => {
        expect(myfunc.compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);  
        expect(myfunc.compact([0, 1, "", 2, null, 3])).toEqual([1, 2, 3]);  
        expect(myfunc.compact([0, 1, undefined, 2, NaN, 3])).toEqual([1, 2, 3]);
    })
});
describe ('drop', () => {
    it('should create a slice of array with n elements dropped from the beginning', () => {
        expect(myfunc.drop([1, 2, 3])).toEqual  ([2, 3]);  
        expect(myfunc.drop([1, 2, 3],2)).toEqual([3]);  
        expect(myfunc.drop([1, 2, 3],5)).toEqual([]);
        expect(myfunc.drop([1, 2, 3],0)).toEqual([1, 2, 3]);
    })
});
describe ('dropWhile', () => {
    var users = [
          { 'user': 'barney',  'active': false },
          { 'user': 'fred',    'active': false },
          { 'user': 'pebbles', 'active': true }
        ];
    it('should drop elements until predicate returns falsey', () => {
        expect(myfunc.dropWhile(users,function(o) { return !o.active; })).toEqual  ([{active: true, user: "pebbles"}]);  
        expect(myfunc.dropWhile(users,{ 'user': 'barney', 'active': false })).toEqual([{active: false, user: "fred"}, {active: true, user: "pebbles"}]);  
        expect(myfunc.dropWhile(users,'active')).toEqual([
              { 'user': 'barney',  'active': false },
              { 'user': 'fred',    'active': false },
              { 'user': 'pebbles', 'active': true }
            ]);
        expect(myfunc.dropWhile(users,['active', false])).toEqual([{active: true, user: "pebbles"}]);
        
    })
});