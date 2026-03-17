from collections import Counter

n = int(input())
sizes = list(map(int, input().split()))
inventory = Counter(sizes)

customers = int(input())
money = 0

for _ in range(customers):
    size, price = map(int, input().split())
    if inventory[size] > 0:
        money += price
        inventory[size] -= 1

print(money)