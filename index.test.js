import test from 'ava';
import Nid from './index';

test('new a constructor', t => {
  const nid = new Nid(8);

  t.true(typeof nid === 'object');
  t.true(typeof nid.id === 'string');

  t.deepEqual(nid.length, 8);
  t.true(typeof nid[0] === 'string');
  t.notDeepEqual(nid[0], '0');
  t.deepEqual(+nid, nid.valueOf());
  t.deepEqual(nid + '', nid.toString());
});

test('static method', t => {
  const nid = Nid.New(6);
  t.true(typeof nid === 'string');
  t.true(nid.length === 6);
});

test('no repeat with 10000 times', t => {
  const map = {};
  for (let i = 0; i < 10000; i++) {
    const nid = Nid.New(12);
    t.true(typeof nid === 'string');
    t.true(nid.length === 12);
    t.notDeepEqual(nid[0], '0');
    t.notDeepEqual(nid.toString()[0], '0');
    if (!map[nid]) {
      map[nid] = nid;
    } else {
      t.fail(`Generate repeat nid ${nid}`);
      break;
    }
  }
});

test('invalid nid length', t => {
  t.throws(function() {
    new Nid(null);
  });
  t.throws(function() {
    Nid(-1);
  });
  t.throws(function() {
    Nid.New(void 0);
  });
  t.throws(function() {
    Nid.New(0);
  });
  t.throws(function() {
    Nid.New(NaN);
  });
});
