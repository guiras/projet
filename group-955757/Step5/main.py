def square_digits(num):
    r = ''
    for i in str(num):
     r = r + str((int(i))**2)
    return int(r)