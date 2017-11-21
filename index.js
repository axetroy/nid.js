/**
 * check the input is a valid length
 * @param input
 * @returns {boolean}
 */
function isValidLength(input) {
  return isNumber(input) && input > 0 && parseInt(input) === input;
}

/**
 * check the input is a valid number or not
 * @param input
 * @returns {boolean}
 */
function isNumber(input) {
  return (
    (typeof input === 'number' || input instanceof Number) && !isNaN(input)
  );
}

/**
 * define the property
 * @param ctx
 * @param property
 * @param desc
 */
function define(ctx, property, desc) {
  Object.defineProperty(ctx, property, desc);
}

/**
 * Nid constructor
 * @param length
 * @returns {Nid}
 * @constructor
 */
function Nid(length) {
  if (!(this instanceof Nid)) {
    return new Nid(length);
  }

  define(this, 'id', {
    enumerable: false,
    configurable: false,
    value: Nid.New(length)
  });

  define(this, 'length', {
    enumerable: false,
    configurable: false,
    value: length
  });

  for (let i = 0; i < this.length; i++) {
    define(this, i, {
      enumerable: true,
      configurable: false,
      value: this.id[i]
    });
  }
}

/**
 * make sure the constructor
 * @type {Nid}
 */
Nid.prototype.constructor = Nid;

/**
 * rewrite the behavior of toString
 * @returns {string|*}
 */
Nid.prototype.toString = function() {
  return this.id;
};

/**
 * rewrite the behavior of valueOf
 * @returns {number}
 */
Nid.prototype.valueOf = function() {
  return +this.id;
};

/**
 * generate raw random number id
 * @param length
 * @returns {string}
 * @constructor
 */
Nid.New = function(length) {
  if (!isValidLength(length)) {
    throw new Error(`Invalid nid length, it should be a positive int!`);
  }
  const list = [];
  for (let i = 0; i < length; i++) {
    let value = parseInt(Math.random() * 10);
    while (value === 0 && i === 0) {
      value = parseInt(Math.random() * 10);
    }
    list.push(value);
  }
  return list.join('');
};

module.exports = Nid;
module.exports.default = Nid;
