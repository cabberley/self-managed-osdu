# coding: utf-8

"""
    self-managed-osdu

    Rest API Documentation for Self Managed OSDU  # noqa: E501

    OpenAPI spec version: 0.11.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.configuration import Configuration


class RegisterSecret(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'secret_type': 'str',
        'value': 'object'
    }

    attribute_map = {
        'secret_type': 'secretType',
        'value': 'value'
    }

    def __init__(self, secret_type=None, value=None, _configuration=None):  # noqa: E501
        """RegisterSecret - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._secret_type = None
        self._value = None
        self.discriminator = None

        if secret_type is not None:
            self.secret_type = secret_type
        if value is not None:
            self.value = value

    @property
    def secret_type(self):
        """Gets the secret_type of this RegisterSecret.  # noqa: E501


        :return: The secret_type of this RegisterSecret.  # noqa: E501
        :rtype: str
        """
        return self._secret_type

    @secret_type.setter
    def secret_type(self, secret_type):
        """Sets the secret_type of this RegisterSecret.


        :param secret_type: The secret_type of this RegisterSecret.  # noqa: E501
        :type: str
        """
        allowed_values = ["HMAC", "GSA"]  # noqa: E501
        if (self._configuration.client_side_validation and
                secret_type not in allowed_values):
            raise ValueError(
                "Invalid value for `secret_type` ({0}), must be one of {1}"  # noqa: E501
                .format(secret_type, allowed_values)
            )

        self._secret_type = secret_type

    @property
    def value(self):
        """Gets the value of this RegisterSecret.  # noqa: E501


        :return: The value of this RegisterSecret.  # noqa: E501
        :rtype: object
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this RegisterSecret.


        :param value: The value of this RegisterSecret.  # noqa: E501
        :type: object
        """

        self._value = value

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(RegisterSecret, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, RegisterSecret):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, RegisterSecret):
            return True

        return self.to_dict() != other.to_dict()
