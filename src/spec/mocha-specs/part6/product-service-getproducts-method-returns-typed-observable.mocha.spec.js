let fs = require('fs');
let expect = require('chai').expect
let assert = require('chai').assert

describe('ProductService getProducts Method', function() {
  it(`should return an Observable typed to Product[] @product-service-getproducts-method-returns-typed-observable`, function () {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../../app/product.service.ts').toString();
    } catch (e) {
      assert(false, "The ProductService hasn't been created yet.")
    }
    let re = /getProducts\s*\(\s*\)\s*([\w\s\<\>\:\[\]]+)\{/
    let match = file.match(re);
    assert(Array.isArray(file.match(re)) && file.match(re) != null, "The `getProducts()` method isn't currently defining any return type.");
    
    let the_type = match[1].trim();

    let re2 = /\s*\:\s*Observable\<Product\[\]\>/
    let match2 = the_type.match(re2);

    assert(Array.isArray(file.match(re2)), "The `getProducts()` method isn't defining the correct return type.");
    assert(match2[0].includes('Observable<Product[]>'), "The `getProducts()` method isn't defining the correct return type.");
  });

  it(`should map response json to Product[] @product-service-getproducts-method-returns-typed-observable`, function () {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../../app/product.service.ts').toString();
    } catch (e) {
      assert(false, "The ProductService hasn't been created yet.")
    }
    let re = /productsUrl\)\s*\.\s*map\([\w\s\<\>\:\[\]\.\>\<\(\)]+\s*\=\>\s*([\w\<\>\[\]]+)\s*response/
    let match = file.match(re);
    assert(Array.isArray(file.match(re)), "The `getProducts()` response JSON isn't asserted as type `Product[]`.");
    
    let the_type = match[1].trim();
    let re2 = /\s*\<Product\[\]\>\s*/
    let match2 = the_type.match(re2);

    assert(Array.isArray(file.match(re2)), "The `getProducts()` response JSON isn't asserted as type `Product[]`.");
    assert(match2[0].includes('Product[]'), "The `getProducts()` response JSON isn't asserted as type `Product[]`.");
  });
});
