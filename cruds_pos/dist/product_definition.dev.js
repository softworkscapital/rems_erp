"use strict";

require('dotenv').config();

var pool = require('./poolfile');

var crudsObj = {};

crudsObj.postProductDefinition = function (product_id, product_code, company_id, branch_id, product_brand, product_name, product_type, category, sub_category, sub_sub_category, unit_of_measure, unit_size, description_notes, sub_notes, sold_units_count, rating, rating_count, discount_rate, promo_time_left, color, popularity, shipping_days, condition, reviews_count, views_count, likes_count, uploaded_product_image_ref, syncid) {
  return new Promise(function (resolve, reject) {
    pool.query("INSERT INTO products_definition (\n                product_code,\n                company_id,\n                branch_id,\n                product_brand,\n                product_name,\n                product_type,\n                category,\n                sub_category,\n                sub_sub_category,\n                unit_of_measure,\n                unit_size,\n                description_notes,\n                sub_notes,\n                sold_units_count,\n                rating,\n                rating_count,\n                discount_rate,\n                promo_time_left,\n                color,\n                popularity,\n                shipping_days,\n                   `condition`, \n                reviews_count,\n                views_count,\n                likes_count,\n                uploaded_product_image_ref,\n                syncid\n            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)", [product_code, company_id, branch_id, product_brand, product_name, product_type, category, sub_category, sub_sub_category, unit_of_measure, unit_size, description_notes, sub_notes, sold_units_count, rating, rating_count, discount_rate, promo_time_left, color, popularity, shipping_days, condition, reviews_count, views_count, likes_count, uploaded_product_image_ref, syncid], function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve({
        status: '200',
        message: 'Saving successful'
      });
    });
  });
};

crudsObj.getProductDefinitions = function () {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM products_definition', function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getFullProductDefinitions = function () {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT products_definition.*, inventory_mgt.selling_price, inventory_mgt.unit_cost, inventory_mgt.qty_balance FROM products_definition INNER JOIN inventory_mgt ON products_definition.product_id = inventory_mgt.product_id', function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
}; // getClentById


crudsObj.getProductDefinitionById = function (id) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM products_definition WHERE product_id = ?', [id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.updateProductDefinition = function (product_id, company_id, branch_id, product_name, unit_of_measure, unit_size, syncid) {
  return new Promise(function (resolve, reject) {
    pool.query('UPDATE products_definition SET company_id = ?, branch_id = ?, product_name = ?, unit_of_measure = ?, unit_size = ?, syncid = ? WHERE product_id = ?', [company_id, branch_id, product_name, unit_of_measure, unit_size, syncid, product_id], function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve({
        status: '200',
        message: 'update successful'
      });
    });
  });
};

crudsObj.deleteProductDefinition = function (id) {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM products_definition WHERE product_id = ?', [id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

module.exports = crudsObj;