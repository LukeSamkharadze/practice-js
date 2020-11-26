
function truncate(string, maxlength)
{
  if(typeof string !== 'string' || typeof maxlength !== 'number')
    throw Error("First argument must be a string and second number");

  if(string.length <= maxlength)
    return string;
  else
    return string.slice(0, maxlength-3) + "...";
}

console.log(truncate('I wanna to say next thing about this topic', 22));