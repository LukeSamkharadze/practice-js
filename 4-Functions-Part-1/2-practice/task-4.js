function isEven(n)
{
    if(typeof n != 'number')
        throw Error("parameter type is not a Number");

    return !(n % 2);
}

try
{
    isEven(3);
    isEven(4);
    isEven('Content');
}
catch(error)
{
    console.log(error)
}