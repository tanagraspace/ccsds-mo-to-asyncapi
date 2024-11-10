RESERVED_NAMES = {"type"}
SCHEMA_NAMESPACE = "#/components/schemas"

# MAL_TYPE : (ASYNCAPI_TYPE, ASYNCAPI_FORMAT, PY_TYPE)
TYPE_MAPPING = {
  'Octet': ('integer', 'int8', 'int'),
  'Short': ('integer', 'int16', 'int'),
  'Integer': ('integer', 'int32', 'int'),
  'Long': ('integer', 'int64', 'int'),
  'UOctet': ('integer', 'uint8', 'int'),
  'UShort': ('integer', 'uint16', 'int'),
  'UInteger': ('integer', 'uint32', 'int'),
  'ULong': ('integer', 'uint64', 'int'),
  'Boolean': ('boolean', None, 'bool'),
  'String': ('string', None, 'str'),
  'Identifier': ('string', None, 'str'),
  'Attribute': ('string', None, 'str'),
  'Duration': ('number', 'uint64', 'float'),
  'Time': ('number', 'uint64', 'float'),
  'FineTime': ('number', 'uint64', 'float'),
  'URI': ('string', 'uri', 'str'),
}