from typing import List

def read_integers() -> List[int]:
    str = input()
    str_list = str.split(",")
    new_list = []
    for s in str_list:
        new_list.append(int(s))
    return new_list 


# do not modify the code below
print(read_integers())
print(read_integers())
print(read_integers())
