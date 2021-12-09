/* 
 * self-managed-osdu
 *
 * Rest API Documentation for Self Managed OSDU
 *
 * OpenAPI spec version: 0.11.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = IO.Swagger.Client.SwaggerDateConverter;

namespace IO.Swagger.Model
{
    /// <summary>
    /// StorageLegal
    /// </summary>
    [DataContract]
    public partial class StorageLegal :  IEquatable<StorageLegal>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="StorageLegal" /> class.
        /// </summary>
        /// <param name="legaltags">List of legaltag names associated with the record..</param>
        /// <param name="otherRelevantDataCountries">List of other relevant data countries. Must have 2 values: where the data was ingested from and where Data Lake stores the data..</param>
        public StorageLegal(List<string> legaltags = default(List<string>), List<string> otherRelevantDataCountries = default(List<string>))
        {
            this.Legaltags = legaltags;
            this.OtherRelevantDataCountries = otherRelevantDataCountries;
        }
        
        /// <summary>
        /// List of legaltag names associated with the record.
        /// </summary>
        /// <value>List of legaltag names associated with the record.</value>
        [DataMember(Name="legaltags", EmitDefaultValue=false)]
        public List<string> Legaltags { get; set; }

        /// <summary>
        /// List of other relevant data countries. Must have 2 values: where the data was ingested from and where Data Lake stores the data.
        /// </summary>
        /// <value>List of other relevant data countries. Must have 2 values: where the data was ingested from and where Data Lake stores the data.</value>
        [DataMember(Name="otherRelevantDataCountries", EmitDefaultValue=false)]
        public List<string> OtherRelevantDataCountries { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class StorageLegal {\n");
            sb.Append("  Legaltags: ").Append(Legaltags).Append("\n");
            sb.Append("  OtherRelevantDataCountries: ").Append(OtherRelevantDataCountries).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as StorageLegal);
        }

        /// <summary>
        /// Returns true if StorageLegal instances are equal
        /// </summary>
        /// <param name="input">Instance of StorageLegal to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(StorageLegal input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Legaltags == input.Legaltags ||
                    this.Legaltags != null &&
                    this.Legaltags.SequenceEqual(input.Legaltags)
                ) && 
                (
                    this.OtherRelevantDataCountries == input.OtherRelevantDataCountries ||
                    this.OtherRelevantDataCountries != null &&
                    this.OtherRelevantDataCountries.SequenceEqual(input.OtherRelevantDataCountries)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Legaltags != null)
                    hashCode = hashCode * 59 + this.Legaltags.GetHashCode();
                if (this.OtherRelevantDataCountries != null)
                    hashCode = hashCode * 59 + this.OtherRelevantDataCountries.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}