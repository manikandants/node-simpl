'use strict';

var request = require('request');
var utils = require('./utils');

var urls = {
    sandbox: 'https://sandbox-api.getsimpl.com',
    production: 'https://api.getsimpl.com'
};

var Simpl = function(options) {
    options = options || {};
    options.mode = options.mode || 'sandbox';
    options.url = options.url || urls[options.mode];
    if (!options.clientSecret) {
        return console.error('clientSecret is required.');
    }
    this.url = options.url;
    this.token = options.clientSecret;
};

Simpl.prototype.createTransaction = function(payload, callback) {
    request({
        method: 'POST',
        url: this.url + '/api/v1/transactions',
        headers: {
            Authorization: this.token
        },
        body: payload,
        json: true
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Simpl.prototype.claimTransaction = function(transactionid, callback) {
    request({
        method: 'PUT',
        url: this.url + '/api/v1/transactions/claim',
        headers: {
            Authorization: this.token
        },
        body: {
            transaction_id: transactionid
        },
        json: true
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Simpl.prototype.retrieveTransaction = function(transactionid, callback) {
    request({
        method: 'GET',
        url: this.url + '/api/v1/transactions/' + transactionid,
        headers: {
            Authorization: this.token
        }
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Simpl.prototype.listTransactions = function(callback) {
    request({
        method: 'GET',
        url: this.url + '/api/v1/transactions',
        headers: {
            Authorization: this.token
        }
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Simpl.prototype.updateTransaction = function(payload, callback) {
    request({
        method: 'PUT',
        url: this.url + '/api/v1/transactions',
        headers: {
            Authorization: this.token
        },
        body: payload,
        json: true
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Simpl.prototype.cancelTransaction = function(payload, callback) {
    request({
        method: 'DELETE',
        url: this.url + '/api/v1/transactions',
        headers: {
            Authorization: this.token
        },
        body: payload,
        json: true
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

Simpl.prototype.refundTransaction = function(callback) {
    request({
        method: 'POST',
        url: this.url + '/api/v1/transactions/refund',
        headers: {
            Authorization: this.token
        },
        body: payload,
        json: true
    }, function(err, response, body) {
        utils.responseHandler(err, response, body, callback);
    });
};

module.exports = Simpl;