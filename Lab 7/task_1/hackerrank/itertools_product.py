from itertools import product

A = list(map(int, input().split()))
B = list(map(int, input().split()))

for p in product(A, B):
    print(p, end=" ")