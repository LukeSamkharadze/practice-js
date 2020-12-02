const setCookie = (
    name,
    value,
    {
        secure: specialStatus = false,
        path,
        domain,
        expires
    } = {}
) => console.log(name, value, specialStatus, expires);

setCookie('type', 'js');