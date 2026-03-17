class Animal:
    def __init__(self, name: str, age: int, weight: float):
        self.name = name
        self.age = age
        self.weight = weight

    def speak(self):
        return "Some generic animal sound"

    def info(self):
        return f"{self.name} is {self.age} years old"

    def __str__(self):
        return f"{self.__class__.__name__}(name={self.name}, age={self.age}, weight={self.weight})"


class Dog(Animal):
    def __init__(self, name: str, age: int, weight: float, breed: str):
        super().__init__(name, age, weight)
        self.breed = breed

    def speak(self):
        return "Woof"

    def fetch(self):
        return f"{self.name} is fetching a ball"


class Cat(Animal):
    def __init__(self, name: str, age: int, weight: float, color: str):
        super().__init__(name, age, weight)
        self.color = color

    def speak(self):
        return "Meow"

    def scratch(self):
        return f"{self.name} is scratching furniture"