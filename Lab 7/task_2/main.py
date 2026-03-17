from models import Dog, Cat

def main():
    animals = [
        Dog("Rex", 5, 20.5, "Labrador"),
        Cat("Misty", 3, 4.2, "Gray"),
        Dog("Buddy", 2, 10.0, "Beagle"),
        Cat("Luna", 1, 3.5, "White"),
    ]

    for animal in animals:
        print(animal)
        print(animal.info())
        print(animal.speak())

        if isinstance(animal, Dog):
            print(animal.fetch())
        elif isinstance(animal, Cat):
            print(animal.scratch())

        print("-" * 30)


if __name__ == "__main__":
    main()