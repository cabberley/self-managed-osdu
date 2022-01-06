/*
 * self-managed-osdu
 * Rest API Documentation for Self Managed OSDU
 *
 * OpenAPI spec version: 0.11.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.22
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RegisterTopicExample'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RegisterTopicExample'));
  } else {
    // Browser globals (root is window)
    if (!root.SelfManagedOsdu) {
      root.SelfManagedOsdu = {};
    }
    root.SelfManagedOsdu.RegisterTopic = factory(root.SelfManagedOsdu.ApiClient, root.SelfManagedOsdu.RegisterTopicExample);
  }
}(this, function(ApiClient, RegisterTopicExample) {
  'use strict';

  /**
   * The RegisterTopic model module.
   * @module model/RegisterTopic
   * @version 0.11.0
   */

  /**
   * Constructs a new <code>RegisterTopic</code>.
   * @alias module:model/RegisterTopic
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RegisterTopic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RegisterTopic} obj Optional instance to populate.
   * @return {module:model/RegisterTopic} The populated <code>RegisterTopic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('example'))
        obj.example = ApiClient.convertToType(data['example'], [RegisterTopicExample]);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {String} state
   */
  exports.prototype.state = undefined;

  /**
   * @member {Array.<module:model/RegisterTopicExample>} example
   */
  exports.prototype.example = undefined;


  return exports;

}));
