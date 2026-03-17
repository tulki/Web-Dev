n, m = map(int, input().split())

marks = [list(map(float, input().split())) for _ in range(m)]

for student in zip(*marks):
    print(sum(student) / m)