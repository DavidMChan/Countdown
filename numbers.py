
from collections import defaultdict
import itertools
from copy import copy

def solve_helper(numbers, target):
    if target in numbers:
        return (True, ['{} == {}'.format(target, target)])
    if len(numbers) == 1:
        return (False, ['xx'])
    
    for pairs in itertools.permutations(numbers, 2):
        new_numbers = copy(numbers)
        new_numbers.remove(pairs[0])
        new_numbers.remove(pairs[1])

        # We can always add the two numbers
        res = solve_helper(new_numbers + [pairs[0] + pairs[1]], target)
        if res[0]:
            res[1].append('{} + {} = {}'.format(pairs[0], pairs[1], pairs[0]+pairs[1]))
            return (True, res[1])
        
        # If the subtraction is positive, try that
        if (pairs[0] - pairs[1] > 0):
            res = solve_helper(new_numbers + [pairs[0] - pairs[1]], target)
            if res[0]:
                res[1].append('{} - {} = {}'.format(pairs[0], pairs[1], pairs[0]-pairs[1]))
                return (True, res[1])
        
        # We can always multiply two numbers
        res = solve_helper(new_numbers + [pairs[0] * pairs[1]], target)
        if res[0]:
            res[1].append('{} * {} = {}'.format(pairs[0], pairs[1], pairs[0]*pairs[1]))
            return (True, res[1])

        # We can divide numbers if it's a whole number 
        if ((pairs[0]/float(pairs[1])).is_integer()):
            res = solve_helper(new_numbers + [pairs[0]/pairs[1]], target)
            if res[0]:
                res[1].append('{} / {} = {}'.format(pairs[0], pairs[1], int(pairs[0]/pairs[1])))
                return (True, res[1])
        
    # If we haven't returned by now, then it's impossible at this level
    return (False, ['xx'])

def solve(numbers, target):
    solution = solve_helper(numbers, target)
    if solution[0]:
        for l in reversed(solution[1][1:]):
            print(l)
    else:
        print('It\'s impossible!')

#solve([25, 50, 75, 100, 6, 3], 952)

        

            


 
