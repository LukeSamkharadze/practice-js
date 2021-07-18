function IsPrime(n) {
    for (let i = 2; i < n / 2; i++)
        if (n % i == 0)
            return false;

    return true;
}

for (let i = 2; i < 10; i++)
    if (IsPrime(i))
        console.log(i);