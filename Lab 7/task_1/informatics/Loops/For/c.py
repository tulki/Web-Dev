a = int(input())
b = int(input())

for i in range(a, b + 1):
    k = int(i ** 0.5)
    if k * k == i:
        print(i, end=" ")