class SuperHero:
    """
    A class to represent a superhero.
    
    Attributes:
        name (str): The superhero's name
        power (str): The superhero's main superpower
        health (int): The superhero's health points
    """
    
    def __init__(self, name: str, power: str, health: int):
        self.name = name
        self.power = power
        self.health = health
    

    # TODO: Define attack method and implement it
    def attack(self) -> None:
        print("{0} attacks with {1}!".format(self.name, self.power))

    # TODO: Define heal method and implment it
    def heal(self) -> None:
        self.health += 10
        print("{1} heals 10 points. New health: {0}.".format(self.health, self.name))
     

# TODO: Create superhero instance
super_hero = SuperHero("Catwoman", "Agility", 120) 

# TODO: Use the attack() and heal() method
super_hero.attack()
super_hero.heal()
