import pytest
import xml.etree.ElementTree as ET
from io import StringIO
from utils import to_snake_case, to_camel_case, sanitize_string, get_namespaces

@pytest.fixture
def xml_content():
  return StringIO('''<?xml version="1.0" encoding="UTF-8"?>
<mal:specification xmlns:mal="http://www.ccsds.org/schema/ServiceSchema"
                   xmlns:com="http://www.ccsds.org/schema/COMSchema">
  <mal:area name="COM" number="2" version="1">
    <mal:dataTypes>
      <mal:composite name="TestType" shortFormPart="1">
        <mal:field name="field1" canBeNull="false">
          <mal:type name="UShort" area="MAL"/>
        </mal:field>
      </mal:composite>
    </mal:dataTypes>
  </mal:area>
</mal:specification>''')

def test_to_snake_case():
  assert to_snake_case('TestType') == 'test_type'
  assert to_snake_case('AnotherTestType') == 'another_test_type'
  assert to_snake_case('lowercase') == 'lowercase'
  assert to_snake_case('With123Numbers') == 'with123_numbers'
  assert to_snake_case('ABC') == 'abc'
  assert to_snake_case('snake_case') == 'snake_case'

def test_to_camel_case():
  assert to_camel_case('test_type') == 'TestType'
  assert to_camel_case('another_test_type') == 'AnotherTestType'
  assert to_camel_case('lowercase') == 'Lowercase'
  assert to_camel_case('with_123_numbers') == 'With123Numbers'
  assert to_camel_case('abc') == 'Abc'
  assert to_camel_case('snake_case') == 'SnakeCase'

def test_get_namespaces(xml_content):
  namespaces = get_namespaces(xml_content)
  assert namespaces['mal'] == 'http://www.ccsds.org/schema/ServiceSchema'
  assert namespaces['com'] == 'http://www.ccsds.org/schema/COMSchema'

@pytest.mark.parametrize("input_str, expected", [
  ('This is a "test" string', 'This is a \\"test\\" string'),
  ('This is a test\nstring', 'This is a test string'),
  ('This is a test&#xA;string', 'This is a test string'),
  ('This "is"\na&#xA;test', 'This \\"is\\" a test'),
  ('This is a test string', 'This is a test string'),  # No replacements needed
  ('', ''),  # Empty string case
])
def test_sanitize_string(input_str, expected):
   assert sanitize_string(input_str) == expected

