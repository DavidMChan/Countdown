
import itertools
from collections import defaultdict
import re
import string
import os

# Cleans a words file so that it only contains countdown
# possible words (no -,.,# etc...)
def clean_words_file(words_file):
    with open(words_file, 'r') as dict_file:
        with open(os.path.join(os.path.dirname(__file__), 'data', "countdown_clean_words.txt"), 'w') as output_file:
            for line in dict_file:
                line = re.split('/|\n', line)
                if line[0].isalpha() and line[0].islower():
                    output_file.write(line[0] + '\n')

# Build a dictionary of sorted inputss
def build_dictionary(dict_file):
    letters_dict = defaultdict(list)
    with open(dict_file, 'r') as legal_words:
        for line in legal_words:
            letters_dict[''.join(sorted(line[:-1]))].append(''.join(line[:-1]))
    return letters_dict

# Build the fast letters dictionary
FAST_DICT = defaultdict(list)
with open(os.path.join(os.path.dirname(__file__), 'data', "countdown_clean_words.txt"), 'r') as cwf:
    for line in cwf:
        word = line.strip()
        word_hash = ''
        # Generate the hash
        for letter in string.ascii_lowercase:
            word_hash = word_hash + str(word.count(letter))
        FAST_DICT[word_hash].append(word)

def get_possible_hashes(hash_set):
    open_list = [tuple(hash_set)]
    possible_hashes = {tuple(hash_set)}
    while open_list:
        current = open_list.pop()
        for idx, elem in enumerate(current):
            if elem != 0:
                # Generate proposal tuple
                proposal = tuple(e if i != idx else e-1 for i, e in enumerate(current))
                if proposal not in possible_hashes:
                    open_list.append(proposal)
                    possible_hashes.add(proposal)

    return possible_hashes

def fast_solve(letters):
    # Get the word hash of the letters
    word_hash = [letters.count(letter) for letter in string.ascii_lowercase]
    possible_hashes = [''.join([str(x) for x in t]) for t in get_possible_hashes(word_hash)]
    possible_words = set()
    for h in possible_hashes:
        for elem in FAST_DICT[h]:
            possible_words.add(elem)

    return list(sorted(list(possible_words), key=lambda x: len(x), reverse=True))[:25]

# Solve the game
def solve(letters):
    if len(letters) != 9 or any(not x.isalpha() for x in letters):
        raise ValueError('Letters is not a legal for countdown!')
    letters_dict = build_dictionary("countdown_clean_words.txt")
    best_size = 9
    possible_words = []
    while best_size > 0:
        # Loop over the possible iterations, and add them
        for letter_set in itertools.combinations(letters, best_size):
            possible_words = possible_words + letters_dict.get(''.join(sorted(letter_set)), [])
        if len(possible_words) == 0 or best_size > 6:
            best_size -= 1
        else:
            break
    return [x.upper() for x in list(set(possible_words))]

#solve('rectalsip')
