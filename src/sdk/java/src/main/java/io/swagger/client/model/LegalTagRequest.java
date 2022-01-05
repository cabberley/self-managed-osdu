/*
 * self-managed-osdu
 * Rest API Documentation for Self Managed OSDU
 *
 * OpenAPI spec version: 0.11.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * The model to retrieve multiple LegalTags in batch.
 */
@ApiModel(description = "The model to retrieve multiple LegalTags in batch.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-01-05T17:57:33.519Z")
public class LegalTagRequest {
  @SerializedName("names")
  private List<String> names = new ArrayList<String>();

  public LegalTagRequest names(List<String> names) {
    this.names = names;
    return this;
  }

  public LegalTagRequest addNamesItem(String namesItem) {
    this.names.add(namesItem);
    return this;
  }

   /**
   * The name of all the LegalTags to retrieve.
   * @return names
  **/
  @ApiModelProperty(required = true, value = "The name of all the LegalTags to retrieve.")
  public List<String> getNames() {
    return names;
  }

  public void setNames(List<String> names) {
    this.names = names;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LegalTagRequest legalTagRequest = (LegalTagRequest) o;
    return Objects.equals(this.names, legalTagRequest.names);
  }

  @Override
  public int hashCode() {
    return Objects.hash(names);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LegalTagRequest {\n");
    
    sb.append("    names: ").append(toIndentedString(names)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

