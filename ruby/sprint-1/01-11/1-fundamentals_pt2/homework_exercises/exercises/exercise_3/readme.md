# Exercise 3 - Zoo Animal Hierarchy

Develop a Ruby program that models a simple hierarchy of animals in a zoo using the concept of inheritance. The exercise involves creating a base Animal class and a couple of derived classes. RSpec tests are provided to validate your implementation.

---

**Requirements**:

1. Animal Class (Base Class):
    - The Animal class should be initialized with a name and a species.
    - Include getter methods for both name and species.
    - Implement a method basic_info that returns a string with the animal's name and species.

2. Bird Class (Derived Class):
    - The Bird class should inherit from Animal.
    - Add an additional attribute for wing_span.
    - Include a method bird_info that returns a string with the bird's name, species, and wing span.

3. Mammal Class (Derived Class):

   -   The Mammal class should also inherit from Animal.
   -   Add an attribute for fur_color.
   -   Include a method mammal_info that returns a string with the mammal's name, species, and fur color.

4. RSpec Tests:

   -   RSpec tests for Animal, Bird, and Mammal classes are provided. Ensure your implementation passes all the tests.
