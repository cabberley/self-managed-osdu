# swagger-java-client

self-managed-osdu
- API version: 0.11.0
  - Build date: 2021-12-09T19:33:56.348Z

Rest API Documentation for Self Managed OSDU


*Automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen)*


## Requirements

Building the API client library requires:
1. Java 1.7+
2. Maven/Gradle

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>io.swagger</groupId>
  <artifactId>swagger-java-client</artifactId>
  <version>1.0.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "io.swagger:swagger-java-client:1.0.0"
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

* `target/swagger-java-client-1.0.0.jar`
* `target/lib/*.jar`

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.EntitlementApi;

import java.io.File;
import java.util.*;

public class EntitlementApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        
        // Configure API key authorization: Bearer
        ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
        Bearer.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //Bearer.setApiKeyPrefix("Token");

        EntitlementApi apiInstance = new EntitlementApi();
        String dataPartitionId = "dataPartitionId_example"; // String | Partition Name
        String groupEmail = "groupEmail_example"; // String | group_email
        EntitlementMemberDto partitionInfo = new EntitlementMemberDto(); // EntitlementMemberDto | partitionInfo
        try {
            EntitlementMemberDto result = apiInstance.addMemberUsingPOST(dataPartitionId, groupEmail, partitionInfo);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EntitlementApi#addMemberUsingPOST");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://oak-osdu-dplbhggc-mwt3-gw.westeurope.cloudapp.azure.com/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EntitlementApi* | [**addMemberUsingPOST**](docs/EntitlementApi.md#addMemberUsingPOST) | **POST** /entitlements/v2/groups/{group_email}/members | Add Member to Group
*EntitlementApi* | [**createGroupUsingPOST**](docs/EntitlementApi.md#createGroupUsingPOST) | **POST** /entitlements/v2/groups | Create a Group
*EntitlementApi* | [**deleteGroupUsingDELETE**](docs/EntitlementApi.md#deleteGroupUsingDELETE) | **DELETE** /entitlements/v2/groups/{group_email} | Delete a Group
*EntitlementApi* | [**deleteMemberUsingDELETE**](docs/EntitlementApi.md#deleteMemberUsingDELETE) | **DELETE** /entitlements/v2/members/{member_email} | Delete a User
*EntitlementApi* | [**deleteMemberUsingDELETE1**](docs/EntitlementApi.md#deleteMemberUsingDELETE1) | **DELETE** /entitlements/v2/groups/{group_email}/members/{member_email} | Remove Member from Group
*EntitlementApi* | [**listGroupMembersUsingGET**](docs/EntitlementApi.md#listGroupMembersUsingGET) | **GET** /entitlements/v2/groups/{group_email}/members | List Group Members
*EntitlementApi* | [**listGroupsOnBehalfOfUsingGET**](docs/EntitlementApi.md#listGroupsOnBehalfOfUsingGET) | **GET** /entitlements/v2/members/{member_email}/groups | List Assigned Groups for User
*EntitlementApi* | [**listGroupsUsingGET**](docs/EntitlementApi.md#listGroupsUsingGET) | **GET** /entitlements/v2/groups | List Assigned Groups
*EntitlementApi* | [**updateGroupUsingPATCH**](docs/EntitlementApi.md#updateGroupUsingPATCH) | **PATCH** /entitlements/v2/groups/{group_email} | Updates Items in Group
*LegalApi* | [**createLegalTag**](docs/LegalApi.md#createLegalTag) | **POST** /legal/v1/legaltags | Creates the LegalTag for the given &#39;name&#39;.
*LegalApi* | [**deleteLegalTag**](docs/LegalApi.md#deleteLegalTag) | **DELETE** /legal/v1/legaltags/{name} | Delete Legal Tag
*LegalApi* | [**getLegalTag**](docs/LegalApi.md#getLegalTag) | **GET** /legal/v1/legaltags/{name} | Gets a LegalTag for the given &#39;name&#39;.
*LegalApi* | [**getLegalTagProperties**](docs/LegalApi.md#getLegalTagProperties) | **GET** /legal/v1/legaltags:properties | Gets LegalTag property values.
*LegalApi* | [**getLegalTags**](docs/LegalApi.md#getLegalTags) | **POST** /legal/v1/legaltags:batchRetrieve | Retrieves the LegalTags for the given names.
*LegalApi* | [**listLegalTags**](docs/LegalApi.md#listLegalTags) | **GET** /legal/v1/legaltags | Gets all LegalTags.
*LegalApi* | [**updateLegalTag**](docs/LegalApi.md#updateLegalTag) | **PUT** /legal/v1/legaltags | Updates the LegalTag for the given &#39;name&#39;.
*LegalApi* | [**validateLegalTags**](docs/LegalApi.md#validateLegalTags) | **POST** /legal/v1/legaltags:validate | Retrieves the invalid LegalTag names with reasons for the given names.
*PartitionApi* | [**createUsingPOST**](docs/PartitionApi.md#createUsingPOST) | **POST** /partition/v1/partitions/{partitionId} | Create Partition
*PartitionApi* | [**deleteUsingDELETE**](docs/PartitionApi.md#deleteUsingDELETE) | **DELETE** /partition/v1/partitions/{partitionId} | Delete Partition
*PartitionApi* | [**getUsingGET**](docs/PartitionApi.md#getUsingGET) | **GET** /partition/v1/partitions/{partitionId} | Get Single Partition
*PartitionApi* | [**listUsingGET**](docs/PartitionApi.md#listUsingGET) | **GET** /partition/v1/partitions | List Partitions
*PartitionApi* | [**updateUsingPATCH**](docs/PartitionApi.md#updateUsingPATCH) | **PATCH** /partition/v1/partitions/{partitionId} | Update Partition
*StorageApi* | [**createOrUpdateRecords**](docs/StorageApi.md#createOrUpdateRecords) | **PUT** /records | Create or update records
*StorageApi* | [**deleteRecord**](docs/StorageApi.md#deleteRecord) | **POST** /records/{id}:delete | Delete record
*StorageApi* | [**deleteRecords**](docs/StorageApi.md#deleteRecords) | **POST** /records/delete | Soft delete of multiple records
*StorageApi* | [**fetchRecords**](docs/StorageApi.md#fetchRecords) | **POST** /storage/v2/query/records | Fetch records
*StorageApi* | [**getAllKinds**](docs/StorageApi.md#getAllKinds) | **GET** /storage/v2/query/kinds | Get all kinds
*StorageApi* | [**getAllRecordFromKind**](docs/StorageApi.md#getAllRecordFromKind) | **GET** /storage/v2/query/records | Get all record from kind
*StorageApi* | [**getAllRecordVersions**](docs/StorageApi.md#getAllRecordVersions) | **GET** /records/versions/{id} | Get all record versions
*StorageApi* | [**getRecord**](docs/StorageApi.md#getRecord) | **GET** /records/{id} | Get record
*StorageApi* | [**getRecordVersion**](docs/StorageApi.md#getRecordVersion) | **GET** /records/{id}/{version} | Get record version
*StorageApi* | [**patchUpdateRecords**](docs/StorageApi.md#patchUpdateRecords) | **PATCH** /records | Modify record metadata attributes using patch operations
*StorageApi* | [**purgeRecord**](docs/StorageApi.md#purgeRecord) | **DELETE** /records/{id} | Purge record


## Documentation for Models

 - [EntitlementGroupProperties](docs/EntitlementGroupProperties.md)
 - [EntitlementGroupResponse](docs/EntitlementGroupResponse.md)
 - [EntitlementMemberDto](docs/EntitlementMemberDto.md)
 - [LegalTagDto](docs/LegalTagDto.md)
 - [LegalTagDtos](docs/LegalTagDtos.md)
 - [LegalTagInvalidResponse](docs/LegalTagInvalidResponse.md)
 - [LegalTagInvalidResponseList](docs/LegalTagInvalidResponseList.md)
 - [LegalTagProperties](docs/LegalTagProperties.md)
 - [LegalTagPropertyValues](docs/LegalTagPropertyValues.md)
 - [LegalTagRequest](docs/LegalTagRequest.md)
 - [LegalTagUpdateDto](docs/LegalTagUpdateDto.md)
 - [PartitionDto](docs/PartitionDto.md)
 - [PartitionProperty](docs/PartitionProperty.md)
 - [StorageAcl](docs/StorageAcl.md)
 - [StorageBulkUpdateRecordsResponse](docs/StorageBulkUpdateRecordsResponse.md)
 - [StorageDeleteRecordError](docs/StorageDeleteRecordError.md)
 - [StorageErrorResponse](docs/StorageErrorResponse.md)
 - [StorageLegal](docs/StorageLegal.md)
 - [StorageMultiRecordIds](docs/StorageMultiRecordIds.md)
 - [StoragePatchOperation](docs/StoragePatchOperation.md)
 - [StorageQueryResponse](docs/StorageQueryResponse.md)
 - [StorageRecord](docs/StorageRecord.md)
 - [StorageRecordBulkUpdateParam](docs/StorageRecordBulkUpdateParam.md)
 - [StorageRecordData](docs/StorageRecordData.md)
 - [StorageRecordHistory](docs/StorageRecordHistory.md)
 - [StorageRecordQuery](docs/StorageRecordQuery.md)
 - [StorageRecordVersions](docs/StorageRecordVersions.md)


## Documentation for Authorization

Authentication schemes defined for the API:
### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author


