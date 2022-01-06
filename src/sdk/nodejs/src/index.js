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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EntitlementGroupProperties', 'model/EntitlementGroupResponse', 'model/EntitlementMemberDto', 'model/FileAcl', 'model/FileApplicationError', 'model/FileDateTime', 'model/FileDeliveryGetFileSignedURLRequest', 'model/FileDeliveryGetFileSignedURLResponse', 'model/FileDetails', 'model/FileDownloadResponse', 'model/FileDriver', 'model/FileError', 'model/FileErrorModel', 'model/FileExtensionProperties', 'model/FileId', 'model/FileLegal', 'model/FileLinkList', 'model/FileListRequest', 'model/FileLocationResponse', 'model/FileMetaItem', 'model/FileMetadataResponse', 'model/FileRecord', 'model/FileRecordVersion', 'model/FileRelationships', 'model/FileToManyRelationship', 'model/FileToOneRelationship', 'model/Files', 'model/LegalTagDto', 'model/LegalTagDtos', 'model/LegalTagInvalidResponse', 'model/LegalTagInvalidResponseList', 'model/LegalTagProperties', 'model/LegalTagPropertyValues', 'model/LegalTagRequest', 'model/LegalTagUpdateDto', 'model/PartitionDto', 'model/PartitionProperty', 'model/SchemaError', 'model/SchemaErrorModel', 'model/SchemaErrorResponseFormat', 'model/SchemaIdentity', 'model/SchemaInfo', 'model/SchemaInfoResponse', 'model/SchemaRequest', 'model/SearchAppError', 'model/SearchByBoundingBox', 'model/SearchByDistance', 'model/SearchByGeoPolygon', 'model/SearchCursorQueryRequest', 'model/SearchCursorQueryResponse', 'model/SearchPoint', 'model/SearchQueryRequest', 'model/SearchQueryResponse', 'model/SearchSpatialFilter', 'model/StorageAcl', 'model/StorageBulkUpdateRecordsResponse', 'model/StorageDeleteRecordError', 'model/StorageErrorResponse', 'model/StorageLegal', 'model/StorageMultiRecordIds', 'model/StoragePatchOperation', 'model/StorageQueryResponse', 'model/StorageRecord', 'model/StorageRecordBulkUpdateParam', 'model/StorageRecordData', 'model/StorageRecordHistory', 'model/StorageRecordQuery', 'model/StorageRecordVersions', 'api/EntitlementApi', 'api/LegalApi', 'api/PartitionApi', 'api/SchemaApi', 'api/SearchApi', 'api/StorageApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/EntitlementGroupProperties'), require('./model/EntitlementGroupResponse'), require('./model/EntitlementMemberDto'), require('./model/FileAcl'), require('./model/FileApplicationError'), require('./model/FileDateTime'), require('./model/FileDeliveryGetFileSignedURLRequest'), require('./model/FileDeliveryGetFileSignedURLResponse'), require('./model/FileDetails'), require('./model/FileDownloadResponse'), require('./model/FileDriver'), require('./model/FileError'), require('./model/FileErrorModel'), require('./model/FileExtensionProperties'), require('./model/FileId'), require('./model/FileLegal'), require('./model/FileLinkList'), require('./model/FileListRequest'), require('./model/FileLocationResponse'), require('./model/FileMetaItem'), require('./model/FileMetadataResponse'), require('./model/FileRecord'), require('./model/FileRecordVersion'), require('./model/FileRelationships'), require('./model/FileToManyRelationship'), require('./model/FileToOneRelationship'), require('./model/Files'), require('./model/LegalTagDto'), require('./model/LegalTagDtos'), require('./model/LegalTagInvalidResponse'), require('./model/LegalTagInvalidResponseList'), require('./model/LegalTagProperties'), require('./model/LegalTagPropertyValues'), require('./model/LegalTagRequest'), require('./model/LegalTagUpdateDto'), require('./model/PartitionDto'), require('./model/PartitionProperty'), require('./model/SchemaError'), require('./model/SchemaErrorModel'), require('./model/SchemaErrorResponseFormat'), require('./model/SchemaIdentity'), require('./model/SchemaInfo'), require('./model/SchemaInfoResponse'), require('./model/SchemaRequest'), require('./model/SearchAppError'), require('./model/SearchByBoundingBox'), require('./model/SearchByDistance'), require('./model/SearchByGeoPolygon'), require('./model/SearchCursorQueryRequest'), require('./model/SearchCursorQueryResponse'), require('./model/SearchPoint'), require('./model/SearchQueryRequest'), require('./model/SearchQueryResponse'), require('./model/SearchSpatialFilter'), require('./model/StorageAcl'), require('./model/StorageBulkUpdateRecordsResponse'), require('./model/StorageDeleteRecordError'), require('./model/StorageErrorResponse'), require('./model/StorageLegal'), require('./model/StorageMultiRecordIds'), require('./model/StoragePatchOperation'), require('./model/StorageQueryResponse'), require('./model/StorageRecord'), require('./model/StorageRecordBulkUpdateParam'), require('./model/StorageRecordData'), require('./model/StorageRecordHistory'), require('./model/StorageRecordQuery'), require('./model/StorageRecordVersions'), require('./api/EntitlementApi'), require('./api/LegalApi'), require('./api/PartitionApi'), require('./api/SchemaApi'), require('./api/SearchApi'), require('./api/StorageApi'));
  }
}(function(ApiClient, EntitlementGroupProperties, EntitlementGroupResponse, EntitlementMemberDto, FileAcl, FileApplicationError, FileDateTime, FileDeliveryGetFileSignedURLRequest, FileDeliveryGetFileSignedURLResponse, FileDetails, FileDownloadResponse, FileDriver, FileError, FileErrorModel, FileExtensionProperties, FileId, FileLegal, FileLinkList, FileListRequest, FileLocationResponse, FileMetaItem, FileMetadataResponse, FileRecord, FileRecordVersion, FileRelationships, FileToManyRelationship, FileToOneRelationship, Files, LegalTagDto, LegalTagDtos, LegalTagInvalidResponse, LegalTagInvalidResponseList, LegalTagProperties, LegalTagPropertyValues, LegalTagRequest, LegalTagUpdateDto, PartitionDto, PartitionProperty, SchemaError, SchemaErrorModel, SchemaErrorResponseFormat, SchemaIdentity, SchemaInfo, SchemaInfoResponse, SchemaRequest, SearchAppError, SearchByBoundingBox, SearchByDistance, SearchByGeoPolygon, SearchCursorQueryRequest, SearchCursorQueryResponse, SearchPoint, SearchQueryRequest, SearchQueryResponse, SearchSpatialFilter, StorageAcl, StorageBulkUpdateRecordsResponse, StorageDeleteRecordError, StorageErrorResponse, StorageLegal, StorageMultiRecordIds, StoragePatchOperation, StorageQueryResponse, StorageRecord, StorageRecordBulkUpdateParam, StorageRecordData, StorageRecordHistory, StorageRecordQuery, StorageRecordVersions, EntitlementApi, LegalApi, PartitionApi, SchemaApi, SearchApi, StorageApi) {
  'use strict';

  /**
   * Rest_API_Documentation_for_Self_Managed_OSDU.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SelfManagedOsdu = require('index'); // See note below*.
   * var xxxSvc = new SelfManagedOsdu.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SelfManagedOsdu.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SelfManagedOsdu.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SelfManagedOsdu.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.11.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The EntitlementGroupProperties model constructor.
     * @property {module:model/EntitlementGroupProperties}
     */
    EntitlementGroupProperties: EntitlementGroupProperties,
    /**
     * The EntitlementGroupResponse model constructor.
     * @property {module:model/EntitlementGroupResponse}
     */
    EntitlementGroupResponse: EntitlementGroupResponse,
    /**
     * The EntitlementMemberDto model constructor.
     * @property {module:model/EntitlementMemberDto}
     */
    EntitlementMemberDto: EntitlementMemberDto,
    /**
     * The FileAcl model constructor.
     * @property {module:model/FileAcl}
     */
    FileAcl: FileAcl,
    /**
     * The FileApplicationError model constructor.
     * @property {module:model/FileApplicationError}
     */
    FileApplicationError: FileApplicationError,
    /**
     * The FileDateTime model constructor.
     * @property {module:model/FileDateTime}
     */
    FileDateTime: FileDateTime,
    /**
     * The FileDeliveryGetFileSignedURLRequest model constructor.
     * @property {module:model/FileDeliveryGetFileSignedURLRequest}
     */
    FileDeliveryGetFileSignedURLRequest: FileDeliveryGetFileSignedURLRequest,
    /**
     * The FileDeliveryGetFileSignedURLResponse model constructor.
     * @property {module:model/FileDeliveryGetFileSignedURLResponse}
     */
    FileDeliveryGetFileSignedURLResponse: FileDeliveryGetFileSignedURLResponse,
    /**
     * The FileDetails model constructor.
     * @property {module:model/FileDetails}
     */
    FileDetails: FileDetails,
    /**
     * The FileDownloadResponse model constructor.
     * @property {module:model/FileDownloadResponse}
     */
    FileDownloadResponse: FileDownloadResponse,
    /**
     * The FileDriver model constructor.
     * @property {module:model/FileDriver}
     */
    FileDriver: FileDriver,
    /**
     * The FileError model constructor.
     * @property {module:model/FileError}
     */
    FileError: FileError,
    /**
     * The FileErrorModel model constructor.
     * @property {module:model/FileErrorModel}
     */
    FileErrorModel: FileErrorModel,
    /**
     * The FileExtensionProperties model constructor.
     * @property {module:model/FileExtensionProperties}
     */
    FileExtensionProperties: FileExtensionProperties,
    /**
     * The FileId model constructor.
     * @property {module:model/FileId}
     */
    FileId: FileId,
    /**
     * The FileLegal model constructor.
     * @property {module:model/FileLegal}
     */
    FileLegal: FileLegal,
    /**
     * The FileLinkList model constructor.
     * @property {module:model/FileLinkList}
     */
    FileLinkList: FileLinkList,
    /**
     * The FileListRequest model constructor.
     * @property {module:model/FileListRequest}
     */
    FileListRequest: FileListRequest,
    /**
     * The FileLocationResponse model constructor.
     * @property {module:model/FileLocationResponse}
     */
    FileLocationResponse: FileLocationResponse,
    /**
     * The FileMetaItem model constructor.
     * @property {module:model/FileMetaItem}
     */
    FileMetaItem: FileMetaItem,
    /**
     * The FileMetadataResponse model constructor.
     * @property {module:model/FileMetadataResponse}
     */
    FileMetadataResponse: FileMetadataResponse,
    /**
     * The FileRecord model constructor.
     * @property {module:model/FileRecord}
     */
    FileRecord: FileRecord,
    /**
     * The FileRecordVersion model constructor.
     * @property {module:model/FileRecordVersion}
     */
    FileRecordVersion: FileRecordVersion,
    /**
     * The FileRelationships model constructor.
     * @property {module:model/FileRelationships}
     */
    FileRelationships: FileRelationships,
    /**
     * The FileToManyRelationship model constructor.
     * @property {module:model/FileToManyRelationship}
     */
    FileToManyRelationship: FileToManyRelationship,
    /**
     * The FileToOneRelationship model constructor.
     * @property {module:model/FileToOneRelationship}
     */
    FileToOneRelationship: FileToOneRelationship,
    /**
     * The Files model constructor.
     * @property {module:model/Files}
     */
    Files: Files,
    /**
     * The LegalTagDto model constructor.
     * @property {module:model/LegalTagDto}
     */
    LegalTagDto: LegalTagDto,
    /**
     * The LegalTagDtos model constructor.
     * @property {module:model/LegalTagDtos}
     */
    LegalTagDtos: LegalTagDtos,
    /**
     * The LegalTagInvalidResponse model constructor.
     * @property {module:model/LegalTagInvalidResponse}
     */
    LegalTagInvalidResponse: LegalTagInvalidResponse,
    /**
     * The LegalTagInvalidResponseList model constructor.
     * @property {module:model/LegalTagInvalidResponseList}
     */
    LegalTagInvalidResponseList: LegalTagInvalidResponseList,
    /**
     * The LegalTagProperties model constructor.
     * @property {module:model/LegalTagProperties}
     */
    LegalTagProperties: LegalTagProperties,
    /**
     * The LegalTagPropertyValues model constructor.
     * @property {module:model/LegalTagPropertyValues}
     */
    LegalTagPropertyValues: LegalTagPropertyValues,
    /**
     * The LegalTagRequest model constructor.
     * @property {module:model/LegalTagRequest}
     */
    LegalTagRequest: LegalTagRequest,
    /**
     * The LegalTagUpdateDto model constructor.
     * @property {module:model/LegalTagUpdateDto}
     */
    LegalTagUpdateDto: LegalTagUpdateDto,
    /**
     * The PartitionDto model constructor.
     * @property {module:model/PartitionDto}
     */
    PartitionDto: PartitionDto,
    /**
     * The PartitionProperty model constructor.
     * @property {module:model/PartitionProperty}
     */
    PartitionProperty: PartitionProperty,
    /**
     * The SchemaError model constructor.
     * @property {module:model/SchemaError}
     */
    SchemaError: SchemaError,
    /**
     * The SchemaErrorModel model constructor.
     * @property {module:model/SchemaErrorModel}
     */
    SchemaErrorModel: SchemaErrorModel,
    /**
     * The SchemaErrorResponseFormat model constructor.
     * @property {module:model/SchemaErrorResponseFormat}
     */
    SchemaErrorResponseFormat: SchemaErrorResponseFormat,
    /**
     * The SchemaIdentity model constructor.
     * @property {module:model/SchemaIdentity}
     */
    SchemaIdentity: SchemaIdentity,
    /**
     * The SchemaInfo model constructor.
     * @property {module:model/SchemaInfo}
     */
    SchemaInfo: SchemaInfo,
    /**
     * The SchemaInfoResponse model constructor.
     * @property {module:model/SchemaInfoResponse}
     */
    SchemaInfoResponse: SchemaInfoResponse,
    /**
     * The SchemaRequest model constructor.
     * @property {module:model/SchemaRequest}
     */
    SchemaRequest: SchemaRequest,
    /**
     * The SearchAppError model constructor.
     * @property {module:model/SearchAppError}
     */
    SearchAppError: SearchAppError,
    /**
     * The SearchByBoundingBox model constructor.
     * @property {module:model/SearchByBoundingBox}
     */
    SearchByBoundingBox: SearchByBoundingBox,
    /**
     * The SearchByDistance model constructor.
     * @property {module:model/SearchByDistance}
     */
    SearchByDistance: SearchByDistance,
    /**
     * The SearchByGeoPolygon model constructor.
     * @property {module:model/SearchByGeoPolygon}
     */
    SearchByGeoPolygon: SearchByGeoPolygon,
    /**
     * The SearchCursorQueryRequest model constructor.
     * @property {module:model/SearchCursorQueryRequest}
     */
    SearchCursorQueryRequest: SearchCursorQueryRequest,
    /**
     * The SearchCursorQueryResponse model constructor.
     * @property {module:model/SearchCursorQueryResponse}
     */
    SearchCursorQueryResponse: SearchCursorQueryResponse,
    /**
     * The SearchPoint model constructor.
     * @property {module:model/SearchPoint}
     */
    SearchPoint: SearchPoint,
    /**
     * The SearchQueryRequest model constructor.
     * @property {module:model/SearchQueryRequest}
     */
    SearchQueryRequest: SearchQueryRequest,
    /**
     * The SearchQueryResponse model constructor.
     * @property {module:model/SearchQueryResponse}
     */
    SearchQueryResponse: SearchQueryResponse,
    /**
     * The SearchSpatialFilter model constructor.
     * @property {module:model/SearchSpatialFilter}
     */
    SearchSpatialFilter: SearchSpatialFilter,
    /**
     * The StorageAcl model constructor.
     * @property {module:model/StorageAcl}
     */
    StorageAcl: StorageAcl,
    /**
     * The StorageBulkUpdateRecordsResponse model constructor.
     * @property {module:model/StorageBulkUpdateRecordsResponse}
     */
    StorageBulkUpdateRecordsResponse: StorageBulkUpdateRecordsResponse,
    /**
     * The StorageDeleteRecordError model constructor.
     * @property {module:model/StorageDeleteRecordError}
     */
    StorageDeleteRecordError: StorageDeleteRecordError,
    /**
     * The StorageErrorResponse model constructor.
     * @property {module:model/StorageErrorResponse}
     */
    StorageErrorResponse: StorageErrorResponse,
    /**
     * The StorageLegal model constructor.
     * @property {module:model/StorageLegal}
     */
    StorageLegal: StorageLegal,
    /**
     * The StorageMultiRecordIds model constructor.
     * @property {module:model/StorageMultiRecordIds}
     */
    StorageMultiRecordIds: StorageMultiRecordIds,
    /**
     * The StoragePatchOperation model constructor.
     * @property {module:model/StoragePatchOperation}
     */
    StoragePatchOperation: StoragePatchOperation,
    /**
     * The StorageQueryResponse model constructor.
     * @property {module:model/StorageQueryResponse}
     */
    StorageQueryResponse: StorageQueryResponse,
    /**
     * The StorageRecord model constructor.
     * @property {module:model/StorageRecord}
     */
    StorageRecord: StorageRecord,
    /**
     * The StorageRecordBulkUpdateParam model constructor.
     * @property {module:model/StorageRecordBulkUpdateParam}
     */
    StorageRecordBulkUpdateParam: StorageRecordBulkUpdateParam,
    /**
     * The StorageRecordData model constructor.
     * @property {module:model/StorageRecordData}
     */
    StorageRecordData: StorageRecordData,
    /**
     * The StorageRecordHistory model constructor.
     * @property {module:model/StorageRecordHistory}
     */
    StorageRecordHistory: StorageRecordHistory,
    /**
     * The StorageRecordQuery model constructor.
     * @property {module:model/StorageRecordQuery}
     */
    StorageRecordQuery: StorageRecordQuery,
    /**
     * The StorageRecordVersions model constructor.
     * @property {module:model/StorageRecordVersions}
     */
    StorageRecordVersions: StorageRecordVersions,
    /**
     * The EntitlementApi service constructor.
     * @property {module:api/EntitlementApi}
     */
    EntitlementApi: EntitlementApi,
    /**
     * The LegalApi service constructor.
     * @property {module:api/LegalApi}
     */
    LegalApi: LegalApi,
    /**
     * The PartitionApi service constructor.
     * @property {module:api/PartitionApi}
     */
    PartitionApi: PartitionApi,
    /**
     * The SchemaApi service constructor.
     * @property {module:api/SchemaApi}
     */
    SchemaApi: SchemaApi,
    /**
     * The SearchApi service constructor.
     * @property {module:api/SearchApi}
     */
    SearchApi: SearchApi,
    /**
     * The StorageApi service constructor.
     * @property {module:api/StorageApi}
     */
    StorageApi: StorageApi
  };

  return exports;
}));
