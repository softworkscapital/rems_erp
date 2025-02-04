"use strict";

var express = require('express');

var productDefinitionRouter = express.Router();

var productDefinitionDbOperations = require('../cruds_pos/product_definition');

productDefinitionRouter.post('/', function _callee(req, res, next) {
  var postedValues, product_id, product_code, company_id, branch_id, product_brand, product_name, product_type, category, sub_category, sub_sub_category, unit_of_measure, unit_size, description_notes, sub_notes, sold_units_count, rating, rating_count, discount_rate, promo_time_left, color, popularity, shipping_days, condition, reviews_count, views_count, likes_count, uploaded_product_image_ref, syncid, results;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          postedValues = req.body; // Extracting all necessary fields from the request body

          product_id = postedValues.product_id; // Include product_id

          product_code = postedValues.product_code; // Include product_code

          company_id = postedValues.company_id;
          branch_id = postedValues.branch_id;
          product_brand = postedValues.product_brand; // Include product_brand

          product_name = postedValues.product_name;
          product_type = postedValues.product_type; // Include product_type

          category = postedValues.category; // Include category

          sub_category = postedValues.sub_category; // Include sub_category

          sub_sub_category = postedValues.sub_sub_category; // Include sub_sub_category

          unit_of_measure = postedValues.unit_of_measure;
          unit_size = postedValues.unit_size;
          description_notes = postedValues.description_notes; // Include description_notes

          sub_notes = postedValues.sub_notes; // Include sub_notes

          sold_units_count = postedValues.sold_units_count; // Include sold_units_count

          rating = postedValues.rating; // Include rating

          rating_count = postedValues.rating_count; // Include rating_count

          discount_rate = postedValues.discount_rate; // Include discount_rate

          promo_time_left = postedValues.promo_time_left; // Include promo_time_left

          color = postedValues.color; // Include color

          popularity = postedValues.popularity; // Include popularity

          shipping_days = postedValues.shipping_days; // Include shipping_days

          condition = postedValues.condition; // Include condition

          reviews_count = postedValues.reviews_count; // Include reviews_count

          views_count = postedValues.views_count; // Include views_count

          likes_count = postedValues.likes_count; // Include likes_count

          uploaded_product_image_ref = postedValues.uploaded_product_image_ref; // Include uploaded_product_image_ref

          syncid = postedValues.syncid; // Call the function with all the fields

          _context.next = 32;
          return regeneratorRuntime.awrap(productDefinitionDbOperations.postProductDefinition(product_id, product_code, company_id, branch_id, product_brand, product_name, product_type, category, sub_category, sub_sub_category, unit_of_measure, unit_size, description_notes, sub_notes, sold_units_count, rating, rating_count, discount_rate, promo_time_left, color, popularity, shipping_days, condition, reviews_count, views_count, likes_count, uploaded_product_image_ref, syncid));

        case 32:
          results = _context.sent;
          res.json(results);
          _context.next = 40;
          break;

        case 36:
          _context.prev = 36;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.sendStatus(500);

        case 40:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 36]]);
});
productDefinitionRouter.get('/', function _callee2(req, res, next) {
  var results;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(productDefinitionDbOperations.getProductDefinitions());

        case 3:
          results = _context2.sent;
          res.json(results);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.sendStatus(500);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
productDefinitionRouter.get('/full_products_definations', function _callee3(req, res, next) {
  var results;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(productDefinitionDbOperations.getFullProductDefinitions());

        case 3:
          results = _context3.sent;
          res.json(results);
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.sendStatus(500);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
productDefinitionRouter.get('/:id', function _callee4(req, res, next) {
  var client_id, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          client_id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(productDefinitionDbOperations.getProductDefinitionById(client_id));

        case 4:
          result = _context4.sent;
          res.json(result);
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.sendStatus(500);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
productDefinitionRouter.put('/:id', function _callee5(req, res, next) {
  var product_id, updatedValues, company_id, branch_id, product_name, unit_of_measure, unit_size, syncid, result;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          product_id = req.params.id;
          updatedValues = req.body;
          company_id = updatedValues.company_id;
          branch_id = updatedValues.branch_id;
          product_name = updatedValues.product_name;
          unit_of_measure = updatedValues.unit_of_measure;
          unit_size = updatedValues.unit_size;
          syncid = updatedValues.syncid;
          _context5.next = 11;
          return regeneratorRuntime.awrap(productDefinitionDbOperations.updateProductDefinition(product_id, company_id, branch_id, product_name, unit_of_measure, unit_size, syncid));

        case 11:
          result = _context5.sent;
          res.json(result);
          _context5.next = 19;
          break;

        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.sendStatus(500);

        case 19:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 15]]);
});
productDefinitionRouter["delete"]('/:id', function _callee6(req, res, next) {
  var id, result;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return regeneratorRuntime.awrap(productDefinitionDbOperations.deleteProductDefinition(id));

        case 4:
          result = _context6.sent;
          res.json(result);
          _context6.next = 12;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          res.sendStatus(500);

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = productDefinitionRouter;