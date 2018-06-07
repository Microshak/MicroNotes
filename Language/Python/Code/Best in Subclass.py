
'''bad
  class Pet(object):
    num_pets = 0

    def __init__(self, name):
        self.name = name
        self.num_pets += 1

    def speak(self):
        print("My name's %s and the number of pets is %d" % (self.name, self.num_pets))

'''
class Pet(object):
    num_pets = 0
    def __init__(self, name):
        self.name = name

        # change from: self.num_pets += 1
        Pet.num_pets += 1

    def speak(self):
        print("My name's %s and the number of pets is %d" % (self.name, self.num_pets))

rover = Pet("Rover")
spot = Pet("Spot")
rover.speak()
spot.speak()