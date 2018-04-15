
import itertools
from collections import defaultdict
import re

# Cleans a words file so that it only contains countdown
# possible words (no -,.,# etc...)
def clean_words_file(words_file):
    dict_file = open(words_file, 'r')
    output_file = open("countdown_clean_words.txt", 'w')
    for line in dict_file:
        line = re.split('/|\n', line)
        if line[0].isalpha() and line[0].islower():
            output_file.write(line[0] + '\n')
    dict_file.close()
    output_file.close()

# Build a dictionary of sorted inputs
def build_dictionary(dict_file):
    legal_words = open(dict_file, 'r')
    letters_dict = defaultdict(list)
    for line in legal_words:
        letters_dict[''.join(sorted(line[:-1]))].append(''.join(line[:-1]))
    legal_words.close()
    return letters_dict

# Solve the game
def solve(letters):
    if len(letters) != 9 or any([not x.isalpha() for x in letters]):
        raise ValueError('Letters is not a legal for countdown!')
    letters_dict = build_dictionary("countdown_clean_words.txt")
    best_size = 9
    possible_words = []
    while best_size > 0:
        # Loop over the possible iterations, and add them
        for letter_set in itertools.combinations(letters, best_size):
            possible_words = possible_words + letters_dict.get(''.join(sorted(letter_set)), [])
        if len(possible_words) == 0:
            best_size -= 1
        else:
            break
    print(best_size)
    print(list(set(possible_words)))

#solve('rectalsip')