import pytest
from utils import to_snake_case

def test_to_snake_case():
  assert to_snake_case('TestType') == 'test_type'
  assert to_snake_case('AnotherTestType') == 'another_test_type'
  assert to_snake_case('lowercase') == 'lowercase'
  assert to_snake_case('With123Numbers') == 'with123_numbers'
  assert to_snake_case('ABC') == 'abc'
  assert to_snake_case('snake_case') == 'snake_case'