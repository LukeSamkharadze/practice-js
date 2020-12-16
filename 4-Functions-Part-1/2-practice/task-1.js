function cube(n)
{
    if(typeof n != "number")
        throw Error("parameter type is not a Number");

    return n**3;
}

try
{
    console.log(cube(3));
}
catch (error)
{
    console.log(error);
}