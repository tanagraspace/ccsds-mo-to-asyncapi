import pytest
from utils import to_snake_case, merge_dictionaries

def test_to_snake_case():
  assert to_snake_case('TestType') == 'test_type'
  assert to_snake_case('AnotherTestType') == 'another_test_type'
  assert to_snake_case('lowercase') == 'lowercase'
  assert to_snake_case('With123Numbers') == 'with123_numbers'
  assert to_snake_case('ABC') == 'abc'
  assert to_snake_case('snake_case') == 'snake_case'

# test cases for merge_dictionaries
@pytest.mark.parametrize(
  "dict1, dict2, expected",
  [
    # Test case 1: Simple merge with one empty dictionary
    (
      {'a': {1, 2}},
      {}, 
      {'a': {1, 2}}
    ),

    # Test case 2: Simple merge with non-overlapping keys
    (
      {'a': {1, 2}},
      {'b': {3, 4}},
      {'a': {1, 2}, 'b': {3, 4}}
    ),

    # Test case 3: Merge overlapping sets
    (
      {'a': {1, 2}},
      {'a': {2, 3}},
      {'a': {1, 2, 3}}
    ),

    # Test case 4: Nested dictionaries with overlapping sets
    (
      {'a': {'nested': {1, 2}}},
      {'a': {'nested': {2, 3}}},
      {'a': {'nested': {1, 2, 3}}}
    ),

    # Test case 5: Multiple keys with mixed levels
    (
      {'a': {1, 2}, 'b': {'nested': {5}}},
      {'a': {3}, 'b': {'nested': {6}}},
      {'a': {1, 2, 3}, 'b': {'nested': {5, 6}}}
    ),

    # Test case 6: Two different nested keys in the same dictionary
    (
      {'a': {'nested_a': {1, 2}}, 'b': {'nested_b': {3}}},
      {'a': {'nested_a': {2, 3}}, 'b': {'nested_b': {4}}},
      {'a': {'nested_a': {1, 2, 3}}, 'b': {'nested_b': {3, 4}}}
    ),
  ]
)
def test_merge_dictionaries(dict1, dict2, expected):
  assert merge_dictionaries(dict1, dict2) == expected

# Test case for incompatible types (raises TypeError)
def test_merge_dictionaries_incompatible_types():
  dict1 = {'a': {1, 2}}
  dict2 = {'a': {'nested': {3, 4}}}
  with pytest.raises(TypeError, match="Incompatible types for key 'a'"):
    merge_dictionaries(dict1, dict2)